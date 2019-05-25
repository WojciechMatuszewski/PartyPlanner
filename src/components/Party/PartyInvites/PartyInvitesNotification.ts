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

export function closePartyInvitationNotification(key: string) {
  notification.close(key);
}

export default function openPartyInvitationNotification(
  subscriptionNode: PartyInvitationSubscriptionNode,
  onNotificationClick: (obj: {
    edge: PartyInvitationsConnectionQueryEdges;
  }) => void
) {
  notification.open({
    ...createNotificationBody(subscriptionNode),
    key: subscriptionNode.id,
    onClick: () =>
      compose(
        closePartyInvitationNotification,
        always(subscriptionNode.id),
        onNotificationClick
      )({ edge: { node: subscriptionNode } })
  });
}
