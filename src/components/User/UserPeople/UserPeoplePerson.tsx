import UserAvatar from '../UserDefaultAvatar';
import UserPeopleControls from './UserPeopleControls/UserPeopleControls';

import css from '@emotion/css';
import { User_PeopleConnectionEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { List } from 'antd';
import moment from 'moment';
import React from 'react';

interface Props {
  user: DeepWithoutMaybe<User_PeopleConnectionEdges>;
  style: React.CSSProperties;
}

const MetaStyles = css`
  .ant-list-item-meta-avatar {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export default function UserPeoplePerson({ user, style }: Props) {
  const {
    node: { firstName, lastName, id, createdAt }
  } = user;

  const formattedDate = moment(createdAt).format('YYYY-MM-DD HH:mm');

  return (
    <List.Item
      style={{ height: 72, ...style }}
      actions={[<UserPeopleControls controlsUserId={id} key={1} />]}
    >
      <List.Item.Meta
        css={[MetaStyles]}
        avatar={<UserAvatar userData={user.node} />}
        title={`${firstName} ${lastName}`}
        description={`Joined: ${formattedDate}`}
      />
    </List.Item>
  );
}
