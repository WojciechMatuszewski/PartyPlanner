import React from 'react';
import { PaginateMessagesQueryEdges } from '@generated/graphql';
import ChatMessage from './ChatMessage';
import styled from '@emotion/styled';
import { cond, always, allPass, curry, anyPass } from 'ramda';
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

type Message = PaginateMessagesQueryEdges;

const ChatMessagesList: React.FC<Props> = ({ messages }) => {
  return (
    <MessagesWrapper>
      {messages.map((message, index) => {
        console.log(message, index, messages[index + 1]);
        return (
          <ChatMessage
            message={message.node}
            key={message.node.id}
            isFirstInBlock={isInBlock(message, messages[index - 1])}
            isLastInBlock={isInBlock(message, messages[index + 1])}
          />
        );
      })}
    </MessagesWrapper>
  );

  function messageDoesNotExists(message: Message) {
    return message == null;
  }
  function areMessagesWrittenByDifferentPerson(
    currentMessage: Message,
    messageToCheckAgainst: Message
  ) {
    return (
      currentMessage.node.author.id !== messageToCheckAgainst.node.author.id
    );
  }

  function isInBlock(current: Message, next: Message): boolean {
    return anyPass([
      messageDoesNotExists,
      curry(areMessagesWrittenByDifferentPerson)(current)
    ])(next);
  }
};

export default ChatMessagesList;
