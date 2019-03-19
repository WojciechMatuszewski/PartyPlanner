import React from 'react';
import { Menu, Icon, Drawer } from 'antd';
import useMedia from '@hooks/useMedia';
import { ApolloConsumer } from 'react-apollo';

import Link from 'next/link';
import { MeQueryComponent } from '@generated/graphql';
import { NoticeIcon } from 'ant-design-pro';
import css from '@emotion/css';

import UserDefaultAvatar from '@components/UserDefaultAvatar';
import { WithRouterProps, withRouter } from 'next/router';
import { handleLogout } from '@components/Authentication/AuthService';

const MobileDrawerStyles = css`
  .ant-menu {
    border-right: 0;
  }
  .ant-drawer-body {
    padding: 0;
  }
`;

const NoticeIconMenuItemStyles = css`
  padding: 0 !important;
  .antd-pro-notice-icon-noticeButton {
    padding: 0 20px;
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
`;

const DesktopHeader: React.FC<{ currentRouterPath: string }> = ({
  currentRouterPath
}) => {
  return (
    <ApolloConsumer>
      {client => (
        <MeQueryComponent fetchPolicy="cache-first">
          {({ data }) => (
            <Menu
              selectedKeys={[currentRouterPath]}
              theme="light"
              mode="horizontal"
              style={{ lineHeight: '64px', display: 'flex' }}
            >
              <Menu.Item key="/dashboard">
                <Link href="/dashboard">
                  <a>Dashboard</a>
                </Link>
              </Menu.Item>

              <Menu.Item key="/calendar">
                <Link href="/calendar">
                  <a>Calendar</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/chat">
                <Link href="/chat">
                  <a>Chat</a>
                </Link>
              </Menu.Item>

              <Menu.Item
                style={{ marginLeft: 'auto' }}
                css={[NoticeIconMenuItemStyles]}
              >
                <NoticeIcon bell={<Icon type="user" />}>
                  <NoticeIcon.Tab
                    list={[]}
                    title="Friends Requests"
                    skeletonProps={{}}
                  />
                </NoticeIcon>
              </Menu.Item>

              <Menu.Item css={[NoticeIconMenuItemStyles]}>
                <NoticeIcon bell={<Icon type="message" />}>
                  <NoticeIcon.Tab
                    list={[]}
                    title="Friends Requests"
                    skeletonProps={{}}
                  />
                </NoticeIcon>
              </Menu.Item>

              <Menu.Item key="/user-profile">
                <Link href="/user-profile">
                  <a>
                    <UserDefaultAvatar
                      firstName={data && data.me ? data.me.firstName : ''}
                      lastName={data && data.me ? data.me.lastName : ''}
                    />
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item onClick={() => handleLogout(client)}>Logout</Menu.Item>
            </Menu>
          )}
        </MeQueryComponent>
      )}
    </ApolloConsumer>
  );
};

const MobileHeader: React.FC<{ currentRouterPath: string }> = ({
  currentRouterPath
}) => {
  const [drawerVisible, setDrawerVisible] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Drawer
        onClose={() => setDrawerVisible(false)}
        css={MobileDrawerStyles}
        visible={drawerVisible}
        maskClosable={true}
        closable={true}
        title="Navigation"
      >
        <Menu mode="vertical" theme="light" selectedKeys={[currentRouterPath]}>
          <Menu.Item onClick={() => setDrawerVisible(false)} key="/dashboard">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </Menu.Item>
          <Menu.Item onClick={() => setDrawerVisible(false)} key="/calendar">
            <Link href="/calendar">
              <a>Calendar</a>
            </Link>
          </Menu.Item>
          <Menu.Item onClick={() => setDrawerVisible(false)} key="/chat">
            <Link href="/chat">
              <a>Chat</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
      <ApolloConsumer>
        {client => (
          <MeQueryComponent fetchPolicy="cache-first">
            {({ data }) => (
              <Menu
                css={[AuthMobileVerySmallStyles]}
                selectedKeys={[currentRouterPath]}
                theme="light"
                mode="horizontal"
                style={{ lineHeight: '64px', display: 'flex' }}
              >
                <Menu.Item
                  style={{ marginLeft: 'auto' }}
                  css={[NoticeIconMenuItemStyles]}
                >
                  <NoticeIcon bell={<Icon type="user" />}>
                    <NoticeIcon.Tab
                      list={[]}
                      title="Friends Requests"
                      skeletonProps={{}}
                    />
                  </NoticeIcon>
                </Menu.Item>
                <Menu.Item css={[NoticeIconMenuItemStyles]}>
                  <NoticeIcon bell={<Icon type="message" />}>
                    <NoticeIcon.Tab
                      list={[]}
                      title="Friends Requests"
                      skeletonProps={{}}
                    />
                  </NoticeIcon>
                </Menu.Item>
                <Menu.Item key="/user-profile">
                  <Link href="/user-profile">
                    <a>
                      <UserDefaultAvatar
                        firstName={data && data.me ? data.me.firstName : ''}
                        lastName={data && data.me ? data.me.lastName : ''}
                      />
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={() => handleLogout(client)}>
                  <Icon type="disconnect" />
                </Menu.Item>
                <Menu.Item onClick={() => setDrawerVisible(true)}>
                  <Icon type="bars" />
                </Menu.Item>
              </Menu>
            )}
          </MeQueryComponent>
        )}
      </ApolloConsumer>
    </React.Fragment>
  );
};

const AppAuthenticatedHeader: React.FC<WithRouterProps> = ({ router }) => {
  const isOnMobile = useMedia('(max-width:800px)');
  const routerCurrentPath =
    router && router.pathname ? router.pathname : '/dashboard';
  return isOnMobile ? (
    <MobileHeader currentRouterPath={routerCurrentPath} />
  ) : (
    <DesktopHeader currentRouterPath={routerCurrentPath} />
  );
};

export default withRouter(AppAuthenticatedHeader);
