import React from 'react';
import { isBrowser } from '@apolloSetup/initApollo';
import { ifElse, always } from 'ramda';

function useLocalStorage(key: string = '') {
  function _getItem(key: string) {
    return localStorage.getItem(key);
  }

  function _setItem(value: any, key: string) {
    return localStorage.setItem(key, value);
  }

  const retrieveFromStorage = React.useCallback(() => {
    return ifElse(isBrowser, _getItem, always(null))(key);
  }, [key]);

  const saveToStorage = React.useCallback(
    (value: any, passedKey: string = key) => {
      ifElse(isBrowser, _setItem, always(null))(value, passedKey);
    },
    [key]
  );

  return {
    saveToStorage,
    retrieveFromStorage
  };
}

export default useLocalStorage;
