import { PARTY_INVITATION_FRAGMENT } from './fragments';
import gql from 'graphql-tag';
export const CHAT_MESSAGES_SUBSCRIPTION = gql`
  subscription ChatMessagesSubscription($where: MessageSubscriptionWhereInput) {
    message(where: $where) {
      node {
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
        chat {
          id
        }
      }
    }
  }
`;

export const PARTY_INVITATION_SUBSCRIPTION = gql`
  subscription PartyInvitationSubscription(
    $where: PartyInvitationSubscriptionWhereInput
  ) {
    partyInvitation(where: $where) {
      node {
        ...PARTY_INVITATION_FRAGMENT
      }
      previousValues {
        id
        invitedUserId
        partyId
      }
      mutation
    }
  }
  ${PARTY_INVITATION_FRAGMENT}
`;

export const FRIEND_INVITATIONS_SUBSCRIPTION = gql`
  subscription User_FriendInvitationsSubscription(
    $where: FriendInvitationSubscriptionWhereInput
  ) {
    friendInvitation(where: $where) {
      mutation
      previousValues {
        id
        invitedUserId
      }
      node {
        createdAt
        invitedBy {
          id
          firstName
          lastName
          avatar
        }
        id
        invitedUserId
        user {
          id
        }
      }
    }
  }
`;
