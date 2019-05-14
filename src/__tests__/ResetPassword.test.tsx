import React from 'react';
import { render, fireEvent, wait } from 'react-testing-library';
import ResetPassword from '@pages/reset-password';
import { MockedResponse } from 'react-apollo/test-links';
import { RESET_PASSWORD_MUTATION } from '@graphql/mutations';
import { MockedProvider } from 'react-apollo/test-utils';
import 'react-testing-library/cleanup-after-each';
import MockNextContext from '../globalMocks/NextContext';
import 'jest-dom/extend-expect';

const NEW_PASSWORD = '1234Password';
const RESET_TOKEN = 'resetToken';

const MOCKED_SUCCESSFUL_MUTATION: MockedResponse = {
  request: {
    query: RESET_PASSWORD_MUTATION,
    variables: {
      password: NEW_PASSWORD,
      confirmPassword: NEW_PASSWORD,
      resetToken: RESET_TOKEN
    }
  },
  result: {
    data: {
      resetPassword: {
        token: '1234'
      }
    }
  }
};

const MOCKED_ERROR_MUTATION: MockedResponse = {
  request: {
    query: RESET_PASSWORD_MUTATION,
    variables: {
      password: NEW_PASSWORD,
      confirmPassword: NEW_PASSWORD,
      resetToken: RESET_TOKEN
    }
  },
  error: new Error('some error!')
};

describe('ResetPassword', () => {
  it('Handles a case when there is no token in url', () => {
    const { getByTestId } = render(<ResetPassword hasTokenQuery={false} />);
    expect(getByTestId('graphqlException')).not.toBeNull();
    expect(getByTestId('graphqlException').textContent).toContain(
      'Page address is malformed'
    );
  });
  it('Correctly makes a request for password change', async () => {
    const { getByTestId, getByLabelText, queryByTestId } = render(
      <MockNextContext router={{ query: { token: RESET_TOKEN } }}>
        <MockedProvider
          mocks={[MOCKED_SUCCESSFUL_MUTATION]}
          addTypename={false}
        >
          <ResetPassword hasTokenQuery={true} />
        </MockedProvider>
      </MockNextContext>
    );
    const submitButton = getByTestId('reset-password');
    const password = getByLabelText('password');
    const confirmPassword = getByLabelText('confirm-password');
    fireEvent.change(password, { target: { value: NEW_PASSWORD } });
    fireEvent.change(confirmPassword, { target: { value: NEW_PASSWORD } });
    fireEvent.click(submitButton);
    await wait(() => expect(submitButton).toHaveClass('ant-btn-loading'));
    await wait(() => expect(submitButton).not.toHaveClass('ant-btn-loading'));
    expect(queryByTestId('graphql-error')).toBe(null);
  });
  it('Correctly handles error', async () => {
    const { getByTestId, getByLabelText, queryByTestId } = render(
      <MockNextContext router={{ query: { token: RESET_TOKEN } }}>
        <MockedProvider mocks={[MOCKED_ERROR_MUTATION]} addTypename={false}>
          <ResetPassword hasTokenQuery={true} />
        </MockedProvider>
      </MockNextContext>
    );
    const submitButton = getByTestId('reset-password');
    const password = getByLabelText('password');
    const confirmPassword = getByLabelText('confirm-password');
    fireEvent.change(password, { target: { value: NEW_PASSWORD } });
    fireEvent.change(confirmPassword, { target: { value: NEW_PASSWORD } });
    fireEvent.click(submitButton);
    await wait(() => expect(submitButton).toHaveClass('ant-btn-loading'));
    await wait(() => expect(submitButton).not.toHaveClass('ant-btn-loading'));
    expect(queryByTestId('graphql-error')).not.toBe(null);
  });
});
