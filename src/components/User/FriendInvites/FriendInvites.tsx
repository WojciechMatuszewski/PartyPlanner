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
  isLoadingMore,
  handleRefetch,
  isLoadingError
} from '@shared/graphqlUtils';
import { Icon, notification, Typography } from 'antd';
import gql from 'graphql-tag';
import React from 'react';
import GraphqlInlineError from '@components/GraphqlInlineError';

interface SubscribeForMoreSubscribeData {
  subscriptionData: {
    data: {
      friendInvitation: FriendInvitationSubscriptionPayload;
    };
  };
}
const PAGE_SIZE = 5;
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

interface Props {
  userId: string;
}
export default function FriendInvites({ userId }: Props) {
  const {
    data,
    networkStatus,
    subscribeToMore,
    fetchMore,
    refetch,
    error
  } = useUser_FriendInvitationsConnection({
    variables: {
      where: { invitedUserId: userId },
      first: PAGE_SIZE
    },
    notifyOnNetworkStatusChange: true,
    errorPolicy: 'all'
  });

  function displayLocalNotificationAboutNewInvitation(
    invitedByFullName: string
  ) {
    notification.info({
      message: 'New friend invitation',
      description: (
        <Typography.Paragraph>
          <Typography.Text strong={true}>{invitedByFullName}</Typography.Text>{' '}
          invited you to be his friend.
        </Typography.Paragraph>
      ),
      placement: 'bottomRight',
      duration: 2
    });
  }

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
      locale={
        error
          ? {
              viewMore: 'Load more',
              clear: '',
              emptyText: (
                <GraphqlInlineError.WithButton
                  title="Something went wrong"
                  onRetry={() => handleRefetch(refetch)}
                  loading={isLoadingError(networkStatus)}
                />
              ) as any
            }
          : {
              viewMore: 'Load More',
              emptyText: 'No new friend invites'
            }
      }
      friendInvites={error ? [] : edges}
      subscribeToMore={handleSubscribeToMore}
      notificationCount={aggregate.count}
      canLoadMore={canLoadMore}
      onLoadMore={onLoadMore}
      loadingMore={isLoadingMore(networkStatus)}
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

    displayLocalNotificationAboutNewInvitation(
      `${node.invitedBy.firstName} ${node.invitedBy.lastName}`
    );

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
