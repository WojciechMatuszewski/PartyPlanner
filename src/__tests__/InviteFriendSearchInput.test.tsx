import React from 'react';
import { render, fireEvent, wait, act } from 'react-testing-library';
import InviteFriendSearchInput from '@components/Party/CreateParty/InviteFriend/InviteFriendSearchInput';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import { fakeSchedulers } from 'rxjs-marbles/jest';

describe('InviteFriendSearchInput', () => {
  beforeEach(() => jest.useFakeTimers());
  it('Correctly handles loading / disabled states', () => {
    const ui = (disabled: boolean, loading: boolean) => (
      <InviteFriendSearchInput
        inputDisabled={disabled}
        inputLoading={loading}
        onChangeHandler={() => null}
        typeaheadCallback={async () => null}
        fetchQueryUpdater={async () => null}
      />
    );
    const { getByTestId, rerender, container } = render(ui(true, false));
    const input = getByTestId('InviteFriendSearchInput');
    expect(input).toHaveClass('ant-input ant-input-disabled');
    rerender(ui(false, true));
    expect(container.querySelector('.is-validating')).toBeInTheDocument();
    expect(container.querySelector('.anticon-loading')).toBeInTheDocument();
  });

  it(
    'Handles input related callbacks correctly',
    fakeSchedulers(async advance => {
      const onChangeHandler = jest.fn(() => {});
      const typeaheadCallback = jest.fn(async () => {});
      const fetchQueryUpdater = jest.fn(async () => {});

      const { getByTestId } = render(
        <InviteFriendSearchInput
          inputDisabled={false}
          inputLoading={false}
          onChangeHandler={onChangeHandler}
          typeaheadCallback={typeaheadCallback}
          fetchQueryUpdater={fetchQueryUpdater}
        />
      );
      const input = getByTestId('InviteFriendSearchInput');
      act(() => fireEvent.change(input, { target: { value: 'inputValue' } }));
      expect(onChangeHandler).toHaveBeenCalled();
      expect(onChangeHandler).toHaveBeenCalledWith('inputValue');
      act(() => advance(300));
      await wait(expect(typeaheadCallback).toHaveBeenCalled());
      act(() => fireEvent.change(input, { target: { value: '' } }));
      await wait(() => expect(fetchQueryUpdater).toHaveBeenCalled());
    })
  );
  it(
    'Does not call fetchQueryUpdater when user types too fast',
    fakeSchedulers(async advance => {
      const onChangeHandler = jest.fn(() => {});
      const typeaheadCallback = jest.fn(async () => {});
      const fetchQueryUpdater = jest.fn(async () => {});
      const { getByTestId } = render(
        <InviteFriendSearchInput
          inputDisabled={false}
          inputLoading={false}
          onChangeHandler={onChangeHandler}
          typeaheadCallback={typeaheadCallback}
          fetchQueryUpdater={fetchQueryUpdater}
        />
      );
      const input = getByTestId('InviteFriendSearchInput');
      act(() => fireEvent.change(input, { target: { value: 'inputValue' } }));
      expect(onChangeHandler).toHaveBeenCalled();
      await wait(() => expect(typeaheadCallback).not.toHaveBeenCalled());
      act(() => advance(200));
      act(() => fireEvent.change(input, { target: { value: '' } }));
      await wait(() => expect(typeaheadCallback).not.toHaveBeenCalled());
      await wait(() => expect(fetchQueryUpdater).not.toHaveBeenCalled());
    })
  );
});
