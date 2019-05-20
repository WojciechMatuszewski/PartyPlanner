import React from 'react';
import { NoticeIcon } from 'ant-design-pro';

import {
  usePartyInvitationsConnectionQuery,
  PartyInvitationsConnectionQueryEdges
} from '@generated/graphql';
import { Icon, Typography } from 'antd';
import UserAvatar from '@components/UserDefaultAvatar';

interface Props {
  userId: string;
}
const PartyInvites: React.FC<Props> = props => {
  const { data, loading, fetchMore } = usePartyInvitationsConnectionQuery({
    variables: {
      first: 2,
      where: {
        user: {
          id: props.userId
        }
      }
    },
    notifyOnNetworkStatusChange: true
  });

  if (
    !data ||
    !data.partyInvitationsConnection ||
    !hasEdges(data.partyInvitationsConnection.edges)
  )
    return <Icon type="bell" />;

  return (
    <NoticeIcon
      count={data.full.aggregate.count}
      onLoadMore={async () => {
        await fetchMore({
          variables: {
            after: data.partyInvitationsConnection.pageInfo.endCursor
          },
          updateQuery: (prev, { fetchMoreResult }) => {
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
        });
      }}
    >
      <NoticeIcon.Tab
        showClear={false}
        loading={loading}
        loadedAll={!data.partyInvitationsConnection.pageInfo.hasNextPage}
        list={data.partyInvitationsConnection.edges.map(edge => ({
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
        }))}
        title="Party Invites"
        skeletonProps={{}}
      />
    </NoticeIcon>
  );

  function hasEdges(
    edges: any
  ): edges is PartyInvitationsConnectionQueryEdges[] {
    return edges !== null;
  }
};

export default PartyInvites;
