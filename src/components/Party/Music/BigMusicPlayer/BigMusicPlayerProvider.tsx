import React from 'react';
import { Track } from 'spotify-web-sdk';
import { Subject } from 'rxjs';

interface BigMusicPlayerContextValue {
  track: Track | null;
  setTrack: (track: Track) => void;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  audioPlayerCommands$: Subject<'play' | 'stop' | 'toggle'>;
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
  const [playing, setPlaying] = React.useState<boolean>(false);

  const subjectRef = React.useRef<Subject<'play' | 'stop'>>(new Subject());

  const contextValue = React.useMemo(
    () => ({
      track,
      setTrack,
      audioPlayerCommands$: subjectRef.current,
      setPlaying,
      playing
    }),
    [track, playing]
  );

  return (
    <BigMusicPlayerContext.Provider value={contextValue} children={children} />
  );
};

export function useBigMusicPlayer() {
  const context = React.useContext(BigMusicPlayerContext);

  if (!context) {
    throw new Error('useBigMusicPlayer must be used within a CountProvider');
  }
  return context;
}
