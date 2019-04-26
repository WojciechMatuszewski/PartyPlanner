import React from 'react';
import css from '@emotion/css';
import { Layout } from 'antd';
import { SiderProps } from 'antd/lib/layout';
const { Sider } = Layout;

const ChatSider: React.FC<
  {
    placement: string;
  } & SiderProps
> = ({ placement, width, children, ...restOfProps }) => {
  return (
    <Sider
      width={width ? width : 300}
      theme="light"
      collapsible={false}
      {...restOfProps}
      css={css`
        height: 100%;
        overflow-y: auto;
        border-right: ${placement === 'left' ? '1px solid #e8e8e8' : '0'};
        border-left: ${placement === 'right' ? '1px solid #e8e8e8' : '0'};
        .ant-layout-sider-children {
          display: flex;
          flex-direction: column;
        }
      `}
    >
      {children}
    </Sider>
  );
};

export default ChatSider;
