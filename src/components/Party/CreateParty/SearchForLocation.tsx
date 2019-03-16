import React from 'react';
import { Select, Spin, Empty, Form } from 'antd';
import axios, { Canceler, AxiosResponse } from 'axios';
import axiosMapBoxInstance from '@axios/axiosMapBoxInstance';
import { useRxjsTypeahead } from '@hooks/useRxjsTypeahead';
import { UserLocation } from '@hooks/useUserLocation';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { connect, FormikContext } from 'formik';
import { CreatePartyForm } from '../CreateParty';
import { LocalizeMeButtonState } from './CreatePartyLocation';

const SpinnerWrapper = styled.div`
  ${FlexBoxFullCenteredStyles};
  width: 100%;
  height: 130px;
`;

interface MapBoxLocationSearchResult {
  id: string;
  place_name: string;
  geometry: {
    coordinates: [number, number];
  };
}

interface MapBoxAxiosResponse {
  features: MapBoxLocationSearchResult[];
}

interface UserSearchedLocation extends UserLocation {
  id: string;
}

interface Props {
  state: LocalizeMeButtonState;
}

const SearchForLocation: React.FC<
  Props & {
    formik: FormikContext<CreatePartyForm>;
  }
> = ({
  formik: { setFieldValue, touched, errors },
  state: localizeMeButtonState
}) => {
  const CancelToken = axios.CancelToken;
  const axiosCanceler = React.useRef<Canceler>(() => null);
  async function handleLocationSearch(searchQuery: string) {
    axiosCanceler.current();
    return await axiosMapBoxInstance.get(
      `/geocoding/v5/mapbox.places/${searchQuery}.json?types=address&country=PL&limit=10`,
      {
        cancelToken: new CancelToken(
          (canceler: Canceler) => (axiosCanceler.current = canceler)
        )
      }
    );
  }

  function axiosResponseTransformer(
    response: AxiosResponse<MapBoxAxiosResponse>
  ): UserSearchedLocation[] {
    return response.data.features.map(feature => ({
      placeName: feature.place_name,
      id: feature.id,
      coords: {
        latitude: feature.geometry.coordinates[0],
        longitude: feature.geometry.coordinates[1]
      }
    }));
  }

  function onSelect(value: string) {
    const { placeName, coords }: UserSearchedLocation = state.results.filter(
      place => place.placeName === value
    )[0];
    setFieldValue('location', { placeName, coords });
  }

  const {
    state,
    inputProps: { onChange, value },
    helperProps: { setInputValue, setResults }
  } = useRxjsTypeahead(handleLocationSearch, axiosResponseTransformer);

  React.useEffect(() => {
    if (localizeMeButtonState.location.placeName.trim() === '') return;
    setInputValue(localizeMeButtonState.location.placeName);
    setResults([
      { ...localizeMeButtonState.location, id: Math.random().toString() }
    ]);
    setFieldValue('location', localizeMeButtonState.location);
  }, [localizeMeButtonState.location]);

  return (
    <Form.Item
      help={
        touched.location && errors.location
          ? 'Please enter a valid location'
          : null
      }
      validateStatus={
        touched.location ? (errors.location ? 'error' : 'success') : undefined
      }
      hasFeedback={true}
    >
      <Select
        disabled={localizeMeButtonState.loading}
        allowClear={true}
        showSearch={true}
        onSearch={onChange}
        onChange={value => {
          onChange(value);
          if (value == undefined) {
            setFieldValue('location', {});
          }
        }}
        onSelect={onSelect}
        dropdownMatchSelectWidth={true}
        showArrow={true}
        placeholder={
          localizeMeButtonState.loading
            ? 'Searching for your location'
            : 'Search for location...'
        }
        value={value ? value : undefined}
        notFoundContent={
          state.loading ? (
            <SpinnerWrapper>
              <Spin />
            </SpinnerWrapper>
          ) : state.results.length <= 0 ? (
            <Empty />
          ) : null
        }
      >
        {state.results.map(location => (
          <Select.Option key={location.id} value={location.placeName}>
            {location.placeName}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default connect<Props, CreatePartyForm>(SearchForLocation);
