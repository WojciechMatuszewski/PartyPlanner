import UserAvatar from '../UserDefaultAvatar';
import FriendInvitesModal from './FriendInvitesModal';

import { User_FriendInvitationsConnectionEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { NoticeIcon } from 'ant-design-pro';
import { NoticeIconData } from 'ant-design-pro/lib/NoticeIcon/NoticeIconTab';
import { Icon, Typography } from 'antd';
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
  loadingMore: boolean;
  locale: any;
}

function createNoticeIconListItem(friendInvite: FriendInvite): NoticeIconData {
  const {
    node: { invitedBy }
  } = friendInvite;

  const parsedNotificationDate = moment(friendInvite.node.createdAt).calendar();

  return {
    // this forces me to assert any
    friendInvite,
    datetime: parsedNotificationDate,
    description: (
      <React.Fragment>
        <Typography.Text>
          <Typography.Text strong={true}>
            {invitedBy.firstName} {invitedBy.lastName}
          </Typography.Text>{' '}
          wants you to be his friend
        </Typography.Text>
        <Typography.Paragraph
          style={{ color: '#1890ff', marginBottom: 0 }}
          type="secondary"
        >
          Click on this notification for more actions.
        </Typography.Paragraph>
      </React.Fragment>
    ),
    avatar: <UserAvatar userData={invitedBy} />
  } as any;
}

export default function FriendInvitesNoticeIcon({
  notificationCount,
  canLoadMore,
  onLoadMore,
  friendInvites,
  subscribeToMore,
  loadingMore,
  locale
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
        style={{ zIndex: 2, background: 'red' }}
        onViewMore={onLoadMore}
        loading={loadingMore}
        bell={<Icon type="user" />}
        locale={locale}
        count={notificationCount}
        onItemClick={(itemData: any) => handleItemClick(itemData.friendInvite)}
      >
        <NoticeIcon.Tab
          style={{ zIndex: 2, background: 'red' }}
          showClear={false}
          title="Friend Invitations"
          locale={{}}
          count={notificationCount}
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
