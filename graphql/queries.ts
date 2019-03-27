import { gql } from 'apollo-boost';
import { PARTY_FRAGMENT } from './fragments';

export const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      email
      firstName
      lastName
      avatar
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

export const PARTIES_QUERY = gql`
  query PartiesQuery(
    $where: PartyWhereInput
    $orderBy: PartyOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    parties(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      ...PARTY_FRAGMENT
    }
  }
  ${PARTY_FRAGMENT}
`;
