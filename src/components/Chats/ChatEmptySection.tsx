import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

const ChatEmptySectionWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 66px);
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
`;

const ChatEmptySection: React.FC = () => {
  return (
    <ChatEmptySectionWrapper>
      <Typography.Title level={4}>No chat selected</Typography.Title>
      <Typography.Text type="secondary">Pick a chat</Typography.Text>
    </ChatEmptySectionWrapper>
  );
};

export default ChatEmptySection;
