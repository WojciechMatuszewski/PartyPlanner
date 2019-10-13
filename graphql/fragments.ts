import gql from 'graphql-tag';

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
      id
    }
    members {
      avatar
      firstName
      lastName
      id
    }

    colorTint
    start
    end
    isPublic
    inviteSecret
  }
`;

export const MESSAGE_FRAGMENT = gql`
  fragment MESSAGE_FRAGMENT on Message {
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
`;

export const PARTY_INVITATION_FRAGMENT = gql`
  fragment PARTY_INVITATION_FRAGMENT on PartyInvitation {
    id
    createdAt
    invitedBy {
      firstName
      lastName
      avatar
    }
    user {
      id
    }
    party {
      title
      id
    }
  }
`;

export const LAST_CHAT_MESSAGE_FRAGMENT = gql`
  fragment LAST_CHAT_MESSAGE_FRAGMENT on Chat {
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
`;

export const FULL_SAVED_TRACK_FRAGMENT = gql`
  fragment FULL_SAVED_TRACK_FRAGMENT on PartySavedTrack {
    id
    spotifyId
    name
    imageUrl
    artists {
      name
    }
    durationMs
    length
    uri
    explicit
    upVotes
    downVotes
  }
`;
