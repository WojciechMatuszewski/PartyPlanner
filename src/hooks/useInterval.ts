// CREDIT TO ONE AND ONLY DAN ABRAMOV : https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback: (...args: any[]) => any, delay: number | null) {
  const savedCallback = useRef<(...args: any[]) => any>(() => null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
