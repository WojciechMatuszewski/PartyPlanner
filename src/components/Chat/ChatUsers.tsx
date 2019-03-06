import React from 'react';
import useMedia from '../../hooks/useMedia';
import ChatDrawer from './ChatDrawer';
import ChatSider from './ChatSider';

const ChatUsers: React.FC = () => {
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');
  return shouldDisplayDrawer ? (
    <ChatDrawer title="Invited People" placement="right" triggerIcon="user">
      Works
    </ChatDrawer>
  ) : (
    <ChatSider width={200} placement="right">
      Works
    </ChatSider>
  );
};

export default ChatUsers;
