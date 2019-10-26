import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Button, Typography } from 'antd';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
}

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
`;

function GraphqlInlineError({ children, style, title }: Props) {
  return (
    <ErrorWrapper style={style} data-testid="graphqlInlineError">
      <React.Fragment>
        <Typography.Paragraph type="danger">
          {title || 'Some error occurred'}
        </Typography.Paragraph>
        {children}
      </React.Fragment>
    </ErrorWrapper>
  );
}

GraphqlInlineError.WithButton = ({
  onRetry,
  loading
}: {
  onRetry: VoidFunction;
  loading: boolean;
}) => (
  <GraphqlInlineError>
    <Button type="danger" onClick={onRetry} loading={loading}>
      Retry
    </Button>
  </GraphqlInlineError>
);

export default GraphqlInlineError;
