import React from 'react';
import gql from 'graphql-tag';
import { useUser_UserInfoMutation } from '@generated/graphql';
import UserInfoForm from './UserInfoForm';
import { message } from 'antd';

interface Props {
  firstName: string;
  lastName: string;
}

export const USER_INFO_MUTATION = gql`
  mutation User_UserInfo(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;

const informationFragment = gql`
  fragment INFORMATION_FRAGMENT on User {
    firstName
    lastName
  }
`;

interface Props {
  firstName: string;
  lastName: string;
  userId: string;
}
export default function UserInfo({ firstName, lastName, userId }: Props) {
  const [updateUserInfo, { loading }] = useUser_UserInfoMutation({
    onCompleted: () => message.success('Information updated'),
    onError: () => message.error('Something went wrong, try again!')
  });

  return (
    <UserInfoForm
      firstName={firstName}
      lastName={lastName}
      loading={loading}
      onSubmit={values => {
        updateUserInfo({
          variables: { where: { id: userId }, data: values },
          update: proxy => {
            proxy.writeFragment({
              fragment: informationFragment,
              id: `User:${userId}`,
              data: {
                __typename: 'User',
                ...values
              }
            });
          }
        });
      }}
    />
  );
}
