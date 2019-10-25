import React from 'react';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';

interface TrackInfoModalState {
  lastTrack: Full_Saved_Track_FragmentFragment | null;
  visible: boolean;
}

interface TrackInfoModalContextValues {
  state: TrackInfoModalState;
  setState: (
    updater: (state: TrackInfoModalState) => TrackInfoModalState
  ) => void;
}

const TrackInfoModalContext = React.createContext<
  TrackInfoModalContextValues | undefined
>(undefined);

export const TrackInfoModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, setState] = React.useState<TrackInfoModalState>({
    lastTrack: null,
    visible: false
  });
  const contextValue = React.useMemo(
    () => ({
      state,
      setState
    }),
    [state]
  );
  return (
    <TrackInfoModalContext.Provider value={contextValue}>
      {children}
    </TrackInfoModalContext.Provider>
  );
};

export function useTrackInfoModal() {
  const context = React.useContext(TrackInfoModalContext);
  if (!context) {
    throw new Error('useTrackInfoModal must be used within a CountProvider');
  }
  const { state, setState } = context;

  return {
    modalVisible: state.visible,
    closeModal,
    openModal,
    trackInModal: state.lastTrack
  };

  function closeModal() {
    setState(prev => ({ ...prev, visible: false }));
  }

  function openModal(track: Full_Saved_Track_FragmentFragment) {
    setState(() => ({ lastTrack: track, visible: true }));
  }
}
