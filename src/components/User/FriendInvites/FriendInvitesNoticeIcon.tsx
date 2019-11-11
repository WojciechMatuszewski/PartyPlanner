import UserAvatar from '../UserDefaultAvatar';
import FriendInvitesModal from './FriendInvitesModal';

import { User_FriendInvitationsConnectionEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { NoticeIcon } from 'ant-design-pro';
import { NoticeIconData } from 'ant-design-pro/lib/NoticeIcon/NoticeIconTab';
import { Icon } from 'antd';
import { noop } from 'lodash';
import moment from 'moment';
import React from 'react';

export type FriendInvite = DeepWithoutMaybe<
  User_FriendInvitationsConnectionEdges
>;

interface Props {
  notificationCount: number;
  canLoadMore: boolean;
  onLoadMore: VoidFunction;
  friendInvites: FriendInvite[];
  subscribeToMore: VoidFunction;
}

function createNoticeIconListItem(friendInvite: FriendInvite): NoticeIconData {
  const {
    node: { invitedBy }
  } = friendInvite;
  return {
    // this forces me to assert any
    friendInvite,
    title: `${invitedBy.firstName} wants to be your friend!`,
    description: `${invitedBy.firstName} ${invitedBy.lastName} have sent you a friend invite`,
    avatar: <UserAvatar userData={invitedBy} />,
    datetime: (
      <p>{moment(friendInvite.node.createdAt).format('YYYY-MM-DD HH:mm')}</p>
    )
  } as any;
}

export default function FriendInvitesNoticeIcon({
  notificationCount,
  canLoadMore,
  onLoadMore,
  friendInvites,
  subscribeToMore
}: Props) {
  const [modalState, setModalState] = React.useState<{
    visible: boolean;
    friendInvite: FriendInvite | undefined;
  }>({
    visible: false,
    friendInvite: undefined
  });

  function toggleModalVisibility(friendInvite?: FriendInvite) {
    setModalState(prevState => ({
      visible: !prevState.visible,
      friendInvite: friendInvite ? friendInvite : prevState.friendInvite
    }));
  }

  React.useEffect(() => {
    subscribeToMore();
  }, []);

  function handleItemClick(friendInvite: FriendInvite) {
    toggleModalVisibility(friendInvite);
  }

  return (
    <React.Fragment>
      <FriendInvitesModal
        {...modalState}
        onClose={() => toggleModalVisibility()}
      />
      <NoticeIcon
        bell={<Icon type="user" />}
        count={notificationCount}
        onItemClick={(itemData: any) => handleItemClick(itemData.friendInvite)}
      >
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
    </React.Fragment>
  );
}
