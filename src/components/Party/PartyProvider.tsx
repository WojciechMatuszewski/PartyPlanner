import React from 'react';

type PartyContextType = { partyId: string } | undefined;

const PartyContext = React.createContext<PartyContextType>(undefined);

interface Props {
  partyId: string;
  children: React.ReactNode;
}

export function PartyProvider({ children, ...passedContextValue }: Props) {
  const [contextValue] = React.useState(passedContextValue);

  return (
    <PartyContext.Provider value={contextValue}>
      {children}
    </PartyContext.Provider>
  );
}

export function useParty() {
  const contextValue = React.useContext(PartyContext);
  if (!contextValue)
    throw Error('useParty can only be used within PartyProvider');
  return contextValue;
}
