import React from 'react';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import RegisterPizzaSvg from '@components/Authentication/RegisterPizzaSvg';
import RegisterForm from '@components/Authentication/RegisterForm';

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
