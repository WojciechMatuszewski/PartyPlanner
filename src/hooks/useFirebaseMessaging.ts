import FirebaseService from '@services/FirebaseService';
import React from 'react';
import { BehaviorSubject, defer, empty, Subscription, timer } from 'rxjs';
import {
  concat,
  map,
  switchMap,
  takeUntil,
  takeWhile,
  tap
} from 'rxjs/operators';

export default function useFirebaseMessaging() {
  const [instance, setInstance] = React.useState<firebase.app.App | null>(
    FirebaseService.get()
  );
  const [loading, setLoading] = React.useState(!FirebaseService.get());
  const [timeout, setTimeout] = React.useState(false);
  const retrySubjectRef = React.useRef(
    new BehaviorSubject<boolean>(!FirebaseService.get())
  );

  React.useEffect(() => {
    let subscription: Subscription;

    if (instance) return;

    function handlePoolFinished() {
      const instance = FirebaseService.get();
      setInstance(instance);
      setLoading(false);
    }

    const timeout$ = timer(100).pipe(
      tap(() => {
        setTimeout(true);
        setLoading(false);
      })
    );

    const pool$ = timer(0, 100).pipe(
      tap(tick => tick == 0 && setLoading(true)),
      map(tick => [tick, FirebaseService.get()]),
      takeWhile(([tick, resource]) => tick < 10 && !resource),
      takeUntil(timeout$),
      concat(defer(handlePoolFinished))
    );

    subscription = retrySubjectRef.current
      .pipe(
        switchMap(shouldRun => {
          return shouldRun ? pool$ : empty();
        })
      )
      .subscribe();

    return () => subscription && subscription.unsubscribe();
  }, []);

  return {
    loading,
    firebaseMessaging: instance ? instance.messaging() : null,
    timeoutWhileLoadingFirebase: timeout,
    retryFirebaseLoading: () => retrySubjectRef.current.next(true)
  };
}
