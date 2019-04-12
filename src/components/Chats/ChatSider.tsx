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
  console.log(restOfProps);
  return (
    <Sider
      width={width ? width : 300}
      theme="light"
      collapsible={false}
      {...restOfProps}
      css={css`
        height: 100%;
        overflow-y: auto;
        border-right: ${placement === 'left' ? '2px dashed #d9d9d9' : '0'};
        border-left: ${placement === 'right' ? '2px dashed #d9d9d9' : '0'};
      `}
    >
      {children}
    </Sider>
  );
};

export default ChatSider;
