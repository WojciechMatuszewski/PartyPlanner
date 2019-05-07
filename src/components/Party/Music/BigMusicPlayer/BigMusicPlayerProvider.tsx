import React from 'react';
import { Track } from 'spotify-web-sdk';
import { Subject } from 'rxjs';

export interface UseBigMusicPlayerCommandsPayload {
  command: 'toggle' | 'pause';
  trackInQuestion: Track;
}

export type UseBigMusicPlayerStates =
  | 'loading'
  | 'playing'
  | 'paused'
  | 'disabled';
interface BigMusicPlayerContextValue {
  track: Track | null;
  setTrack: (track: Track) => void;
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
  const [track, setTrack] = React.useState<Track | null>(null);
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
