import React from 'react';
import gql from 'graphql-tag';
import FriendInvitesNoticeIcon from './FriendInvitesNoticeIcon';
import {
  useUser_FriendInvitationsConnection,
  User_FriendInvitationsSubscriptionDocument
} from '@generated/graphql';
import {
  isLoadingInitially,
  hasGraphqlData,
  isLoadingMore
} from '@shared/graphqlUtils';
import { Icon } from 'antd';

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
        user {
          id
          firstName
          lastName
          avatar
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
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData || subscriptionData.data == undefined)
          return prev;
        // const { data } = subscriptionData;
        // console.log(data);
        return prev;
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
}
