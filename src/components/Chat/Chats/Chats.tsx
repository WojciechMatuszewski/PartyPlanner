import React from 'react';
import useMedia from '@hooks/useMedia';
import ChatSideNavigation from '../ChatSideNavigation';
import ChatsList from './ChatsList';
import ChatsListSearch from '../ChatsListSearch';
import { PaginateChatsQueryEdges } from '@generated/graphql';

interface Props {
  initialChats: PaginateChatsQueryEdges[];
  userId: string;
}

const Chats: React.FC<Props> = props => {
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  return (
    <ChatSideNavigation
      type={shouldDisplayDrawer ? 'drawer' : 'sider'}
      triggerIcon="message"
      placement="left"
    >
      <ChatsListSearch />
      <ChatsList chats={props.initialChats} />
    </ChatSideNavigation>
  );
};

export default Chats;
