import React from 'react';
import { Layout, Menu } from 'antd';
import css from '@emotion/css';

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

const AppHeader: React.FC = () => {
  return (
    <Layout.Header css={LayoutHeaderStyles} tagName="header">
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default AppHeader;
