import React from 'react';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '../src/components/Authentication/styles';
import RegisterForm from '../src/components/Authentication/RegisterForm';

const Register: React.FC = () => {
  return (
    <AuthWrapper>
      <AuthImageWrapper>
        <img src="../static/pizza-sharing.svg" />
      </AuthImageWrapper>
      <AuthInnerWrapper>
        <h1>Register</h1>
        <RegisterForm />
      </AuthInnerWrapper>
    </AuthWrapper>
  );
};

export default Register;
