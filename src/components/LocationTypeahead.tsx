import React from 'react';
import axios, { Canceler, AxiosResponse } from 'axios';
import axiosMapBoxInstance from '@axios/axiosMapBoxInstance';
import { UserLocation } from '@hooks/useUserLocation';
import { useRxjsTypeahead } from '@hooks/useRxjsTypeahead';
import { Select, Spin, Empty } from 'antd';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { callAll } from '@shared/functionUtils';
import useCancelableAxiosGet from '@hooks/useCancelableAxiosGet';

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

export interface UserSearchedLocation extends UserLocation {
  id: string;
}

interface MapBoxAxiosResponse {
  features: MapBoxLocationSearchResult[];
}

interface OptionalProps {
  onChange: (value: string) => void;
  results: UserSearchedLocation[];
  value: string;
}

const optionalProps: OptionalProps = {
  value: '',
  results: [],
  onChange: () => null
};

type Props = {
  disabled: boolean;
  placeholder: string;
  onSelect: (
    selectedValue: string,
    locationsInState: UserSearchedLocation[]
  ) => void;
} & typeof optionalProps;
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30695#issuecomment-440933780
const LocationTypeahead = (props: Props) => {
  const { cancelableGet } = useCancelableAxiosGet(axiosMapBoxInstance, {
    autoCancel: true
  });

  const {
    state,
    inputProps: { onChange: typeaheadOnChange, value },
    helperProps: { setInputValue, setResults }
  } = useRxjsTypeahead(handleLocationSearch, axiosResponseTransformer);

  React.useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  React.useEffect(() => {
    if (props.results.length <= 0) return;
    setResults(props.results);
  }, [props.results]);

  return (
    <Select
      data-testid="ant-select"
      disabled={props.disabled}
      allowClear={true}
      showSearch={true}
      onSearch={callAll(typeaheadOnChange, props.onChange)}
      value={value ? value : undefined}
      onChange={callAll(setInputValue, props.onChange)}
      dropdownMatchSelectWidth={true}
      onSelect={value => props.onSelect(value, state.results)}
      placeholder={props.placeholder}
      showArrow={true}
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
  async function handleLocationSearch(searchQuery: string) {
    return await cancelableGet(
      `/geocoding/v5/mapbox.places/${searchQuery}.json?types=address&country=PL&limit=10`
    );
  }

  async function axiosResponseTransformer(
    response: AxiosResponse<MapBoxAxiosResponse>
  ): Promise<UserSearchedLocation[]> {
    return response.data.features.map(feature => ({
      placeName: feature.place_name,
      id: feature.id,
      coords: {
        latitude: feature.geometry.coordinates[0],
        longitude: feature.geometry.coordinates[1]
      }
    }));
  }
};

LocationTypeahead.defaultProps = optionalProps;

export default LocationTypeahead;
