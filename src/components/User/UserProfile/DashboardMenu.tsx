import React from 'react';
import { Menu, Icon } from 'antd';

const DashboardMenu: React.FC = () => {
  return (
    <Menu
      mode="inline"
      style={{
        height: 'calc(100vh - 64px)',
        width: 256
      }}
    >
      <Menu.Item>
        <Icon type="calendar" />
        Your calendar
      </Menu.Item>
      <Menu.Item>
        <Icon type="message" />
        Chat
      </Menu.Item>
    </Menu>
  );
};

export default DashboardMenu;
