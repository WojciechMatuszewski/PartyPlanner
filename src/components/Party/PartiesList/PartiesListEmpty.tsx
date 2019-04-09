import React from 'react';
import { Typography, Button } from 'antd';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { withRouter, WithRouterProps } from 'next/router';

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxFullCenteredStyles};
`;

const EmptyInnerWrapper = styled.div`
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

const PartiesListEmpty: React.FC<WithRouterProps> = ({ router }) => {
  return (
    <EmptyWrapper>
      <EmptyInnerWrapper>
        <img src="../static/no-data.svg" />
        <Typography.Paragraph style={{ fontSize: 18 }} type="secondary">
          You currently do not have any parties
        </Typography.Paragraph>
        <Button
          type="primary"
          onClick={() => router && router.push('/create-party')}
        >
          Create a party
        </Button>
      </EmptyInnerWrapper>
    </EmptyWrapper>
  );
};

export default withRouter(PartiesListEmpty);
