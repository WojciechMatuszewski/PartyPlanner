import React from 'react';
import styled from '@emotion/styled';
import { Checkbox, Input, DatePicker, Typography } from 'antd';
import {
  PartiesListFilters,
  PartiesListFilterActions
} from '../PartiesListReducer';
import PartiesList, { PartiesListContext } from '../PartiesList';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import * as uuid from 'uuid/v4';
import { PartyWhereInput } from '@generated/graphql';
import moment from 'moment';
import { getCorrectTextFromPartyDates } from '@shared/graphqlUtils';

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

  console.log(props.filters);

  return (
    <FiltersPaneWrapper>
      <FilterPaneCategory>
        <Typography.Title level={4}>Type</Typography.Title>
        <Checkbox.Group
          value={partyTypeCheckboxValue}
          onChange={handlePartyTypeCheckboxChange}
        >
          <Checkbox value="also_public">Also show public parties</Checkbox>
          <br />
          <Checkbox value="only_public">Only show public parties</Checkbox>
        </Checkbox.Group>
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>Sort</Typography.Title>
        <Checkbox.Group
          defaultValue={undefined}
          value={
            props.filters['orderBy']
              ? [props.filters['orderBy'].variablesValue]
              : undefined
          }
          onChange={handleSortCheckboxGroupChange}
        >
          <Checkbox value="createdAt_DESC">By Creation Date</Checkbox>
          <br />
          <Checkbox value="start_DESC">By Start Date</Checkbox>
        </Checkbox.Group>
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>Created by</Typography.Title>
        <Input.Search placeholder="Search by user name..." />
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>Happens at</Typography.Title>
        <DatePicker
          defaultValue={undefined}
          value={
            props.filters['start']
              ? moment(props.filters['start'].variablesValue[0].start_gte)
              : undefined
          }
          allowClear={true}
          onChange={handleHappensAtChange}
        />
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>At given location</Typography.Title>
        <Input.Search placeholder="Search by location name..." />
      </FilterPaneCategory>
    </FiltersPaneWrapper>
  );

  // **** //
  function handleSortCheckboxGroupChange(values: CheckboxValueType[]) {
    if (values.length === 0) {
      return dispatch(PartiesListFilterActions.removeFilter('orderBy'));
    }
    const checkboxValue = values.slice(-1)[0];
    dispatch(
      PartiesListFilterActions.addFilter({
        keyName: 'orderBy',
        filter: {
          variablesName: 'orderBy',
          variablesType: 'orderBy',
          variablesValue: checkboxValue,
          displayText:
            checkboxValue === 'createdAt_DESC'
              ? 'Sort by creation date'
              : 'Sort by start date',
          id: uuid()
        }
      })
    );
  }

  function handlePartyTypeCheckboxChange(values: CheckboxValueType[]) {
    if (values.length === 0)
      return dispatch(PartiesListFilterActions.removeFilter('isPublic'));

    const checkboxValue = values.slice(-1)[0];
    dispatch(
      PartiesListFilterActions.addFilter({
        keyName: 'isPublic',
        filter: {
          variablesName: 'OR',
          variablesType: 'where',
          variablesValue:
            checkboxValue === 'also_public'
              ? [{ isPublic: false }, { isPublic: true }]
              : [{ isPublic: true }],
          displayText:
            checkboxValue === 'also_public'
              ? 'Also show public parties'
              : 'Show only public parties',
          id: uuid()
        }
      })
    );
  }

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

  function handleHappensAtChange(selectedDate: moment.Moment) {
    if (selectedDate == null) {
      return dispatch(PartiesListFilterActions.removeFilter('start'));
    }
    dispatch(
      PartiesListFilterActions.addFilter({
        keyName: 'start',
        filter: {
          variablesName: 'AND',
          variablesType: 'where',
          variablesValue: [
            {
              start_gte: selectedDate.startOf('day').format()
            },
            { start_lte: selectedDate.endOf('day').format() }
          ],
          id: uuid(),
          displayText: `Show parties that are happening at ${selectedDate.format(
            'MMMM DD (dddd) YYYY'
          )}`
        }
      })
    );
  }
};

export default PartiesListFilterDrawerContent;
