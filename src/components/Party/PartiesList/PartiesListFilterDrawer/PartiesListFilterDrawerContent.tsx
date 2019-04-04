import React from 'react';
import styled from '@emotion/styled';
import { Checkbox, Input, DatePicker, Typography } from 'antd';
import {
  PartiesListFilters,
  PartiesListFilterActions
} from '../PartiesListReducer';
import { PartiesListContext } from '../PartiesList';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import * as uuid from 'uuid/v4';

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

  return (
    <FiltersPaneWrapper>
      <FilterPaneCategory>
        <Typography.Title level={4}>Type</Typography.Title>
        <Checkbox
          onChange={handleShowPublicCheckboxChange}
          checked={Boolean(props.filters['OR'])}
        >
          Also show public parties
        </Checkbox>
        <br />
        <Checkbox>Only show public parties</Checkbox>
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
          <Checkbox value="createdAt_DESC" name="Sort parties by creation date">
            By Creation Date
          </Checkbox>
          <br />
          <Checkbox value="start_DESC" name="Sort parties by start date">
            By Start Date
          </Checkbox>
        </Checkbox.Group>
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>Created by</Typography.Title>
        <Input.Search placeholder="Search by user name..." />
      </FilterPaneCategory>
      <FilterPaneCategory>
        <Typography.Title level={4}>Happens at</Typography.Title>
        <DatePicker />
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
        variablesName: 'orderBy',
        variablesType: 'orderBy',
        variablesValue: checkboxValue,
        displayText:
          checkboxValue === 'createdAt_DESC'
            ? 'Sort by creation date'
            : 'Sort by start date',
        id: uuid()
      })
    );
  }

  function handleShowPublicCheckboxChange(e: CheckboxChangeEvent) {
    if (e.target.checked) {
      dispatch(
        PartiesListFilterActions.addFilter({
          variablesName: 'OR',
          variablesValue: [{ isPublic: true }, { isPublic: false }],
          variablesType: 'where',
          displayText: 'Also show public parties',
          id: uuid()
        })
      );
    } else {
      dispatch(PartiesListFilterActions.removeFilter('OR'));
    }
  }
};

export default PartiesListFilterDrawerContent;
