import React from 'react';
import { withRouter, WithRouterProps } from 'next/router';
import AppNotAuthenticatedHeader from './AppNotAuthenticatedHeader';
import AppAuthenticatedHeader from './AppAuthenticatedHeader';
import useMedia from '@hooks/useMedia';
import styled from '@emotion/styled';

export const HeaderLoadingData = styled.div`
  width: 100%;
  height: 66px;
  background: white;
  border-bottom: 1px solid #e8e8e8;
`;

const AppHeader: React.FC<WithRouterProps> = ({ router }) => {
  const notAuthenticatedRoutes = [
    '/',
    '/login',
    '/register',
    '/social-auth',
    '/spotify',
    '/forgot-password',
    '/reset-password'
  ];

  const isOnMobile = useMedia('(max-width:800px)');

  if (!router) return <HeaderLoadingData />;

  return notAuthenticatedRoutes.includes(router.pathname) ? (
    <AppNotAuthenticatedHeader currentRouterPath={router.pathname} />
  ) : (
    <AppAuthenticatedHeader
      isOnMobile={isOnMobile}
      currentRouterPath={router.pathname}
    />
  );
};

export default withRouter(AppHeader);
