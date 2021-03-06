import {
  PushNotificationScope,
  useUser_CreateFriendInvitation
} from '@generated/graphql';
import sendPushNotification from '@services/PushNotificationService';
import { Button, Icon, message, Modal } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

import { updateUserFriends } from './utils';
import { useUser } from '@components/User/UserProvider';

export const CREATE_FRIEND_INVITATION_MUTATION = gql`
  mutation User_CreateFriendInvitation($data: FriendInvitationCreateInput!) {
    createFriendInvitation(data: $data) {
      id
    }
  }
`;

function sendFriendInvitePushNotification(id: string, body: string) {
  sendPushNotification([id], [PushNotificationScope.FriendInvites], {
    title: 'New friend invitation!',
    body
  });
}

interface Props {
  invitingUserId: string;
}

export default function NonFriend({ invitingUserId }: Props) {
  const { userId, firstName, lastName } = useUser();

  const [createFriendInvitation, { loading }] = useUser_CreateFriendInvitation({
    variables: {
      data: {
        user: { connect: { id: invitingUserId } },
        invitedUserId: invitingUserId,
        invitedBy: { connect: { id: userId } }
      }
    },
    onError: () =>
      Modal.confirm({
        title: 'Could not send friend invitation',
        okText: 'Try again',
        cancelText: 'Cancel',
        onOk: () => createFriendInvitation()
      }),
    onCompleted: () => {
      message.success('Friend invitation send!');
      sendFriendInvitePushNotification(
        invitingUserId,
        `${firstName} ${lastName} invited you to be his friend!`
      );
    },
    update: (proxy, { data }) => {
      if (!data || data.createFriendInvitation == undefined) return;
      const {
        createFriendInvitation: { id }
      } = data;
      updateUserFriends(proxy, userFriends => ({
        ...userFriends,
        pending: [
          ...userFriends.pending,
          { id, invitedUserId: invitingUserId, __typename: 'UserPendingFriend' }
        ]
      }));
    }
  });

  return (
    <Button
      type="primary"
      onClick={() => createFriendInvitation()}
      loading={loading}
    >
      <Icon type="user-add" />
      Add Friend
    </Button>
  );
}
