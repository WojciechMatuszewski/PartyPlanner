import React from 'react';
import { PartyInvitationsConnectionQueryEdges } from '@generated/graphql';
import moment from 'moment';
import UserAvatar from '@components/UserDefaultAvatar';
import { Typography } from 'antd';

const AppHeaderPartyInvitationsPartyInvitation = (
  edge: PartyInvitationsConnectionQueryEdges
) => {
  const parsedNotificationDate = moment(edge.node.createdAt).calendar();

  return {
    avatar: <UserAvatar userData={edge.node.invitedBy} />,
    title: 'New invitation',
    datetime: parsedNotificationDate,
    edge,
    description: (
      <React.Fragment>
        <Typography.Text strong={true}>
          {edge.node.invitedBy.firstName}{' '}
        </Typography.Text>
        <Typography.Text>invited you to a party </Typography.Text>
        <Typography.Text type="warning">
          {edge.node.party.title}{' '}
        </Typography.Text>
      </React.Fragment>
    )
  };

  // function handleNotificationDeclineClick() {
  //   onDeclineClick(edge.node.id);
  // }
};

export default AppHeaderPartyInvitationsPartyInvitation;
