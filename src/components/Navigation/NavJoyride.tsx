import React from 'react';
import Joyride, { Step, CallBackProps } from 'react-joyride';
import { Typography } from 'antd';
import { isBrowser } from '@apolloSetup/initApollo';
import JoyrideTooltip from '@shared/JoyrideTooltip';
import useLocalStorage from '@hooks/useLocalStorage';

export const ONBOARDING_LOCAL_STORAGE_KEY = 'JOYRIDE_SHOWN';

const steps: Step[] = [
  {
    target: '.party-invitations',
    title: 'Party Invitations',
    disableBeacon: true,
    content: (
      <Typography.Paragraph>
        This widget will let you know if anyone has invited you to his party.
      </Typography.Paragraph>
    )
  },
  {
    target: '.friend-invitations',
    title: 'Friend Invitations',
    disableBeacon: true,
    content: (
      <Typography.Paragraph>
        This widget will let you know if anyone invited you to be his friend.
        You can invite others in <i>People</i> tab.
      </Typography.Paragraph>
    )
  },
  {
    target: '.user-profile',
    title: 'Your Profile',
    disableBeacon: true,
    content: (
      <Typography.Paragraph>
        Here you can change information about you,
        <Typography.Text strong={true}>
          your privacy settings and push notification settings
        </Typography.Text>
        .
      </Typography.Paragraph>
    )
  }
];

function NavJoyride() {
  const [isSafe, setIsSafe] = React.useState(false);
  const isMounted = React.useRef(false);

  const { retrieveFromStorage, saveToStorage } = useLocalStorage(
    ONBOARDING_LOCAL_STORAGE_KEY
  );

  function shouldShowJoyride() {
    const valueFromStorage = retrieveFromStorage();
    return valueFromStorage == undefined || valueFromStorage != 'true';
  }

  React.useEffect(() => {
    if (!isBrowser()) return;
    isMounted.current = true;
    setTimeout(() => isMounted.current && setIsSafe(true), 1000);
    return () => void (isMounted.current = false);
  }, []);

  function handleCallback({ status }: CallBackProps) {
    if (status == 'finished' || status == 'skipped') {
      saveToStorage('true');
    }
  }

  if (!isSafe || !shouldShowJoyride()) return null;
  return (
    <Joyride
      callback={handleCallback}
      run={true}
      steps={steps}
      tooltipComponent={JoyrideTooltip}
      continuous={true}
      scrollToFirstStep={true}
      showSkipButton={true}
      styles={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.45)'
        }
      }}
    />
  );
}

export default NavJoyride;
