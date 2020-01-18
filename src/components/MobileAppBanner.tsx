import React from 'react';
import styled from '@emotion/styled';
import { Icon } from 'antd';
import { isBrowser } from '@apolloSetup/initApollo';
import useLocalStorage from '@hooks/useLocalStorage';
import { trapEvent } from '@shared/functionUtils';

const LOCAL_STORAGE_KEY = 'APP_BANNER_SHOWN';

const BadgeWrapper = styled.a`
  width: 100%;
  display: block;
  position: relative;
  height: 60px;
  color: rgb(81, 83, 85);
  text-decoration: none;
  border-bottom: 1px solid #e8e8e8;
  img {
    display: block;
    height: 60px;
    width: auto;
  }
`;

const CloseIconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  width: 24px;
  height: 24px;
`;

function isCorrectUserAgent() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('android') > -1;
}

export default function MobileAppBanner() {
  const { saveToStorage, retrieveFromStorage } = useLocalStorage(
    LOCAL_STORAGE_KEY
  );

  const hrefRef = React.useRef<HTMLAnchorElement | null>(null);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!isBrowser() || !isCorrectUserAgent()) return;
    const storagePayload = retrieveFromStorage();
    if (storagePayload != 'true') {
      setVisible(true);
    }
  }, []);

  function handleOnLinkClick() {
    // trap native event, create new one
    // this is to make sure that we have time to save to storage and setState
    saveToStorage('true');
    setVisible(false);
    if (!hrefRef.current) return;
    const event = new MouseEvent('click');
    hrefRef.current.dispatchEvent(event);
  }

  function handleOnCloseClick() {
    saveToStorage('true');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <BadgeWrapper
      ref={hrefRef}
      target="_blank"
      href={process.env.NEXT_PUBLIC_MOBILE_APP_URL}
      onClick={trapEvent(handleOnLinkClick)}
    >
      <img src="/static/google-play-badge.png" alt="Get it on Google Play" />
      <CloseIconContainer onClick={trapEvent(handleOnCloseClick)}>
        <Icon type="close" style={{ fontSize: 20 }} />
      </CloseIconContainer>
    </BadgeWrapper>
  );
}
