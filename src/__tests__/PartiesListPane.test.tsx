import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { render, fireEvent } from 'react-testing-library';
import PartiesListPane from '@components/Party/PartiesList/PartiesListPane';
import '../__mocks__/matchMedia';

jest.unmock('lodash');
// require the actual module so that we can mock exports on the module
const lodash = require.requireActual('lodash');

describe('PartiesListPane', () => {
  it('Correctly calls onDrawerOpen', () => {
    const onDrawerOpen = jest.fn();
    const { getByTestId } = render(
      <PartiesListPane onChange={() => {}} onDrawerOpen={onDrawerOpen} />
    );
    const button = getByTestId('onDrawerOpenBtn');
    fireEvent.click(button);
    expect(onDrawerOpen).toHaveBeenCalled();
  });
  it('Correctly calls onChange', () => {
    // https://github.com/facebook/jest/issues/3465#issuecomment-424193697
    lodash.debounce = jest.fn(fn => fn);
    const onChange = jest.fn();
    const { getByTestId } = render(
      <PartiesListPane onChange={onChange} onDrawerOpen={() => {}} />
    );
    const input = getByTestId('paneInput');
    expect(input.getAttribute('placeholder')).toBe('Type here...');
    fireEvent.change(input, { target: { value: 'something' } });
    expect(onChange).toBeCalled();
  });
});
