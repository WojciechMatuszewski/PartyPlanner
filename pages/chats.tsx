import React from 'react';
import { Layout, Button } from 'antd';
import css from '@emotion/css';

import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import {
  MeQueryMe,
  PaginateChatsQueryEdges,
  usePaginateChatsQuery
} from '@generated/graphql';
import { withRouter, WithRouterProps } from 'next/router';
import ChatsMenu from '@components/Chats/ChatsMenu';
import ChatUsersMenu from '@components/Chats/ChatUsersMenu';
import GraphqlLoading from '@components/GraphqlLoading';
import ChatWindow from '@components/Chats/ChatWindow/ChatWindow';
import GraphqlException from '@components/GraphqlException';

import { BehaviorSubject } from 'rxjs';

const LayoutStyles = css`
  height: calc(100vh - 66px);
  display: flex;
`;

const INITIAL_PAGE_SIZE = 3;

interface Props {
  me: MeQueryMe;
}

interface ChatContextProps {
  currentlySelectedChatId: string | null;
  selectedChatIdStream$: BehaviorSubject<string | null>;
  currentlyLoggedUserId: string;
}

export const ChatsContext = React.createContext<ChatContextProps>({
  currentlySelectedChatId: null,
  selectedChatIdStream$: new BehaviorSubject(null as string | null),
  currentlyLoggedUserId: ''
});

const Chats: React.FC<Props & WithRouterProps> = ({ me, router }) => {
  const isFirstRunRef = React.useRef<boolean>(false);

  const routeChangeStreamRef = React.useRef<BehaviorSubject<string | null>>(
    new BehaviorSubject(getCurrentChatFromUrl())
  );

  const [state, setState] = React.useState<ChatContextProps>({
    currentlySelectedChatId: getCurrentChatFromUrl(),
    selectedChatIdStream$: routeChangeStreamRef.current,
    currentlyLoggedUserId: me.id
  });

  React.useEffect(() => {
    if (!isFirstRunRef.current) {
      isFirstRunRef.current = true;
      return;
    }
    let currentlySelectedChatId = getCurrentChatFromUrl();
    if (!currentlySelectedChatId) return;
    setState(prevState => ({ ...prevState, currentlySelectedChatId }));
    routeChangeStreamRef.current.next(currentlySelectedChatId);
  }, [router!.query]);

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

  if (error)
    return (
      <GraphqlException
        actions={
          <Button onClick={() => router && router.back()}>Go back!</Button>
        }
      />
    );

  return (
    <Layout css={[LayoutStyles]}>
      <ChatsContext.Provider value={state}>
        <ChatsMenu
          userId={me.id}
          initialChats={data.chatsConnection.edges as PaginateChatsQueryEdges[]}
        />
        <ChatWindow />
        <ChatUsersMenu />
      </ChatsContext.Provider>
    </Layout>
  );

  function getCurrentChatFromUrl() {
    return router && router.query != null && router.query.chat
      ? (router.query.chat as string)
      : null;
  }
};

export default withRouter(
  withApolloAuth({ userHasToBe: 'authenticated' })(Chats)
);
