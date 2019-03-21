import React from 'react';
import * as yup from 'yup';
import { Formik, FastField } from 'formik';
import { Form, Button, Icon } from 'antd';
import FormikInputField from '../../shared/formikInputField';
import styled from '@emotion/styled';
import { LoginMutation, LoginVariables } from '@generated/graphql';
import { MutationFn, MutationResult } from 'react-apollo';
import { withRouter, WithRouterProps } from 'next/router';
import GraphqlError from '@components/GraphqlError';
import { handleLogin } from './AuthService';
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
    .max(12, 'Password can have maximum length of 12 characters')
});

const initialValues: FormValues = {
  email: '',
  password: ''
};

const LoginControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginForm: React.FC<
  {
    mutate: MutationFn<LoginMutation, LoginVariables>;
    mutationResult: MutationResult<LoginMutation>;
  } & WithRouterProps
> = ({ mutate, mutationResult: { loading, error }, router }) => {
  return (
    <Formik
      onSubmit={async formValues => {
        try {
          const response = await mutate({ variables: formValues });
          if (!error && response && response.data && router) {
            handleLogin(response.data.login.token, router);
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
            aria-label="email-field"
            component={FormikInputField}
            type="email"
            name="email"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Your email address"
            size="large"
          />
          <FastField
            aria-label="password-field"
            component={FormikInputField}
            type="password"
            name="password"
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
            <a>Forgot password ? </a>
          </LoginControlsWrapper>
          <div style={{ marginTop: 24 }}>
            <GraphqlError error={error} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default withRouter(LoginForm);
