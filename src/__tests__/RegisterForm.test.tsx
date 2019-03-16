import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import { MockedProvider } from 'react-apollo/test-utils';
import RegisterForm from '@components/Authentication/RegisterForm';
import { render, fireEvent, wait } from 'react-testing-library';
import { SIGNUP_MUTATION } from '../../graphql/mutations';
import React from 'react';

const RegisterData = {
  firstName: 'Wojtek',
  lastName: 'Matuszewski',
  email: 'test@test.pl',
  password: 'test12345',
  confirmPassword: 'test12345'
};

describe('RegisterForm', () => {
  it('Works with correct data', async () => {
    const mocks = [
      {
        request: { query: SIGNUP_MUTATION, variables: RegisterData },
        result: {
          data: {
            signup: {
              __typename: 'AuthPayload',
              token: 'ala ma psa123'
            }
          }
        }
      }
    ];
    const { getByLabelText, getByTestId } = render(
      <MockedProvider mocks={mocks}>
        return <RegisterForm />;
      </MockedProvider>
    );
    fireEvent.change(getByLabelText('firstName-field'), {
      target: { value: RegisterData.firstName }
    });
    fireEvent.change(getByLabelText('lastName-field'), {
      target: { value: RegisterData.lastName }
    });
    fireEvent.change(getByLabelText('email-field'), {
      target: { value: RegisterData.email }
    });
    fireEvent.change(getByLabelText('password-field'), {
      target: { value: RegisterData.password }
    });
    fireEvent.change(getByLabelText('confirmPassword-field'), {
      target: { value: RegisterData.confirmPassword }
    });
    fireEvent.click(getByTestId('register-submit'));
    await wait(() => expect(document.cookie).toBe('token=ala%20ma%20psa123'));
  });
});
