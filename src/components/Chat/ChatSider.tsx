import React from 'react';
import css from '@emotion/css';

import Sider from 'antd/lib/layout/Sider';

const ChatSider: React.FC<{
  children: React.ReactNode;
  placement: string;
  width?: number;
}> = ({ children, placement, width }) => {
  return (
    <Sider
      width={width ? width : 300}
      theme="light"
      collapsible={false}
      css={css`
        height: 100%;
        border-right: ${placement === 'left' ? '2px dashed #d9d9d9' : '0'};
        border-left: ${placement === 'right' ? '2px dashed #d9d9d9' : '0'};
      `}
    >
      {children}
    </Sider>
  );
};

export default ChatSider;
