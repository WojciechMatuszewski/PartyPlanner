import React from 'react';
import { PartyInvitationsConnectionQueryEdges } from '@generated/graphql';
import { NoticeIcon } from 'ant-design-pro';
import UserAvatar from '@components/UserDefaultAvatar';
import { Typography } from 'antd';

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
    <NoticeIcon onLoadMore={props.onFetchMore} count={props.notificationCount}>
      <NoticeIcon.Tab
        loading={props.loading}
        skeletonProps={{}}
        showClear={false}
        loadedAll={!props.hasMoreResults}
        list={props.partyInvites.map(createNotification)}
      />
    </NoticeIcon>
  );

  function createNotification(edge: PartyInvitationsConnectionQueryEdges) {
    return {
      avatar: <UserAvatar userData={edge.node.invitedBy} />,
      description: (
        <React.Fragment>
          <Typography.Text strong={true}>
            {edge.node.invitedBy.firstName}{' '}
          </Typography.Text>
          <Typography.Text>invited you to a party </Typography.Text>
          <Typography.Text type="warning">
            {edge.node.party.title}{' '}
          </Typography.Text>
          <Typography.Paragraph strong={true} style={{ color: '#1890ff' }}>
            Click on the notification to join
          </Typography.Paragraph>
        </React.Fragment>
      )
    };
  }
};

export default AppHeaderPartyInvitesPopup;
