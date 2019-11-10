import React from 'react';

type ContextValue = { userId: string } | undefined;

const UserContext = React.createContext<ContextValue>(undefined);

type Props = NonNullable<ContextValue> & { children: React.ReactNode };
export default function UserProvider({ children, ...contextValue }: Props) {
  const memoizedContextValue = React.useMemo(() => contextValue, [
    contextValue
  ]);

  return (
    <UserContext.Provider value={memoizedContextValue}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) throw new Error('blah');
  return context;
}
