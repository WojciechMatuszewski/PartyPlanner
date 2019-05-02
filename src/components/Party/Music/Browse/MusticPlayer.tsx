import React from 'react';

interface MusicPlayerContextProps {
  play: () => void;
  stop: () => void;
  skip: () => void;
  set: () => void;
}

const MusicPlayerContext = React.createContext();

const MusicPlayer: React.FC = () => {
  return <div>works</div>;
};

export default MusicPlayer;
