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

const ChatUsersMenu: React.FC = () => {
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  const { currentlyLoggedUserId, currentlySelectedChatId } = React.useContext(
    ChatsContext
  );

  return (
    <ChatSideNavigation
      placement="right"
      type={shouldDisplayDrawer ? 'drawer' : 'sider'}
      triggerIcon="user"
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
              id_not: currentlyLoggedUserId
            }
          }}
        >
          {({ loading, data, error }) => {
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