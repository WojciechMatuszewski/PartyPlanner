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
import { List, CellMeasurerCache, ScrollParams } from 'react-virtualized';
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
  background: white;
`;

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
  const isScrollingOnPrepend = React.useRef<boolean>(false);
  const { data, loading, fetchMore } = usePaginateMessagesQuery({
    variables: queryVariables
  });
  const [scrollToIndex, setScrollToIndex] = React.useState(-1);

  const {
    onScroll: bottomScrollLockOnScroll,
    isWithinBottomScrollLockZone
  } = useBottomScrollLock(250);

  const scrollToBottom = React.useCallback(() => {
    if (!data || !data.messagesConnection) return;
    scrolledInitially.current = true;
    setScrollToIndex(data.messagesConnection.edges.length);
  }, [data, scrollToIndex]);

  const handleSubscriptionMessage = React.useCallback(() => {
    if (!isWithinBottomScrollLockZone) {
      setUnreadCount(prevUnread => prevUnread + 1);
    } else scrollToParticularIndex(getLengthOfCurrentMessages());
  }, [isWithinBottomScrollLockZone]);

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

  const getLengthOfCurrentMessages = React.useCallback(() => {
    if (!data || !data.messagesConnection.edges) return 0;
    return data.messagesConnection.edges.length;
  }, [data]);

  const handleFetchMore = React.useCallback(async () => {
    if (!canFetchMore(data, loadingMore)) return;
    isScrollingOnPrepend.current = true;
    let lengthOfNewItems = 0;
    setLoadingMore(true);
    try {
      await fetchMore({
        variables: {
          ...queryVariables,
          before: data!.messagesConnection.pageInfo.startCursor
        },
        updateQuery: (currentCache, { fetchMoreResult }) => {
          setLoadingMore(false);
          if (!fetchMoreResult) return currentCache;
          lengthOfNewItems = fetchMoreResult.messagesConnection.edges.length;
          return {
            ...currentCache,
            messagesConnection: {
              ...currentCache.messagesConnection,
              edges: [
                ...fetchMoreResult.messagesConnection.edges,
                ...currentCache.messagesConnection.edges
              ],
              pageInfo: fetchMoreResult.messagesConnection.pageInfo
            }
          };
        }
      });
    } catch (e) {
      // TODO: better error handling heree
      setLoadingMore(false);
      message.error('Could not fetch more messages');
    }
    if (!data || !data.messagesConnection) return;
    refreshStaleGrid();
    scrollToParticularIndex(lengthOfNewItems);
    isScrollingOnPrepend.current = false;
  }, [data, currentlySelectedChatId, scrolledInitially.current]);

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
        <ChatInput currentQueryVariables={queryVariables} />
      </ChatWindowWrapper>
    );

  return (
    <ChatWindowWrapper>
      <VirtualizedChatMessagesList
        cache={cellCache}
        loadingMore={loadingMore}
        scrollToIndex={scrollToIndex}
        onScroll={handleScroll}
        onRowsRendered={handleRowsRendered}
        messages={data.messagesConnection.edges as PaginateMessagesQueryEdges[]}
        forwardedListRef={virtualizedListRef}
        onMessagesLengthChanged={handleVirtualizedGridMessagesLengthChanged}
      />
      <ChatInput currentQueryVariables={queryVariables} />
      <NewMessagesBelowNotifier
        unreadCount={unreadCount}
        visible={!isWithinBottomScrollLockZone && unreadCount > 0}
        onClick={handleNotifierClick}
      />
    </ChatWindowWrapper>
  );

  function handleRowsRendered() {
    if (!scrolledInitially.current) scrollToBottom();
  }

  function handleNotifierClick() {
    setUnreadCount(0);
    scrollToParticularIndex(getLengthOfCurrentMessages());
  }

  function createNewCellCache() {
    return new CellMeasurerCache({
      fixedWidth: true,
      fixedHeight: false
    });
  }

  function refreshStaleGrid() {
    cellCache.clearAll();
    virtualizedListRef.current.recomputeRowHeights();
  }

  function scrollToParticularIndex(indexToScrollTo: number) {
    const offset = virtualizedListRef.current.getOffsetForRow({
      alignment: 'start',
      index: indexToScrollTo
    });
    virtualizedListRef.current.scrollToPosition(offset + LOADER_OFFSET);
  }

  function handleChatIdChange() {
    setQueryVariables(
      createPaginateMessagesQueryVariables(currentlySelectedChatId)
    );
    setUnreadCount(0);
    scrolledInitially.current = false;
    setCellCache(createNewCellCache());
    setScrollToIndex(-1);
  }

  function handleScroll(params: ScrollParams) {
    if (params.scrollTop === 0) handleFetchMore();
    bottomScrollLockOnScroll(params);
    setScrollToIndex(-1);
  }

  function handleVirtualizedGridMessagesLengthChanged(currentLength: number) {
    if (scrolledInitially.current && !isScrollingOnPrepend.current)
      scrollToParticularIndex(currentLength);
  }
};

export default ChatWindow;
