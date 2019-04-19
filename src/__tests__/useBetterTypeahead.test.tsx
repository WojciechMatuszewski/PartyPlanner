import { renderHook } from 'react-hooks-testing-library';
import useBetterTypeahead, { TypeaheadProps } from '@hooks/useBetterTypeahead';
import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import { fakeSchedulers } from 'rxjs-marbles/jest';
import 'react-testing-library/cleanup-after-each';

function getInputWithHookApplied(props: TypeaheadProps<any, any, any>) {
  const {
    result: {
      current: { onChange }
    }
  } = renderHook(() => useBetterTypeahead(props));
  const { getByTestId, rerender } = render(
    <input data-testid="input" onChange={onChange} />
  );
  return { input: getByTestId('input'), rerender };
}

beforeAll(jest.useFakeTimers);

describe('useBetterTypeahead', () => {
  it('Correctly calls onChangeTransformFunction with native element', () => {
    const fetchFunction = jest.fn(() => Promise.resolve());
    const responseTransformFunction = jest.fn(() => {});
    const onChangeTransformFunction = jest.fn(
      (e: React.ChangeEvent<HTMLInputElement>) => e.currentTarget.value
    );
    const { input } = getInputWithHookApplied({
      fetchFunction,
      responseTransformFunction,
      onChangeTransformFunction,
      onError: () => {},
      onResult: () => {}
    });
    fireEvent.change(input, { target: { value: 'ala' } });
    expect(onChangeTransformFunction).toHaveBeenCalled();
  });
  it(
    'Correctly handles data fetching',
    fakeSchedulers(async advance => {
      const fetchFunction = jest.fn(() => Promise.resolve({}));
      const responseTransformFunction = jest.fn(() => ({}));
      const onChangeTransformFunction = jest.fn(
        (e: React.ChangeEvent<HTMLInputElement>) => e.currentTarget.value
      );
      const onResult = jest.fn();
      const { input } = getInputWithHookApplied({
        fetchFunction,
        responseTransformFunction,
        onChangeTransformFunction,
        onError: () => {},
        onResult: onResult
      });
      fireEvent.change(input, { target: { value: 'value' } });
      await advance(300);
      await wait(() => expect(fetchFunction).toHaveBeenCalled());
      expect(fetchFunction).toHaveBeenCalledWith('value');
      expect(responseTransformFunction).toHaveBeenCalledWith({}, 0);
      expect(onResult).toHaveBeenCalled();
      expect(onResult).toHaveBeenCalledWith({});
    })
  );
  it(
    'Correctly handles errors',
    fakeSchedulers(async advance => {
      const fetchFunction = jest.fn(() => Promise.reject());
      const responseTransformFunction = jest.fn(() => ({}));
      const onChangeTransformFunction = jest.fn(
        (e: React.ChangeEvent<HTMLInputElement>) => e.currentTarget.value
      );
      const onResult = jest.fn();
      const onError = jest.fn();
      const { input } = getInputWithHookApplied({
        fetchFunction,
        responseTransformFunction,
        onChangeTransformFunction,
        onError: onError,
        onResult: onResult
      });
      fireEvent.change(input, { target: { value: 'value' } });
      await advance(300);
      await wait(() => expect(onError).toHaveBeenCalled());
    })
  );
  it(
    'Correctly handles empty / dangerous characters',
    fakeSchedulers(async advance => {
      const fetchFunction = jest.fn(() => Promise.reject());
      const responseTransformFunction = jest.fn(() => ({}));
      const onChangeTransformFunction = jest.fn(
        (e: React.ChangeEvent<HTMLInputElement>) => e.currentTarget.value
      );
      const onResult = jest.fn();
      const onError = jest.fn();
      const { input } = getInputWithHookApplied({
        fetchFunction,
        responseTransformFunction,
        onChangeTransformFunction,
        onError: onError,
        onResult: onResult
      });
      fireEvent.change(input, { target: { value: '   ' } });
      await advance(300);
      await wait(() => expect(fetchFunction).not.toHaveBeenCalled());
      fireEvent.change(input, { target: { value: 'normal value' } });
      await advance(300);
      await wait(() => expect(fetchFunction).toHaveBeenCalled());
      fireEvent.change(input, {
        target: { value: `<script>alert('something')</script>` }
      });
      fetchFunction.mockClear();
      await advance(300);
      await wait(() => expect(fetchFunction).toHaveBeenCalled());
      expect(fetchFunction).toHaveBeenCalledWith(
        `<script>alert\\('something'\\)</script>`
      );
    })
  );
});
