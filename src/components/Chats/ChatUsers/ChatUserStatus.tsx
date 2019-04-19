import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { UserStatus } from '@generated/graphql';

const UserStatusWrapper = styled.div`
  height: 100%;
  ${FlexBoxFullCenteredStyles}
  margin-left:auto;
  padding-right: 8px;
`;

const StatusDot = styled.div<Props>`
  width: 6px;
  height: 6px;
  background: ${props =>
    props.status === 'OFFLINE' ? '#8c8c8c' : 'rgb(66, 183, 42)'};
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
