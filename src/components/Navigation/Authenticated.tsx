import PartyInvitesNoticeIcon from '@components/Party/PartyInvites/PartyInvitesNoticeIcon';
import FriendInvites from '@components/User/FriendInvites/FriendInvites';
import UserAvatar from '@components/User/UserDefaultAvatar';
import UserPresenceReporter from '@components/User/UserPresenceReporter';
import SignOutIcon from '@customIcons/sign-out-alt.svg';
import css from '@emotion/css';
import { MeQueryMe, useMeQuery } from '@generated/graphql';
import { handleLogout } from '@services/AuthService';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Drawer, Icon, Menu } from 'antd';
import Link from 'next/link';
import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import { HeaderLoadingData } from '.';
import NavJoyride from './NavJoyride';

const MobileDrawerStyles = css`
  .ant-menu {
    border-right: 0;
  }
  .ant-drawer-body {
    padding: 0;
  }
`;

const AuthMobileVerySmallStyles = css`
  @media screen and (max-width: 320px) {
    display: flex;
    .ant-menu-item {
      padding: 0 15px;
    }
    .antd-pro-notice-icon-noticeButton {
      padding: 0 15px;
    }
  }

  .anticon {
    margin-right: 0 !important;
  }

  .ant-menu-item {
    ${FlexBoxFullCenteredStyles};
  }
`;

const CustomIconStyles = css`
  font-size: 16px !important;
  color: #8c8c8c !important;
`;

const NoticeIconStyles = css`
  .ant-badge i {
    margin-right: 0;
  }
  padding: 0;
  & > span {
    padding: 0 20px;
  }
`;

interface AuthenticatedHeaderVariantProps {
  userData: MeQueryMe;
  currentRouterPath: string;
}

const DesktopHeader: React.FC<AuthenticatedHeaderVariantProps> = props => {
  return (
    <React.Fragment>
      <NavJoyride />

      <ApolloConsumer>
        {client => (
          <Menu
            selectedKeys={[props.currentRouterPath]}
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '64px', display: 'flex' }}
          >
            <Menu.Item key="/user-dashboard">
              <Link href="/user-dashboard" as="/user/dashboard">
                <a>Dashboard</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="/user-calendar">
              <Link href="/user-calendar" as="/user/calendar">
                <a>Calendar</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/party-chats">
              <Link href="/party-chats" as="/party/chats">
                <a>Chats</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/party-parties">
              <Link href="/party-parties" as="/party/parties">
                <a>Parties</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="/user-people">
              <Link href="/user-people" as="/user/people">
                <a>People</a>
              </Link>
            </Menu.Item>

            <Menu.Item
              css={[NoticeIconStyles]}
              style={{ marginLeft: 'auto' }}
              className="party-invitations"
            >
              <PartyInvitesNoticeIcon userId={props.userData.id} />
            </Menu.Item>

            <Menu.Item css={[NoticeIconStyles]} className="friend-invitations">
              <FriendInvites userId={props.userData.id} />
            </Menu.Item>

            <Menu.Item key="/user-profile" className="user-profile">
              <Link href="/user-profile" as="/user/profile">
                <a>
                  <UserAvatar userData={props.userData} />
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item onClick={async () => await handleLogout(client)}>
              Logout
            </Menu.Item>
          </Menu>
        )}
      </ApolloConsumer>
    </React.Fragment>
  );
};

const MobileHeader: React.FC<AuthenticatedHeaderVariantProps> = props => {
  const [drawerVisible, setDrawerVisible] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <NavJoyride />
      <Drawer
        onClose={() => setDrawerVisible(false)}
        css={MobileDrawerStyles}
        visible={drawerVisible}
        maskClosable={true}
        closable={true}
        title="Navigation"
      >
        <Menu
          mode="vertical"
          theme="light"
          selectedKeys={[props.currentRouterPath]}
        >
          <Menu.Item
            onClick={() => setDrawerVisible(false)}
            key="/user-dashboard"
          >
            <Link href="/user-dashboard" as="/user/dashboard">
              <a>Dashboard</a>
            </Link>
          </Menu.Item>
          <Menu.Item
            onClick={() => setDrawerVisible(false)}
            key="/user-calendar"
          >
            <Link href="/user-calendar" as="/user/calendar">
              <a>Calendar</a>
            </Link>
          </Menu.Item>
          <Menu.Item onClick={() => setDrawerVisible(false)} key="/party-chats">
            <Link href="/party-chats" as="/party/chats">
              <a>Chats</a>
            </Link>
          </Menu.Item>
          <Menu.Item
            key="/party-parties"
            onClick={() => setDrawerVisible(false)}
          >
            <Link href="/party-parties" as="/party/parties">
              <a>Parties</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/user-people" onClick={() => setDrawerVisible(false)}>
            <Link href="/user-people" as="/user/people">
              <a>People</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>

      <ApolloConsumer>
        {client => (
          <Menu
            css={[AuthMobileVerySmallStyles]}
            selectedKeys={[props.currentRouterPath]}
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '64px', display: 'flex' }}
          >
            <Menu.Item
              css={[NoticeIconStyles]}
              style={{ marginLeft: 'auto' }}
              className="party-invitations"
            >
              <PartyInvitesNoticeIcon userId={props.userData.id} />
            </Menu.Item>

            <Menu.Item css={[NoticeIconStyles]} className="friend-invitations">
              <FriendInvites userId={props.userData.id} />
            </Menu.Item>

            <Menu.Item key="/user-profile" className="user-profile">
              <Link href="/user-profile" as="/user/profile">
                <a>
                  <UserAvatar userData={props.userData} />
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item onClick={async () => await handleLogout(client)}>
              <Icon component={SignOutIcon} css={[CustomIconStyles]} />
            </Menu.Item>
            <Menu.Item onClick={() => setDrawerVisible(true)}>
              <Icon type="bars" />
            </Menu.Item>
          </Menu>
        )}
      </ApolloConsumer>
    </React.Fragment>
  );
};

export interface AuthenticatedHeaderProps {
  currentRouterPath: string;
  isOnMobile: boolean;
}

const AppAuthenticatedHeader: React.FC<AuthenticatedHeaderProps> = props => {
  const { data, loading } = useMeQuery();
  if (!data || !data.me || loading) return <HeaderLoadingData />;
  return (
    <React.Fragment>
      <UserPresenceReporter userId={data.me.id} />
      {props.isOnMobile ? (
        <MobileHeader
          userData={data.me}
          currentRouterPath={props.currentRouterPath}
        />
      ) : (
        <DesktopHeader
          userData={data.me}
          currentRouterPath={props.currentRouterPath}
        />
      )}
    </React.Fragment>
  );
};

export default AppAuthenticatedHeader;
