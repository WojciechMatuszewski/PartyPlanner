import React from 'react';
import { Track, Page } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import posed from 'react-pose';
import UserTopTrack from './UserTopTrack';
import { useBigMusicPlayer } from '../../BigMusicPlayer/BigMusicPlayerProvider';

const TopTracksGrid = styled(
  posed.div({
    loading: {
      opacity: 0
    },
    loaded: {
      opacity: 1
    }
  })
)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 20px;
  grid-column-gap: 12px;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1fr);
  }
`;

interface Props {
  tracks: Page<Track>;
}
const UserTopTracksList: React.FC<Props> = ({ tracks }) => {
  const {
    setTrack,
    playing,
    track,
    audioPlayerCommands$
  } = useBigMusicPlayer();

  const handleOnPlayClick = React.useCallback((track: Track) => {
    setTrack(track);
    audioPlayerCommands$.next('toggle');
  }, []);

  return (
    <TopTracksGrid className="grid-wrapper">
      {tracks.items.map(topTrack => (
        <UserTopTrack
          onPlayClick={handleOnPlayClick}
          trackPlaying={track ? track.id == topTrack.id && playing : false}
          track={topTrack}
          key={topTrack.id}
        />
      ))}
    </TopTracksGrid>
  );
};

export default React.memo(UserTopTracksList);
