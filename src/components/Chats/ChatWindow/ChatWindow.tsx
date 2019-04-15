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
  useChatMessagesSubscription
} from '@generated/graphql';
import ChatSectionLoading from '../ChatSectionLoading';

import NewMessagesBelowNotifier from '../ChatMessages/NewMessagesBelowNotifier';
import { List } from 'react-virtualized';
import VirtualizedChatMessagesList from '../ChatMessages/VirtualizedChatMessagesList';
import useBottomScrollLock from '@hooks/useBottomScrollLock';

const ChatWindowWrapper = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 64px);
  flex-direction: column;
  position: relative;
`;

const ChatWindow: React.FC = () => {
  const virtualizedListRef = React.useRef<List>({} as any);
  const [unreadCount, setUnreadCount] = React.useState<number>(1);
  const { currentlySelectedChatId } = React.useContext(ChatsContext);

  const [queryVariables, setQueryVariables] = React.useState<
    PaginateMessagesQueryVariables
  >(createQueryVariables(currentlySelectedChatId));

  const { data, loading } = usePaginateMessagesQuery({
    variables: queryVariables
  });

  const currentListScrollGetter = React.useCallback(() => {
    if (!virtualizedListRef.current) return 0;
    return virtualizedListRef.current.getOffsetForRow({
      index:
        data && data.messagesConnection
          ? data.messagesConnection.edges.length
          : 0
    });
  }, [virtualizedListRef.current, data]);

  const {
    scrollToBottom,
    currentScrollTop,
    isWithinBottomLockZone,
    handleScroll
  } = useBottomScrollLock(250, currentListScrollGetter);

  useChatMessagesSubscription({
    variables: {
      where: {
        node: {
          chat: {
            id: currentlySelectedChatId
          }
        }
      }
    },
    // TODO:
    onSubscriptionData: ({ subscriptionData }) => {
      if (!subscriptionData || !subscriptionData.data) return;
      // const cachedMessages = client.readQuery({
      //   query: PaginateMessagesQueryDocument,
      //   variables: queryVariables
      // });
    }
  });

  React.useEffect(() => {
    setQueryVariables(createQueryVariables(currentlySelectedChatId));
    setUnreadCount(0);
  }, [currentlySelectedChatId]);

  if (currentlySelectedChatId == null)
    return <ChatEmptySection image={'../static/group-chat.svg'} />;

  if (loading || !data || !data.messagesConnection)
    return <ChatSectionLoading />;

  return (
    <ChatWindowWrapper>
      <VirtualizedChatMessagesList
        scrollTop={currentScrollTop}
        onRowsRendered={handleInitialScroll}
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
        visible={isWithinBottomLockZone && unreadCount > 0}
        onClick={handleNotifierClick}
      />
    </ChatWindowWrapper>
  );

  function createQueryVariables(currentChatId: string | null) {
    if (currentlySelectedChatId == null) return {};
    return {
      where: {
        chat: { id: currentChatId }
      },
      orderBy: 'createdAt_ASC' as MessageOrderByInput,
      last: 30
    };
  }

  function handleInitialScroll() {
    scrollToBottom(0);
  }

  function handleMessageScroll() {
    isWithinBottomLockZone && scrollToBottom(150);
  }

  function handleNotifierClick() {
    setUnreadCount(0);
    scrollToBottom(250);
  }
};

export default ChatWindow;
