import React from 'react';
import css from '@emotion/css';
import { Modal, Button, Icon } from 'antd';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { Track } from 'spotify-web-sdk';
import {
  SpotifyButtonStyles,
  SpotifyIconStyles
} from '@components/Authentication/LoginSocial';
import SpotifyIcon from '@customIcons/spotify.svg';
import TrackInfoModalBasicInfo from './TrackInfoModalBasicInfo';
import TrackInfoModalDetailedInformation from './TrackInfoModalDetailedInformation';
import { useTrackInfoModal } from './TrackInfoModalProvider';
import {
  GreenSpotifyButtonStyles,
  FlexBoxFullCenteredStyles
} from '@shared/styles';

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
`;

const TrackInfoModalBodyWrapper = styled.div`
  position: relative;
  h1,
  h2,
  h3,
  h4 {
    color: white;
  }
  img {
    width: 196px;
    height: 196px;
    border-radius: 6px;
    display: inline-block;
  }
  .spotify-button .anticon {
    color: white;
  }
`;

const TrackInfoModalBody: React.FC<{ track: Track }> = ({ track }) => {
  return (
    <TrackInfoModalBodyWrapper>
      <TrackInfoModalBasicInfo track={track} />
      <TrackInfoModalDetailedInformation track={track} />
      <Button
        className="spotify-button"
        css={[
          SpotifyButtonStyles,
          GreenSpotifyButtonStyles,
          FlexBoxFullCenteredStyles
        ]}
        style={{ marginTop: 24 }}
        size="large"
        onClick={() => window.open(track.uri)}
      >
        <Icon component={SpotifyIcon} css={[SpotifyIconStyles]} />
        Listen on Spotify!
      </Button>
    </TrackInfoModalBodyWrapper>
  );
};

const TrackInfoModal: React.FC = () => {
  const { trackInModal, modalVisible, closeModal } = useTrackInfoModal();

  if (!trackInModal) return null;

  return (
    <Modal
      width={650}
      zIndex={1}
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
