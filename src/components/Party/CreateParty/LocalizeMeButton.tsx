import React from 'react';
import { Button, notification } from 'antd';
import useUserLocation, { UserLocation } from '@hooks/useUserLocation';

interface Props {
  loading: boolean;
  setLoading: (loadingState: boolean) => void;
  onLocationResolved: (location: UserLocation) => void;
}

const LocalizeMeButton: React.FC<Props> = ({
  loading,
  onLocationResolved,
  setLoading
}) => {
  const getUserAddress = useUserLocation();

  async function handleButtonClick() {
    setLoading(true);
    const { error, data } = await getUserAddress();

    if (error) {
      notification.error({
        message: 'An error occured',
        description:
          'Page was not able to automatically fetch your location, please enter it manually'
      });
    }
    setLoading(false);
    if (data) {
      onLocationResolved(data);
    }
  }

  return (
    <Button
      type="dashed"
      block={false}
      onClick={handleButtonClick}
      loading={loading}
      data-testid="LocalizeMeButton"
    >
      Localize me
    </Button>
  );
};

export default LocalizeMeButton;
