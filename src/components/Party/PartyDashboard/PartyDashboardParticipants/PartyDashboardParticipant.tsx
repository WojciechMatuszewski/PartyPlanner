import React from 'react';
import { List, Tag } from 'antd';
import {
  PartyDashboardParticipantsQueryNode,
  PartyDashboardParticipantsQueryQuery
} from '@generated/graphql';
import UserAvatar from '@components/UserDefaultAvatar';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';

interface Props {
  style: React.CSSProperties;
  participant: NonNullable<
    DeepWithoutMaybe<
      PartyDashboardParticipantsQueryQuery['usersConnection']['edges'][0]
    >
  >;
}

export default function PartyDashboardParticipant(props: Props) {
  return (
    <List.Item
      style={{ ...props.style, padding: '0px 24px' }}
      actions={[<a>Manage</a>]}
    >
      <List.Item.Meta
        avatar={<UserAvatar userData={props.participant.node} />}
        title={`${props.participant.node.firstName} ${
          props.participant.node.lastName
        }`}
        description="Joined: 22.05.2019"
      />
      <Tag color="blue">New member</Tag>
    </List.Item>
  );
}
