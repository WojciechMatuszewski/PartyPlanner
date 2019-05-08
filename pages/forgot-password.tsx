import React from 'react';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import { PoseGroup } from 'react-pose';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import { RequestPasswordResetComponent } from '@generated/graphql';
import ForgotPasswordForm from '@components/Authentication/ForgotPasswordForm';
import GraphqlError from '@components/GraphqlError';
import { Alert } from 'antd';
import * as yup from 'yup';
import { Formik } from 'formik';

export interface ForgotPasswordFormValues {
  email: string;
  confirmEmail: string;
}

const initialForgotPasswordFormValues: ForgotPasswordFormValues = {
  email: '',
  confirmEmail: ''
};

const validationSchema = yup.object().shape<ForgotPasswordFormValues>({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('This field is required'),
  confirmEmail: yup
    .string()
    .email('Please enter a valid email')
    .required('This field is required')
    .oneOf([yup.ref('email'), null], 'Emails do not match')
});

const ForgotPassword: React.FC = () => {
  return (
    <PoseGroup>
      <AuthWrapper initialPose="exit" key={1}>
        <AuthImageWrapper>
          <img src="../static/forgot-password.svg" />
        </AuthImageWrapper>
        <AuthInnerWrapper>
          <h1>Forgot Password</h1>
          <RequestPasswordResetComponent>
            {(mutate, { loading, error, data }) => (
              <Formik
                onSubmit={async ({ email }, { resetForm }) => {
                  try {
                    await mutate({ variables: { email } });
                    resetForm();
                  } catch (e) {
                    return;
                  }
                }}
                initialValues={initialForgotPasswordFormValues}
                validationSchema={validationSchema}
              >
                {({ handleSubmit }) => (
                  <React.Fragment>
                    <ForgotPasswordForm
                      error={error}
                      success={data != null && error == null}
                      loading={loading}
                      handleSubmit={handleSubmit}
                    />
                  </React.Fragment>
                )}
              </Formik>
            )}
          </RequestPasswordResetComponent>
        </AuthInnerWrapper>
      </AuthWrapper>
    </PoseGroup>
  );
};

export default withApolloAuth({ userHasToBe: 'notAuthenticated' })(
  ForgotPassword
);
