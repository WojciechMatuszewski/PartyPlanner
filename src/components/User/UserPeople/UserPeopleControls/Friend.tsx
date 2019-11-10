import React from 'react';
import gql from 'graphql-tag';

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

interface Props {}
export default function Friend() {
  return <div></div>;
}
