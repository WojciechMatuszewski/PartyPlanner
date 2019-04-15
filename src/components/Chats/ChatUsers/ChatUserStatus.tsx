import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

const UserStatusWrapper = styled.div`
  height: 100%;
  ${FlexBoxFullCenteredStyles}
  margin-left:auto;
  padding-right: 8px;
`;

const OnlineDot = styled.div`
  width: 6px;
  height: 6px;
  background: rgb(66, 183, 42);
  border-radius: 50%;
`;

const ChatUserStatus: React.FC = () => {
  return (
    <UserStatusWrapper>
      <OnlineDot />
    </UserStatusWrapper>
  );
};

export default ChatUserStatus;
