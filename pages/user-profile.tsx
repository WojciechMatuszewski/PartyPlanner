import React from 'react';
import { MeQueryMe } from '@generated/graphql';
import styled from '@emotion/styled';
import UserProfileBanner from '@components/User/UserProfile/UserProfileBanner';
import UserProfileTile from '@components/User/UserProfile/UserProfileTile';

const UserProfileWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-top: 40px;
  position: relative;
  display: flex;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const UserProfile: React.FC<{ me: MeQueryMe }> = () => {
  return (
    <UserProfileWrapper>
      <div style={{ width: '100%' }}>
        <UserProfileBanner />
        <UserProfileTile
          anchorLink="#Your-Info"
          title="Information's about you"
        />
        <UserProfileTile anchorLink="#Your-Friends" title="Your friends" />
      </div>
    </UserProfileWrapper>
  );
};

// export default withApolloAuth({ userHasToBe: 'authenticated' })(Dashboard);
export default UserProfile;
