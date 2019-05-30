import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

interface Props {
  currentRouterPath: string;
}
const AppNotAuthenticatedHeader: React.FC<Props> = ({ currentRouterPath }) => {
  return (
    <Menu
      selectedKeys={[currentRouterPath]}
      theme="light"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/auth-login">
        <Link href="/auth-login" as="/login">
          <a>Login</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/auth-register">
        <Link href="/auth-register" as="/register">
          <a>Register</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default AppNotAuthenticatedHeader;
