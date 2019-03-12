import React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import css from '@emotion/css';
import { isBrowser } from '@apolloSetup/initApollo';
import styled from '@emotion/styled';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import axiosMapBoxInstance from '@axios/axiosMapBoxInstance';

const FormItemStyles = css`
  flex: 1;
  margin-right: 12px;
`;

const FormItemButtonWrapper = styled.div`
  ${FlexBoxVerticallyCenteredStyles}
  width: 100%;
  button {
    margin-bottom: 24px;
  }
`;

function useBrowserGeolocation() {
  const [state, setState] = React.useState<{
    isAvailable: boolean | 'unknown';
    position: Position | null;
  }>({
    isAvailable: isBrowser() ? !!navigator.geolocation : 'unknown',
    position: null
  });

  React.useEffect(() => {
    if (state.isAvailable === 'unknown') {
      setState(prevState => ({
        ...prevState,
        isAvailable: !!navigator.geolocation
      }));
    }
  }, []);

  function getPosition(): Promise<Position | undefined> {
    return new Promise(resolve => {
      if (!state.isAvailable) resolve();
      navigator.geolocation.getCurrentPosition(position => {
        setState({ isAvailable: true, position });
        resolve(position);
      });
    });
  }

  return { ...state, getPosition };
}

const CreatePartyLocation: React.FC = () => {
  const { isAvailable, getPosition } = useBrowserGeolocation();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function handleButtonClick() {
    const position = await getPosition();
    if (!position) return;
    setIsLoading(true);
    await axiosMapBoxInstance.get(
      `/geocoding/v5/mapbox.places/${position.coords.longitude},${
        position.coords.latitude
      }.json?types=address`
    );
    setIsLoading(false);
  }

  return (
    <FormItemButtonWrapper>
      <Form.Item
        css={[FormItemStyles]}
        validateStatus={isLoading ? 'validating' : undefined}
        hasFeedback={true}
      >
        <Input
          prefix={<Icon type="environment" />}
          placeholder={
            isLoading ? 'Searching for your location...' : 'Pick location'
          }
        />
      </Form.Item>
      <Button
        disabled={!isAvailable}
        onClick={handleButtonClick}
        type="dashed"
        block={false}
        className="button"
      >
        Localize me
      </Button>
    </FormItemButtonWrapper>
  );
};

export default CreatePartyLocation;
