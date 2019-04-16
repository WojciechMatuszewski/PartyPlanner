import React from 'react';
import ChatDrawer from './ChatDrawer';
import ChatSider from './ChatSider';
import { SiderProps } from 'antd/lib/layout';
import { DrawerProps } from 'antd/lib/drawer';

interface Props {
  type: 'sider' | 'drawer';
  placement: 'left' | 'right';
  children: React.ReactNode;
  triggerIcon: string;
  siderProps?: Partial<SiderProps>;
  drawerProps?: Partial<DrawerProps>;
}

const ChatSideNavigation: React.FC<Props> = props => {
  return props.type === 'drawer' ? (
    <ChatDrawer
      {...props.drawerProps}
      triggerIcon={props.triggerIcon}
      placement={props.placement}
      // visible={true}
    >
      {props.children}
    </ChatDrawer>
  ) : (
    <ChatSider {...props.siderProps} placement={props.placement}>
      {props.children}
    </ChatSider>
  );
};

export default ChatSideNavigation;
