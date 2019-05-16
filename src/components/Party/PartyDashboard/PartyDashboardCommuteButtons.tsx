import React from 'react';
import { Button, Icon } from 'antd';
import styled from '@emotion/styled';
import { TransparentButtonStyles } from '@shared/styles';
import CarIcon from '@customIcons/car.svg';
import WalkingIcon from '@customIcons/walking.svg';
import BicycleIcon from '@customIcons/bicycle.svg';
import BusIcon from '@customIcons/bus.svg';
import { PartiesQueryLocation } from '@generated/graphql';

const BASE_GOOGLE_NAV_LINK =
  'https://www.google.com/maps?saddr=Current+Location';

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding-bottom: 24px !important;
  button {
    background: #eee;
    margin: 0 5px;
  }
`;

interface Props {
  location: PartiesQueryLocation;
}

const PartyDashboardCommuteButtons: React.FC<Props> = ({
  location: { latitude, longitude }
}) => {
  return (
    <ButtonsWrapper className="dashboard-content-item">
      <Button css={[TransparentButtonStyles]} size="large" shape="round">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={getGoogleMapsLinkFor('driving')}
        >
          <Icon component={CarIcon} />
        </a>
      </Button>

      <Button css={[TransparentButtonStyles]} size="large" shape="round">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={getGoogleMapsLinkFor('transit')}
        >
          <Icon component={BusIcon} />
        </a>
      </Button>
      <Button css={[TransparentButtonStyles]} size="large" shape="round">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={getGoogleMapsLinkFor('walking')}
        >
          <Icon component={WalkingIcon} />
        </a>
      </Button>
      <Button css={[TransparentButtonStyles]} size="large" shape="round">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={getGoogleMapsLinkFor('bicycling')}
        >
          <Icon component={BicycleIcon} />
        </a>
      </Button>
    </ButtonsWrapper>
  );

  function getGoogleMapsLinkFor(
    commuteType: 'driving' | 'transit' | 'bicycling' | 'walking'
  ) {
    if (commuteType == 'bicycling')
      return `${BASE_GOOGLE_NAV_LINK}&dirflg=b&daddr=${latitude},${longitude}&mode=${commuteType}`;
    if (commuteType == 'transit')
      return `${BASE_GOOGLE_NAV_LINK}&dirflg=r&daddr=${latitude},${longitude}&mode=${commuteType}`;
    else if (commuteType == 'walking')
      return `${BASE_GOOGLE_NAV_LINK}&dirflg=w&daddr=${latitude},${longitude}`;
    else
      return `${BASE_GOOGLE_NAV_LINK}&daddr=${latitude},${longitude}&driving`;
  }
};

export default PartyDashboardCommuteButtons;
