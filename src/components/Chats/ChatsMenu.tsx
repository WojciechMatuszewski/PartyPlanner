import React from 'react';
import useMedia from '@hooks/useMedia';
import {
  PaginateChatsQueryQuery,
  PaginateChatsQueryEdges,
  PaginateChatsQueryPageInfo,
  PaginateChatsQueryVariables,
  PaginateUsersQueryQuery,
  PaginateChatsQueryDocument,
  PaginateChatsQueryComponent,
  usePaginateMessagesQuery
} from '@generated/graphql';
import ChatSideNavigation from './ChatSideNavigation';
import ChatsListSearch from './ChatsList/ChatsListSearch';
import ChatsList from './ChatsList/ChatsList';
import css from '@emotion/css';
import { ChatsContext } from '@pages/chats';
import ChatsListFilteredEmpty from './ChatsList/ChatsListFilteredEmpty';
import ChatSectionLoading from './ChatSectionLoading';

interface Props {
  initialChatsData: PaginateChatsQueryQuery;
  userId: string;
}

const ChatsMenu: React.FC<Props> = props => {
  const { currentlyLoggedUserData } = React.useContext(ChatsContext);
  const [filterQuery, setFilterQuery] = React.useState<string>('');
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
      <ChatsListSearch onChange={handleOnInputChange} />
      <PaginateChatsQueryComponent
        variables={{
          where: {
            party: {
              members_some: { id: currentlyLoggedUserData.id },
              normalizedTitle_contains: filterQuery.toLocaleLowerCase()
            }
          },
          first: 10
        }}
      >
        {({ data, loading, error }) => {
          if (loading || !data || !data.chatsConnection)
            return <ChatSectionLoading />;
          if (!loading && data && data.chatsConnection.edges.length === 0)
            return <ChatsListFilteredEmpty filterQuery={filterQuery} />;
          return (
            <React.Fragment>
              <ChatsList
                chats={data.chatsConnection.edges as PaginateChatsQueryEdges[]}
              />
            </React.Fragment>
          );
        }}
      </PaginateChatsQueryComponent>
    </ChatSideNavigation>
  );

  function handleOnInputChange(inputValue: string) {
    setFilterQuery(inputValue);
  }
};

export default ChatsMenu;
