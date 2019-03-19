import React from 'react';
import { Layout } from 'antd';

import css from '@emotion/css';
import AppHeader from './AppHeader/AppHeader';

const LayoutStyles = css`
  min-height: 100vh;
  width: 100%;
  .ant-layout-content {
    min-height: calc(100vh - 66px);
    display: flex;
    position: relative;
    overflow: hidden;
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
