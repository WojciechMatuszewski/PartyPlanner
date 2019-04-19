import React from 'react';
import moment from 'moment';
import uuid from 'uuid/v4';
import { PartiesListFilterPayload } from '../PartiesListReducer';
import { DatePicker } from 'antd';
import { compose, ifElse } from 'ramda';
import { PartiesListFilterDrawerFilterProps } from './PartiesListFilterDrawer';

interface Props
  extends PartiesListFilterDrawerFilterProps<moment.Moment | undefined> {}
const PartiesListFilterDrawerHappensAt: React.FC<Props> = props => {
  const handleOnChange = ifElse(
    isSelectedDateDefined,
    handleDateSelected,
    handleSelectedDateNotDefined
  );

  return (
    <DatePicker
      defaultValue={undefined}
      value={props.filterValue}
      allowClear={true}
      onChange={handleOnChange}
      data-testid="date-picker"
    />
  );

  function createFilterObjectFromDate(
    selectedDate: moment.Moment
  ): PartiesListFilterPayload {
    return {
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
    };
  }

  function isSelectedDateDefined(selectedDate: moment.Moment | null) {
    return selectedDate != null;
  }

  function handleDateSelected(selectedDate: moment.Moment) {
    return compose(
      props.onChange,
      createFilterObjectFromDate
    )(selectedDate);
  }

  function handleSelectedDateNotDefined() {
    props.onRemoveFilter('start');
  }
};

export default PartiesListFilterDrawerHappensAt;
