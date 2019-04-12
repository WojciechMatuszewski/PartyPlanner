import React from 'react';
import { Input } from 'antd';
import css from '@emotion/css';

const InputStyles = css`
  width: 100%;
  height: 50px;
  border: 0;
  /* border-top: 2px dashed #d9d9d9; */
  box-shadow: 3px -2px 7px -2px rgba(0, 0, 0, 0.15) !important;
  border-radius: 0;
  &:focus {
    outline: none;
    /* box-shadow: none; */
  }
`;

const ChatInput: React.FC = () => {
  // const { currentlyLoggedUserId, currentlySelectedChatId } = React.useContext(
  //   ChatsContext
  // );

  return <Input css={InputStyles} placeholder="Type a message here" />;
};

export default ChatInput;
