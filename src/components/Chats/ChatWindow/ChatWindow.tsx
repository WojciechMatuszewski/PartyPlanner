import React from 'react';
import styled from '@emotion/styled';
import ChatInput from './ChatWindowInput';
import { ChatsContext } from '@pages/chats';
import ChatEmptySection from '../ChatEmptySection';
import {
  PaginateMessagesQueryEdges,
  MessageOrderByInput,
  PaginateMessagesQueryVariables,
  usePaginateMessagesQuery,
  useChatMessagesSubscription,
  PaginateMessagesQueryDocument,
  PaginateMessagesQueryQuery
} from '@generated/graphql';
import ChatSectionLoading from '../ChatSectionLoading';
import NewMessagesBelowNotifier from '../ChatMessages/NewMessagesBelowNotifier';
import { List, CellMeasurerCache } from 'react-virtualized';
import VirtualizedChatMessagesList from '../ChatMessages/VirtualizedChatMessagesList';
import useBottomScrollLock from '@hooks/useBottomScrollLock';

const ChatWindowWrapper = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 64px);
  flex-direction: column;
  position: relative;
`;

interface PrependState {
  shouldClear: boolean;
  itemsPrepended: number;
}

const initialPrependState: PrependState = {
  shouldClear: false,
  itemsPrepended: 0
};

const ChatWindow: React.FC = () => {
  const { currentlySelectedChatId, currentlyLoggedUserData } = React.useContext(
    ChatsContext
  );
  const [unreadCount, setUnreadCount] = React.useState<number>(0);
  const [cellCache, setCellCache] = React.useState<CellMeasurerCache>(
    createNewCellCache()
  );
  const [loadingMore, setLoadingMore] = React.useState<boolean>(false);

  const virtualizedListRef = React.useRef<List>({} as any);
  const scrolledInitially = React.useRef<boolean>(false);
  const prependState = React.useRef<PrependState>(initialPrependState);

  const [queryVariables, setQueryVariables] = React.useState<
    PaginateMessagesQueryVariables
  >(createQueryVariables(currentlySelectedChatId));

  const { data, loading, fetchMore } = usePaginateMessagesQuery({
    variables: queryVariables
  });

  const canFetchMore = React.useCallback(
    (data: PaginateMessagesQueryQuery | undefined, loadingMore: boolean) => {
      return (
        data &&
        data.messagesConnection &&
        data.messagesConnection.pageInfo.hasPreviousPage &&
        scrolledInitially.current &&
        !loadingMore
      );
    },
    []
  );

  const handleFetchMore = React.useCallback(async () => {
    if (!canFetchMore(data, loadingMore)) return;
    setLoadingMore(true);
    await fetchMore({
      variables: {
        where: {
          chat: { id: currentlySelectedChatId }
        },
        orderBy: 'createdAt_ASC' as MessageOrderByInput,
        last: 30,
        before: data!.messagesConnection.pageInfo.startCursor
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        setLoadingMore(false);
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          messagesConnection: {
            ...prev.messagesConnection,
            edges: [
              ...fetchMoreResult.messagesConnection.edges,
              ...prev.messagesConnection.edges
            ],
            pageInfo: fetchMoreResult.messagesConnection.pageInfo
          }
        };
      }
    });

    if (!data || !data.messagesConnection) return;
    // TODO: better scrolling here
    virtualizedListRef.current.scrollToRow(100);
    cellCache.clearAll();
  }, [data, currentlySelectedChatId, scrolledInitially.current]);

  const currentListScrollGetter = React.useCallback(() => {
    if (!virtualizedListRef.current) return 0;
    return virtualizedListRef.current.getOffsetForRow({
      index:
        data && data.messagesConnection
          ? data.messagesConnection.edges.length + 1
          : 0
    });
  }, [virtualizedListRef.current, data]);

  const {
    scrollToBottom,
    animatedScrollTop,
    isWithinBottomLockZone,
    handleScroll
  } = useBottomScrollLock(250, currentListScrollGetter, handleFetchMore);

  const handleSubscriptionMessage = React.useCallback(() => {
    if (!isWithinBottomLockZone) {
      setUnreadCount(prevCount => prevCount + 1);
    } else {
      // sometimes rendering cant keep up
      requestAnimationFrame(() => {
        handleMessageScroll();
      });
    }
  }, [isWithinBottomLockZone]);

  useChatMessagesSubscription({
    variables: {
      where: {
        node: {
          chat: {
            id: currentlySelectedChatId
          },
          author: {
            id_not: currentlyLoggedUserData.id
          }
        }
      }
    },
    onSubscriptionData: ({ subscriptionData, client }) => {
      if (
        !subscriptionData ||
        !subscriptionData.data ||
        !subscriptionData.data.message
      )
        return;

      const cachedMessages = client.readQuery({
        query: PaginateMessagesQueryDocument,
        variables: queryVariables
      });

      subscriptionData.data.message.__typename = 'MessageEdge' as any;

      cachedMessages.messagesConnection.edges.push(
        subscriptionData.data.message
      );

      client.writeQuery({
        query: PaginateMessagesQueryDocument,
        variables: queryVariables,
        data: cachedMessages
      });
      handleSubscriptionMessage();
    }
  });

  React.useEffect(() => {
    setQueryVariables(createQueryVariables(currentlySelectedChatId));
    setUnreadCount(0);
    scrolledInitially.current = false;
    prependState.current = initialPrependState;
    setCellCache(createNewCellCache());
  }, [currentlySelectedChatId]);

  if (currentlySelectedChatId == null)
    return <ChatEmptySection image={'../static/group-chat.svg'} />;

  if (loading || !data || !data.messagesConnection)
    return <ChatSectionLoading />;

  if (data.messagesConnection.edges.length === 0)
    return (
      <ChatWindowWrapper>
        <ChatEmptySection
          image={'../static/no-data.svg'}
          title="No messages here"
          description="Start a conversation now!"
        />
        <ChatInput
          onNewMessage={handleMessageScroll}
          currentQueryVariables={queryVariables}
        />
      </ChatWindowWrapper>
    );

  return (
    <ChatWindowWrapper>
      <VirtualizedChatMessagesList
        cache={cellCache}
        loadingMore={loadingMore}
        scrollTop={animatedScrollTop}
        onRowsRendered={handleRowsRendered}
        messages={data.messagesConnection.edges as PaginateMessagesQueryEdges[]}
        onScroll={handleScroll}
        ref={virtualizedListRef}
      />
      <ChatInput
        onNewMessage={handleMessageScroll}
        currentQueryVariables={queryVariables}
      />
      <NewMessagesBelowNotifier
        unreadCount={unreadCount}
        visible={!isWithinBottomLockZone && unreadCount > 0}
        onClick={handleNotifierClick}
      />
    </ChatWindowWrapper>
  );

  function createQueryVariables(currentChatId: string | null) {
    if (currentChatId == null) return {};
    return {
      where: {
        chat: { id: currentChatId }
      },
      orderBy: 'createdAt_ASC' as MessageOrderByInput,
      last: 30
    };
  }

  function handleRowsRendered() {
    if (!scrolledInitially.current) {
      scrollToBottom(0);
      scrolledInitially.current = true;
    }
  }

  function handleMessageScroll() {
    isWithinBottomLockZone && scrollToBottom(100);
  }

  function handleNotifierClick() {
    setUnreadCount(0);
    scrollToBottom(250);
  }

  function createNewCellCache() {
    return new CellMeasurerCache({
      fixedWidth: true,
      fixedHeight: false
    });
  }
};

export default ChatWindow;
