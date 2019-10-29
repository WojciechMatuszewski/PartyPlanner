import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import { TransparentModal } from '@components/UI/TransparentModal';
import css from '@emotion/css';
import React from 'react';

import { useBigMusicPlayer } from '../BigMusicPlayer/BigMusicPlayerProvider';
import TrackInfoModalBasicInfo from './TrackInfoModalBasicInfo';
import TrackInfoModalDetailedInformation from './TrackInfoModalDetailedInformation';
import { useTrackInfoModal } from './TrackInfoModalProvider';

const TRACK_INFO_MODAL_MOBILE_BREAKPOINT = 678;

const ModalStyles = css`
  @media screen and (max-width: ${TRACK_INFO_MODAL_MOBILE_BREAKPOINT}px) {
    .ant-modal-body {
      padding: 12px 4px;
    }
  }
`;

const ModalBodyStyles = css`
  @media screen and (max-width: ${TRACK_INFO_MODAL_MOBILE_BREAKPOINT}px) {
    .spotify-button {
      margin-top: 8px;
      width: 100%;
    }
  }
`;

const TrackInfoModalBody: React.FC<{
  track: any;
}> = ({ track }) => {
  const { audioPlayerCommands$ } = useBigMusicPlayer();

  return (
    <React.Fragment>
      <TrackInfoModalBasicInfo track={track} />
      <TrackInfoModalDetailedInformation track={track} />
      <GreenSpotifyButton
        className="spotify-button"
        size="large"
        onClick={handleOnSpotifyButtonClick}
      >
        Listen on Spotify!
      </GreenSpotifyButton>
    </React.Fragment>
  );

  function handleOnSpotifyButtonClick() {
    audioPlayerCommands$.next({ command: 'pause', trackInQuestion: track });
    window.open(track.externalUrls.spotify);
  }
};

const TrackInfoModal: React.FC = () => {
  const { trackInModal, modalVisible, closeModal } = useTrackInfoModal();

  if (!trackInModal) return null;

  return (
    <TransparentModal
      visible={modalVisible}
      onClose={closeModal}
      modalEmotionCss={ModalStyles}
      modalBodyEmotionCss={ModalBodyStyles}
    >
      <TrackInfoModalBody track={trackInModal} />
    </TransparentModal>
  );
};

export default TrackInfoModal;
