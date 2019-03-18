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

export const PAGINATE_USERS_QUERY = gql`
  query PaginateUsersQuery(
    $where: UserWhereInput
    $orderBy: UserOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    paginateUsers(
      where: $where
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
      orderBy: $orderBy
    ) {
      edges {
        node {
          id
          firstName
          lastName
          avatar
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
