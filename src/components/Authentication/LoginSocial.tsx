import React from 'react';
import { Button } from 'antd';
import css from '@emotion/css';
import styled from '@emotion/styled';

const ButtonsWrapper = styled.div`
  button {
    margin-bottom: 10px;
    border: 0;
  }
`;

export const LoginSocial: React.FC<{ disabledFromMutation: boolean }> = ({
  disabledFromMutation
}) => {
  return (
    <ButtonsWrapper>
      <Button
        disabled={disabledFromMutation}
        style={{ background: '#4267b2' }}
        block={true}
        type="primary"
        icon="facebook"
        size="large"
      >
        Login with Facebook
      </Button>
      <Button
        disabled={disabledFromMutation}
        type="primary"
        size="large"
        style={{ background: '#1da1f2' }}
        icon="twitter"
        block={true}
      >
        Login With Twitter
      </Button>
      <Button
        disabled={disabledFromMutation}
        css={css`
          .anticon {
            color: #dc4e41;
          }
          color: #737373;
          font-weight: bold;
        `}
        icon="google"
        size="large"
        block={true}
      >
        Login With Google
      </Button>
    </ButtonsWrapper>
  );
};

export default LoginSocial;
