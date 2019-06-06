import React from 'react';
import { ButtonProps } from 'antd/lib/button';
import { Button } from 'antd';

export default function TwitterButton(props: ButtonProps) {
  const { children, style, icon, ...restOfProps } = props;
  return (
    <Button
      {...restOfProps}
      icon="twitter"
      type="primary"
      style={{ background: '#1da1f2', ...style }}
    >
      {children}
    </Button>
  );
}
