import React from 'react';
import {
  PartyInvitationsConnectionQueryComponent,
  PartyInvitationsConnectionQueryEdges,
  PartyInvitationsConnectionQueryVariables,
  PartyInvitationSubscriptionDocument,
  PartyInvitationSubscriptionVariables,
  PartyInvitationSubscriptionSubscription,
  PartyInvitationsConnectionQueryQuery,
  PartyInvitationSubscriptionPartyInvitation,
  MutationType
} from '@generated/graphql';
import { Icon } from 'antd';
import AppHeaderPartyInvitesPopup from './AppHeaderPartyInvitesPopup';

interface Props {
  userId: string;
}

interface SubscribeForMoreSubscribeData {
  subscriptionData: {
    data: PartyInvitationSubscriptionSubscription;
  };
}

const AppHeaderPartyInvites: React.FC<Props> = props => {
  const BASE_QUERY_VARIABLES: PartyInvitationsConnectionQueryVariables = React.useMemo(
    () => ({
      first: 2,
      where: {
        user: {
          id: props.userId
        }
      }
    }),
    [props.userId]
  );

  const SUBSCRIPTION_VARIABLES: PartyInvitationSubscriptionVariables = React.useMemo(
    () => ({
      where: {
        node: {
          user: { id: props.userId }
        }
      }
    }),
    [props.userId]
  );

  return (
    <PartyInvitationsConnectionQueryComponent
      notifyOnNetworkStatusChange={true}
      variables={BASE_QUERY_VARIABLES}
    >
      {({ data, loading, fetchMore, subscribeToMore }) => {
        if (
          !data ||
          !data.partyInvitationsConnection ||
          !hasEdges(data.partyInvitationsConnection.edges)
        )
          return <Icon type="bell" />;
        return (
          <AppHeaderPartyInvitesPopup
            notificationCount={data.full.aggregate.count}
            loading={loading}
            hasMoreResults={
              data.partyInvitationsConnection.pageInfo.hasNextPage
            }
            partyInvites={data.partyInvitationsConnection.edges}
            onFetchMore={async () =>
              await fetchMore({
                variables: {
                  after: data.partyInvitationsConnection.pageInfo.endCursor
                },
                updateQuery: fetchMoreQueryUpdater
              })
            }
            subscribeForMore={() =>
              subscribeToMore({
                document: PartyInvitationSubscriptionDocument,
                variables: SUBSCRIPTION_VARIABLES,
                updateQuery: subscribeForMoreQueryUpdater
              })
            }
          />
        );
      }}
    </PartyInvitationsConnectionQueryComponent>
  );

  function hasEdges(
    edges: any
  ): edges is PartyInvitationsConnectionQueryEdges[] {
    return edges !== null;
  }

  function fetchMoreQueryUpdater(
    prev: PartyInvitationsConnectionQueryQuery,
    {
      fetchMoreResult
    }: { fetchMoreResult?: PartyInvitationsConnectionQueryQuery | undefined }
  ): PartyInvitationsConnectionQueryQuery {
    if (!fetchMoreResult) return prev;
    return {
      ...prev,
      partyInvitationsConnection: {
        ...prev.partyInvitationsConnection,
        pageInfo: fetchMoreResult.partyInvitationsConnection.pageInfo,
        edges: [
          ...prev.partyInvitationsConnection.edges,
          ...fetchMoreResult.partyInvitationsConnection.edges
        ]
      }
    };
  }

  function handleInvitationAdded(
    currentlyCachedData: PartyInvitationsConnectionQueryQuery,
    subPayload: PartyInvitationSubscriptionPartyInvitation
  ): PartyInvitationsConnectionQueryQuery {
    return {
      ...currentlyCachedData,
      partyInvitationsConnection: {
        ...currentlyCachedData.partyInvitationsConnection,
        edges: [
          ...currentlyCachedData.partyInvitationsConnection.edges,
          {
            node: subPayload.node!,
            __typename: 'PartyInvitationEdge'
          }
        ]
      },
      full: {
        aggregate: {
          count: currentlyCachedData.full.aggregate.count + 1,
          __typename: 'AggregatePartyInvitation'
        },
        __typename: 'PartyInvitationConnection'
      }
    };
  }

  function handleInvitationDeleted(
    currentlyCachedData: PartyInvitationsConnectionQueryQuery,
    subPayload: PartyInvitationSubscriptionPartyInvitation
  ): PartyInvitationsConnectionQueryQuery {
    return {
      ...currentlyCachedData,
      partyInvitationsConnection: {
        ...currentlyCachedData.partyInvitationsConnection,
        edges: currentlyCachedData.partyInvitationsConnection.edges.filter(
          edge => edge!.node.id !== subPayload.previousValues!.id
        )
      },
      full: {
        ...currentlyCachedData.full,
        aggregate: {
          count: currentlyCachedData.full.aggregate.count - 1,
          __typename: 'AggregatePartyInvitation'
        }
      }
    };
  }

  function subscribeForMoreQueryUpdater(
    prev: PartyInvitationsConnectionQueryQuery,
    { subscriptionData }: SubscribeForMoreSubscribeData
  ): PartyInvitationsConnectionQueryQuery {
    if (!subscriptionData.data || !subscriptionData.data.partyInvitation)
      return prev;

    let newCache = prev;

    switch (subscriptionData.data.partyInvitation.mutation) {
      case MutationType.Created:
        newCache = handleInvitationAdded(
          prev,
          subscriptionData.data.partyInvitation
        );
        break;
      case MutationType.Deleted:
        newCache = handleInvitationDeleted(
          prev,
          subscriptionData.data.partyInvitation
        );
        break;
    }

    return newCache;
  }

  //   function displayPartyInvitationNotification(
  //     prev: PartyInvitationsConnectionQueryQuery,
  //     { subscriptionData }: SubscribeForMoreSubscribeData
  //   ) {
  //     notification.info({
  //       message: 'Something something',
  //       description: 'Something someong',
  //       onClick: () => {
  //         console.log('clicked!');
  //       }
  //     });
  //   }
};

export default AppHeaderPartyInvites;
