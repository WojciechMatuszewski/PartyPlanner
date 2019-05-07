import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { UserStatus } from '@generated/graphql';

const UserStatusWrapper = styled.div`
  height: 100%;
  ${FlexBoxFullCenteredStyles}
  margin-left:auto;
  padding-right: 12px;
`;

const StatusDot = styled.div<Props>`
  width: 7px;
  height: 7px;
  background: ${props =>
    props.status == UserStatus.Offline ? '#8c8c8c' : 'rgb(66, 183, 42)'};
  opacity: ${props => (props.status == UserStatus.Offline ? '0.4' : 1)};
  border-radius: 50%;
`;

interface Props {
  status: UserStatus;
}

const ChatUserStatus: React.FC<Props> = ({ status }) => {
  return (
    <UserStatusWrapper>
      <StatusDot status={status} />
    </UserStatusWrapper>
  );
};

export default ChatUserStatus;
