import React from 'react';
import { Layout, Button } from 'antd';

import { WithApolloAuthInjectedProps } from '@apolloSetup/withApolloAuth';
import { withRouter, WithRouterProps } from 'next/router';
import ChatsMenu from '@components/Chats/ChatsMenu';
import ChatUsersMenu from '@components/Chats/ChatUsersMenu';
import GraphqlLoading from '@components/GraphqlLoading';
import ChatWindow from '@components/Chats/ChatWindow/ChatWindow';
import { BehaviorSubject } from 'rxjs';
import { handleRefetch } from '@shared/graphqlUtils';
import {
  HasChatsQueryComponent,
  MeQueryMe,
  HasChatsQueryDocument,
  HasChatsQueryQuery,
  HasChatsQueryVariables
} from '@generated/graphql';
import { FlexWrapperFullHeightMinusHeaderStyles } from '@shared/styles';
import EmptyPage from '@components/UI/EmptyPage';
import PageException from '@components/UI/PageException';
import { NextFunctionComponent } from 'next';
import { NextContextWithApollo } from './_app';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import ErrorSection from '@components/UI/ErrorSection';

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

interface InjectedProps {
  me: MeQueryMe;
  error: boolean;
  isAuthorizedToView: boolean;
}

type Props = InjectedProps & WithRouterProps;
type RouterProps = {
  chat?: string;
};

const UserChats: NextFunctionComponent<
  Props,
  InjectedProps,
  NextContextWithApollo<RouterProps>
> = ({ me, router, error, isAuthorizedToView }) => {
  const isFirstRunRef = React.useRef<boolean>(false);

  const routeChangeStreamRef = React.useRef<BehaviorSubject<string | null>>(
    new BehaviorSubject(getCurrentChatFromUrl())
  );

  const [state, setState] = React.useState<ChatContextProps>({
    currentlySelectedChatId: getCurrentChatFromUrl(),
    selectedChatIdStream$: routeChangeStreamRef.current,
    currentlyLoggedUserData: me as WithApolloAuthInjectedProps['me']
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

  if (error) {
    <ErrorSection />;
  }

  if (!isAuthorizedToView) {
    return (
      <PageException desc="That chat does not exist or you are not a member of it" />
    );
  }

  return (
    <HasChatsQueryComponent notifyOnNetworkStatusChange={true}>
      {({ data, loading, error, refetch }) => {
        if (error)
          return (
            <PageException
              desc="Could not fetch the data"
              actions={
                <Button
                  loading={loading}
                  onClick={async () => await handleRefetch(refetch)}
                >
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

        if (!data.hasChats) {
          return (
            <EmptyPage
              message="You currently do not have any chats"
              action={
                <Button
                  icon="plus"
                  type="primary"
                  onClick={() =>
                    router && router.push('/party-create', '/party/create')
                  }
                >
                  Create new party
                </Button>
              }
            />
          );
        }

        return (
          <Layout css={[FlexWrapperFullHeightMinusHeaderStyles]}>
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

UserChats.getInitialProps = async function(context): Promise<InjectedProps> {
  const userData = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });
  if (!userData || !userData.me) {
    return {
      me: null,
      isAuthorizedToView: false,
      error: false
    };
  }

  if (context.query.chat == null) {
    return {
      me: userData.me,
      isAuthorizedToView: true,
      error: false
    };
  }

  try {
    const {
      data: { hasChats }
    } = await context.apolloClient.query<
      HasChatsQueryQuery,
      HasChatsQueryVariables
    >({
      query: HasChatsQueryDocument,
      variables: { where: { id: context.query.chat } }
    });
    return {
      me: userData.me,
      isAuthorizedToView: hasChats,
      error: false
    };
  } catch (e) {
    return {
      me: userData.me,
      isAuthorizedToView: false,
      error: true
    };
  }
};

export default withRouter(UserChats);
