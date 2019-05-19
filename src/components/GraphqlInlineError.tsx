import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Typography } from 'antd';

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
`;

const GraphqlInlineError: React.FC<Props> = ({ children, style }) => {
  return (
    <ErrorWrapper style={style} data-testid="graphqlInlineError">
      <React.Fragment>
        <Typography.Paragraph type="danger">
          Some error occurred
        </Typography.Paragraph>
        {children}
      </React.Fragment>
    </ErrorWrapper>
  );
};

export default GraphqlInlineError;
