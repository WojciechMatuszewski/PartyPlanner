import React from 'react';
import { Button, Icon } from 'antd';
import styled from '@emotion/styled';
import { TransparentButtonStyles } from '@shared/styles';
import CarIcon from '@customIcons/car.svg';
import WalkingIcon from '@customIcons/walking.svg';
import BicycleIcon from '@customIcons/bicycle.svg';
import BusIcon from '@customIcons/bus.svg';

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding-bottom: 24px !important;
  button {
    margin: 0 5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.015);
  }
`;

const PartyDashboardCommuteButtons: React.FC = () => {
  return (
    <ButtonsWrapper className="dashboard-content-item">
      <Button css={[TransparentButtonStyles]} size="large" shape="round">
        <Icon component={CarIcon} />
      </Button>
      <Button css={[TransparentButtonStyles]} size="large" shape="round">
        <Icon component={BusIcon} />
      </Button>
      <Button css={[TransparentButtonStyles]} size="large" shape="round">
        <Icon component={WalkingIcon} />
      </Button>
      <Button css={[TransparentButtonStyles]} size="large" shape="round">
        <Icon component={BicycleIcon} />
      </Button>
    </ButtonsWrapper>
  );
};

export default PartyDashboardCommuteButtons;
