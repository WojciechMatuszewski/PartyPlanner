import React from 'react';
import { Layout } from 'antd';
import css from '@emotion/css';
import ChatsList from '@components/Chat/ChatsList';
import ChatWindow from '@components/Chat/ChatWindow';
import ChatUsers from '@components/Chat/ChatUsers';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import {
  MeQueryMe,
  PaginateChatsQueryComponent,
  PaginateChatsQueryEdges
} from '@generated/graphql';

const LayoutStyles = css`
  height: calc(100vh - 66px);
  display: flex;
`;

const INITIAL_PAGE_SIZE = 3;

const Chat: React.FC<MeQueryMe> = ({ id }) => {
  return (
    <Layout css={LayoutStyles}>
      <PaginateChatsQueryComponent
        variables={{
          where: {
            members_some: { id }
          },
          first: INITIAL_PAGE_SIZE
        }}
      >
        {({ data, loading, error }) => {
          if (loading || !data || !data.chatsConnection) return null;

          return (
            <>
              <ChatsList
                chats={data.chatsConnection.edges as PaginateChatsQueryEdges[]}
              />
              <ChatWindow />
              <ChatUsers />
            </>
          );
        }}
      </PaginateChatsQueryComponent>
    </Layout>
  );
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(Chat);
