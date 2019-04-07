import React from 'react';
import styled from '@emotion/styled';
import { Input, Typography } from 'antd';
import {
  PartiesListFilters,
  PartiesListFilterActions,
  PartiesListFilterPayload
} from '../PartiesListReducer';
import { PartiesListContext } from '../PartiesList';
import { PartyWhereInput } from '@generated/graphql';
import moment from 'moment';

import PartiesListFilterDrawerPartyType from './PartiesListFilterDrawerPartyType';
import PartiesListFilterDrawerHappensAt from './PartiesListFilterDrawerHappensAt';
import PartiesListFilterDrawerSort from './PartiesListFilterDrawerSort';
import LocationTypeahead from '@components/LocationTypeahead';
import uuid from 'uuid/v4';
import PartiesListFilterDrawerLocation from './PartiesListFilterDrawerLocation';

const FiltersPaneWrapper = styled.div`
  width: 100%;
  padding-right: 24px;

  box-sizing: content-box;
  h4 {
    margin-top: 18px;
    margin-bottom: 8px;
  }
  & > div:first-of-type {
    margin-top: 26px;
  }
  padding-bottom: 24px;
`;

const FilterPaneCategory = styled.div`
  width: 100%;
  margin-top: 18px;
  margin-bottom: 26px;

  .ant-checkbox-wrapper,
  .ant-radio-wrapper {
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  .ant-calendar-picker {
    width: 100%;
  }
  .ant-select {
    width: 100%;
  }
`;

interface Props {
  filters: PartiesListFilters;
}
const PartiesListFilterDrawerContent: React.FC<Props> = props => {
  const { dispatch } = React.useContext(PartiesListContext);

  const getPartyTypeCheckboxGroupValue = React.useCallback(() => {
    return isAlsoShowPublicChecked(props.filters)
      ? ['also_public']
      : isOnlyShowPublicChecked(props.filters)
      ? ['only_public']
      : undefined;
  }, [props.filters]);

  const partyTypeCheckboxValue = React.useMemo(
    () => getPartyTypeCheckboxGroupValue(),
    [props.filters]
  );

  return (
    <FiltersPaneWrapper>
      <FilterPaneCategory>
        <Typography.Title level={4}>Type</Typography.Title>
        <PartiesListFilterDrawerPartyType
          onChange={handleOnFilterChange}
          onRemoveFilter={handleOnRemoveFilter}
          filterValue={partyTypeCheckboxValue}
        />
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>Sort</Typography.Title>
        <PartiesListFilterDrawerSort
          onChange={handleOnFilterChange}
          onRemoveFilter={handleOnRemoveFilter}
          filterValue={
            props.filters['orderBy']
              ? [props.filters['orderBy'].variablesValue]
              : undefined
          }
        />
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>Created by</Typography.Title>
        <Input.Search placeholder="Search by user name..." />
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>Happens at</Typography.Title>
        <PartiesListFilterDrawerHappensAt
          filterValue={
            props.filters['start']
              ? moment(props.filters['start'].variablesValue[0].start_gte)
              : undefined
          }
          onChange={handleOnFilterChange}
          onRemoveFilter={handleOnRemoveFilter}
        />
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>At given location</Typography.Title>
        <PartiesListFilterDrawerLocation
          filterValue={
            props.filters['location']
              ? props.filters.location.variablesValue.placeName_contains
              : undefined
          }
          onChange={handleOnFilterChange}
          onRemoveFilter={handleOnRemoveFilter}
        />
      </FilterPaneCategory>
    </FiltersPaneWrapper>
  );

  function isAlsoShowPublicChecked(filters: PartiesListFilters) {
    if (!filters.isPublic) return false;
    return (
      filters.isPublic.variablesValue.filter(
        (value: PartyWhereInput) =>
          value.isPublic === true || value.isPublic === false
      ).length === 2
    );
  }
  function isOnlyShowPublicChecked(filters: PartiesListFilters) {
    if (!filters.isPublic) return false;
    return (
      filters.isPublic.variablesValue.filter(
        (value: PartyWhereInput) => value.isPublic === true
      ).length === 1
    );
  }

  function handleOnFilterChange(filterPayload: PartiesListFilterPayload) {
    dispatch(PartiesListFilterActions.addFilter(filterPayload));
  }

  function handleOnRemoveFilter(filterKey: string) {
    dispatch(PartiesListFilterActions.removeFilter(filterKey));
  }
};

export default PartiesListFilterDrawerContent;
