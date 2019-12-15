import {
  PushNotificationScope,
  useUser_UpdatePushNotificationsSettings
} from '@generated/graphql';
import useFirebaseMessaging from '@hooks/useFirebaseMessaging';
import { Alert, message, Spin } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

import UserProfilePushNotificationsForm from './UserProfilePushNotificationsForm';

export const UPDATE_USER_PUSH_NOTIFICATIONS_SETTINGS_MUTATION = gql`
  mutation User_UpdatePushNotificationsSettings(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;

const pushNotificationsSettingsFragment = gql`
  fragment PUSH_NOTIFICATIONS_SETTINGS_FRAGMENT on User {
    pushNotificationsToken
    pushNotificationsScopes
  }
`;

interface Props {
  notificationsToken: string | undefined | null;
  scopes: PushNotificationScope[];
  userId: string;
}

export default function UserProfilePushNotifications({
  notificationsToken,
  scopes,
  userId
}: Props) {
  const [rejectedPermissions, setRejectedPermissions] = React.useState(false);

  const [
    updatePushNotificationSettings,
    { loading }
  ] = useUser_UpdatePushNotificationsSettings({
    onCompleted: () => message.success('Setting updated'),
    onError: () => message.error('Something went wrong, try again!')
  });

  const {
    loading: loadingFirebase,
    firebaseMessaging
  } = useFirebaseMessaging();

  async function askForPermissions() {
    try {
      return await firebaseMessaging.getToken();
    } catch (e) {
      setRejectedPermissions(true);
    }
  }

  async function handleSubmit(newScopes: PushNotificationScope[]) {
    let currentNotificationToken = notificationsToken;

    currentNotificationToken = await askForPermissions();

    updatePushNotificationSettings({
      variables: {
        where: {
          id: userId
        },
        data: {
          pushNotificationsToken: currentNotificationToken,
          pushNotificationsScopes: { set: newScopes }
        }
      },
      update: proxy =>
        proxy.writeFragment({
          fragment: pushNotificationsSettingsFragment,
          id: `User:${userId}`,
          data: {
            __typename: 'User',
            pushNotificationsToken: currentNotificationToken,
            pushNotificationsScopes: newScopes
          }
        })
    });
  }

  if (loadingFirebase) return <Spin />;

  return (
    <React.Fragment>
      <UserProfilePushNotificationsForm
        loading={loading}
        initialScopes={scopes}
        onSubmit={handleSubmit}
        key={`${scopes.join('_')}`}
      />
      {rejectedPermissions && (
        <Alert
          style={{ marginTop: 14 }}
          message="To receive notifications you have to grant us permissions!"
          showIcon={true}
          type="error"
        />
      )}
    </React.Fragment>
  );
}
