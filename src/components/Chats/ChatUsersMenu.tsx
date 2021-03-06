import React from 'react';
import useMedia from '@hooks/useMedia';
import ChatSideNavigation from './ChatSideNavigation';
import { ChatsContext } from '@pages/party-chats';
import {
  PaginateUsersQueryComponent,
  PaginateUsersQueryEdges,
  PaginateUsersQueryVariables
} from '@generated/graphql';
import ChatSectionLoading from './ChatSectionLoading';
import ChatUsersList from './ChatUsers/ChatUsersList';

import { Button } from 'antd';
import { handleRefetch } from '@shared/graphqlUtils';
import GraphqlInlineError from '@components/GraphqlInlineError';

const POOL_INTERVAL = 5000;

const ChatUsersMenu: React.FC = () => {
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  const { currentlyLoggedUserData, currentlySelectedChatId } = React.useContext(
    ChatsContext
  );

  const getQueryVariables = React.useCallback((): PaginateUsersQueryVariables => {
    return {
      where: {
        chats_some: { id: currentlySelectedChatId },
        id_not: currentlyLoggedUserData.id
      }
    };
  }, [currentlyLoggedUserData, currentlySelectedChatId]);

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
      <PaginateUsersQueryComponent
        variables={getQueryVariables()}
        pollInterval={POOL_INTERVAL}
      >
        {({ loading, data, error, refetch }) => {
          if (error)
            return (
              <GraphqlInlineError>
                <Button
                  data-testid="refetchButton"
                  onClick={async () =>
                    await handleRefetch(refetch, getQueryVariables())
                  }
                >
                  Try again
                </Button>
              </GraphqlInlineError>
            );

          if (loading || !data) return <ChatSectionLoading />;
          return (
            <ChatUsersList
              chatUsers={data.paginateUsers.edges as PaginateUsersQueryEdges[]}
            />
          );
        }}
      </PaginateUsersQueryComponent>
    </ChatSideNavigation>
  );
};

export default ChatUsersMenu;
