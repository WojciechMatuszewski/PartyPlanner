import React from 'react';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import uuid from 'uuid/v4';
import { compose } from 'ramda';
import { PartiesListFilterPayload } from '../PartiesListReducer';
import { PartiesListFilterDrawerFilterProps } from './PartiesListFilterDrawer';
import { PartiesListContext } from '../PartiesList';

interface Props
  extends PartiesListFilterDrawerFilterProps<string[] | undefined> {}

const PartiesListFilterDrawerPartyType: React.FC<Props> = props => {
  const { userId } = React.useContext(PartiesListContext);
  return (
    <Checkbox.Group
      value={props.filterValue}
      onChange={handleOnCheckboxGroupChange}
    >
      <Checkbox value="also_public" data-testid="also-public">
        Also show public parties
      </Checkbox>
      <br />
      <Checkbox value="only_public" data-testid="only-public">
        Only show public parties
      </Checkbox>
    </Checkbox.Group>
  );

  function createFilterObjectFromCheckboxGroupValue(
    checkboxValue: string
  ): PartiesListFilterPayload {
    return {
      keyName: 'isPublic',
      filter: {
        variablesName: checkboxValue == 'also_public' ? 'OR' : 'AND',
        variablesType: 'where',
        variablesValue:
          checkboxValue === 'also_public'
            ? [
                { members_some: { id: userId } },
                { AND: [{ members_none: { id: userId } }, { isPublic: true }] }
              ]
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

  function getCorrectCheckboxItemValue(values: CheckboxValueType[]): any {
    return values.slice(-1)[0];
  }
};

export default PartiesListFilterDrawerPartyType;
