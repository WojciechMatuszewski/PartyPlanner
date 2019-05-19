import React from 'react';
import {
  PaginateUsersQueryEdges,
  PaginateUsersQueryNode
} from '@generated/graphql';
import styled from '@emotion/styled';
import { List, Button } from 'antd';
import NoData from '@components/NoData';
import css from '@emotion/css';
import UserAvatar from '@components/UserDefaultAvatar';

const ListContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 0px 6px;
`;

interface Props {
  loading: boolean;
  data: PaginateUsersQueryEdges[];
}

const PartyDashboardInviteFriendsModalList: React.FC<Props> = props => {
  return (
    <ListContainer>
      <List
        locale={ListLocale}
        loading={props.loading}
        size="small"
        dataSource={props.data}
        renderItem={({ node }: { node: PaginateUsersQueryNode }) =>
          renderListItem(node)
        }
      />
    </ListContainer>
  );
};

const ListLocale = {
  emptyText: (
    <NoData
      cssStyles={css`
        img {
          height: 200px;
        }
      `}
      message="No results found"
      action={null}
    />
  ) as any
};

function renderListItem(node: PaginateUsersQueryNode) {
  return (
    <List.Item
      key={node.id}
      actions={[
        <Button key={1} size="small" type="primary">
          Invite now!
        </Button>
      ]}
    >
      <List.Item.Meta
        avatar={<UserAvatar userData={node} />}
        title={node.firstName}
        description={node.lastName}
      />
    </List.Item>
  );
}

export default PartyDashboardInviteFriendsModalList;
