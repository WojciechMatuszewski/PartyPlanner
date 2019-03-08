import React from 'react';
import { useSpring } from 'react-spring';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import LoginForm from '@components/Authentication/LoginForm';
import LoginSocial from '@components/Authentication/LoginSocial';

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
