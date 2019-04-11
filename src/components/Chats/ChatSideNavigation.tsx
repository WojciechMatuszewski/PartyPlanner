import React from 'react';
import ChatDrawer from './ChatDrawer';
import ChatSider from './ChatSider';

interface Props {
  type: 'sider' | 'drawer';
  placement: 'left' | 'right';
  children: React.ReactNode;
  triggerIcon: string;
}

const ChatSideNavigation: React.FC<Props> = props => {
  return props.type === 'drawer' ? (
    <ChatDrawer triggerIcon={props.triggerIcon}>{props.children}</ChatDrawer>
  ) : (
    <ChatSider placement={props.placement}>{props.children}</ChatSider>
  );
};

export default ChatSideNavigation;
