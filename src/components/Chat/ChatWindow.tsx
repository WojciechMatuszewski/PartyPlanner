import React from 'react';
import styled from '@emotion/styled';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatWindowWrapper = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 64px);
  flex-direction: column;
`;

const ChatWindow: React.FC = () => {
  return (
    <ChatWindowWrapper>
      <ChatMessages />
      <ChatInput />
    </ChatWindowWrapper>
  );
};

export default ChatWindow;
