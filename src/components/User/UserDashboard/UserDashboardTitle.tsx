import React from 'react';

import posed, { PoseGroup } from 'react-pose';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import { MeQueryComponent } from '@generated/graphql';

const PosedTileWrapper = styled(
  posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })
)`
  height: max-content;
  display: flex;
  margin: 0 auto;
  margin-bottom: 24px;
  h1,
  h3 {
    margin-top: 0 !important;
    margin-bottom: 0;
    color: #1890ff;
  }

  span {
    font-size: 20px;
    align-self: flex-end;

    font-weight: bold;
    margin-right: 8px;
  }

  @media screen and (max-width: 780px) {
    padding: 24px 12px;
    margin: 0;
  }
`;

const UserDashboardTitle: React.FC = () => {
  return (
    <MeQueryComponent fetchPolicy="cache-only">
      {({ data }) => (
        <PoseGroup>
          <PosedTileWrapper key={1} initialPose={'exit'}>
            <Typography.Text>Welcome</Typography.Text>
            <Typography.Title>
              {data && data.me && data.me.firstName}
            </Typography.Title>
          </PosedTileWrapper>
        </PoseGroup>
      )}
    </MeQueryComponent>
  );
};

export default UserDashboardTitle;
