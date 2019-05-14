import React from 'react';
import { Menu, Icon, Drawer } from 'antd';
import useMedia from '@hooks/useMedia';
import { ApolloConsumer } from 'react-apollo';
import SignOutIcon from '@customIcons/sign-out-alt.svg';
import Link from 'next/link';
import { MeQueryComponent, useMeQuery } from '@generated/graphql';

import css from '@emotion/css';
import { WithRouterProps, withRouter } from 'next/router';
import { handleLogout } from '@components/Authentication/AuthService';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import UserAvatar from '@components/UserDefaultAvatar';
import UserPresenceReporter from '@components/UserPresenceReporter';

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
              <Menu.Item key="/chats">
                <Link href="/chats">
                  <a>Chats</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/parties">
                <Link href="/parties">
                  <a>Your Parties</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="/user-profile" style={{ marginLeft: 'auto' }}>
                <Link href="/user-profile">
                  <a>
                    <UserAvatar userData={data && data.me ? data.me : {}} />
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
          <Menu.Item onClick={() => setDrawerVisible(false)} key="/chats">
            <Link href="/chats">
              <a>Chats</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/parties">
            <Link href="/parties">
              <a>Your Parties</a>
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
                <Menu.Item key="/user-profile" style={{ marginLeft: 'auto' }}>
                  <Link href="/user-profile">
                    <a>
                      <UserAvatar userData={data && data.me ? data.me : {}} />
                    </a>
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={() => handleLogout(client)}>
                  <Icon component={SignOutIcon} css={[CustomIconStyles]} />
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

  const { data: meData } = useMeQuery({ fetchPolicy: 'cache-first' });

  if (!meData || !meData.me) return null;

  return (
    <React.Fragment>
      <UserPresenceReporter userId={meData.me.id} />
      {isOnMobile ? (
        <MobileHeader currentRouterPath={routerCurrentPath} />
      ) : (
        <DesktopHeader currentRouterPath={routerCurrentPath} />
      )}
    </React.Fragment>
  );
};

export default withRouter(AppAuthenticatedHeader);
