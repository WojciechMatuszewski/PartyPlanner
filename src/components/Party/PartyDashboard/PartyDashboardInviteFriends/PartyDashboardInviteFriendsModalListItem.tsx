import React from 'react';

import css from '@emotion/css';
import { List } from 'antd';
import UserAvatar from '@components/User/UserDefaultAvatar';

const ListItemStyles = css`
  @media screen and (max-width: 800px) {
    .hide-on-mobile {
      display: none;
    }
  }
  ul {
    display: flex;
  }
`;

interface Props {
  node: PaginateUsersInviteToPartyQueryNode;
  actions: React.ReactNode[] | undefined;
}
// TODO:
// this components needs to be optimized
// you probably should not pass actions directly, or maybe memoize them?
const PartyDashboardInviteFriendsModalListItem: React.FC<Props> = props => {
  return (
    <List.Item
      css={[ListItemStyles]}
      key={props.node.id}
      actions={props.actions}
    >
      <List.Item.Meta
        avatar={<UserAvatar userData={props.node} />}
        title={props.node.firstName}
        description={props.node.lastName}
        style={{ paddingLeft: 8 }}
      />
    </List.Item>
  );
};

export default React.memo(PartyDashboardInviteFriendsModalListItem);
