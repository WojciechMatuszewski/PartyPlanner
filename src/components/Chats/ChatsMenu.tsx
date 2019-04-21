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

interface State {
  loadingMore: boolean;
  chats: PaginateChatsQueryEdges[];
  paginationInfo: PaginateChatsQueryPageInfo;
  filterQuery: string;
}

const ChatsMenu: React.FC<Props> = props => {
  const { currentlyLoggedUserData } = React.useContext(ChatsContext);
  const apolloClient = useApolloClient();

  const [state, setState] = React.useState<State>({
    loadingMore: false,
    chats: props.initialChatsData.chatsConnection
      .edges as PaginateChatsQueryEdges[],
    paginationInfo: props.initialChatsData.chatsConnection.pageInfo,
    filterQuery: ''
  });

  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  const fetchMore = React.useCallback(() => {
    setState(prevState => ({ ...prevState, loadingMore: true }));
    return apolloClient.query<
      PaginateUsersQueryQuery,
      PaginateChatsQueryVariables
    >({
      query: PaginateChatsQueryDocument,
      variables: {
        where: {
          id_not_in: state.chats.map(chat => chat.node.id),
          party: {
            title_contains: state.filterQuery
          },
          members_some: { id: currentlyLoggedUserData.id }
        }
      }
    });
  }, [state.paginationInfo, state.chats, state.filterQuery]);

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
      <ChatsListSearch
        onError={handleFetchMoreError}
        onFetchMoreResult={handleFetchMoreResult}
        onFetchMore={fetchMore}
        onInputChange={handleInputValueChange}
      />
      <ChatsList filterQuery={state.filterQuery} chats={state.chats}>
        {({ hasResultsAfterFiltering }) =>
          !hasResultsAfterFiltering && !state.loadingMore ? (
            <ChatsListFilteredEmpty filterQuery={state.filterQuery} />
          ) : state.loadingMore ? (
            <ChatSectionLoading
              cssProp={css`
                height: auto;
                padding-top: 20px;
              `}
            />
          ) : null
        }
      </ChatsList>
    </ChatSideNavigation>
  );

  function handleInputValueChange(value: string) {
    setState(prevState => ({
      ...prevState,
      filterQuery: value
    }));
  }

  function handleFetchMoreResult(result: PaginateChatsQueryQuery) {
    setState(prevState => ({ ...prevState, loadingMore: false }));
    if (!result.chatsConnection || result.chatsConnection.edges.length == 0)
      return;

    setState(prevState => ({
      ...prevState,
      chats: [
        ...prevState.chats,
        ...(result.chatsConnection.edges as PaginateChatsQueryEdges[])
      ],
      loadingMore: false,
      paginationInfo: result.chatsConnection.pageInfo
    }));
  }

  function handleFetchMoreError() {
    message.error('Something happened!');
    setState(prevState => ({ ...prevState, loadingMore: false }));
  }
};

export default ChatsMenu;
