import React from 'react';
import { Button, notification } from 'antd';
import useUserLocation from '@hooks/useUserLocation';

const LocalizeMeButton: React.FC = () => {
  const getUserAddress = useUserLocation();
  const [loading, setLoading] = React.useState<boolean>(false);

  async function handleButtonClick() {
    setLoading(true);
    const { error } = await getUserAddress();
    if (error) {
      notification.error({
        message: 'An error occured',
        description:
          'Page was not able to automatically fetch your location, please enter it manually'
      });
    }
    setLoading(false);
  }

  return (
    <Button
      type="dashed"
      block={false}
      onClick={handleButtonClick}
      loading={loading}
    >
      Localize me
    </Button>
  );
};

export default LocalizeMeButton;
