import React from 'react';
import ChatsList from '../src/components/Chat/ChatsList';
import { Layout } from 'antd';
import css from '@emotion/css';
import ChatWindow from '../src/components/Chat/ChatWindow';
import ChatUsers from '../src/components/Chat/ChatUsers';

const LayoutStyles = css`
  height: calc(100vh - 64px);
  display: flex;
`;

const Chat: React.FC = () => {
  return (
    <Layout css={LayoutStyles} tagName="section">
      <ChatsList />
      <ChatWindow />
      <ChatUsers />
    </Layout>
  );
};

export default Chat;
