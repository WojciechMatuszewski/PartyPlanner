import {
  withApolloAuth,
  WithApolloAuthInjectedProps
} from '@apolloSetup/withApolloAuth';
import UserInfo from '@components/User/UserProfile/UserInfo/UserInfo';
import UserProfilePrivacy from '@components/User/UserProfile/UserPrivacy/UserProfilePrivacy';
import UserProfileBanner from '@components/User/UserProfile/UserProfileBanner';
import UserProfileTile from '@components/User/UserProfile/UserProfileTile';
import UserProfilePushNotifications from '@components/User/UserProfile/UserPushNotifications/UserProfilePushNotifications';
import styled from '@emotion/styled';
import { useMeQuery } from '@generated/graphql';
import { FlexWrapperFullHeightMinusHeaderStyles } from '@shared/styles';
import React from 'react';

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

  const {
    firstName,
    lastName,
    avatar,
    id,
    isPrivate,
    pushNotificationsToken,
    pushNotificationsScopes
  } = meData;

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
        <UserProfilePushNotifications
          userId={id}
          notificationsToken={pushNotificationsToken}
          scopes={pushNotificationsScopes}
        />
      </UserProfileTile>
    </UserProfileWrapper>
  );
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(
  UserProfilePage
);
