import React from 'react';
import { Button, notification } from 'antd';
import useUserLocation from '@hooks/useUserLocation';
import {
  LocalizeMeButtonState,
  SetLoadingAction,
  SetLocationAction,
  setLocalizeMeButtonLoading,
  setLocalizeMeButtonLocation
} from './CreatePartyLocation';

interface Props {
  state: LocalizeMeButtonState;
  dispatch: React.Dispatch<SetLoadingAction | SetLocationAction>;
}

const LocalizeMeButton: React.FC<Props> = ({ state, dispatch }) => {
  const getUserAddress = useUserLocation();

  async function handleButtonClick() {
    dispatch(setLocalizeMeButtonLoading(true));
    const { error, data } = await getUserAddress();
    if (error) {
      notification.error({
        message: 'An error occured',
        description:
          'Page was not able to automatically fetch your location, please enter it manually'
      });
    }
    dispatch(setLocalizeMeButtonLoading(false));
    if (data) {
      dispatch(setLocalizeMeButtonLocation(data));
    }
  }

  return (
    <Button
      type="dashed"
      block={false}
      onClick={handleButtonClick}
      loading={state.loading}
      data-testid="LocalizeMeButton"
    >
      Localize me
    </Button>
  );
};

export default LocalizeMeButton;
