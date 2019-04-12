import React from 'react';
import { PaginateMessagesQueryEdges } from '@generated/graphql';
import ChatMessage from './ChatMessage';
import styled from '@emotion/styled';

interface Props {
  messages: PaginateMessagesQueryEdges[];
}

const MessagesWrapper = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  padding: 12px 15px;
  .message {
    margin-top: 12px;
  }
  .message:first-of-type {
    margin-top: 0;
  }
`;
const ChatMessagesList: React.FC<Props> = ({ messages }) => {
  return (
    <MessagesWrapper>
      {messages.map(message => (
        <ChatMessage
          message={message.node}
          key={message.node.id}
          isFirstInBlock={false}
          isLastInBlock={false}
        />
      ))}
    </MessagesWrapper>
  );
};

export default ChatMessagesList;
