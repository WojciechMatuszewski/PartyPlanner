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
  image: string;
  title: string;
  description: string;
}

const ChatEmptySection = (props: Props) => {
  return (
    <ChatEmptySectionWrapper>
      {props.image && props.image.length > 0 && <img src={props.image} />}
      <Typography.Title level={4}>{props.title}</Typography.Title>
      <Typography.Text type="secondary">{props.description}</Typography.Text>
    </ChatEmptySectionWrapper>
  );
};

ChatEmptySection.defaultProps = {
  title: 'No chat selected',
  description: 'Pick a chat :)',
  image: ''
};

export default ChatEmptySection;
