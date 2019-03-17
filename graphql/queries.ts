import { gql } from 'apollo-boost';

export const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      email
      firstName
      lastName
    }
  }
`;

export const FRIENDS_OF_USER_QUERY = gql`
  query FriendsOfUserQuery(
    $where: UserWhereInput
    $orderBy: UserOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    getUsers(
      where: $where
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
      orderBy: $orderBy
    ) {
      firstName
      lastName
    }
  }
`;
