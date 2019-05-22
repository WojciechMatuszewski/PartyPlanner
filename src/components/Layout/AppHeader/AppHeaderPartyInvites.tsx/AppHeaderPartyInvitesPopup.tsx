import React from 'react';
import { PartyInvitationsConnectionQueryEdges } from '@generated/graphql';
import { NoticeIcon } from 'ant-design-pro';
import UserAvatar from '@components/UserDefaultAvatar';
import { Typography, Button } from 'antd';
import moment from 'moment';

interface Props {
  loading: boolean;
  partyInvites: PartyInvitationsConnectionQueryEdges[];
  subscribeForMore: () => void;
  onFetchMore: () => void;
  hasMoreResults: boolean;
  notificationCount: number;
}
const AppHeaderPartyInvitesPopup: React.FC<Props> = props => {
  React.useEffect(() => {
    props.subscribeForMore();
  }, []);

  return (
    <NoticeIcon
      style={{ background: 'red' }}
      onLoadMore={props.onFetchMore}
      count={props.notificationCount}
    >
      <NoticeIcon.Tab
        name="Party Invitations"
        loading={props.loading}
        skeletonProps={{}}
        showClear={false}
        loadedAll={!props.hasMoreResults}
        list={props.partyInvites.map(createNotification)}
      />
    </NoticeIcon>
  );

  function createNotification(edge: PartyInvitationsConnectionQueryEdges) {
    const parsedNotificationDate = moment(edge.node.createdAt).calendar();

    return {
      avatar: <UserAvatar userData={edge.node.invitedBy} />,
      title: 'New invitation',
      description: (
        <React.Fragment>
          <Typography.Text strong={true}>
            {edge.node.invitedBy.firstName}{' '}
          </Typography.Text>
          <Typography.Text>invited you to a party </Typography.Text>
          <Typography.Text type="warning">
            {edge.node.party.title}{' '}
          </Typography.Text>
          <Typography.Paragraph type="secondary">
            {parsedNotificationDate}
          </Typography.Paragraph>
          <Button.Group style={{ display: 'block', marginTop: 12 }}>
            <Button type="primary" size="small">
              Accept
            </Button>
            <Button type="danger" size="small">
              Decline
            </Button>
          </Button.Group>
        </React.Fragment>
      )
    };
  }
};

export default AppHeaderPartyInvitesPopup;
