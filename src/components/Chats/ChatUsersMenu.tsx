import React from 'react';
import useMedia from '@hooks/useMedia';
import ChatSideNavigation from './ChatSideNavigation';
import { ChatsContext } from '@pages/chats';
import {
  PaginateUsersQueryComponent,
  PaginateUsersQueryEdges
} from '@generated/graphql';
import ChatSectionLoading from './ChatSectionLoading';
import ChatUsersList from './ChatUsers/ChatUsersList';

const POOL_INTERVAL = 5000;

const ChatUsersMenu: React.FC = () => {
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  const { currentlyLoggedUserData, currentlySelectedChatId } = React.useContext(
    ChatsContext
  );

  if (currentlySelectedChatId == null) return null;

  return (
    <ChatSideNavigation
      placement="right"
      type={shouldDisplayDrawer ? 'drawer' : 'sider'}
      triggerIcon="user"
      drawerProps={{
        title: 'Participants'
      }}
      siderProps={{
        style: { opacity: currentlySelectedChatId === null ? 0.4 : 1 },
        width: 205
      }}
    >
      {currentlySelectedChatId == null ? null : (
        <PaginateUsersQueryComponent
          variables={{
            where: {
              chats_some: { id: currentlySelectedChatId },
              id_not: currentlyLoggedUserData.id
            }
          }}
          pollInterval={POOL_INTERVAL}
        >
          {({ loading, data }) => {
            if (loading || !data) return <ChatSectionLoading />;
            return (
              <ChatUsersList
                chatUsers={
                  data.paginateUsers.edges as PaginateUsersQueryEdges[]
                }
              />
            );
          }}
        </PaginateUsersQueryComponent>
      )}
    </ChatSideNavigation>
  );
};

export default ChatUsersMenu;
