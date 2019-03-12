import React from 'react';
import { MeQueryMe } from '@generated/graphql';
import styled from '@emotion/styled';
import DashboardBanner from '@components/Dashboard/DashboardBanner';
import DashboardAnchor from '@components/Dashboard/DashboardAnchor';
import DashboardTile from '@components/Dashboard/DashboardTile';
import useMedia from '@hooks/useMedia';

const DashboardWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-top: 40px;
  position: relative;
  display: flex;
  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 15px;
  }

  @media screen and(max-width:680px) {
    padding: 10px;
  }
`;

const Dashboard: React.FC<{ me: MeQueryMe }> = () => {
  const shouldDisplayAnchor = useMedia('(min-width:1300px)');
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
      {shouldDisplayAnchor && <DashboardAnchor />}
    </DashboardWrapper>
  );
};

// export default withApolloAuth({ userHasToBe: 'authenticated' })(Dashboard);
export default Dashboard;
