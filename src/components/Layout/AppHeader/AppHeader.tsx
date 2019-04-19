import React from 'react';

import { withRouter, WithRouterProps } from 'next/router';
import AppNotAuthenticatedHeader from './AppNotAuthenticatedHeader';
import AppAuthenticatedHeader from './AppAuthenticatedHeader';

const AppHeader: React.FC<WithRouterProps> = ({ router }) => {
  const notAuthenticatedRoutes = ['/', '/login', '/register', '/social-auth'];

  return router ? (
    notAuthenticatedRoutes.includes(router.pathname) ? (
      <AppNotAuthenticatedHeader />
    ) : (
      <AppAuthenticatedHeader />
    )
  ) : (
    <AppNotAuthenticatedHeader />
  );
};

export default withRouter(AppHeader);
