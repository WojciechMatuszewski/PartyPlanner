import React from 'react';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import uuid from 'uuid/v4';
import { compose } from 'ramda';
import { PartiesListFilterPayload } from '../PartiesListReducer';

interface Props {
  filterValue: string[] | undefined;
  onChange: (filterDispatchPayload: PartiesListFilterPayload) => void;
  onRemoveFilter: (filterKeyName: string) => void;
}

const PartiesListFilterDrawerPartyType: React.FC<Props> = props => {
  return (
    <Checkbox.Group
      value={props.filterValue}
      onChange={handleOnCheckboxGroupChange}
    >
      <Checkbox value="also_public">Also show public parties</Checkbox>
      <br />
      <Checkbox value="only_public">Only show public parties</Checkbox>
    </Checkbox.Group>
  );

  function createFilterObjectFromCheckboxGroupValue(
    checkboxValue: string
  ): PartiesListFilterPayload {
    return {
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
    };
  }

  function handleOnCheckboxGroupChange(values: CheckboxValueType[]): void {
    if (values.length === 0) return props.onRemoveFilter('isPublic');
    return compose(
      props.onChange,
      createFilterObjectFromCheckboxGroupValue,
      getCorrectCheckboxItemValue
    )(values);
  }

  function getCorrectCheckboxItemValue(
    values: CheckboxValueType[]
    // some weird typing issue here
  ): any {
    return values.slice(-1)[0];
  }
};

export default PartiesListFilterDrawerPartyType;
