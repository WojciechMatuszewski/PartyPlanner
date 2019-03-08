import React from 'react';

import ChatDrawer from './ChatDrawer';
import ChatSider from './ChatSider';
import useMedia from '@hooks/useMedia';

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
