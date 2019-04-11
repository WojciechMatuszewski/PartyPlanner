import React from 'react';
import { Layout, Button } from 'antd';
import css from '@emotion/css';

import ChatWindow from '@components/Chat/ChatWindow';
import ChatUsers from '@components/Chat/ChatUsers';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import {
  MeQueryMe,
  PaginateChatsQueryEdges,
  usePaginateChatsQuery
} from '@generated/graphql';
import Chats from '@components/Chat/Chats/Chats';
import { withRouter, WithRouterProps } from 'next/router';
import NoData from '@components/NoData';
import GraphqlLoading from '@components/GraphqlLoading';

const LayoutStyles = css`
  height: calc(100vh - 66px);
  display: flex;
`;

const INITIAL_PAGE_SIZE = 3;

interface Props {
  me: MeQueryMe;
}

const Chat: React.FC<Props & WithRouterProps> = ({ me, router }) => {
  const { loading, data, error } = usePaginateChatsQuery({
    variables: {
      where: {
        members_some: { id: me.id },
        OR: [{ party: { isPublic: true } }, { party: { isPublic: false } }]
      },
      first: INITIAL_PAGE_SIZE
    }
  });

  if (loading || !data)
    return (
      <GraphqlLoading
        isLoadingInitially={true}
        loading={true}
        textToDisplay="Loading your chats"
      />
    );

  if (!data.chatsConnection.edges.length)
    return (
      <NoData
        style={{ height: 'auto' }}
        action={
          <Button type="primary" onClick={handleOnEmptyButtonClick}>
            Create a party!
          </Button>
        }
        message="You currently do not have any chats"
      />
    );

  return (
    <Layout css={LayoutStyles}>
      <Chats
        userId={me.id}
        initialChats={data.chatsConnection.edges as PaginateChatsQueryEdges[]}
      />
      <ChatWindow />
      <ChatUsers />
    </Layout>
  );

  function handleOnEmptyButtonClick() {
    router && router.push('/create-party');
  }
};

export default withRouter(
  withApolloAuth({ userHasToBe: 'authenticated' })(Chat)
);
