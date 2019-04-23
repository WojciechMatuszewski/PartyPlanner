import React from 'react';
import { Layout, Button } from 'antd';
import css from '@emotion/css';

import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import { MeQueryMe, useHasPartiesQuery } from '@generated/graphql';
import { withRouter, WithRouterProps } from 'next/router';
import ChatsMenu from '@components/Chats/ChatsMenu';
import ChatUsersMenu from '@components/Chats/ChatUsersMenu';
import GraphqlLoading from '@components/GraphqlLoading';
import ChatWindow from '@components/Chats/ChatWindow/ChatWindow';
import GraphqlException from '@components/GraphqlException';

import { BehaviorSubject } from 'rxjs';
import NoData from '@components/NoData';

const LayoutStyles = css`
  height: calc(100vh - 66px);
  display: flex;
`;

interface Props {
  me: MeQueryMe;
}

interface ChatContextProps {
  currentlySelectedChatId: string | null;
  selectedChatIdStream$: BehaviorSubject<string | null>;
  currentlyLoggedUserData: MeQueryMe;
}

export const ChatsContext = React.createContext<ChatContextProps>({
  currentlySelectedChatId: null,
  selectedChatIdStream$: new BehaviorSubject(null as string | null),
  currentlyLoggedUserData: {} as any
});

const Chats: React.FC<Props & WithRouterProps> = ({ me, router }) => {
  const isFirstRunRef = React.useRef<boolean>(false);

  const routeChangeStreamRef = React.useRef<BehaviorSubject<string | null>>(
    new BehaviorSubject(getCurrentChatFromUrl())
  );

  const [state, setState] = React.useState<ChatContextProps>({
    currentlySelectedChatId: getCurrentChatFromUrl(),
    selectedChatIdStream$: routeChangeStreamRef.current,
    currentlyLoggedUserData: me
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

  const { loading, data, error } = useHasPartiesQuery();

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

  if (!data.hasParties)
    return (
      <NoData
        style={{ height: 'auto' }}
        message="You currently do not have any chats"
        action={
          <Button
            type="primary"
            onClick={() => router && router.push('/create-party')}
          >
            Create a party!
          </Button>
        }
      />
    );

  return (
    <Layout css={[LayoutStyles]}>
      <ChatsContext.Provider value={state}>
        <ChatsMenu />
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
