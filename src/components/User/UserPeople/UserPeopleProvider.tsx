import React from 'react';

type ContextType =
  | { current: string[]; pending: { id: string; invitedUserId: string }[] }
  | undefined;

const UserPeopleContext = React.createContext<ContextType>(undefined);

type Props = NonNullable<ContextType> & { children: React.ReactNode };

export default function UserPeopleProvider({
  children,
  ...contextProps
}: Props) {
  const memoizedContextValue = React.useMemo(() => contextProps, [
    contextProps
  ]);

  return (
    <UserPeopleContext.Provider value={memoizedContextValue}>
      {children}
    </UserPeopleContext.Provider>
  );
}

export function useUserFriends() {
  const context = React.useContext(UserPeopleContext);
  if (!context)
    throw new Error('useUserFriends can only be used within a provider!');
  return context;
}
