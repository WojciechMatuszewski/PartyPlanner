import React from 'react';

function usePrevious<Value>(value: Value): Value | null {
  const valueRef = React.useRef<Value | null>(null);

  React.useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
}

export default usePrevious;
