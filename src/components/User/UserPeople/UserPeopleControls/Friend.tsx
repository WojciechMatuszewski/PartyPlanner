import React from 'react';
import gql from 'graphql-tag';
import { Tag, Button, Modal, message } from 'antd';
import { useUser_UnfriendUser } from '@generated/graphql';
import { updateUserFriends } from './utils';

export const UNFRIEND_USER_MUTATION = gql`
  mutation User_UnfriendUser($personToUnfriendId: ID!) {
    unfriendPerson(personToUnfriendId: $personToUnfriendId)
  }
`;

interface Props {
  personToUnfriendId: string;
}
export default function Friend({ personToUnfriendId }: Props) {
  const [unfriendPerson, { loading }] = useUser_UnfriendUser({
    variables: { personToUnfriendId },
    onError: () =>
      Modal.confirm({
        title: 'Oops! Something went wrong',
        okText: 'Try again',
        cancelText: 'Cancel',
        onOk: () => unfriendPerson()
      }),
    onCompleted: () => message.info('Operation successful'),
    update: proxy => {
      updateUserFriends(proxy, userFriends => ({
        ...userFriends,
        current: userFriends.current.filter(id => id != personToUnfriendId)
      }));
    }
  });

  return (
    <React.Fragment>
      <Tag color="green">Friends</Tag>
      <Button type="danger" loading={loading} onClick={() => unfriendPerson()}>
        Unfriend
      </Button>
    </React.Fragment>
  );
}
