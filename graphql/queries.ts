import { gql } from 'apollo-boost';
import {
  PARTY_FRAGMENT,
  MESSAGE_FRAGMENT,
  PARTY_INVITATION_FRAGMENT
} from './fragments';

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
          lastOnline
          status @client
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
      location {
        placeName
        latitude
        longitude
      }
      ...PARTY_FRAGMENT
    }
  }
  ${PARTY_FRAGMENT}
`;

export const PAGINATE_PARTIES_QUERY = gql`
  query PaginatePartiesQuery(
    $where: PartyWhereInput
    $orderBy: PartyOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    partiesConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...PARTY_FRAGMENT
        }
      }
    }
  }
  ${PARTY_FRAGMENT}
`;

export const PAGINATE_CHATS_QUERY = gql`
  query PaginateChatsQuery(
    $where: ChatWhereInput
    $orderBy: ChatOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    chatsConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          party {
            title
          }
          members(first: 3) {
            avatar
            firstName
            lastName
          }
          messages(last: 1) {
            createdAt
            content
            author {
              firstName
              lastName
            }
          }
          hasUnreadMessages @client
        }
      }
    }
  }
`;

export const PAGINATE_MESSAGES_QUERY = gql`
  query PaginateMessagesQuery(
    $where: MessageWhereInput
    $orderBy: MessageOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    messagesConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        startCursor
        hasPreviousPage
      }
      edges {
        node {
          ...MESSAGE_FRAGMENT
        }
      }
    }
  }
  ${MESSAGE_FRAGMENT}
`;

export const PAGINATE_USERS_INVITE_TO_PARTY_QUERY = gql`
  query PaginateUsersInviteToPartyQuery(
    $where: UserWhereInput
    $orderBy: UserOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
    $partyInvitationWhere: PartyInvitationWhereInput
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
          lastOnline
          status @client
          pendingPartyInvitations(where: $partyInvitationWhere) {
            id
            invitedBy {
              id
            }
            party {
              id
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const PARTY_INVITATIONS_CONNECTION_QUERY = gql`
  query PartyInvitationsConnectionQuery(
    $where: PartyInvitationWhereInput
    $orderBy: PartyInvitationOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    partyInvitationsConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      edges {
        node {
          ...PARTY_INVITATION_FRAGMENT
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    full: partyInvitationsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
  ${PARTY_INVITATION_FRAGMENT}
`;

export const HAS_PARTIES_QUERY = gql`
  query HasPartiesQuery {
    hasParties
  }
`;

export const PARTY_INVITATIONS_QUERY = gql`
  query PartyInvitationsQuery(
    $where: PartyInvitationWhereInput
    $orderBy: PartyInvitationOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    partyInvitations(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      id
    }
  }
`;
