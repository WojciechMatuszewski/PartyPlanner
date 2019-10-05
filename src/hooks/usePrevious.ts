import React from 'react';

function usePrevious<Value>(value: Value, deps: any = value): Value {
  const valueRef = React.useRef<Value>(value);

  React.useEffect(() => {
    valueRef.current = value;
  }, [deps]);

  return valueRef.current;
}

export default usePrevious;
