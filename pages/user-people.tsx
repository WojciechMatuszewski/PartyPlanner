import {
  withApolloAuth,
  WithApolloAuthInjectedProps
} from '@apolloSetup/withApolloAuth';
import GraphqlLoading from '@components/GraphqlLoading';
import ErrorSection from '@components/UI/ErrorSection';
import {
  useUser_Friends,
  User_FriendsQueryVariables
} from '@generated/graphql';
import { handleRefetch, hasGraphqlData } from '@shared/graphqlUtils';
import { Button } from 'antd';
import gql from 'graphql-tag';
import React from 'react';
import styled from '@emotion/styled';
import { FlexWrapperFullHeightMinusHeaderStyles } from '@shared/styles';
import UserPeople from '@components/User/UserPeople/UserPeople';
import UserPeopleProvider from '@components/User/UserPeople/UserPeopleProvider';
import UserProvider from '@components/User/UserProvider';
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
      <UserProvider userId={me.id}>
        <UserPeopleProvider {...data.userFriends}>
          <UserPeople userId={me.id} />
        </UserPeopleProvider>
      </UserProvider>
    </PageContentWrapper>
  );
}

export default withApolloAuth({ userHasToBe: 'authenticated' })(UserPeoplePage);
