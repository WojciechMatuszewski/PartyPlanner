import FirebaseService from '@services/FirebaseService';
import React from 'react';

export default function useFirebaseMessaging() {
  const [instance, setInstance] = React.useState<firebase.app.App | null>(
    FirebaseService.get()
  );

  const [loading, setLoading] = React.useState(!FirebaseService.get());

  React.useEffect(() => {
    if (instance) return;
    const interval = setInterval(() => {
      const firebase = FirebaseService.get();
      if (firebase) {
        setInstance(firebase);
        setLoading(false);
        clearInterval(interval);
      }
    }, 100);
  }, []);

  return {
    loading,
    firebaseMessaging: instance ? instance.messaging() : null
  };
}
