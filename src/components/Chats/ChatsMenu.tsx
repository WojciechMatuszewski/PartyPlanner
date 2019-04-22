import React from 'react';
import useMedia from '@hooks/useMedia';
import {
  PaginateChatsQueryQuery,
  PaginateChatsQueryEdges,
  PaginateChatsQueryPageInfo,
  PaginateChatsQueryVariables,
  PaginateUsersQueryQuery,
  PaginateChatsQueryDocument
} from '@generated/graphql';
import ChatSideNavigation from './ChatSideNavigation';
import ChatsListSearch from './ChatsList/ChatsListSearch';
import ChatsList from './ChatsList/ChatsList';
import { message } from 'antd';
import css from '@emotion/css';
import { useApolloClient } from 'react-apollo-hooks';
import { ChatsContext } from '@pages/chats';
import ChatsListFilteredEmpty from './ChatsList/ChatsListFilteredEmpty';
import ChatSectionLoading from './ChatSectionLoading';

interface Props {
  initialChatsData: PaginateChatsQueryQuery;
  userId: string;
}

const ChatsMenu: React.FC<Props> = props => {
  const { currentlyLoggedUserData } = React.useContext(ChatsContext);
  const apolloClient = useApolloClient();

  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  return (
    <ChatSideNavigation
      css={css`
        background: blue;
      `}
      type={shouldDisplayDrawer ? 'drawer' : 'sider'}
      triggerIcon="message"
      placement="left"
      drawerProps={{
        title: 'Your chats',
        closable: false
      }}
    >
      <ChatsListSearch />
      <ChatsList chats={[]} />
    </ChatSideNavigation>
  );
};

export default ChatsMenu;
