import React from 'react';
import styled from '@emotion/styled';
import { PaginateUsersQueryNode, UserStatus } from '@generated/graphql';
import UserAvatar from '@components/UserDefaultAvatar';
import { Typography } from 'antd';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import ChatUserStatus from './ChatUserStatus';
import { useApolloClient } from 'react-apollo-hooks';
import useInterval from '@hooks/useInterval';
import { gql } from 'apollo-boost';
import { USER_PRESENCE_CONFIG } from '@graphql/resolvers';

const ChatUserWrapper = styled.li`
  padding: 4px 0;
  margin-bottom: 0;
  ${FlexBoxVerticallyCenteredStyles}
  @media screen and (min-width:992px) {
    &:hover {
      background: #f5f5f5;
      cursor: pointer;
    }
  }
  img {
    width: 32px;
    height: 32px;
  }
`;

const ChatUserAvatarNameWrapper = styled.div`
  padding-left: 12px;
  max-width: 165px;
  ${FlexBoxVerticallyCenteredStyles}
  .ant-typography {
    padding-left: 12px;
    max-width: 145px;
  }
`;

interface Props {
  chatUser: PaginateUsersQueryNode;
}

const ChatUser: React.FC<Props> = ({ chatUser }) => {
  const apolloClient = useApolloClient();

  const [runnerInterval, setRunnerInterval] = React.useState<number | null>(
    null
  );

  useInterval(handleRunnerUpdate, runnerInterval);

  React.useEffect(() => {
    setRunnerInterval(USER_PRESENCE_CONFIG.dateDiffLimit);
  }, [chatUser.lastOnline]);

  React.useEffect(() => {
    if (chatUser.status == UserStatus.Offline) return;
    const diffBetweenLastOnlineAndNow = getDiffBetweenLastOnlineAndNow();
    const howMuchLongerShouldIWait =
      diffBetweenLastOnlineAndNow > USER_PRESENCE_CONFIG.dateDiffLimit
        ? 0
        : USER_PRESENCE_CONFIG.dateDiffLimit +
          USER_PRESENCE_CONFIG.localOfflineTimeoutOffset -
          diffBetweenLastOnlineAndNow;
    setRunnerInterval(howMuchLongerShouldIWait);
  }, []);

  return (
    <ChatUserWrapper>
      <ChatUserAvatarNameWrapper>
        <UserAvatar userData={chatUser} />
        <Typography.Text ellipsis={true}>
          {chatUser.firstName} {chatUser.lastName}
        </Typography.Text>
      </ChatUserAvatarNameWrapper>
      <ChatUserStatus status={chatUser.status} />
    </ChatUserWrapper>
  );

  function getDiffBetweenLastOnlineAndNow() {
    return new Date().getTime() - new Date(chatUser.lastOnline).getTime();
  }

  function handleRunnerUpdate() {
    apolloClient.writeFragment({
      id: `User:${chatUser.id}`,
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

export default ChatUser;
