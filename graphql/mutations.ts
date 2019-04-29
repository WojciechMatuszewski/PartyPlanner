import { PARTY_FRAGMENT } from './fragments';
import { gql } from 'apollo-boost';

export const SIGNUP_MUTATION = gql`
  mutation Signup(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_PARTY_MUTATION = gql`
  mutation CreateParty($data: PartyCreateInput!) {
    createParty(data: $data) {
      ...PARTY_FRAGMENT
    }
  }
  ${PARTY_FRAGMENT}
`;

export const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessage($data: MessageCreateInput!) {
    createMessage(data: $data) {
      id
      author {
        firstName
        lastName
        avatar
        id
      }
      isSendByMe @client
      optimisticallyAdded @client
      optimisticallyCreated @client
      hasOptimisticError @client
      content
      createdAt
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;
