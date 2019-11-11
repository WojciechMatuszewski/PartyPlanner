import React from 'react';
import gql from 'graphql-tag';
import { Tag, Button } from 'antd';

export const UNFRIEND_USER_MUTATION = gql`
  mutation User_UnfriendUser(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;

export default function Friend() {
  return (
    <React.Fragment>
      <Tag color="green">Friends</Tag>
      <Button type="danger">Unfriend</Button>
    </React.Fragment>
  );
}
