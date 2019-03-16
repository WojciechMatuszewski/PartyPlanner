import React from 'react';
import { Menu } from 'antd';
import useMedia from '@hooks/useMedia';
import { ApolloConsumer } from 'react-apollo';
import cookie from 'cookie';
import redirect from '@apolloSetup/redirect';
import Link from 'next/link';

const DesktopHeader: React.FC = () => {
  return (
    <ApolloConsumer>
      {client => (
        <Menu theme="light" mode="horizontal" style={{ lineHeight: '64px' }}>
          <Menu.Item>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/user-profile">
              <a>Profile</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/calendar">
              <a>Calendar</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/chat">
              <a>Chat</a>
            </Link>
          </Menu.Item>
          <Menu.Item
            onClick={async () => {
              document.cookie = cookie.serialize('token', '', {
                maxAge: -1 // Expire the cookie immediately
              });
              await client.cache.reset();
              redirect({} as any, '/login');
            }}
          >
            Logout
          </Menu.Item>
        </Menu>
      )}
    </ApolloConsumer>
  );
};

const MobileHeader: React.FC = () => {
  return (
    <div>
      <h2>works</h2>
    </div>
  );
};

const AppAuthenticatedHeader: React.FC = () => {
  const isOnMobile = useMedia('(max-width:800px)');
  return isOnMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default AppAuthenticatedHeader;
