import React from 'react';
import { PartiesListFilterDrawerFilterProps } from './PartiesListFilterDrawer';
import LocationTypeahead from '@components/LocationTypeahead';
import uuid from 'uuid/v4';
import { PartiesListFilterPayload } from '../PartiesListReducer';
import { compose } from 'ramda';

interface Props extends PartiesListFilterDrawerFilterProps<string> {}

const PartiesListFilterDrawerLocation: React.FC<Props> = props => {
  return (
    <LocationTypeahead
      disabled={false}
      onSelect={handleOnSelect}
      onChange={handleOnChange}
      value={props.filterValue}
      queryTypes="address,place"
      placeholder="Search for a location"
    />
  );

  function handleOnChange(currentValue: string | undefined) {
    if (currentValue == null) {
      props.onRemoveFilter('location');
    }
  }

  function handleOnSelect(locationName: string) {
    return compose(
      props.onChange,
      constructFilterObject
    )(locationName);
  }

  function constructFilterObject(
    locationName: string
  ): PartiesListFilterPayload {
    return {
      keyName: 'location',
      filter: {
        variablesName: 'location',
        variablesType: 'where',
        variablesValue: {
          placeName_contains: locationName
        },
        id: uuid(),
        displayText: `Parties that are happening at ${locationName}`
      }
    };
  }
};

export default PartiesListFilterDrawerLocation;
