import React from 'react';
import { Track, Page } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import posed from 'react-pose';
import UserTopTrack from './UserTopTrack';
import { useBigMusicPlayer } from '../../BigMusicPlayer/BigMusicPlayerProvider';
import { useTrackInfoModal } from '../../TrackInfoModal/TrackInfoModalProvider';

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
    playerState,
    track,
    audioPlayerCommands$
  } = useBigMusicPlayer();

  const { openModal } = useTrackInfoModal();

  const handleOnPlayClick = React.useCallback((track: Track) => {
    audioPlayerCommands$.next({ command: 'toggle', trackInQuestion: track });
    setTrack(track);
  }, []);

  return (
    <TopTracksGrid className="grid-wrapper">
      {tracks.items.map(topTrack => (
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

  function handleMoreInfoClick(track: Track) {
    openModal(track);
  }
};

export default React.memo(UserTopTracksList);
