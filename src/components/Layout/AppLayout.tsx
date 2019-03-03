import React from 'react';
import { Layout } from 'antd';

import AppHeader from './AppHeader';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout>
      <AppHeader />
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer style={{ background: '#001529' }}>
        some footer
      </Layout.Footer>
    </Layout>
  );
};

export default AppLayout;
