import React from 'react';
import moment from 'moment';
import uuid from 'uuid/v4';
import { PartiesListFilterPayload } from '../PartiesListReducer';
import { DatePicker } from 'antd';
import { compose } from 'react-apollo';
import { PartiesListFilterDrawerFilterProps } from './PartiesListFilterDrawer';

interface Props
  extends PartiesListFilterDrawerFilterProps<moment.Moment | undefined> {}
const PartiesListFilterDrawerHappensAt: React.FC<Props> = props => {
  return (
    <DatePicker
      defaultValue={undefined}
      value={props.filterValue}
      allowClear={true}
      onChange={handleOnChange}
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

  function handleOnChange(selectedDate: moment.Moment | undefined): void {
    if (!selectedDate) props.onRemoveFilter('start');
    return compose(
      props.onChange,
      createFilterObjectFromDate
    )(selectedDate);
  }
};

export default PartiesListFilterDrawerHappensAt;
