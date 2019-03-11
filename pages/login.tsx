import React from 'react';

import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import LoginForm from '@components/Authentication/LoginForm';
import LoginSocial from '@components/Authentication/LoginSocial';
import { LoginComponent } from '@generated/graphql';
import { withApolloAuth } from '../apolloSetup/withApolloAuth';
import { PoseGroup } from 'react-pose';

const Login: React.FC = () => {
  return (
    <PoseGroup>
      <AuthWrapper initialPose="exit" key={1}>
        <AuthImageWrapper>
          <img src="../static/security.svg" />
        </AuthImageWrapper>
        <AuthInnerWrapper>
          <LoginComponent>
            {(mutate, mutationResult) => (
              <React.Fragment>
                <h1>Login</h1>
                <LoginForm mutate={mutate} mutationResult={mutationResult} />
                <h3>Login via social options</h3>
                <LoginSocial disabledFromMutation={mutationResult.loading} />
              </React.Fragment>
            )}
          </LoginComponent>
        </AuthInnerWrapper>
      </AuthWrapper>
    </PoseGroup>
  );
};

export default withApolloAuth({ userHasToBe: 'notAuthenticated' })(Login);
