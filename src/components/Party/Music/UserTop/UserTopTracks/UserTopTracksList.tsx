import React from 'react';
import { Track } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import posed from 'react-pose';
import UserTopTrack from './UserTopTrack';
import { useBigMusicPlayer } from '../../BigMusicPlayer/BigMusicPlayerProvider';
import { useTrackInfoModal } from '../../TrackInfoModal/TrackInfoModalProvider';

const TopTracksGrid = styled(
  posed.ul({
    loading: {
      opacity: 0
    },
    loaded: {
      opacity: 1
    }
  })
)`
  padding-left: 0;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 22px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 20px;
  grid-column-gap: 12px;
  margin-bottom: 40px;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1fr);
  }

  @media screen and (max-width: 1570px) {
    .user-top-track:nth-of-type(4n) {
      transform-origin: center right;
    }
    .user-top-track:nth-of-type(4n-3) {
      transform-origin: center left;
    }
  }

  @media screen and (max-width: 1496px) {
    .user-top-track:nth-of-type(3n) {
      transform-origin: center right;
    }
    .user-top-track:nth-of-type(3n-2) {
      transform-origin: center left;
    }
  }
  @media screen and (max-width: 1186px) {
    .user-top-track:nth-of-type(2n) {
      transform-origin: center right;
    }
    .user-top-track:nth-of-type(2n-1) {
      transform-origin: center left;
    }
  }
`;

interface Props {
  tracks: Track[];
}
const UserTopTracksList: React.FC<Props> = ({ tracks }) => {
  const {
    setTrack,
    playerState,
    track,
    audioPlayerCommands$
  } = useBigMusicPlayer();

  const { openModal } = useTrackInfoModal();

  const handleOnPlayClick = React.useCallback((track: Track) => {
    audioPlayerCommands$.next({ command: 'toggle', trackInQuestion: track });
    setTrack(track);
  }, []);

  const handleMoreInfoClick = React.useCallback((track: Track) => {
    openModal(track);
  }, []);

  return (
    <TopTracksGrid className="grid-wrapper">
      {tracks.map(topTrack => (
        <UserTopTrack
          onMoreInfoClick={handleMoreInfoClick}
          onPlayClick={handleOnPlayClick}
          trackPlaying={
            track ? track.id == topTrack.id && playerState == 'playing' : false
          }
          track={topTrack}
          key={topTrack.id}
        />
      ))}
    </TopTracksGrid>
  );
};

export default React.memo(UserTopTracksList);
