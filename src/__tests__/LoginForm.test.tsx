import 'react-testing-library/cleanup-after-each';
import { render, fireEvent, wait } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { MockedProvider } from 'react-apollo/test-utils';
import { LoginDocument, LoginComponent } from '@generated/graphql';
import React from 'react';
import LoginForm from '@components/Authentication/LoginForm';
import MockNextContext from '../globalMocks/NextContext';

afterEach(() => jest.resetAllMocks());

describe('Login Form', () => {
  it('Works with correct data', async () => {
    const mocks = [
      {
        request: { query: LoginDocument },
        result: {
          data: {
            login: {
              token: 'ala ma kota'
            }
          }
        }
      }
    ];

    const mutateMock = jest.fn(
      () =>
        new Promise(resolve =>
          resolve({
            data: {
              login: {
                token: 'ala ma kota'
              }
            }
          })
        )
    ) as any;

    const { getByTestId, getByLabelText } = render(
      <MockNextContext>
        <MockedProvider mocks={mocks}>
          <LoginComponent>
            {(_, mutationResult) => {
              return (
                <LoginForm
                  mutate={mutateMock}
                  mutationResult={mutationResult}
                />
              );
            }}
          </LoginComponent>
        </MockedProvider>
      </MockNextContext>
    );
    const emailInput = getByLabelText('email-field');
    const passwordInput = getByLabelText('password-field');
    const submitButton = getByTestId('login-submit');

    fireEvent.change(emailInput, { target: { value: 'test@test.pl' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);
    await wait(() => expect(mutateMock).toHaveBeenCalledTimes(1));
    await wait(() =>
      expect(mutateMock).toBeCalledWith({
        variables: { email: 'test@test.pl', password: 'password' }
      })
    );
    expect(document.cookie).toBe('token=ala%20ma%20kota');
  });
});
