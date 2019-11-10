import React from 'react';
import gql from 'graphql-tag';
import { useUser_DeleteFriendInvitation } from '@generated/graphql';
import { Tag, Button, Icon, Modal, message } from 'antd';
import { updateUserFriends } from './utils';

export const DELETE_FRIEND_INVITATION_MUTATION = gql`
  mutation User_DeleteFriendInvitation(
    $where: FriendInvitationWhereUniqueInput!
  ) {
    deleteFriendInvitation(where: $where) {
      id
    }
  }
`;
interface Props {
  pendingInvitationId: string;
}
export default function Pending({ pendingInvitationId }: Props) {
  const [deleteFriendInvitation, { loading }] = useUser_DeleteFriendInvitation({
    variables: {
      where: { id: pendingInvitationId }
    },
    onError: () =>
      Modal.confirm({
        title: 'Could not send friend invitation',
        okText: 'Try again',
        cancelText: 'Cancel',
        onOk: () => deleteFriendInvitation()
      }),
    onCompleted: () => message.info('Friend invitation deleted!'),
    update: proxy =>
      updateUserFriends(proxy, userFriends => {
        const filtered = userFriends.pending.filter(
          ({ id }) => id != pendingInvitationId
        );
        return {
          ...userFriends,
          pending: filtered
        };
      })
  });

  return (
    <React.Fragment>
      <Tag color="blue">Invitation send</Tag>
      <Button loading={loading} onClick={() => deleteFriendInvitation()}>
        <Icon type="delete" /> Cancel invitation
      </Button>
    </React.Fragment>
  );
}
