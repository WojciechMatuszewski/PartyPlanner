import React from 'react';
import {
  AuthWrapper,
  AuthImageWrapper,
  AuthInnerWrapper
} from '@components/Authentication/styles';
import RegisterPizzaSvg from '@components/Authentication/RegisterPizzaSvg';
import RegisterForm from '@components/Authentication/RegisterForm';
import css from '@emotion/css';
import { PoseGroup } from 'react-pose';

const Register: React.FC = () => {
  return (
    <PoseGroup>
      <AuthWrapper
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
          <h1>Register</h1>
          <RegisterForm />
        </AuthInnerWrapper>
      </AuthWrapper>
    </PoseGroup>
  );
};

export default Register;
