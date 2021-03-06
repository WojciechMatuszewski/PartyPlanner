import React from 'react';
import { isBrowser } from '@apolloSetup/initApollo';
import axios from 'axios';

export interface GeolocationCoords {
  readonly latitude: number;
  readonly longitude: number;
}

function useGeolocation() {
  const [state, setState] = React.useState<{
    isAvailable: boolean | 'unknown';
    coords: GeolocationCoords | undefined;
  }>({
    isAvailable: isBrowser() ? !!navigator.geolocation : 'unknown',
    coords: undefined
  });

  React.useEffect(() => {
    if (state.isAvailable === 'unknown') {
      setState(prevState => ({
        ...prevState,
        isAvailable: !!navigator.geolocation
      }));
    }
  }, []);

  function getCoords(): Promise<GeolocationCoords | undefined> {
    return new Promise((resolve, reject) => {
      if (!state.isAvailable) reject('Not available');
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }: Position) => {
          setState({ isAvailable: true, coords: { latitude, longitude } });
          resolve({ latitude, longitude });
        },
        async () => {
          try {
            const {
              data: { latitude, longitude }
            } = await axios.get('https://ipapi.co/json/');
            resolve({ latitude, longitude });
          } catch (e) {
            reject('Could not get the coords');
          }
          reject('Could not get the coords');
        },
        { timeout: 5000, enableHighAccuracy: true, maximumAge: 0 }
      );
    });
  }

  return { ...state, getCoords };
}

export default useGeolocation;
