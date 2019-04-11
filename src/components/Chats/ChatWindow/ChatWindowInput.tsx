import React from 'react';
import { Input } from 'antd';
import css from '@emotion/css';

const InputStyles = css`
  width: 100%;
  height: 40px;
  border: 0;
  border-top: 2px dashed #d9d9d9;
  border-radius: 0;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const ChatInput: React.FC = () => {
  return <Input css={InputStyles} />;
};

export default ChatInput;
