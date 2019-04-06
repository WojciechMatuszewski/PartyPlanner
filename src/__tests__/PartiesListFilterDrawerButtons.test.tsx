import 'react-testing-library/cleanup-after-each';
import { render, fireEvent } from 'react-testing-library';
import PartiesListFilterDrawerButtons, {
  FiltersActionButtonsProps
} from '@components/Party/PartiesList/PartiesListFilterDrawer/PartiesListFilterDrawerButtons';
import React from 'react';

function getSwitchButtonsState(
  buttonsState: FiltersActionButtonsProps['state']
): FiltersActionButtonsProps {
  return {
    onApply: () => {},
    onClear: () => {},
    state: buttonsState
  };
}

function getUiWithProps(props: FiltersActionButtonsProps) {
  return <PartiesListFilterDrawerButtons {...props} />;
}

describe('PartiesListFilterDrawerButtons', () => {
  it('Correctly calls onClear callback', () => {
    const onClear = jest.fn(() => {});

    const { getByTestId } = render(
      getUiWithProps({
        onClear,
        onApply: () => {},
        state: 'clear'
      })
    );
    fireEvent.click(getByTestId('clear-filters-button'));
    expect(onClear).toHaveBeenCalled();
  });
  it('Correctly calls onApply callback', () => {
    const onApply = jest.fn(() => {});

    const { getByTestId } = render(
      getUiWithProps({
        onClear: () => {},
        onApply,
        state: 'apply'
      })
    );
    fireEvent.click(getByTestId('apply-filters-button'));
    expect(onApply).toHaveBeenCalled();
  });
  it('Reacts correctly to changed to buttons state', () => {
    let clearButton, applyButton;
    const { queryByTestId, rerender, unmount } = render(
      getUiWithProps(getSwitchButtonsState('hidden'))
    );
    clearButton = queryByTestId('clear-filters-button');
    applyButton = queryByTestId('apply-filters-button');
    expect(clearButton).not.toBeTruthy();
    expect(applyButton).not.toBeTruthy();

    rerender(getUiWithProps(getSwitchButtonsState('apply')));
    clearButton = queryByTestId('clear-filters-button');
    applyButton = queryByTestId('apply-filters-button');
    expect(applyButton).toBeTruthy();
    expect(clearButton).not.toBeTruthy();

    // so when you rerender again suddenly 2 buttons are in the DOM
    // that's probably the result of React.POSE performance optimizations
    unmount();
    rerender(getUiWithProps(getSwitchButtonsState('clear')));
    clearButton = queryByTestId('clear-filters-button');
    applyButton = queryByTestId('apply-filters-button');
    expect(applyButton).not.toBeTruthy();
    expect(clearButton).toBeTruthy();
  });
});
