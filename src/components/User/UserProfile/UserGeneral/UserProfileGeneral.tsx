import React from 'react';
import { Button, Icon } from 'antd';
import styled from '@emotion/styled';
import useLocalStorage from '@hooks/useLocalStorage';
import { ONBOARDING_LOCAL_STORAGE_KEY } from '@components/Navigation/NavJoyride';
import { withRouter, WithRouterProps } from 'next/router';

const ButtonsContainer = styled.div`
  button:first-of-type {
    margin-right: 12px;
  }

  @media screen and (max-width: 680px) {
    button:first-of-type {
      margin-right: 0;
      margin-bottom: 12px;
    }
    button {
      width: 100%;
    }
  }
`;

function UserProfileGeneral({ router }: WithRouterProps) {
  const { saveToStorage } = useLocalStorage(ONBOARDING_LOCAL_STORAGE_KEY);
  function onGoThroughOnboardingClick() {
    if (!router) return;
    saveToStorage('false');
    router.push('/user-dashboard', '/user/dashboard');
  }

  function onGetMobileAppClick() {
    window.open(process.env.NEXT_PUBLIC_MOBILE_APP_URL, '_blank');
  }

  return (
    <ButtonsContainer>
      <Button onClick={onGoThroughOnboardingClick}>
        <Icon type="reload" />
        Go through onboarding
      </Button>
      <Button onClick={onGetMobileAppClick}>
        <Icon type="cloud-download" />
        Get mobile app
      </Button>
    </ButtonsContainer>
  );
}

export default withRouter(UserProfileGeneral);
