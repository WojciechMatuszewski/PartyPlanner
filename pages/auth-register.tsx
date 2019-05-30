import React from 'react';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import RegisterPizzaSvg from '@components/Authentication/RegisterPizzaSvg';
import RegisterForm from '@components/Authentication/RegisterForm';
import css from '@emotion/css';
import { Typography } from 'antd';

const Register: React.FC = () => {
  return (
    <AuthWrapper
      pose="enter"
      initialPose="exit"
      key={1}
      css={css`
        max-width: 1440px;
        width: 100%;
      `}
    >
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
