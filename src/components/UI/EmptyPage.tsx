import React from 'react';
import { Typography } from 'antd';
import styled from '@emotion/styled';
import { FlexWrapperFullHeightMinusHeaderStyles } from '@shared/styles';
import { SerializedStyles } from '@emotion/css';
import { UISectionWrapper } from './styles';

const NoDataInnerWrapper = styled.div`
  padding: 24px;
  margin: auto;
  img {
    max-width: 600px;
    width: 100%;
  }
  @media screen and (max-width: 680px) {
    padding: 12px;
  }
  h4 {
    margin-bottom: 12px;
  }
`;

interface Props {
  message: string;
  action: React.ReactNode;
  style?: React.CSSProperties;
  emotionCSS?: SerializedStyles;
}

const EmptyPage: React.FC<Props> = ({ action, message, style, emotionCSS }) => {
  return (
    <UISectionWrapper
      style={style}
      css={[emotionCSS, FlexWrapperFullHeightMinusHeaderStyles]}
    >
      <NoDataInnerWrapper>
        <img src="../static/no-data.svg" />
        <Typography.Title level={4}>{message}</Typography.Title>
        {action}
      </NoDataInnerWrapper>
    </UISectionWrapper>
  );
};

export default EmptyPage;
