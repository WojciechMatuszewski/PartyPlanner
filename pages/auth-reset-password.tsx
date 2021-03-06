import React from 'react';
import { NextFunctionComponent, NextContext } from 'next';
import { ApolloClient } from 'apollo-client';
import { withRouter, WithRouterProps } from 'next/router';
import { PoseGroup } from 'react-pose';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import ResetPasswordForm from '@components/Authentication/ResetPasswordForm';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ResetPasswordComponent } from '@generated/graphql';
import { Modal, Typography } from 'antd';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import PageException from '@components/UI/PageException';

interface Props {
  hasTokenQuery: boolean;
}

export interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}
const initialValues: ResetPasswordFormValues = {
  password: '',
  confirmPassword: ''
};

const validationSchema = yup.object().shape<ResetPasswordFormValues>({
  password: yup
    .string()
    .required('This field is required')
    .min(6, 'Password has to be at least 6 characters long')
    .max(30, 'Password can have maximum length of 30 characters'),
  confirmPassword: yup
    .string()
    .required('This field is required')
    .min(6, 'Password has to be at least 6 characters long')
    .max(30, 'Password can have maximum length of 30 characters')
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
});

const ResetPassword: NextFunctionComponent<
  Props & WithRouterProps<{ token: string }>,
  {},
  NextContext & { apolloClient: ApolloClient<any> }
> = ({ hasTokenQuery, router }) => {
  if (!hasTokenQuery)
    return <PageException title="Hey!" desc="Page address is malformed" />;

  return (
    <PoseGroup>
      <AuthWrapper initialPose="exit" key={1}>
        <AuthImageWrapper>
          <img src="../static/my-password.svg" />
        </AuthImageWrapper>
        <AuthInnerWrapper>
          <Typography.Title level={1}>Reset your password</Typography.Title>
          <ResetPasswordComponent>
            {(mutate, { error, loading }) => (
              <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={async formValues => {
                  try {
                    await mutate({
                      variables: {
                        ...formValues,
                        resetToken: getResetTokenFromUrlQuery()
                      }
                    });
                    handleSuccess();
                  } catch (e) {
                    return;
                  }
                }}
              >
                {({ handleSubmit }) => (
                  <ResetPasswordForm
                    error={error}
                    loading={loading}
                    handleSubmit={handleSubmit}
                  />
                )}
              </Formik>
            )}
          </ResetPasswordComponent>
        </AuthInnerWrapper>
      </AuthWrapper>
    </PoseGroup>
  );

  function getResetTokenFromUrlQuery() {
    return router ? router!.query!.token : '';
  }

  function handleSuccess() {
    Modal.success({
      title: 'Password has been reset',
      content:
        'Your password was successfully reset. You can now login using new password.',
      onOk: () => router && router.push('/login'),
      okText: 'Sweet!, take me to login page',
      centered: true
    });
  }
};

ResetPassword.getInitialProps = async function(ctx) {
  const dataToReturn = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'notAuthenticated',
    ctx
  });

  if (dataToReturn != null) {
    return dataToReturn;
  }

  return {
    hasTokenQuery: ctx.query.token != null
  };
};

export default withRouter(ResetPassword);
