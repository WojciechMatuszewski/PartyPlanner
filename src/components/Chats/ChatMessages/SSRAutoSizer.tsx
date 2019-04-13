import React from 'react';
import { WindowScrollerChildProps } from 'react-virtualized';

interface ServerRenderingCompatProps {
  initialWidth: number;
  initialHeight: number;
  children: (params: WindowScrollerChildProps) => React.ReactElement<any>;
}
const SSRAutoSizer: React.FC<
  ServerRenderingCompatProps & WindowScrollerChildProps
> = props => {
  const [hasMounted, setHasMounted] = React.useState<boolean>(false);
  React.useEffect(() => setHasMounted(true), []);
  const {
    initialHeight,
    initialWidth,
    children,
    ...windowScrollerChildProps
  } = props;
  return hasMounted
    ? children(windowScrollerChildProps)
    : children({
        ...windowScrollerChildProps,
        width: initialWidth,
        height: initialHeight
      });
};

export default SSRAutoSizer;
