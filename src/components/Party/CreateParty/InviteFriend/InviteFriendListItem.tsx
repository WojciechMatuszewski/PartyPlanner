import React from 'react';
import { PaginateUsersQueryEdges } from '@generated/graphql';
import { List, Badge, Icon, Typography } from 'antd';
import UserDefaultAvatar from '@components/UserDefaultAvatar';
import css from '@emotion/css';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

interface Props {
  onInvite: (id: string) => void;
  onRemove: (id: string) => void;
  personInvited: boolean;
  shouldUseGrid: boolean;
  edge: PaginateUsersQueryEdges;
}

const InviteFriendListItem: React.FC<Props> = props => {
  const {
    node: { id }
  } = props.edge;

  const alreadyInvitedActions = [
    <Typography.Text type="danger" key={1}>
      <p style={{ marginBottom: 0 }} onClick={() => props.onRemove(id)}>
        Cancel
      </p>
    </Typography.Text>
  ];

  const toBeInvitedActions = [
    <a onClick={() => props.onInvite(id)} key={2}>
      Invite
    </a>
  ];

  function getActions() {
    return props.personInvited ? alreadyInvitedActions : toBeInvitedActions;
  }

  return (
    <List.Item actions={!props.shouldUseGrid ? getActions() : []} key={id}>
      <List.Item.Meta
        title={props.edge.node.firstName + ' ' + props.edge.node.lastName}
        description={props.shouldUseGrid ? getActions() : null}
        css={css`
          ${FlexBoxFullCenteredStyles}
        `}
        avatar={
          <Badge
            count={
              props.personInvited ? (
                <Icon
                  type="check-circle"
                  theme="filled"
                  style={{ color: '#52c41a' }}
                />
              ) : (
                0
              )
            }
            offset={[-5, 28]}
          >
            <UserDefaultAvatar
              firstName={props.edge.node.firstName}
              lastName={props.edge.node.lastName}
            />
          </Badge>
        }
      />
    </List.Item>
  );
};

export default InviteFriendListItem;
