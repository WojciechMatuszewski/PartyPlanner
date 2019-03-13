import React from 'react';
import { Form, Button, Select, notification, Spin, Empty } from 'antd';
import css from '@emotion/css';
import styled from '@emotion/styled';
import {
  FlexBoxVerticallyCenteredStyles,
  FlexBoxFullCenteredStyles
} from '@shared/styles';
import axiosMapBoxInstance from '@axios/axiosMapBoxInstance';
import useBrowserGeolocation from '@hooks/useGeolocation';
import useUserLocation from '@hooks/useUserLocation';
import axios, { AxiosResponse, Canceler } from 'axios';
import { useRxjsTypeahead } from '@hooks/useRxjsTypeahead';

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

interface MapboxLocationSearchResult {
  id: string;
  place_name: string;
}

interface MapboxAxiosResponse {
  features: MapboxLocationSearchResult[];
}

const CreatePartyLocation: React.FC = () => {
  const { isAvailable } = useBrowserGeolocation();
  const [isLoadingLocateMe, setIsLoadingLocateMe] = React.useState<boolean>(
    false
  );
  const getUserAddress = useUserLocation();
  const CancelToken = axios.CancelToken;
  const axiosCanceler = React.useRef<Canceler>(() => null);

  async function handleLocationSearch(searchQuery: string) {
    axiosCanceler.current();
    return await axiosMapBoxInstance.get(
      `/geocoding/v5/mapbox.places/${searchQuery}.json?types=address&country=PL`,
      {
        cancelToken: new CancelToken(
          canceler => (axiosCanceler.current = canceler)
        )
      }
    );
  }

  function axiosResponseTransformer(
    response: AxiosResponse<MapboxAxiosResponse>
  ): MapboxLocationSearchResult[] {
    return response.data.features;
  }

  const {
    state: locationsState,
    inputProps: {
      onChange: locationOnChangeHandler,
      value: locationInputValue
    },
    helperProps: {
      setInputValue: setLocationSearchValue,
      setResults: setLocationResults
    }
  } = useRxjsTypeahead(handleLocationSearch, axiosResponseTransformer);

  async function handleButtonClick() {
    setIsLoadingLocateMe(true);
    const { error, data } = await getUserAddress();
    if (error) {
      notification.error({
        message: 'An error occured',
        description:
          'Page was not able to automatically fetch your location, please enter it manually'
      });
      setIsLoadingLocateMe(false);
      return;
    }
    setLocationResults(data.features);
    setLocationSearchValue(data.features[0].place_name);
    setIsLoadingLocateMe(false);
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
          value={locationInputValue ? locationInputValue : undefined}
          onSelect={(value: string) => setLocationSearchValue(value)}
          notFoundContent={
            locationsState.loading ? (
              <div
                css={css`
                  ${FlexBoxFullCenteredStyles};
                  width: 100%;
                  height: 130px;
                `}
              >
                <Spin />
              </div>
            ) : (
              <Empty />
            )
          }
          placeholder={
            isLoadingLocateMe
              ? 'Searching for your location...'
              : 'Type here to search for a location'
          }
          onSearch={locationOnChangeHandler}
        >
          {locationsState.results.map(location => (
            <Select.Option key={location.id} value={location.place_name}>
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
