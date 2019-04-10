import React from 'react';

import ChatsListDrawer from './ChatDrawer';
import ChatsListSider from './ChatSider';
import ChatsListSearch from './ChatsListSearch';
import useMedia from '@hooks/useMedia';
import ChatsListItemAvatarList from './ChatsList/ChatsListItemAvatarList';
import {
  PaginateChatsQueryEdges,
  PaginateChatsQueryMembers
} from '@generated/graphql';
import ChatsListItem from './ChatsList/ChatsListItem';

interface Props {
  chats: PaginateChatsQueryEdges[];
}

const ChatsList: React.FC<Props> = ({ chats }) => {
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  const children = (
    <React.Fragment>
      <ChatsListSearch />
      {chats.map(chat => (
        <ChatsListItem edge={chat} />
      ))}
    </React.Fragment>
  );

  return shouldDisplayDrawer ? (
    <ChatsListDrawer title="Other Chats" placement="left" triggerIcon="message">
      {children}
    </ChatsListDrawer>
  ) : (
    <ChatsListSider placement="left">{children}</ChatsListSider>
  );
};

export default ChatsList;
