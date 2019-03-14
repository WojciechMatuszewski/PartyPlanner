import React from 'react';
import { Select, Spin, Empty } from 'antd';
import axios, { Canceler, AxiosResponse } from 'axios';
import axiosMapBoxInstance from '@axios/axiosMapBoxInstance';
import { useRxjsTypeahead } from '@hooks/useRxjsTypeahead';
import { UserLocation } from '@hooks/useUserLocation';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

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
  onLocationSelected: (location: UserLocation) => void;
}

const SearchForLocation: React.FC<Props> = () => {
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

  const {
    state,
    inputProps: { onChange, value }
  } = useRxjsTypeahead(handleLocationSearch, axiosResponseTransformer);

  return (
    <Select
      allowClear={true}
      showSearch={true}
      onSearch={onChange}
      onChange={onChange}
      dropdownMatchSelectWidth={true}
      showArrow={true}
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
  );
};

export default SearchForLocation;
