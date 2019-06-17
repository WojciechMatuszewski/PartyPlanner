import React from 'react';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import RegisterPizzaSvg from '@components/Authentication/RegisterPizzaSvg';
import RegisterForm from '@components/Authentication/RegisterForm';
import { Typography } from 'antd';

const Register: React.FC = () => {
  return (
    <AuthWrapper initialPose="exit" pose="enter">
      <AuthImageWrapper>
        <RegisterPizzaSvg />
      </AuthImageWrapper>
      <AuthInnerWrapper>
        <Typography.Title>Register</Typography.Title>
        <RegisterForm />
      </AuthInnerWrapper>
    </AuthWrapper>
  );
};

export default Register;
