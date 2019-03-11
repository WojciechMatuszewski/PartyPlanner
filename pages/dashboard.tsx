import React from 'react';
import { MeQueryMe } from '@generated/graphql';
import styled from '@emotion/styled';
import DashboardBanner from '@components/Dashboard/DashboardBanner';

import DashboardTile from '@components/Dashboard/DashboardTile';

const DashboardWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-top: 40px;
  position: relative;
  display: flex;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const Dashboard: React.FC<{ me: MeQueryMe }> = () => {
  return (
    <DashboardWrapper>
      <div style={{ width: '100%' }}>
        <DashboardBanner />
        <DashboardTile
          anchorLink="#Your-Info"
          title="Information's about you"
        />
        <DashboardTile anchorLink="#Your-Friends" title="Your friends" />
      </div>
    </DashboardWrapper>
  );
};

// export default withApolloAuth({ userHasToBe: 'authenticated' })(Dashboard);
export default Dashboard;
