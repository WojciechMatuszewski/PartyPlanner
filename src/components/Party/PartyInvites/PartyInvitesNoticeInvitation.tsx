import React from 'react';
import { PartyInvitationsConnectionQueryEdges } from '@generated/graphql';
import moment from 'moment';
import UserAvatar from '@components/User/UserDefaultAvatar';
import { Typography } from 'antd';

const PartyInvitesNoticeInvitation = (
  edge: NonNullable<PartyInvitationsConnectionQueryEdges>
) => {
  const parsedNotificationDate = moment(edge.node.createdAt).calendar();

  return {
    avatar: <UserAvatar userData={edge.node.invitedBy} />,
    datetime: parsedNotificationDate,
    edge,
    description: (
      <React.Fragment>
        <Typography.Text strong={true}>
          {edge.node.invitedBy.firstName}{' '}
        </Typography.Text>
        <Typography.Text>invited you to a party: </Typography.Text>
        <Typography.Text strong={true}>
          {edge.node.party.title}.
        </Typography.Text>
        <Typography.Paragraph
          style={{ color: '#1890ff', marginBottom: 0 }}
          type="secondary"
        >
          Click on this notification for more actions.
        </Typography.Paragraph>
      </React.Fragment>
    )
  };
};

export default PartyInvitesNoticeInvitation;
