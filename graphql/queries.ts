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
