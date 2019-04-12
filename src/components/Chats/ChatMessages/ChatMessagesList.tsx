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
  .message:first-of-type {
    margin-top: 0;
  }
`;
const ChatMessagesList: React.FC<Props> = ({ messages }) => {
  return (
    <MessagesWrapper>
      {messages.map((message, index) => {
        return (
          <ChatMessage
            message={message.node}
            key={message.node.id}
            isFirstInBlock={isFirstInBlock(messages[index - 1], message)}
            isLastInBlock={isLastInBlock(messages[index + 1], message)}
          />
        );
      })}
    </MessagesWrapper>
  );
  function isLastInBlock(
    nextElement: PaginateMessagesQueryEdges,
    currentElement: PaginateMessagesQueryEdges
  ) {
    if (nextElement == null) return true;
    return nextElement.node.author.id !== currentElement.node.author.id;
  }
  function isFirstInBlock(
    prevElement: PaginateMessagesQueryEdges,
    currentElement: PaginateMessagesQueryEdges
  ) {
    if (prevElement == null) return true;
    return prevElement.node.author.id !== currentElement.node.author.id;
  }
};

export default ChatMessagesList;
