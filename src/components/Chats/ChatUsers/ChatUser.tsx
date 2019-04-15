import React from 'react';
import styled from '@emotion/styled';
import { PaginateUsersQueryNode } from '@generated/graphql';
import UserAvatar from '@components/UserDefaultAvatar';
import { Typography } from 'antd';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import ChatUserStatus from './ChatUserStatus';

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
  return (
    <ChatUserWrapper>
      <ChatUserAvatarNameWrapper>
        <UserAvatar userData={chatUser} />
        <Typography.Text ellipsis={true}>
          {chatUser.firstName} {chatUser.lastName}
        </Typography.Text>
      </ChatUserAvatarNameWrapper>
      <ChatUserStatus />
    </ChatUserWrapper>
  );
};

export default ChatUser;
