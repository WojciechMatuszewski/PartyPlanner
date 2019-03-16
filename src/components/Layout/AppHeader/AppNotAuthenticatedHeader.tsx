import React from 'react';
import { withRouter, WithRouterProps } from 'next/router';
import { Menu } from 'antd';
import Link from 'next/link';

const AppNotAuthenticatedHeader: React.FC<WithRouterProps> = ({ router }) => {
  return (
    <Menu
      selectedKeys={[router && router.pathname ? router.pathname : '/']}
      theme="light"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/login">
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/register">
        <Link href="register">
          <a>Register</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(AppNotAuthenticatedHeader);
