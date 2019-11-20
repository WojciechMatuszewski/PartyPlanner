import React from 'react';
import * as yup from 'yup';
import { withRouter, WithRouterProps } from 'next/router';
import { Formik, FastField, Field } from 'formik';
import { Form, Button, Icon } from 'antd';
import FormikInputField from '@shared/FormikInputField';
import { SignupComponent } from '@generated/graphql';

import { handleLogin } from '@services/AuthService';
import GraphqlError from '@components/GraphqlError';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape<FormValues>({
  firstName: yup
    .string()
    .required('This field is required')
    .min(2, 'UserName has to be at least 2 characters long')
    .max(12, 'UserName can have maximum length of 12 characters'),
  lastName: yup
    .string()
    .required('This field is required')
    .min(2, 'UserName has to be at least 2 characters long')
    .max(12, 'UserName can have maximum length of 12 characters'),
  email: yup
    .string()
    .required('This field is required')
    .email('Please enter a valid email'),
  password: yup
    .string()
    .required('This field is required')
    .min(6, 'Password has to be at least 6 characters long')
    .max(12, 'Password can have maximum length of 12 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('This field is required')
    .min(6, 'Password has to be at least 6 characters long')
    .max(12, 'Password can have maximum length of 12 characters')
});

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const RegisterForm: React.FC<WithRouterProps> = ({ router }) => {
  function handleGoToLoginClick() {
    if (!router) return;
    router.push('/login');
  }

  return (
    <SignupComponent>
      {(mutate, { loading, error }) => (
        <Formik
          onSubmit={async formValues => {
            try {
              const response = await mutate({ variables: formValues });
              if (response && response.data) {
                handleLogin(response.data.signup.token);
              }
            } catch (e) {
              // error state handled by GraphqlError component
              return null;
            }
          }}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <FastField
                component={FormikInputField}
                name="firstName"
                type="text"
                size="large"
                placeholder="Your First Name"
                aria-label="firstName-field"
              />
              <FastField
                component={FormikInputField}
                name="lastName"
                type="text"
                size="large"
                placeholder="Your Last Name"
                aria-label="lastName-field"
              />
              <FastField
                component={FormikInputField}
                name="email"
                type="email"
                size="large"
                placeholder="Your Email"
                aria-label="email-field"
              />
              <Field
                component={FormikInputField}
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="password"
                type="password"
                size="large"
                placeholder="Your Password"
                aria-label="password-field"
              />
              <Field
                component={FormikInputField}
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                name="confirmPassword"
                type="password"
                size="large"
                placeholder="Confirm Password"
                aria-label="confirmPassword-field"
              />
              <Button
                loading={loading}
                style={{ marginBottom: 10 }}
                block={true}
                size="large"
                type="primary"
                htmlType="submit"
                data-testid="register-submit"
              >
                Register
              </Button>
              <Button
                disabled={loading}
                htmlType="button"
                onClick={handleGoToLoginClick}
                block={true}
                size="large"
                type="default"
              >
                Already have account? Login
              </Button>
              <div style={{ marginTop: 24, marginBottom: 24 }}>
                <GraphqlError error={error} />
              </div>
            </Form>
          )}
        </Formik>
      )}
    </SignupComponent>
  );
};

export default withRouter(RegisterForm);
