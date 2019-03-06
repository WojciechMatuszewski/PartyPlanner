import React from 'react';

import LoginForm from '../src/components/Authentication/LoginForm';
import LoginSocial from '../src/components/Authentication/LoginSocial';
import { useSpring } from 'react-spring';

import {
  AuthImageWrapper,
  AuthWrapper,
  AuthInnerWrapper
} from '../src/components/Authentication/styles';

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
        <h1>Login</h1>
        <LoginForm />
        <h3>Login via social options</h3>
        <LoginSocial />
      </AuthInnerWrapper>
    </AuthWrapper>
  );
};

export default Login;
