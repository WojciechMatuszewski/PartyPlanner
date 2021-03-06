import React from 'react';
import { Layout } from 'antd';
import css from '@emotion/css';
import AppHeader from '@components/Navigation';

const LayoutStyles = css`
  min-height: 100vh;
  width: 100%;
  .ant-layout-content {
    min-height: calc(100vh - 66px);
    display: flex;
    position: relative;
    background: #fafafa;
  }
`;

const HeaderStyles = css`
  padding: 0;
  height: auto;
  /* box-shadow: 0 2px 8px #f0f1f2; */
  z-index: 2;
`;

const AppLayout: React.FC<{
  children: React.ReactNode;
  withHeader: boolean;
  hasSider: boolean;
}> = ({ children, withHeader, hasSider }) => {
  return (
    <Layout className="global-layout-wrapper" css={LayoutStyles}>
      {withHeader && (
        <header css={[HeaderStyles]}>
          <AppHeader />
        </header>
      )}
      <Layout hasSider={hasSider}>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
