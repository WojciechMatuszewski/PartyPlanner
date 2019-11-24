import React from 'react';
import * as yup from 'yup';
import { Formik, FastField } from 'formik';
import { Form, Button, Icon } from 'antd';
import styled from '@emotion/styled';
import { LoginMutation, LoginVariables } from '@generated/graphql';
import { MutationFn, MutationResult } from 'react-apollo';

import GraphqlError from '@components/GraphqlError';
import Link from 'next/link';
import { handleLogin } from '@services/AuthService';
import FormikInputField from '@shared/FormikInputField';
interface FormValues {
  email: string;
  password: string;
}
const validationSchema = yup.object().shape<FormValues>({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('This field is required'),
  password: yup
    .string()
    .required('This field is required')
    .min(6, 'Password has to be at least 6 characters long')
    .max(30, 'Password can have maximum length of 30 characters')
});

const initialValues: FormValues = {
  email: '',
  password: ''
};

const LoginControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginForm: React.FC<{
  mutate: MutationFn<LoginMutation, LoginVariables>;
  mutationResult: MutationResult<LoginMutation>;
}> = ({ mutate, mutationResult: { loading, error } }) => {
  return (
    <Formik
      onSubmit={async formValues => {
        try {
          const response = await mutate({ variables: formValues });

          if (response && response.data) {
            handleLogin(response.data.login.token);
          }
        } catch (e) {
          // error state handled by GraphqlError component
          return null;
        }
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FastField
            formItemProps={{
              htmlFor: 'email',
              label: 'Your email address'
            }}
            component={FormikInputField}
            type="email"
            name="email"
            id="email"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Your email address"
            size="large"
          />
          <FastField
            formItemProps={{
              htmlFor: 'password',
              label: 'Your password'
            }}
            component={FormikInputField}
            type="password"
            name="password"
            id="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Your password"
            size="large"
          />
          <LoginControlsWrapper>
            <Button
              loading={loading}
              htmlType="submit"
              size="large"
              type="primary"
              data-testid="login-submit"
            >
              Login
            </Button>
            <Link href="/auth-forgot-password" as="/forgot-password">
              <a>Forgot password ? </a>
            </Link>
          </LoginControlsWrapper>
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <GraphqlError error={error} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
