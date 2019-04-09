import React from 'react';
import { Checkbox } from 'antd';
import { PartiesListFilterPayload } from '../PartiesListReducer';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { compose } from 'ramda';
import uuid from 'uuid/v4';
interface Props {
  filterValue: string[] | undefined;
  onChange: (payload: PartiesListFilterPayload) => void;
  onRemoveFilter: (filterKey: string) => void;
}
const PartiesListFilterDrawerSort: React.FC<Props> = props => {
  return (
    <Checkbox.Group
      defaultValue={undefined}
      value={props.filterValue}
      onChange={handleOnCheckboxGroupChange}
    >
      <Checkbox value="createdAt_DESC">By Creation Date</Checkbox>
      <br />
      <Checkbox value="start_DESC">By Start Date</Checkbox>
    </Checkbox.Group>
  );

  function handleOnCheckboxGroupChange(values: CheckboxValueType[]): void {
    if (values.length === 0) return props.onRemoveFilter('orderBy');
    return compose(
      props.onChange,
      createFilterObjectFromCheckboxGroupValue,
      getCorrectCheckboxItemValue
    )(values);
  }

  function createFilterObjectFromCheckboxGroupValue(
    checkboxValue: string
  ): PartiesListFilterPayload {
    return {
      keyName: 'orderBy',
      filter: {
        variablesName: 'orderBy',
        variablesType: 'orderBy',
        variablesValue: checkboxValue,
        displayText:
          checkboxValue === 'createdAt_DESC'
            ? 'Sort parties by creation date'
            : 'Sort parties by start date',
        id: uuid()
      }
    };
  }

  function getCorrectCheckboxItemValue(
    values: CheckboxValueType[]
    // some weird typing issue here
  ): any {
    return values.slice(-1)[0];
  }
};

export default PartiesListFilterDrawerSort;
