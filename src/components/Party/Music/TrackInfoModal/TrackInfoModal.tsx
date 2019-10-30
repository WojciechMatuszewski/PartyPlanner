import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import TransparentModal from '@components/UI/TransparentModal';
import React from 'react';
import { useBigMusicPlayer } from '../BigMusicPlayer/BigMusicPlayerProvider';
import TrackInfoModalDetailedInformation from './TrackInfoModalDetailedInformation';
import { useTrackInfoModal } from './TrackInfoModalProvider';

const TrackInfoModal: React.FC = () => {
  const { trackInModal, modalVisible, closeModal } = useTrackInfoModal();
  const { audioPlayerCommands$ } = useBigMusicPlayer();

  if (!trackInModal) return null;
  const track = trackInModal as NonNullable<typeof trackInModal>;

  return (
    <TransparentModal visible={modalVisible} onClose={closeModal}>
      <TransparentModal.Top
        title={track.name}
        subtitle={`By: ${track.stringArtists}`}
        image={track.album.imageUrl}
      />
      <TransparentModal.Content>
        <TrackInfoModalDetailedInformation track={track} />
      </TransparentModal.Content>
      <GreenSpotifyButton
        className="spotify-button"
        size="large"
        onClick={handleOnSpotifyButtonClick}
      >
        Listen on Spotify!
      </GreenSpotifyButton>
    </TransparentModal>
  );

  function handleOnSpotifyButtonClick() {
    audioPlayerCommands$.next({ command: 'pause', trackInQuestion: track });
    window.open(track.externalUrls.spotify);
  }
};

export default TrackInfoModal;
