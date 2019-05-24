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
  PartyInvitationOrderByInput
} from '@generated/graphql';
import { Icon, message } from 'antd';

import { hasGraphqlData } from '@shared/graphqlUtils';
import openPartyInvitationNotification, {
  closePartyInvitationNotification
} from '@components/Party/PartyInvites/PartyInvitesNotification';
import PartyInvitesModal from './PartyInvitesModal';
import PartyInvitesNoticesList from './PartyInvitesNoticesList';

interface Props {
  userId: string;
}

interface SubscribeForMoreSubscribeData {
  subscriptionData: {
    data: PartyInvitationSubscriptionSubscription;
  };
}

const PartyInvitesNoticeIcon: React.FC<Props> = props => {
  const BASE_QUERY_VARIABLES: PartyInvitationsConnectionQueryVariables = React.useMemo(
    () => ({
      first: 2,
      where: {
        user: {
          id: props.userId
        }
      },
      orderBy: PartyInvitationOrderByInput.CreatedAtDesc
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

  return (
    <React.Fragment>
      <PartyInvitesModal
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
            !hasGraphqlData(data, [
              'partyInvitationsConnection',
              'partyInvitationsConnection.edges'
            ])
          )
            return <Icon type="bell" />;

          return (
            <PartyInvitesNoticesList
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

    switch (partyInvitation.mutation) {
      case MutationType.Created:
        openPartyInvitationNotification(partyInvitation.node!, handleItemClick);
        return handleInvitationAdded(prev, partyInvitation);
      case MutationType.Deleted:
        if (!hasDeletedMyExistingNotification(partyInvitation)) {
          return prev;
        }
        handleOnInvitationDeleted(partyInvitation.previousValues!.id);
        return handleInvitationDeleted(prev, partyInvitation);
      default:
        return prev;
    }
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

  function handleOnInvitationDeleted(deletedInvitationId: string) {
    closePartyInvitationNotification(deletedInvitationId);
    message.warning(`One of your party invitations was revoked`);
  }

  // when deleting node returns null so filters supplied to where does not work
  // I added static userId field to diff here so i do not trigger handleInvitationDeleted on notification
  // which is not mine
  function hasDeletedMyExistingNotification(
    partyInvitation: PartyInvitationSubscriptionPartyInvitation
  ) {
    return (
      partyInvitation.previousValues &&
      partyInvitation.previousValues.invitedUserId == props.userId
    );
  }

  function handleItemClick({
    edge
  }: {
    edge: PartyInvitationsConnectionQueryEdges;
  }) {
    setClickedItem(edge);
    closePartyInvitationNotification(edge.node.id);
    setModalVisible(true);
  }
};

export default PartyInvitesNoticeIcon;
