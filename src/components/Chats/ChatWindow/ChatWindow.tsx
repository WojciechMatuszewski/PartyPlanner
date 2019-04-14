import React from 'react';
import styled from '@emotion/styled';
import ChatInput from './ChatWindowInput';

import { ChatsContext } from '@pages/chats';
import ChatEmptySection from '../ChatEmptySection';
import {
  PaginateMessagesQueryComponent,
  PaginateMessagesQueryEdges,
  MessageOrderByInput,
  PaginateMessagesQueryVariables
} from '@generated/graphql';
import ChatSectionLoading from '../ChatSectionLoading';
import AnimatedChatMessagesList from '../ChatMessages/AnimatedChatMessagesList';

const ChatWindowWrapper = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 64px);
  flex-direction: column;
  position: relative;
`;

const ChatWindow: React.FC = () => {
  const { currentlySelectedChatId } = React.useContext(ChatsContext);

  const [queryVariables, setQueryVariables] = React.useState<
    PaginateMessagesQueryVariables
  >(createQueryVariables(currentlySelectedChatId));

  React.useEffect(() => {
    setQueryVariables(createQueryVariables(currentlySelectedChatId));
  }, [currentlySelectedChatId]);

  return (
    <ChatWindowWrapper>
      {currentlySelectedChatId == null ? (
        <ChatEmptySection image={'../static/group-chat.svg'} />
      ) : (
        <PaginateMessagesQueryComponent variables={queryVariables}>
          {({ loading, data }) => {
            if (loading || !data || !data.messagesConnection)
              return <ChatSectionLoading />;
            return (
              <AnimatedChatMessagesList
                messages={
                  data.messagesConnection.edges as PaginateMessagesQueryEdges[]
                }
              >
                {({ scrollToBottom, isWithinBottomLockZone }) => {
                  return (
                    <ChatInput
                      onNewMessage={() =>
                        isWithinBottomLockZone && scrollToBottom(50)
                      }
                      currentQueryVariables={queryVariables}
                    />
                  );
                }}
              </AnimatedChatMessagesList>
            );
          }}
        </PaginateMessagesQueryComponent>
      )}
    </ChatWindowWrapper>
  );

  function createQueryVariables(currentChatId: string | null) {
    if (currentlySelectedChatId == null) return {};
    return {
      where: {
        chat: { id: currentChatId }
      },
      orderBy: 'createdAt_ASC' as MessageOrderByInput,
      last: 20
    };
  }
};

export default ChatWindow;
