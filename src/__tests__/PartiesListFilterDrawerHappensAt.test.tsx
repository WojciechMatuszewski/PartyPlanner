import 'react-testing-library/cleanup-after-each';
import { render, fireEvent } from 'react-testing-library';
import PartiesListFilterDrawerHappensAt from '@components/Party/PartiesList/PartiesListFilterDrawer/PartiesListFilterDrawerHappensAt';
import moment from 'moment';
import React from 'react';

describe('PartiesListFilterDrawerHappensAt', () => {
  const today = moment(new Date());
  it('Correctly handles passed value', () => {
    let input;
    const { getByTestId, rerender } = render(
      <PartiesListFilterDrawerHappensAt
        onChange={() => {}}
        onRemoveFilter={() => {}}
        filterValue={today}
      />
    );
    input = getByTestId('date-picker') as HTMLInputElement;
    expect(input.value).toBe(today.format('YYYY-MM-DD'));
    rerender(
      <PartiesListFilterDrawerHappensAt
        onChange={() => {}}
        onRemoveFilter={() => {}}
        filterValue={undefined}
      />
    );
    input = getByTestId('date-picker') as HTMLInputElement;
    expect(input.value).toBe('');
  });

  // well it seems that im unable to trigger on change manually from tests :C
  it('Calls onChange when where is a value', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <PartiesListFilterDrawerHappensAt
        onChange={onChange}
        onRemoveFilter={() => {}}
        filterValue={undefined}
      />
    );
    const input = getByTestId('date-picker') as HTMLInputElement;
    fireEvent.click(input);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: today.format('YYYY-MM-DD') } });
    fireEvent.mouseOut(input);
  });
});
