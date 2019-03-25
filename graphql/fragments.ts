import { gql } from 'apollo-boost';

export const PARTY_FRAGMENT = gql`
  fragment PARTY_FRAGMENT on Party {
    id
    title
    description
    location {
      placeName
    }
    author {
      firstName
      lastName
    }
    members {
      avatar
      firstName
      lastName
    }
    colorTint
    start
    end
  }
`;
