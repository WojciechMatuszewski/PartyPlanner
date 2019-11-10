import FriendInvitesNoticeIcon from './FriendInvitesNoticeIcon';

import {
  FriendInvitationSubscriptionPayload,
  MutationType,
  User_FriendInvitationsConnectionQuery,
  User_FriendInvitationsSubscriptionDocument,
  useUser_FriendInvitationsConnection
} from '@generated/graphql';
import {
  DeepWithoutMaybe,
  hasGraphqlData,
  isLoadingInitially,
  isLoadingMore
} from '@shared/graphqlUtils';
import { Icon } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

interface SubscribeForMoreSubscribeData {
  subscriptionData: {
    data: {
      friendInvitation: FriendInvitationSubscriptionPayload;
    };
  };
}

export const FRIEND_INVITATIONS_CONNECTION = gql`
  query User_FriendInvitationsConnection(
    $where: FriendInvitationWhereInput
    $orderBy: FriendInvitationOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    friendInvitationsConnection(
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
    counts: friendInvitationsConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
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

interface Props {
  userId: string;
}
export default function FriendInvites({ userId }: Props) {
  const {
    data,

    networkStatus,
    subscribeToMore,
    fetchMore
  } = useUser_FriendInvitationsConnection({
    variables: {
      where: { invitedUserId: userId }
    },
    notifyOnNetworkStatusChange: true
  });

  if (
    isLoadingInitially(networkStatus) ||
    !hasGraphqlData(data, ['friendInvitationsConnection', 'counts'])
  )
    return (
      <span>
        <Icon type="user" style={{ opacity: 0.3 }} />
      </span>
    );

  const {
    counts: { aggregate },
    friendInvitationsConnection: { edges, pageInfo }
  } = data;

  function onLoadMore() {
    fetchMore({
      variables: {
        after: pageInfo.endCursor
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || !fetchMoreResult.friendInvitationsConnection)
          return prev;
        const {
          friendInvitationsConnection: { pageInfo, edges: fetchMoreEdges }
        } = fetchMoreResult;
        return {
          __typename: 'Query',
          friendInvitationsConnection: {
            __typename: 'FriendInvitationConnection',
            edges: [
              ...prev.friendInvitationsConnection.edges,
              ...fetchMoreEdges
            ],
            pageInfo
          },
          counts: prev.counts
        };
      }
    });
  }

  function handleSubscribeToMore() {
    subscribeToMore({
      document: User_FriendInvitationsSubscriptionDocument,
      variables: {
        where: {
          node: {
            invitedUserId: userId
          }
        }
      },
      updateQuery: (
        prev,
        { subscriptionData }: SubscribeForMoreSubscribeData
      ) => {
        if (!subscriptionData || subscriptionData.data == undefined)
          return prev;

        const {
          data: { friendInvitation }
        } = subscriptionData;

        switch (friendInvitation.mutation) {
          case MutationType.Deleted:
            if (!hasDeletedMyExistingInvitation(friendInvitation)) return prev;
            return handleInvitationDeleted(prev, friendInvitation);
          case MutationType.Created:
            return handleNewInvitation(prev, friendInvitation);
          default:
            return prev;
        }
      }
    });
  }

  const canLoadMore = pageInfo.hasNextPage && !isLoadingMore(networkStatus);

  return (
    <FriendInvitesNoticeIcon
      friendInvites={edges}
      subscribeToMore={handleSubscribeToMore}
      notificationCount={aggregate.count}
      canLoadMore={canLoadMore}
      onLoadMore={onLoadMore}
    />
  );

  function handleNewInvitation(
    currentCachedData: User_FriendInvitationsConnectionQuery,
    subPayload: FriendInvitationSubscriptionPayload
  ): User_FriendInvitationsConnectionQuery {
    const {
      friendInvitationsConnection: { edges },
      counts
    } = currentCachedData;
    if (edges == undefined || subPayload.node == undefined)
      return currentCachedData;
    const { node } = subPayload;
    const surelyEdges = edges as DeepWithoutMaybe<typeof edges>;
    const newEdges: typeof surelyEdges = [
      ...surelyEdges,
      {
        __typename: 'FriendInvitationEdge',
        node: { ...node, __typename: 'FriendInvitation' } as any
      }
    ];
    return {
      __typename: 'Query',
      friendInvitationsConnection: {
        __typename: 'FriendInvitationConnection',
        edges: newEdges,
        pageInfo: currentCachedData.friendInvitationsConnection.pageInfo
      },
      counts: {
        __typename: 'FriendInvitationConnection',
        aggregate: {
          __typename: 'AggregateFriendInvitation',
          count: counts.aggregate.count + 1
        }
      }
    };
  }

  function handleInvitationDeleted(
    currentCachedData: User_FriendInvitationsConnectionQuery,
    subPayload: FriendInvitationSubscriptionPayload
  ): User_FriendInvitationsConnectionQuery {
    const {
      friendInvitationsConnection: { edges },
      counts
    } = currentCachedData;
    if (edges == undefined || subPayload.previousValues == undefined)
      return currentCachedData;
    const { previousValues } = subPayload;
    const surelyEdges = edges as DeepWithoutMaybe<typeof edges>;
    const filteredEdges = surelyEdges.filter(
      edge => edge.node.id != previousValues.id
    );
    return {
      __typename: 'Query',
      friendInvitationsConnection: {
        __typename: 'FriendInvitationConnection',
        edges: filteredEdges,
        pageInfo: currentCachedData.friendInvitationsConnection.pageInfo
      },
      counts: {
        __typename: 'FriendInvitationConnection',
        aggregate: {
          __typename: 'AggregateFriendInvitation',
          count: counts.aggregate.count - 1
        }
      }
    };
  }

  function hasDeletedMyExistingInvitation(
    friendInvitation: FriendInvitationSubscriptionPayload
  ) {
    if (!friendInvitation) return false;
    return (
      friendInvitation.previousValues &&
      friendInvitation.previousValues.invitedUserId == userId
    );
  }
}
