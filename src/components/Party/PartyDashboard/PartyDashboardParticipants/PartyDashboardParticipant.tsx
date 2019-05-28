import React from 'react';
import { List, Avatar, Tag } from 'antd';
import { PartyDashboardParticipantsQueryNode } from '@generated/graphql';

interface Props {
  key: string;
  style: React.CSSProperties;
  participant: PartyDashboardParticipantsQueryNode;
}

export default function PartyDashboardParticipant(props: Props) {
  return (
    <List.Item
      key={props.key}
      style={{ ...props.style, padding: '0px 24px' }}
      actions={[<a>Manage</a>]}
    >
      <List.Item.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Wojciech Matuszewski"
        description="Joined: 22.05.2019"
      />
      <Tag color="blue">New member</Tag>
    </List.Item>
  );
}
