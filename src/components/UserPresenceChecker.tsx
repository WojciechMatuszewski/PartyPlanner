import React from 'react';
import { useApolloClient } from 'react-apollo-hooks';
import useInterval from '@hooks/useInterval';
import { USER_PRESENCE_CONFIG } from '@graphql/resolvers';
import { UserStatus } from '@generated/graphql';
import gql from 'graphql-tag';

interface Props {
  user: {
    lastOnline: string;
    status: UserStatus;
    id: string;
  };
}

const UserPresenceChecker: React.FC<Props> = ({ user }) => {
  const apolloClient = useApolloClient();
  const [runnerInterval, setRunnerInterval] = React.useState<number | null>(
    null
  );

  useInterval(handleRunnerUpdate, runnerInterval);
  React.useEffect(() => {
    setRunnerInterval(USER_PRESENCE_CONFIG.dateDiffLimit);
  }, [user.lastOnline]);

  React.useEffect(() => {
    if (user.status == UserStatus.Offline) return;
    const diffBetweenLastOnlineAndNow = getDiffBetweenLastOnlineAndNow();
    const howMuchLongerShouldIWait =
      diffBetweenLastOnlineAndNow > USER_PRESENCE_CONFIG.dateDiffLimit
        ? 0
        : USER_PRESENCE_CONFIG.dateDiffLimit +
          USER_PRESENCE_CONFIG.localOfflineTimeoutOffset -
          diffBetweenLastOnlineAndNow;
    setRunnerInterval(howMuchLongerShouldIWait);
  }, []);
  return null;

  function getDiffBetweenLastOnlineAndNow() {
    return new Date().getTime() - new Date(user.lastOnline).getTime();
  }

  function handleRunnerUpdate() {
    apolloClient.writeFragment({
      id: `User:${user.id}`,
      fragment: gql`
        fragment user on User {
          status
        }
      `,
      data: {
        __typename: 'User',
        status: 'OFFLINE'
      }
    });
    setRunnerInterval(null);
  }
};

export default UserPresenceChecker;
