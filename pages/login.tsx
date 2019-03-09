import React from 'react';
import { useSpring } from 'react-spring';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import LoginForm from '@components/Authentication/LoginForm';
import LoginSocial from '@components/Authentication/LoginSocial';
import { LoginComponent } from '@generated/graphql';

const Login: React.FC = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
    opacity: 1,
    transform: 'translate3d(0,0,0)'
  });
  return (
    <AuthWrapper style={styles}>
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
  );
};

export default Login;
