import { renderHook, act } from 'react-hooks-testing-library';
import useGeolocation from '@hooks/useGeolocation';
import axios from 'axios';

/*
  so yea.. react strikes again
  read (second to last section) https://github.com/threepointone/react-act-examples
  this is just bad :c
*/

const fakePosition: Position = {
  coords: {
    latitude: 1,
    longitude: 1,
    accuracy: 1,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  },
  timestamp: 1
};

const mockedGetCurrentPosition = jest.fn(successCb => {
  successCb(fakePosition);
});

const mockedGetCurrentPositionFail = jest.fn((_, errCb) => {
  errCb({ code: 2 });
});

describe('useGeolocation', () => {
  it('Works with navigator', async () => {
    jest.useFakeTimers();
    (global as any).navigator.geolocation = {
      getCurrentPosition: mockedGetCurrentPosition
    };
    const {
      result: {
        current: { getCoords, coords, isAvailable }
      }
    } = renderHook(useGeolocation);
    expect(isAvailable).toBe(true);
    expect(coords).toBe(undefined);
    act(() => {
      getCoords();
      jest.runAllTimers();
    });
    expect(mockedGetCurrentPosition).toHaveBeenCalledTimes(1);
    // do i rly need to polyfill promise and change babel config for this to work ?
  });
  it('works without navigator', async () => {
    const axiosSpy = jest.spyOn(axios, 'get');
    (global as any).navigator.geolocation = {
      getCurrentPosition: mockedGetCurrentPositionFail
    };
    const {
      result: {
        current: { getCoords }
      }
    } = renderHook(useGeolocation);
    act(() => {
      getCoords();
      jest.runAllTimers();
    });
    expect(axiosSpy).toHaveBeenCalled();
    expect(axiosSpy).toHaveBeenCalledWith('http://ip-api.com/json');
  });
});
