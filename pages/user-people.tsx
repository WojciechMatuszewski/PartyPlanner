import {
  withApolloAuth,
  WithApolloAuthInjectedProps
} from '@apolloSetup/withApolloAuth';
import GraphqlLoading from '@components/GraphqlLoading';
import ErrorSection from '@components/UI/ErrorSection';
import UserPeople from '@components/User/UserPeople/UserPeople';
import UserPeopleProvider from '@components/User/UserPeople/UserPeopleProvider';
import UserProvider from '@components/User/UserProvider';
import styled from '@emotion/styled';
import {
  MutationType,
  User_FriendsQueryVariables,
  useUser_FriendInvitationsSubscription,
  useUser_Friends
} from '@generated/graphql';
import { handleRefetch, hasGraphqlData } from '@shared/graphqlUtils';
import { FlexWrapperFullHeightMinusHeaderStyles } from '@shared/styles';
import { Button } from 'antd';
import gql from 'graphql-tag';
import React from 'react';
import { BehaviorSubject } from 'rxjs';

const queryVariablesSubject = new BehaviorSubject<
  User_FriendsQueryVariables | undefined
>(undefined);

export function getUserFriendsQueryVariables() {
  return queryVariablesSubject.getValue() as User_FriendsQueryVariables;
}

export const USER_FRIENDS_QUERY = gql`
  query User_Friends($userId: ID!) {
    userFriends(userId: $userId) {
      current
      pending {
        id
        invitedUserId
      }
    }
  }
`;

const PageContentWrapper = styled.div`
  flex: 1;
  ${FlexWrapperFullHeightMinusHeaderStyles};
  flex-direction: column;
  background: white;
`;

function UserPeoplePage({ me }: WithApolloAuthInjectedProps) {
  const { data, loading, error, refetch, variables } = useUser_Friends({
    variables: { userId: me.id }
  });

  useUser_FriendInvitationsSubscription({
    variables: {
      where: {
        OR: [
          {
            node: {
              invitedBy: {
                id: me.id
              }
            }
          },
          {
            node: {
              invitedUserId: me.id
            }
          }
        ]
      }
    },
    onSubscriptionData: ({ subscriptionData }) => {
      if (!hasGraphqlData(subscriptionData.data, ['friendInvitation']))
        return null;

      const {
        data: { friendInvitation }
      } = subscriptionData;

      switch (friendInvitation.mutation) {
        case MutationType.Deleted:
          return refetch();
        default:
          return;
      }
    }
  });

  React.useEffect(() => {
    queryVariablesSubject.next(variables);
  }, [variables]);

  if (loading || !hasGraphqlData(data, ['userFriends']))
    return <GraphqlLoading isLoadingInitially={true} loading={true} />;

  if (error)
    return (
      <ErrorSection style={{ alignSelf: 'center', margin: '0 auto' }}>
        <Button onClick={() => handleRefetch(refetch)} loading={loading}>
          Try again
        </Button>
      </ErrorSection>
    );

  return (
    <PageContentWrapper>
      <UserProvider
        userId={me.id}
        firstName={me.firstName}
        lastName={me.lastName}
      >
        <UserPeopleProvider {...data.userFriends}>
          <UserPeople userId={me.id} />
        </UserPeopleProvider>
      </UserProvider>
    </PageContentWrapper>
  );
}

export default withApolloAuth({ userHasToBe: 'authenticated' })(UserPeoplePage);
