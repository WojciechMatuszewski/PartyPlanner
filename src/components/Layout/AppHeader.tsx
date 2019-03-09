import React from 'react';
import { Layout, Menu } from 'antd';
import css from '@emotion/css';
import Link from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';

const LayoutHeaderStyles = css`
  padding: 0;
  .ant-menu-item.ant-menu-item-selected {
    border-top: 2px solid #1890ff;
    border-bottom: 0px solid transparent;
  }

  .ant-menu-horizontal > .ant-menu-item:hover {
    border-top: 2px solid #1890ff;
    border-bottom: 0px solid transparent;
  }

  .ant-menu-horizontal > .ant-menu-item,
  .ant-menu-horizontal > .ant-menu-submenu {
    border-bottom: 0;
  }

  box-shadow: 0 2px 8px #f0f1f2;
  z-index: 10;
`;

const AppHeader: React.FC<WithRouterProps> = ({ router }) => {
  return (
    <Layout.Header css={LayoutHeaderStyles}>
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
    </Layout.Header>
  );
};

export default withRouter(AppHeader);
