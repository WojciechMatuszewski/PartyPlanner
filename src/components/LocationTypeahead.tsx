import React from 'react';
import { AxiosResponse } from 'axios';
import axiosMapBoxInstance from '@axios/axiosMapBoxInstance';
import { UserLocation } from '@hooks/useUserLocation';
import { useRxjsTypeahead } from '@hooks/useRxjsTypeahead';
import { Select, Spin, Empty } from 'antd';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { callAll } from '@shared/functionUtils';
import useCancelableAxiosGet from '@hooks/useCancelableAxiosGet';
import { always } from 'ramda';

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
  queryTypes: string;
}

const optionalProps: OptionalProps = {
  value: '',
  results: [],
  onChange: () => null,
  queryTypes: 'address'
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
      onSearch={handleOnSearch}
      labelInValue={false}
      filterOption={always(true)}
      value={value ? value : undefined}
      onChange={handleOnChange}
      dropdownMatchSelectWidth={true}
      onSelect={handleOnSelect}
      placeholder={props.placeholder}
      showArrow={true}
      notFoundContent={
        state.loading ? (
          <SpinnerWrapper>
            <Spin />
          </SpinnerWrapper>
        ) : state.results.length <= 0 ? (
          <Empty description="No location found" />
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
      `/geocoding/v5/mapbox.places/${searchQuery}.json?types=${
        props.queryTypes
      }&country=PL&limit=10`
    );
  }

  function handleOnChange(value: string | undefined) {
    callAll(setInputValue, props.onChange)(value);
  }
  function handleOnSearch(value: string) {
    callAll(typeaheadOnChange, props.onChange)(value);
  }

  function handleOnSelect(value: string | undefined) {
    if (!value) return;
    props.onSelect(value, state.results);
  }

  async function axiosResponseTransformer(
    response: AxiosResponse<MapBoxAxiosResponse>
  ): Promise<UserSearchedLocation[]> {
    return response.data.features.map(feature => ({
      placeName: feature.place_name,
      id: feature.id,
      coords: {
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0]
      }
    }));
  }
};

LocationTypeahead.defaultProps = optionalProps;

export default LocationTypeahead;
