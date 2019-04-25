import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Typography } from 'antd';

interface Props {
  children?: React.ReactNode;
}

const ErrorWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
`;

export const ChatError: React.FC<Props> = ({ children }) => {
  return (
    <ErrorWrapper>
      <React.Fragment>
        <Typography.Paragraph type="danger">
          Some error occurred
        </Typography.Paragraph>
        {children}
      </React.Fragment>
    </ErrorWrapper>
  );
};
