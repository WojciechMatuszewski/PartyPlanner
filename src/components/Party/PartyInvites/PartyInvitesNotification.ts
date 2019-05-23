import { notification } from 'antd';
import { always, compose } from 'ramda';
import {
  PartyInvitationSubscriptionNode,
  PartyInvitationsConnectionQueryEdges
} from '@generated/graphql';

function createNotificationBody(
  subscriptionNode: PartyInvitationSubscriptionNode
) {
  return {
    message: 'New party invitation!',
    description: `${
      subscriptionNode.invitedBy.firstName
    } invited you to a party called: ${subscriptionNode.party.title}`
  };
}

function createNotificationKey() {
  return `open${Date.now()}`;
}

export default function openPartyInvitationNotification(
  subscriptionNode: PartyInvitationSubscriptionNode,
  onNotificationClick: (obj: {
    edge: PartyInvitationsConnectionQueryEdges;
  }) => void
) {
  const notificationKey = createNotificationKey();
  notification.open({
    ...createNotificationBody(subscriptionNode),
    key: notificationKey,
    onClick: () =>
      compose(
        notification.close,
        always(notificationKey),
        onNotificationClick
      )({ edge: { node: subscriptionNode } })
  });
}
