import React from 'react';
import LocalizeMeButton from './LocalizeMeButton';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import SearchForLocation from './CreatePartySearchForLocation';
import { UserLocation } from '@hooks/useUserLocation';
import css from '@emotion/css';

const MobilePartyLocationWrapperStyles = css`
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
`;

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
    ${MobilePartyLocationWrapperStyles};
  }
`;

export interface LocalizeMeButtonState {
  loading: boolean;
  location: UserLocation;
}

const initialLocalizeMeButtonState: LocalizeMeButtonState = {
  loading: false,
  location: {
    coords: { latitude: 0, longitude: 0 },
    placeName: ''
  }
};

enum LocalizeMeButtonActions {
  setLoading = 'SET_LOADING',
  setLocation = 'SET_LOCATION'
}

export interface SetLoadingAction {
  type: LocalizeMeButtonActions.setLoading;
  payload: boolean;
}

export interface SetLocationAction {
  type: LocalizeMeButtonActions.setLocation;
  payload: UserLocation;
}

export const setLocalizeMeButtonLoading = (
  loading: boolean
): SetLoadingAction => ({
  type: LocalizeMeButtonActions.setLoading,
  payload: loading
});

export const setLocalizeMeButtonLocation = (
  location: UserLocation
): SetLocationAction => ({
  type: LocalizeMeButtonActions.setLocation,
  payload: location
});

function reducer(
  state: LocalizeMeButtonState = initialLocalizeMeButtonState,
  action: SetLoadingAction | SetLocationAction
): LocalizeMeButtonState {
  switch (action.type) {
    case LocalizeMeButtonActions.setLoading:
      return { ...state, loading: action.payload };
    case LocalizeMeButtonActions.setLocation:
      action;
      return { ...state, loading: false, location: action.payload };
    default:
      return state;
  }
}

interface Props {
  useMobileStyles?: boolean;
}

const CreatePartyLocation: React.FC<Props> = ({ useMobileStyles }) => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialLocalizeMeButtonState
  );

  return (
    <PartyLocationWrapper
      css={[useMobileStyles ? MobilePartyLocationWrapperStyles : undefined]}
    >
      <SearchForLocation state={state} />
      <LocalizeMeButton
        loading={state.loading}
        setLoading={handleButtonSetLoading}
        onLocationResolved={handleButtonLocationResolved}
      />
    </PartyLocationWrapper>
  );

  function handleButtonSetLoading(loadingState: boolean) {
    dispatch(setLocalizeMeButtonLoading(loadingState));
  }
  function handleButtonLocationResolved(location: UserLocation) {
    dispatch(setLocalizeMeButtonLocation(location));
  }
};

export default React.memo(CreatePartyLocation);
