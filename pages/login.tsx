import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '../src/shared/styles';
import LoginForm from '../src/components/Authentication/LoginForm';
import LoginSocial from '../src/components/Authentication/LoginSocial';

const LoginWrapper = styled.div`
  min-height: calc(100vh - 64px);

  padding: 0 20px;
  box-sizing: content-box;
  margin: 0 auto;
  ${FlexBoxFullCenteredStyles};
`;

const LoginInnerWrapper = styled.div`
  max-width: 800px;
  width: 500px;
  text-align: left;
  h3 {
    margin-top: 30px;
  }
  h1 {
    border-bottom: 3px solid #1890ff;
    display: inline-block;
    margin-bottom: 24px;
  }
  border-left: 2px dashed #d9d9d9;
  padding: 20px 0;
  padding-left: 100px;
`;

const LoginImageWrapper = styled.div`
  img {
    width: 800px;
  }
  height: 100%;
  flex: 1;
  display: flex;
  ${FlexBoxFullCenteredStyles};
`;

const Login: React.FC = () => {
  return (
    <LoginWrapper>
      <LoginImageWrapper>
        <img src="../static/woman-sitting.svg" />
      </LoginImageWrapper>
      <LoginInnerWrapper>
        <h1>Login</h1>
        <LoginForm />
        <h3>Login via social icons</h3>
        <LoginSocial />
      </LoginInnerWrapper>
    </LoginWrapper>
  );
};

export default Login;
