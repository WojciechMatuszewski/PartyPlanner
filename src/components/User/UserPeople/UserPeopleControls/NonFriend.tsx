import React from 'react';
import gql from 'graphql-tag';
import { useUser_CreateFriendInvitation } from '@generated/graphql';
import { Button, Icon, message, Modal } from 'antd';
import { updateUserFriends } from './utils';

export const CREATE_FRIEND_INVITATION_MUTATION = gql`
  mutation User_CreateFriendInvitation($data: FriendInvitationCreateInput!) {
    createFriendInvitation(data: $data) {
      id
    }
  }
`;

interface Props {
  invitedById: string;
  invitingUserId: string;
}

export default function NonFriend({ invitedById, invitingUserId }: Props) {
  const [createFriendInvitation, { loading }] = useUser_CreateFriendInvitation({
    variables: {
      data: {
        user: { connect: { id: invitingUserId } },
        invitedUserId: invitingUserId,
        invitedBy: { connect: { id: invitedById } }
      }
    },
    onError: () =>
      Modal.confirm({
        title: 'Could not send friend invitation',
        okText: 'Try again',
        cancelText: 'Cancel',
        onOk: () => createFriendInvitation()
      }),
    onCompleted: () => message.success('Friend invitation send!'),
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
