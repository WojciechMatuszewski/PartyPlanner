import React from 'react';

import ChatsListDrawer from './ChatDrawer';
import ChatsListSider from './ChatSider';
import ChatsListSearch from './ChatsListSearch';
import useMedia from '@hooks/useMedia';

const ChatsList: React.FC = () => {
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  const children = (
    <React.Fragment>
      <ChatsListSearch />
    </React.Fragment>
  );

  return shouldDisplayDrawer ? (
    <ChatsListDrawer title="Other Chats" placement="left" triggerIcon="message">
      {children}
    </ChatsListDrawer>
  ) : (
    <ChatsListSider placement="left">{children}</ChatsListSider>
  );
};

export default ChatsList;
