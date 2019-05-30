import React from 'react';
import { List } from 'antd';
import { PartyDashboardParticipantsQueryQuery } from '@generated/graphql';
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
    <List.Item style={{ ...props.style, padding: '0px 24px' }}>
      <List.Item.Meta
        avatar={<UserAvatar userData={props.participant.node} />}
        title={`${props.participant.node.firstName} ${
          props.participant.node.lastName
        }`}
      />
    </List.Item>
  );
}
