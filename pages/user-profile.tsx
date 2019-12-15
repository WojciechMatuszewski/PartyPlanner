import React from 'react';
import styled from '@emotion/styled';
import UserProfileBanner from '@components/User/UserProfile/UserProfileBanner';
import { FlexWrapperFullHeightMinusHeaderStyles } from '@shared/styles';
import {
  withApolloAuth,
  WithApolloAuthInjectedProps
} from '@apolloSetup/withApolloAuth';
import UserProfileTile from '@components/User/UserProfile/UserProfileTile';
import UserInfo from '@components/User/UserProfile/UserInfo/UserInfo';
import { useMeQuery } from '@generated/graphql';
import UserProfilePrivacy from '@components/User/UserProfile/UserPrivacy/UserProfilePrivacy';
import FirebaseService from '@services/FirebaseService';
import { Button } from 'antd';

const UserProfileWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  ${FlexWrapperFullHeightMinusHeaderStyles}
  max-width:1280px;
  padding-top: 24px;
  width: 100%;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const UserProfilePage = ({ me }: WithApolloAuthInjectedProps) => {
  const { data } = useMeQuery({ fetchPolicy: 'cache-only' });

  const meData = data && data.me ? data.me : me;

  const { firstName, lastName, avatar, id, isPrivate } = meData;

  return (
    <UserProfileWrapper>
      <UserProfileBanner
        firstName={firstName}
        lastName={lastName}
        avatar={avatar}
      />
      <UserProfileTile title="Information about you">
        <UserInfo
          key={`${firstName}:${lastName}`}
          firstName={firstName}
          lastName={lastName}
          userId={id}
        />
      </UserProfileTile>
      <UserProfileTile title="Privacy">
        <UserProfilePrivacy
          key={`${isPrivate}`}
          userId={id}
          isPrivate={isPrivate}
        />
      </UserProfileTile>
      <UserProfileTile title="Push Notifications">
        <Button
          onClick={() => FirebaseService.requestNotificationsPermissions()}
        >
          Request
        </Button>
      </UserProfileTile>
    </UserProfileWrapper>
  );
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(
  UserProfilePage
);
