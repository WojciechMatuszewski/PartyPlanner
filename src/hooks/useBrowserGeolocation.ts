import React from 'react';
import { isBrowser } from '@apolloSetup/initApollo';

function useBrowserGeolocation() {
  const [state, setState] = React.useState<{
    isAvailable: boolean | 'unknown';
    position: Position | null;
  }>({
    isAvailable: isBrowser() ? !!navigator.geolocation : 'unknown',
    position: null
  });

  React.useEffect(() => {
    if (state.isAvailable === 'unknown') {
      setState(prevState => ({
        ...prevState,
        isAvailable: !!navigator.geolocation
      }));
    }
  }, []);

  function getPosition(): Promise<Position | undefined> {
    return new Promise((resolve, reject) => {
      if (!state.isAvailable) resolve();
      navigator.geolocation.getCurrentPosition(
        position => {
          setState({ isAvailable: true, position });
          resolve(position as Position);
        },
        error => {
          reject(error);
        },
        { timeout: 5000 }
      );
    });
  }

  return { ...state, getPosition };
}

export default useBrowserGeolocation;
