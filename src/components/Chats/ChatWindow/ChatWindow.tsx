import React from 'react';
import styled from '@emotion/styled';
import ChatInput from './ChatWindowInput';

import { ChatsContext } from '@pages/chats';
import ChatEmptySection from '../ChatEmptySection';
import {
  PaginateMessagesQueryComponent,
  PaginateMessagesQueryEdges
} from '@generated/graphql';
import ChatSectionLoading from '../ChatSectionLoading';

import AnimatedChatMessagesList from '../ChatMessages/AnimatedChatMessagesList';
import NewMessagesBelowNotifier from '../ChatMessages/NewMessagesBelowNotifier';

const ChatWindowWrapper = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 64px);
  flex-direction: column;
  position: relative;
`;

const ChatWindow: React.FC = () => {
  const { currentlySelectedChatId } = React.useContext(ChatsContext);
  // const chatMessagesInnerRef = React.useRef<HTMLDivElement>(null);

  // const { scrollToBottom, isWithinBottomLockRange } = useChatWindow(
  //   chatMessagesInnerRef
  // );

  // console.log(chatMessagesInnerRef);

  // React.useEffect(() => {
  //   scrollToBottom(0);
  // }, []);
  // const onNewChatMessage = React.useCallback(() => {
  //   if (isWithinBottomLockRange) {
  //     scrollToBottom(250);
  //   }
  // }, [isWithinBottomLockRange]);

  // setTimeout(() => {
  //   scrollToBottom(0);
  // }, 1000);

  return (
    <ChatWindowWrapper>
      {currentlySelectedChatId == null ? (
        <ChatEmptySection image={'../static/group-chat.svg'} />
      ) : (
        <PaginateMessagesQueryComponent
          variables={{
            where: {
              chat: { id: currentlySelectedChatId }
            },
            first: 20
          }}
        >
          {({ loading, data }) => {
            if (loading || !data) return <ChatSectionLoading />;
            return (
              <AnimatedChatMessagesList
                messages={
                  data.messagesConnection.edges as PaginateMessagesQueryEdges[]
                }
              >
                {({ scrollToBottom, isWithinBottomLockZone }) => {
                  // console.log(isWithinBottomLockZone);
                  return (
                    <React.Fragment>
                      <NewMessagesBelowNotifier
                        visible={true}
                        unreadCount={0}
                      />
                      <ChatInput />
                    </React.Fragment>
                  );
                }}
              </AnimatedChatMessagesList>
            );
          }}
        </PaginateMessagesQueryComponent>
      )}
    </ChatWindowWrapper>
  );
};

export default ChatWindow;
