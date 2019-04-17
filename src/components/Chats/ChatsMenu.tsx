import React from 'react';
import useMedia from '@hooks/useMedia';
import { PaginateChatsQueryEdges } from '@generated/graphql';
import ChatSideNavigation from './ChatSideNavigation';
import ChatsListSearch from './ChatsList/ChatsListSearch';
import ChatsList from './ChatsList/ChatsList';

interface Props {
  initialChats: PaginateChatsQueryEdges[];
  userId: string;
}

const ChatsMenu: React.FC<Props> = props => {
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  return (
    <ChatSideNavigation
      type={shouldDisplayDrawer ? 'drawer' : 'sider'}
      triggerIcon="message"
      placement="left"
      drawerProps={{
        title: 'Your chats',
        closable: false
      }}
    >
      <ChatsListSearch />
      <ChatsList chats={props.initialChats} />
    </ChatSideNavigation>
  );
};

export default ChatsMenu;
