import React from 'react';
import { Form, Button, Select, notification } from 'antd';
import css from '@emotion/css';

import styled from '@emotion/styled';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import axiosMapBoxInstance from '@axios/axiosMapBoxInstance';
import useBrowserGeolocation from '@hooks/useBrowserGeolocation';

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

function locateMe() {
  const { getPosition } = useBrowserGeolocation();
  async function getAddress(position: Position) {
    return await axiosMapBoxInstance.get(
      `/geocoding/v5/mapbox.places/${position!.coords.longitude},${
        position!.coords.latitude
      }.json?types=address`
    );
  }
  async function locateMe() {
    try {
      const position = (await getPosition()) as Position;
      const { data } = await getAddress(position);
      return { data, error: false };
    } catch (e) {
      return { data: null, error: true };
    }
  }
  return locateMe;
}

const CreatePartyLocation: React.FC = () => {
  const { isAvailable } = useBrowserGeolocation();
  const [isLoadingLocateMe, setIsLoadingLocateMe] = React.useState<boolean>(
    false
  );
  const [locations, setLocations] = React.useState<any[]>([]);
  const getUserAddress = locateMe();

  async function handleButtonClick() {
    setIsLoadingLocateMe(true);
    const { error } = await getUserAddress();
    if (error) {
      notification.error({
        message: 'An error occured',
        description:
          'Page was not able to automatically fetch your location, please enter it manually'
      });
    }
    setIsLoadingLocateMe(false);
  }

  async function handleLocationSearch(searchQuery: string) {
    const { data } = await axiosMapBoxInstance.get(
      `/geocoding/v5/mapbox.places/${searchQuery}.json?types=address&country=PL`
    );
    setLocations(data.features);
  }

  return (
    <FormItemButtonWrapper>
      <Form.Item
        css={[FormItemStyles]}
        validateStatus={isLoadingLocateMe ? 'validating' : undefined}
        hasFeedback={true}
      >
        <Select
          disabled={isLoadingLocateMe}
          allowClear={true}
          showSearch={true}
          dropdownMatchSelectWidth={true}
          showArrow={true}
          placeholder={
            isLoadingLocateMe
              ? 'Searching for your location...'
              : 'Type here to search for a location'
          }
          onSearch={async value => await handleLocationSearch(value)}
        >
          {locations.map((location, index) => (
            <Select.Option key={index} value={location.place_name}>
              {location.place_name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Button
        disabled={!isAvailable || isLoadingLocateMe}
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
