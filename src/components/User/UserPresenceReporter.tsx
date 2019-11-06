import React from 'react';
import { isBrowser } from '@apolloSetup/initApollo';
import useLocalStorage from '@hooks/useLocalStorage';
import { USER_PRESENCE_CONFIG } from '@graphql/resolvers';
import { useUpdateUser } from '@generated/graphql';
import { Subscription, timer, of } from 'rxjs';
import { concatMap, catchError } from 'rxjs/operators';

interface Props {
  userId: string;
}

const UserPresenceReporter: React.FC<Props> = props => {
  const [updatePresence] = useUpdateUser();
  const { retrieveFromStorage, saveToStorage } = useLocalStorage(
    'last-heartbeat'
  );

  React.useEffect(() => {
    if (!isBrowser()) return;
    const initialDelay = calculateInitialDelay();
    const subscription: Subscription = timer(initialDelay, getTimerInterval())
      .pipe(
        concatMap(async () => await updateLastOnline()),
        catchError(() => {
          return of();
        })
      )
      .subscribe();
    return () => subscription.unsubscribe();
  }, [props.userId]);

  return null;

  function getLocalStorageDiff() {
    const inLocalStorage = retrieveFromStorage();
    if (!inLocalStorage) return 0;
    return new Date().getTime() - inLocalStorage;
  }

  function shouldUpdateImmediately(diffWithLocalStorage: number) {
    return (
      diffWithLocalStorage == 0 ||
      diffWithLocalStorage > USER_PRESENCE_CONFIG.dateDiffLimit
    );
  }

  function getTimerInterval() {
    return (
      USER_PRESENCE_CONFIG.poolInterval +
      USER_PRESENCE_CONFIG.localOfflineTimeoutOffset
    );
  }

  async function updateLastOnline() {
    await lastOnlineUpdater().then(() => saveToStorage(new Date().getTime()));
  }

  // TODO: edge case here, when it tries to update and user logs off
  async function lastOnlineUpdater() {
    await updatePresence({
      variables: {
        where: {
          id: props.userId
        },
        data: {
          lastOnline: new Date()
        }
      }
    });
  }

  function calculateInitialDelay() {
    const localStorageTimeDiff = getLocalStorageDiff();
    return shouldUpdateImmediately(localStorageTimeDiff)
      ? 0
      : localStorageTimeDiff;
  }
};

export default React.memo(UserPresenceReporter);
