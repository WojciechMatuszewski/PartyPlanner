import React from 'react';
import { PaginateChatsQueryEdges } from '@generated/graphql';
import ChatsListItem from './ChatsListItem';
import { ChatsContext } from '@pages/chats';

interface Props {
  chats: PaginateChatsQueryEdges[];
}
const ChatsList: React.FC<Props> = ({ chats }) => {
  const { currentlySelectedChatId } = React.useContext(ChatsContext);

  return (
    <React.Fragment>
      {chats.map(chat => (
        <ChatsListItem
          selected={currentlySelectedChatId === chat.node.id}
          key={chat.node.id}
          edge={chat}
        />
      ))}
    </React.Fragment>
  );
};

export default React.memo(ChatsList);
