import React from 'react';

import { withRouter, WithRouterProps } from 'next/router';
import AppNotAuthenticatedHeader from './AppNotAuthenticatedHeader';
import AppAuthenticatedHeader from './AppAuthenticatedHeader';

const AppHeader: React.FC<WithRouterProps> = ({ router }) => {
  const notAuthenticatedRoutes = [
    '/',
    '/login',
    '/register',
    '/social-auth',
    '/spotify',
    '/forgot-password',
    '/reset-password',
    '/party'
  ];

  if (!router) return null;

  return notAuthenticatedRoutes.includes(router.pathname) ? (
    <AppNotAuthenticatedHeader />
  ) : (
    <AppAuthenticatedHeader />
  );
};

export default withRouter(AppHeader);
