import React from 'react';
import styled from '@emotion/styled';
import ChatInput from './ChatWindowInput';
import { ChatsContext } from '@pages/chats';
import ChatEmptySection from '../ChatEmptySection';
import {
  PaginateMessagesQueryEdges,
  PaginateMessagesQueryVariables,
  usePaginateMessagesQuery,
  useChatMessagesSubscription,
  PaginateMessagesQueryQuery
} from '@generated/graphql';
import ChatSectionLoading from '../ChatSectionLoading';
import NewMessagesBelowNotifier from '../ChatMessages/NewMessagesBelowNotifier';
import { List, CellMeasurerCache } from 'react-virtualized';
import VirtualizedChatMessagesList from '../ChatMessages/VirtualizedChatMessagesList';
import useBottomScrollLock from '@hooks/useBottomScrollLock';
import { message } from 'antd';
import {
  updateChatThreadMessages,
  createPaginateMessagesQueryVariables
} from '../shared';

const LOADER_OFFSET = 49;

const ChatWindowWrapper = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 64px);
  flex-direction: column;
  position: relative;
`;

interface PrependState {
  shouldScroll: boolean;
  itemsPrepended: number;
}

const initialPrependState: PrependState = {
  shouldScroll: false,
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
  const [queryVariables, setQueryVariables] = React.useState<
    PaginateMessagesQueryVariables
  >(createPaginateMessagesQueryVariables(currentlySelectedChatId));

  const virtualizedListRef = React.useRef<List>({} as any);
  const scrolledInitially = React.useRef<boolean>(false);
  const prependState = React.useRef<PrependState>(initialPrependState);

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
    [data, loadingMore]
  );

  const handleFetchMore = React.useCallback(async () => {
    if (!canFetchMore(data, loadingMore)) return;
    let lengthOfNewItems = 0;
    setLoadingMore(true);
    try {
      await fetchMore({
        variables: {
          ...queryVariables,
          before: data!.messagesConnection.pageInfo.startCursor
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          setLoadingMore(false);
          if (!fetchMoreResult) return prev;
          lengthOfNewItems = fetchMoreResult.messagesConnection.edges.length;
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
    } catch (e) {
      setLoadingMore(false);
      message.error('Could not fetch more messages');
    }
    if (!data || !data.messagesConnection) return;
    handleApolloAfterFetchMore(lengthOfNewItems);
  }, [data, currentlySelectedChatId, scrolledInitially.current]);

  const currentListScrollGetter = React.useCallback(() => {
    if (!virtualizedListRef.current) return 0;
    // TODO:
    // memory leak
    return (
      virtualizedListRef.current.getOffsetForRow({
        index:
          data && data.messagesConnection
            ? data.messagesConnection.edges.length + 1
            : 0,
        alignment: 'end'
      }) + 12
    );
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
      handleNewMessage();
    }
  }, [isWithinBottomLockZone]);

  const handleNewMessage = React.useCallback(() => {
    if (!data || !data.messagesConnection || !data.messagesConnection.edges)
      return;
    const amountToScroll = virtualizedListRef.current.getOffsetForRow({
      index: data.messagesConnection.edges.length + 1
    });
    virtualizedListRef.current.scrollToPosition(amountToScroll + 12);
  }, [data]);

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
    onSubscriptionData: ({ subscriptionData: { data }, client }) => {
      if (!data || !data.message || !data.message.node) return;
      updateChatThreadMessages(client, data.message.node, queryVariables);
      handleSubscriptionMessage();
    }
  });

  React.useEffect(handleChatIdChange, [currentlySelectedChatId]);

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
          onNewMessage={handleNewMessage}
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
        onNewMessage={handleNewMessage}
        currentQueryVariables={queryVariables}
      />
      <NewMessagesBelowNotifier
        unreadCount={unreadCount}
        visible={!isWithinBottomLockZone && unreadCount > 0}
        onClick={handleNotifierClick}
      />
    </ChatWindowWrapper>
  );

  function handleRowsRendered({
    startIndex
  }: {
    overscanStartIndex: number;
    overscanStopIndex: number;
    startIndex: number;
    stopIndex: number;
  }) {
    handleInitialScrollToBottom();
    if (prependState.current.shouldScroll && startIndex == 0) {
      handleScrollOnPrepend();
    }
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

  function handleApolloAfterFetchMore(lengthOfNewItems: number) {
    // allow scrolling to happen we have to scroll inside onRowsRendered, do not think that there is an other way.
    prependState.current = {
      shouldScroll: true,
      itemsPrepended: lengthOfNewItems
    };
    // new items will take place of old items, clear old heights
    // i tried using keyMapper fn for the cache but we would basically need to do the same thing
    // this is not a good solution !! but sadly i do not have any other :C
    cellCache.clearAll();
    // recompute heights
    virtualizedListRef.current.recomputeRowHeights();
  }

  function handleScrollOnPrepend() {
    const offset = virtualizedListRef.current.getOffsetForRow({
      alignment: 'start',
      index: prependState.current.itemsPrepended
    });
    virtualizedListRef.current.scrollToPosition(offset + LOADER_OFFSET);
    prependState.current.shouldScroll = false;
  }

  function handleInitialScrollToBottom() {
    if (!scrolledInitially.current) {
      scrollToBottom(0);
      scrolledInitially.current = true;
    }
  }

  function handleChatIdChange() {
    setQueryVariables(
      createPaginateMessagesQueryVariables(currentlySelectedChatId)
    );
    setUnreadCount(0);
    scrolledInitially.current = false;
    prependState.current = initialPrependState;
    setCellCache(createNewCellCache());
  }
};

export default ChatWindow;
