import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { render, fireEvent, wait } from 'react-testing-library';
import ForgotPassword from '@pages/forgot-password';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';
import { REQUEST_PASSWORD_RESET_MUTATION } from '@graphql/mutations';
import 'jest-dom/extend-expect';

const FAKE_EMAIL = 'wojtek@wojtek.pl';
const ERROR_MSG = 'some error';

const SUCCESSFUL_MOCKED_RESPONSE: MockedResponse = {
  request: {
    query: REQUEST_PASSWORD_RESET_MUTATION,
    variables: { email: FAKE_EMAIL }
  },
  result: {
    data: {
      requestReset: {
        message: 'works'
      }
    }
  }
};

const FAILED_MOCKED_RESPONSE: MockedResponse = {
  request: {
    query: REQUEST_PASSWORD_RESET_MUTATION,
    variables: { email: FAKE_EMAIL }
  },
  error: new Error(ERROR_MSG)
};

describe('ForgotPasswordForm', () => {
  it('Correctly calls mutation and resets form on success', async () => {
    const { getByLabelText, getByTestId, container } = render(
      <MockedProvider mocks={[SUCCESSFUL_MOCKED_RESPONSE]} addTypename={false}>
        <ForgotPassword />
      </MockedProvider>
    );
    const submitButton = getByTestId('forgot-password-submit');
    const emailInput = getByLabelText('email');
    const confirmEmailInput = getByLabelText('confirm-email');
    fireEvent.change(emailInput, {
      target: { value: FAKE_EMAIL }
    });
    fireEvent.change(confirmEmailInput, {
      target: { value: FAKE_EMAIL }
    });
    fireEvent.click(submitButton);
    await wait(() => expect(submitButton).toHaveClass('ant-btn-loading'));
    await wait(() => expect(submitButton).not.toHaveClass('ant-btn-loading'));
    expect(emailInput.nodeValue).toBe(null);
    expect(confirmEmailInput.nodeValue).toBe(null);
    expect(container.querySelector('graphql-error')).toBe(null);
  });
  it('Correctly handles error and resend', async () => {
    const { getByLabelText, getByTestId, container } = render(
      <MockedProvider
        mocks={[FAILED_MOCKED_RESPONSE, SUCCESSFUL_MOCKED_RESPONSE]}
        addTypename={false}
      >
        <ForgotPassword />
      </MockedProvider>
    );
    const submitButton = getByTestId('forgot-password-submit');
    const emailInput = getByLabelText('email');
    const confirmEmailInput = getByLabelText('confirm-email');
    fireEvent.change(emailInput, {
      target: { value: FAKE_EMAIL }
    });
    fireEvent.change(confirmEmailInput, {
      target: { value: FAKE_EMAIL }
    });
    fireEvent.click(submitButton);
    await wait(() => expect(submitButton).toHaveClass('ant-btn-loading'));
    await wait(() => expect(submitButton).not.toHaveClass('ant-btn-loading'));
    expect(getByTestId('graphql-error')).not.toBeNull();
    fireEvent.click(submitButton);
    await wait(() => expect(submitButton).toHaveClass('ant-btn-loading'));
    await wait(() => expect(submitButton).not.toHaveClass('ant-btn-loading'));
    expect(emailInput.nodeValue).toBe(null);
    expect(confirmEmailInput.nodeValue).toBe(null);
    expect(container.querySelector('graphql-error')).toBe(null);
  });
});
