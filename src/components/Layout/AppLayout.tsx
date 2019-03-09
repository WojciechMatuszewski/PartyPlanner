import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import css from '@emotion/css';

const LayoutStyles = css`
  min-height: 100vh;
  width: 100vw;
  .ant-layout-content {
    min-height: calc(100vh - 64px);
    display: flex;
  }
`;

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout css={LayoutStyles}>
      <AppHeader />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};

export default AppLayout;
