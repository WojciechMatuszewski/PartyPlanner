import React from 'react';
import LocalizeMeButton from './LocalizeMeButton';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import SearchForLocation from './SearchForLocation';
import { UserLocation } from '@hooks/useUserLocation';

const PartyLocationWrapper = styled.div`
  width: 100%;
  ${FlexBoxFullCenteredStyles};
  .ant-form-item {
    margin: 0;
    width: 100%;
    padding-right: 12px;
  }
  button {
    align-self: flex-start;
    margin-top: 4px;
  }
  margin-bottom: 24px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    button {
      width: 100%;
      order: 1;
      margin-top: 0;
    }
    .ant-form-item {
      order: 2;
      padding-right: 0;
    }
  }
`;

export interface LocalizeMeButtonState {
  loading: boolean;
  location: UserLocation;
}

const CreatePartyLocation: React.FC = () => {
  const [localizeMeButtonState, setLocalizeMeButtonState] = React.useState<
    LocalizeMeButtonState
  >({
    loading: false,
    location: {
      coords: { latitude: 0, longitude: 0 },
      placeName: ''
    }
  });
  return (
    <PartyLocationWrapper>
      <SearchForLocation localizeMeButtonState={localizeMeButtonState} />
      <LocalizeMeButton setter={setLocalizeMeButtonState} />
    </PartyLocationWrapper>
  );
};

export default React.memo(CreatePartyLocation);
