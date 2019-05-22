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
  MutationType,
  PartyInvitationSubscriptionNode
} from '@generated/graphql';
import { Icon, notification } from 'antd';
import AppHeaderPartyInvitesPopup from './AppHeaderPartyInvitesPopup';
import AppHeaderPartyInvitesModal from './AppHeaderPartyInvitesModal';
import { compose } from 'ramda';

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

  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const [clickedItem, setClickedItem] = React.useState<
    PartyInvitationsConnectionQueryEdges | undefined
  >();

  // console.log(clickedItem);

  return (
    <React.Fragment>
      <AppHeaderPartyInvitesModal
        invitation={clickedItem}
        onCancel={() => setModalVisible(false)}
        visible={modalVisible}
      />
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
              onItemClick={handleItemClick}
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
                  updateQuery: subscriptionCacheUpdater
                })
              }
            />
          );
        }}
      </PartyInvitationsConnectionQueryComponent>
    </React.Fragment>
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

  function subscriptionCacheUpdater(
    prev: PartyInvitationsConnectionQueryQuery,
    { subscriptionData }: SubscribeForMoreSubscribeData
  ) {
    if (!subscriptionData.data || !subscriptionData.data.partyInvitation)
      return prev;

    const {
      data: { partyInvitation }
    } = subscriptionData;

    let newCache = prev;

    switch (partyInvitation.mutation) {
      case MutationType.Created:
        newCache = handleInvitationAdded(prev, partyInvitation);
        showNewInvitationNotification(partyInvitation.node!);
        break;
      case MutationType.Deleted:
        newCache = hasDeletedMyExistingNotification(partyInvitation)
          ? handleInvitationDeleted(prev, partyInvitation)
          : prev;
        break;
    }

    return newCache;
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

  // when deleting node returns null so filters supplied to where does not work
  // I added static userId field to diff here so i do not trigger handleInvitationDeleted on notification
  // which is not mine
  function hasDeletedMyExistingNotification(
    partyInvitation: PartyInvitationSubscriptionPartyInvitation
  ) {
    return (
      partyInvitation.previousValues &&
      partyInvitation.previousValues.userId == props.userId
    );
  }

  function handleItemClick({
    edge
  }: {
    edge: PartyInvitationsConnectionQueryEdges;
  }) {
    setClickedItem(edge);
    setModalVisible(true);
  }

  function showNewInvitationNotification(
    subscriptionNode: PartyInvitationSubscriptionNode
  ) {
    const notificationKey = createNotificationKey();
    notification.info({
      key: notificationKey,
      message: 'New party invitation!',
      onClick: () =>
        compose(
          notification.close,
          () => notificationKey,
          handleItemClick
        )({ edge: { node: subscriptionNode } })
    });
  }

  function createNotificationKey() {
    return `open${Date.now()}`;
  }
};

export default AppHeaderPartyInvites;
