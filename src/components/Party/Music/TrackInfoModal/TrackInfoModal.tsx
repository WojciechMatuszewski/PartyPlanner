import React from 'react';
import css from '@emotion/css';
import { Modal } from 'antd';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { Track } from 'spotify-web-sdk';
import TrackInfoModalBasicInfo from './TrackInfoModalBasicInfo';
import TrackInfoModalDetailedInformation from './TrackInfoModalDetailedInformation';
import { useTrackInfoModal } from './TrackInfoModalProvider';

import { useBigMusicPlayer } from '../BigMusicPlayer/BigMusicPlayerProvider';
import { GreenSpotifyButton } from '@components/UI/SpotifyButton';

const TRACK_INFO_MODAL_MOBILE_BREAKPOINT = 678;

const BlurredBackgroundStyles = css`
  .global-layout-wrapper {
    filter: blur(8px);
  }
`;

const ModalStyles = css`
  .ant-modal-content {
    box-shadow: none;
    background: transparent;
  }
  display: table;
  .ant-modal-close .anticon {
    color: white;
    font-size: 26px;
  }

  @media screen and (max-width: ${TRACK_INFO_MODAL_MOBILE_BREAKPOINT}px) {
    .ant-modal-body {
      padding: 12px 4px;
    }
  }
`;

const TrackInfoModalBodyWrapper = styled.div`
  position: relative;
  h1,
  h2,
  h3,
  h4 {
    color: white;
  }
  .spotify-button {
    margin-top: 24px;
  }
  @media screen and (max-width: ${TRACK_INFO_MODAL_MOBILE_BREAKPOINT}px) {
    .spotify-button {
      margin-top: 8px;
      width: 100%;
    }
  }
`;

const TrackInfoModalBody: React.FC<{ track: Track }> = ({ track }) => {
  const { audioPlayerCommands$ } = useBigMusicPlayer();

  return (
    <TrackInfoModalBodyWrapper>
      <TrackInfoModalBasicInfo track={track} />
      <TrackInfoModalDetailedInformation track={track} />
      <GreenSpotifyButton
        className="spotify-button"
        size="large"
        onClick={handleOnSpotifyButtonClick}
      >
        Listen on Spotify!
      </GreenSpotifyButton>
    </TrackInfoModalBodyWrapper>
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
    <Modal
      width={650}
      zIndex={20}
      visible={modalVisible}
      css={[ModalStyles]}
      title={false}
      centered={true}
      closable={true}
      footer={false}
      onCancel={closeModal}
      maskStyle={{ background: 'rgba(0,0,0,0.9)' }}
    >
      <TrackInfoModalBody track={trackInModal} />
      {modalVisible && <Global styles={[BlurredBackgroundStyles]} />}
    </Modal>
  );
};

export default TrackInfoModal;
