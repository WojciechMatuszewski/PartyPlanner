import React from 'react';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '../src/components/Authentication/styles';
import RegisterForm from '../src/components/Authentication/RegisterForm';
import RegisterPizzaSvg from '../src/components/Authentication/RegisterPizzaSvg';

const Register: React.FC = () => {
  return (
    <AuthWrapper>
      <AuthImageWrapper>
        <RegisterPizzaSvg />
      </AuthImageWrapper>
      <AuthInnerWrapper>
        <h1>Register</h1>
        <RegisterForm />
      </AuthInnerWrapper>
    </AuthWrapper>
  );
};

export default Register;
