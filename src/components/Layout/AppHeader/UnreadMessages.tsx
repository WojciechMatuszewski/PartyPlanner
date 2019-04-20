import React from 'react';
import { NoticeIcon } from 'ant-design-pro';
import { Icon, Typography } from 'antd';
import { useMeQuery, MeQueryUnreadMessages } from '@generated/graphql';
import { INoticeIconData } from 'ant-design-pro/lib/NoticeIcon/NoticeIconTab';
import UserAvatar from '@components/UserDefaultAvatar';

const UnreadMessages: React.FC = () => {
  const { data, loading } = useMeQuery();

  return (
    <NoticeIcon
      // onLoadMore={() => console.log('should load more;')}
      count={
        data && data.me && data.me.unreadMessages
          ? data.me.unreadMessages.length
          : 0
      }
      bell={<Icon type="message" />}
      loading={loading}
    >
      <NoticeIcon.Tab
        loading={true}
        list={
          data && data.me
            ? mapUnreadToNoticeIconList(data.me.unreadMessages || [])
            : []
        }
        loadedAll={false}
        title="Unread Messages"
        skeletonProps={{}}
      />
    </NoticeIcon>
  );

  function mapUnreadToNoticeIconList(
    unreadMessages: MeQueryUnreadMessages[]
  ): INoticeIconData[] {
    return unreadMessages.map(mappingFunction);
  }

  function mappingFunction(message: MeQueryUnreadMessages) {
    return {
      avatar: <UserAvatar userData={message.author} />,
      title: message.author.firstName,
      description: (
        <Typography.Paragraph ellipsis={{ rows: 2, expandable: true }}>
          {message.content}
        </Typography.Paragraph>
      )
    };
  }
};

export default UnreadMessages;
