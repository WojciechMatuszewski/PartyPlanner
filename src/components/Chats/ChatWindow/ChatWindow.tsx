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
import ChatMessagesList from '../ChatMessages/ChatMessagesList';

const ChatWindowWrapper = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 64px);
  flex-direction: column;
  position: relative;
`;

// const NewMessagesBelowNotifier = styled.div`
//   position: absolute;
//   bottom: 40px;
//   width: 250px;
//   margin: 0 auto;
//   border-top-left-radius: 8px;
//   border-top-right-radius: 8px;
//   box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
//   border: 2px dashed #d9d9d9;
//   border-bottom: 0;
//   left: 0;
//   right: 0;
//   height: 35px;
//   text-align: center;
//   cursor: pointer;
//   line-height: 35px;
// `;

const ChatWindow: React.FC = () => {
  const { currentlySelectedChatId } = React.useContext(ChatsContext);

  // const chatMessagesInnerRef = React.useRef<HTMLDivElement>(null);
  // const { scrollToBottom, isWithinBottomLockRange } = useChatWindow(
  //   chatMessagesInnerRef
  // );
  // const onNewChatMessage = React.useCallback(() => {
  //   if (isWithinBottomLockRange) {
  //     scrollToBottom(250);
  //   }
  // }, [isWithinBottomLockRange]);

  return (
    <ChatWindowWrapper>
      {currentlySelectedChatId == null ? (
        <ChatEmptySection image={'../static/group-chat.svg'} />
      ) : (
        <PaginateMessagesQueryComponent
          variables={{
            where: {
              chat: { id: currentlySelectedChatId }
            }
            // first: 10
          }}
        >
          {({ loading, data }) => {
            if (loading || !data) return <ChatSectionLoading />;

            return (
              <React.Fragment>
                <ChatMessagesList
                  messages={
                    data.messagesConnection
                      .edges as PaginateMessagesQueryEdges[]
                  }
                />
                {/* <ChatWindowMessages
                  onNewMessage={onNewChatMessage}
                  ref={chatMessagesInnerRef}
                /> */}
                {/* {!isWithinBottomLockRange && (
                  <NewMessagesBelowNotifier onClick={() => scrollToBottom()}>
                    <h3>New messages below</h3>
                  </NewMessagesBelowNotifier>
                )} */}
                <ChatInput />
              </React.Fragment>
            );
          }}
        </PaginateMessagesQueryComponent>
      )}
    </ChatWindowWrapper>
  );
};

export default React.memo(ChatWindow);
