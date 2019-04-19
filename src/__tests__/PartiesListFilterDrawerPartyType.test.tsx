import 'react-testing-library/cleanup-after-each';
import PartiesListFilterDrawerPartyType from '@components/Party/PartiesList/PartiesListFilterDrawer/PartiesListFilterDrawerPartyType';
import { render, fireEvent } from 'react-testing-library';
import React from 'react';

describe('PartiesListFilterDrawerPartyType', () => {
  it('Correctly sets initial values', () => {
    const { container } = render(
      <PartiesListFilterDrawerPartyType
        onChange={() => {}}
        onRemoveFilter={() => {}}
        filterValue={['only_public']}
      />
    );
    expect(container.querySelectorAll('.ant-checkbox-checked')).toHaveLength(1);
  });

  it('Correctly calls onChange function', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <PartiesListFilterDrawerPartyType
        onChange={onChange}
        onRemoveFilter={() => {}}
        filterValue={undefined}
      />
    );
    const alsoPublic = getByTestId('also-public');
    fireEvent.click(alsoPublic);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
  it('Correctly calls onFilterRemoved function', () => {
    const onRemoveFilter = jest.fn();
    const onChange = jest.fn();
    const { getByTestId } = render(
      <PartiesListFilterDrawerPartyType
        onChange={onChange}
        onRemoveFilter={onRemoveFilter}
        filterValue={['also_public']}
      />
    );
    const alsoPublic = getByTestId('also-public');
    fireEvent.click(alsoPublic);
    expect(onChange).not.toHaveBeenCalled();
    expect(onRemoveFilter).toHaveBeenCalled();
    expect(onRemoveFilter).toBeCalledWith('isPublic');
  });
});
