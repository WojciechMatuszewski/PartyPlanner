import React from 'react';
import { Button, notification } from 'antd';
import useUserLocation from '@hooks/useUserLocation';
import { LocalizeMeButtonState } from './CreatePartyLocation';

interface Props {
  setter: React.Dispatch<React.SetStateAction<LocalizeMeButtonState>>;
}

const LocalizeMeButton: React.FC<Props> = ({ setter }) => {
  const getUserAddress = useUserLocation();
  const [loading, setLoading] = React.useState<boolean>(false);

  async function handleButtonClick() {
    setLoading(true);
    setter(prevState => ({ ...prevState, loading: true }));
    const { error, data } = await getUserAddress();
    if (error) {
      notification.error({
        message: 'An error occured',
        description:
          'Page was not able to automatically fetch your location, please enter it manually'
      });
    }
    setter(prevState => ({ ...prevState, loading: false }));
    if (data) {
      setter({ location: data, loading: false });
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
