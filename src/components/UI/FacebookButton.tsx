import React from 'react';
import { ButtonProps } from 'antd/lib/button';
import { Button } from 'antd';

export default function FacebookButton(props: ButtonProps) {
  const { children, icon, style, ...restOfProps } = props;
  return (
    <Button
      {...restOfProps}
      style={{ ...props.style, background: '#4267b2' }}
      type="primary"
      icon="facebook"
    >
      {props.children}
    </Button>
  );
}
