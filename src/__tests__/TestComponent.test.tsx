import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import TestComponent from '../components/TestComponent';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

describe('TestComponent', () => {
  it('Jest with RTL works', () => {
    const { getByTestId } = render(<TestComponent />);
    const value = getByTestId('counterNum');
    expect(value).toHaveTextContent('0');
    fireEvent.click(getByTestId('incButton'));
    expect(value).toHaveTextContent('1');
  });
});
