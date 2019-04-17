import React from 'react';
import { Icon, Drawer } from 'antd';
import css from '@emotion/css';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { DrawerProps } from 'antd/lib/drawer';

const BaseTriggerStyles = css`
  position: absolute;
  top: 80px;
  width: 40px;
  height: 40px;
  background: white;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  ${FlexBoxFullCenteredStyles};
  font-size: 20px;
`;

const RightTriggerStyles = css`
  left: -40px;
  top: 150px;
  border-radius: 4px 0px 0px 4px;
`;

const LeftTriggerStyles = css`
  right: -40px;
  border-radius: 0 4px 4px 0;
`;

const DrawerStyles = css`
  .ant-drawer-body {
    padding: 0;
  }
  overflow-y: auto;
`;

const ChatDrawer: React.FC<
  { children: React.ReactNode; triggerIcon: string } & DrawerProps
> = ({ children, triggerIcon, ...drawerProps }) => {
  return (
    <Drawer
      {...drawerProps}
      css={DrawerStyles}
      destroyOnClose={false}
      maskClosable={true}
      handler={
        <div
          css={[
            BaseTriggerStyles,
            drawerProps.placement === 'right'
              ? RightTriggerStyles
              : LeftTriggerStyles
          ]}
        >
          <Icon type={triggerIcon} />
        </div>
      }
    >
      {children}
    </Drawer>
  );
};

export default ChatDrawer;
