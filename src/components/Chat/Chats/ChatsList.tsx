import React from 'react';
import { PaginateChatsQueryEdges } from '@generated/graphql';
import ChatsListItem from './ChatsListItem';

interface Props {
  chats: PaginateChatsQueryEdges[];
}
const ChatsList: React.FC<Props> = ({ chats }) => {
  return (
    <React.Fragment>
      {chats.map(chat => (
        <ChatsListItem key={chat.node.id} edge={chat} />
      ))}
    </React.Fragment>
  );
};

export default ChatsList;
