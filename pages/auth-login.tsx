import React from 'react';

import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import LoginForm from '@components/Authentication/LoginForm';
import LoginSocial from '@components/Authentication/LoginSocial';
import { LoginComponent } from '@generated/graphql';

import { Typography } from 'antd';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';

const Login: React.FC = () => {
  return (
    <AuthWrapper initialPose="exit" pose="enter">
      <AuthImageWrapper>
        <img src="../static/security.svg" />
      </AuthImageWrapper>
      <AuthInnerWrapper>
        <LoginComponent>
          {(mutate, mutationResult) => (
            <React.Fragment>
              <Typography.Title>Login</Typography.Title>
              <LoginForm mutate={mutate} mutationResult={mutationResult} />
              <Typography.Title level={4} type="secondary">
                Login via social options
              </Typography.Title>
              <LoginSocial disabledFromMutation={mutationResult.loading} />
            </React.Fragment>
          )}
        </LoginComponent>
      </AuthInnerWrapper>
    </AuthWrapper>
  );
};

export default withApolloAuth({ userHasToBe: 'notAuthenticated' })(Login);
