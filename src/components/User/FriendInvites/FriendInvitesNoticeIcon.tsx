import React from 'react';
import { NoticeIcon } from 'ant-design-pro';
import { Icon } from 'antd';
import { noop } from 'lodash';
import { User_FriendInvitationsConnectionEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import UserAvatar from '../UserDefaultAvatar';
import { NoticeIconData } from 'ant-design-pro/lib/NoticeIcon/NoticeIconTab';

type FriendInvite = User_FriendInvitationsConnectionEdges;

interface Props {
  notificationCount: number;
  canLoadMore: boolean;
  onLoadMore: VoidFunction;
  friendInvites: DeepWithoutMaybe<FriendInvite[]>;
  subscribeToMore: VoidFunction;
}

function createNoticeIconListItem(
  friendInvite: DeepWithoutMaybe<FriendInvite>
): NoticeIconData {
  const {
    node: { invitedBy }
  } = friendInvite;
  return {
    title: `${invitedBy.firstName} wants to be your friend!`,
    description: `${invitedBy.firstName} ${invitedBy.lastName} have sent you a friend invite`,
    avatar: <UserAvatar userData={invitedBy} />
  };
}

export default function FriendInvitesNoticeIcon({
  notificationCount,
  canLoadMore,
  onLoadMore,
  friendInvites,
  subscribeToMore
}: Props) {
  React.useEffect(() => {
    subscribeToMore();
  }, []);

  return (
    <NoticeIcon bell={<Icon type="user" />} count={notificationCount}>
      <NoticeIcon.Tab
        showClear={false}
        title="Friend Invitations"
        locale={{}}
        showViewMore={canLoadMore}
        onClick={noop}
        onClear={noop}
        onViewMore={onLoadMore}
        list={friendInvites.map(createNoticeIconListItem)}
      />
    </NoticeIcon>
  );
}
