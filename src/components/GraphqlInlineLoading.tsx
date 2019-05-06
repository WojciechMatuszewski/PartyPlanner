import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Spin } from 'antd';

const LoaderWrapper = styled.div`
  width: 100%;
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
  flex: 1;
`;

const GraphqlInlineLoading: React.FC<{
  children?: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ style, children }) => {
  return (
    <LoaderWrapper style={style}>
      <Spin />
      {children}
    </LoaderWrapper>
  );
};

export default GraphqlInlineLoading;
