import React from 'react';
import { Layout } from 'antd';
import css from '@emotion/css';
import ChatsList from '@components/Chat/ChatsList';
import ChatWindow from '@components/Chat/ChatWindow';
import ChatUsers from '@components/Chat/ChatUsers';

const LayoutStyles = css`
  height: calc(100vh - 64px);
  display: flex;
`;

const Chat: React.FC = () => {
  return (
    <Layout css={LayoutStyles}>
      <ChatsList />
      <ChatWindow />
      <ChatUsers />
    </Layout>
  );
};

export default Chat;
