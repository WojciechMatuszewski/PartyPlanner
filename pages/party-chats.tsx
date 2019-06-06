import React from 'react';
import { Layout, Button } from 'antd';
import css from '@emotion/css';
import {
  withApolloAuth,
  WithApolloAuthInjectedProps
} from '@apolloSetup/withApolloAuth';
import { withRouter, WithRouterProps } from 'next/router';
import ChatsMenu from '@components/Chats/ChatsMenu';
import ChatUsersMenu from '@components/Chats/ChatUsersMenu';
import GraphqlLoading from '@components/GraphqlLoading';
import ChatWindow from '@components/Chats/ChatWindow/ChatWindow';
import GraphqlException from '@components/GraphqlException';
import { BehaviorSubject } from 'rxjs';
import NoData from '@components/NoData';
import { handleRefetch } from '@shared/graphqlUtils';
import { HasChatsQueryComponent } from '@generated/graphql';

const LayoutStyles = css`
  height: calc(100vh - 66px);
  display: flex;
`;

export interface ChatContextProps {
  currentlySelectedChatId: string | null;
  selectedChatIdStream$: BehaviorSubject<string | null>;
  currentlyLoggedUserData: WithApolloAuthInjectedProps['me'];
}

export const ChatsContext = React.createContext<ChatContextProps>({
  currentlySelectedChatId: null,
  selectedChatIdStream$: new BehaviorSubject(null as string | null),
  currentlyLoggedUserData: {} as any
});

const UserChats: React.FC<WithApolloAuthInjectedProps & WithRouterProps> = ({
  me,
  router
}) => {
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

  return (
    <HasChatsQueryComponent notifyOnNetworkStatusChange={true}>
      {({ data, loading, error, refetch }) => {
        if (error)
          return (
            <GraphqlException
              style={{ height: 'calc(100vh - 66px)' }}
              actions={
                <Button onClick={async () => await handleRefetch(refetch)}>
                  Try again
                </Button>
              }
            />
          );
        if (loading || !data)
          return (
            <GraphqlLoading
              isLoadingInitially={true}
              loading={true}
              textToDisplay="Loading your chats"
            />
          );

        if (!data.hasChats)
          return (
            <NoData
              style={{ height: 'auto' }}
              message="You currently do not have any chats"
              action={
                <Button
                  type="primary"
                  onClick={() =>
                    router && router.push('/party-create', '/party/create')
                  }
                >
                  Create a party!
                </Button>
              }
            />
          );

        return (
          <Layout css={[LayoutStyles]}>
            <Layout.Content>
              <ChatsContext.Provider value={state}>
                <ChatsMenu />
                <ChatWindow />
                <ChatUsersMenu />
              </ChatsContext.Provider>
            </Layout.Content>
          </Layout>
        );
      }}
    </HasChatsQueryComponent>
  );

  function getCurrentChatFromUrl() {
    return router && router.query != null && router.query.chat
      ? (router.query.chat as string)
      : null;
  }
};

export default withRouter(
  withApolloAuth({ userHasToBe: 'authenticated' })(UserChats)
);
