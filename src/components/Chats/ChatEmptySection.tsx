import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

const ChatEmptySectionWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 66px);
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
  padding: 12px;
  img {
    max-width: 100%;
    max-height: 400px;
    margin-bottom: 12px;
  }
`;

interface Props {
  image?: string;
}

const ChatEmptySection: React.FC<Props> = ({ image }) => {
  return (
    <ChatEmptySectionWrapper>
      {image && <img src={image} />}
      <Typography.Title level={4}>No chat selected</Typography.Title>
      <Typography.Text type="secondary">Pick a chat</Typography.Text>
    </ChatEmptySectionWrapper>
  );
};

export default ChatEmptySection;
