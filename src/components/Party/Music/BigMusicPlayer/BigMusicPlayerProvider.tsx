import React from 'react';

import { Subject } from 'rxjs';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';

export interface UseBigMusicPlayerCommandsPayload {
  command: 'toggle' | 'pause';
  trackInQuestion: Full_Saved_Track_FragmentFragment;
}

export type UseBigMusicPlayerStates =
  | 'loading'
  | 'playing'
  | 'paused'
  | 'disabled';
interface BigMusicPlayerContextValue {
  track: Full_Saved_Track_FragmentFragment | null;
  setTrack: (track: Full_Saved_Track_FragmentFragment) => void;
  playerState: UseBigMusicPlayerStates;
  setPlayerState: (state: UseBigMusicPlayerStates) => void;
  audioPlayerCommands$: Subject<UseBigMusicPlayerCommandsPayload>;
}

interface BigMusicPlayerProviderProps {
  children?: React.ReactNode;
}

const BigMusicPlayerContext = React.createContext<
  BigMusicPlayerContextValue | undefined
>(undefined);

export const BigMusicPlayerProvider: React.FC<BigMusicPlayerProviderProps> = ({
  children
}) => {
  const [
    track,
    setTrack
  ] = React.useState<Full_Saved_Track_FragmentFragment | null>(null);
  const [playerState, setPlayerState] = React.useState<UseBigMusicPlayerStates>(
    'disabled'
  );

  const subjectRef = React.useRef<Subject<UseBigMusicPlayerCommandsPayload>>(
    new Subject()
  );

  const contextValue = React.useMemo(
    () => ({
      track,
      setTrack,
      audioPlayerCommands$: subjectRef.current,
      playerState,
      setPlayerState
    }),
    [track, playerState]
  );

  return (
    <BigMusicPlayerContext.Provider value={contextValue}>
      {children}
    </BigMusicPlayerContext.Provider>
  );
};

export function useBigMusicPlayer() {
  const context = React.useContext(BigMusicPlayerContext);

  if (!context) {
    throw new Error('useBigMusicPlayer must be used within a CountProvider');
  }
  return context;
}
