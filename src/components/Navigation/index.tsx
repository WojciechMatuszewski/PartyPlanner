import React from 'react';
import { withRouter, WithRouterProps } from 'next/router';
import AppNotAuthenticatedHeader from './NotAuthenticated';
import AppAuthenticatedHeader from './Authenticated';
import useMedia from '@hooks/useMedia';
import styled from '@emotion/styled';
import { NOT_AUTHENTICATED_ROUTES } from '@pages/_app';

export const HeaderLoadingData = styled.div`
  width: 100%;
  height: 66px;
  background: white;
  border-bottom: 1px solid #e8e8e8;
`;

const AppHeader: React.FC<WithRouterProps> = ({ router }) => {
  const isOnMobile = useMedia('(max-width:800px)');

  if (!router) return <HeaderLoadingData />;

  return NOT_AUTHENTICATED_ROUTES.includes(router.pathname) ? (
    <AppNotAuthenticatedHeader currentRouterPath={router.pathname} />
  ) : (
    <AppAuthenticatedHeader
      isOnMobile={isOnMobile}
      currentRouterPath={router.pathname}
    />
  );
};

export default withRouter(AppHeader);
