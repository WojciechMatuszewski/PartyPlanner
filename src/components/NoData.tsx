import React from 'react';
import { Typography } from 'antd';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

const NoDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxFullCenteredStyles};
`;

const NoDataInnerWrapper = styled.div`
  padding: 24px;
  img {
    max-width: 100%;
    max-height: 400px;
  }
  text-align: center;

  @media screen and (max-width: 680px) {
    padding: 12px;
  }
`;

interface Props {
  message: string;
  action: React.ReactNode;
  style?: React.CSSProperties;
}

const NoData: React.FC<Props> = ({ action, message, style }) => {
  return (
    <NoDataWrapper style={style}>
      <NoDataInnerWrapper>
        <img src="../static/no-data.svg" />
        <Typography.Paragraph style={{ fontSize: 18 }} type="secondary">
          {message}
        </Typography.Paragraph>
        {action}
      </NoDataInnerWrapper>
    </NoDataWrapper>
  );
};

export default NoData;
