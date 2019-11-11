import { PARTY_FRAGMENT, FULL_SAVED_TRACK_FRAGMENT } from './fragments';
import gql from 'graphql-tag';

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

export const REQUEST_PASSWORD_RESET_MUTATION = gql`
  mutation RequestPasswordReset($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation ResetPassword(
    $password: String!
    $confirmPassword: String!
    $resetToken: String!
  ) {
    resetPassword(
      password: $password
      confirmPassword: $confirmPassword
      resetToken: $resetToken
    ) {
      token
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

export const CREATE_PARTY_INVITATION_MUTATION = gql`
  mutation CreatePartyInvitation($data: PartyInvitationCreateInput!) {
    createPartyInvitation(data: $data) {
      id
    }
  }
`;

export const DELETE_MANY_PARTY_INVITATIONS_MUTATION = gql`
  mutation DeleteManyPartyInvitations($where: PartyInvitationWhereInput) {
    deleteManyPartyInvitations(where: $where) {
      count
    }
  }
`;

export const DELETE_PARTY_INVITATION_MUTATION = gql`
  mutation DeletePartyInvitationMutation(
    $where: PartyInvitationWhereUniqueInput!
  ) {
    deletePartyInvitation(where: $where) {
      id
    }
  }
`;

export const JOIN_PARTY_MUTATION = gql`
  mutation JoinPartyMutation($partyId: ID!) {
    joinParty(partyId: $partyId)
  }
`;

export const ADD_TRACK_TO_PARTY_MUTATION = gql`
  mutation AddTrackToParty($data: PartySavedTrackCreateInput!) {
    createPartySavedTrack(data: $data) {
      ...FULL_SAVED_TRACK_FRAGMENT
      spotifyId
    }
  }
  ${FULL_SAVED_TRACK_FRAGMENT}
`;
export const DELETE_FRIEND_INVITATION_MUTATION = gql`
  mutation User_DeleteFriendInvitation(
    $where: FriendInvitationWhereUniqueInput!
  ) {
    deleteFriendInvitation(where: $where) {
      id
    }
  }
`;
