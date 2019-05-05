import React from 'react';
import css from '@emotion/css';
import { Modal, Typography, Divider } from 'antd';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useBigMusicPlayer } from './BigMusicPlayer/BigMusicPlayerProvider';
import { Track } from 'spotify-web-sdk';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

const BlurredBackgroundStyles = css`
  .global-layout-wrapper {
    filter: blur(10px);
  }
  .ant-modal-wrap {
    .ant-modal {
      width: auto !important;
    }
  }
`;

const ModalStyles = css`
  .ant-modal-content {
    box-shadow: none;
    background: transparent;
  }
  max-width: 700px;
  display: table;
`;

const TrackInfoModalBodyWrapper = styled.div`
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
`;

const TrackImageInfoWrapper = styled.div`
  display: flex;
`;

const TitleAuthorsWrapper = styled.div`
  margin-left: 32px;
  h1.ant-typography,
  h3.ant-typography {
    margin: 0;
  }
  h3.ant-typography {
    margin-top: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
`;

const DetailedInfoWrapper = styled.div`
  .actions-heading {
    width: 100%;
    color: white;
    padding-top: 24px;
  }
`;

const TrackInfoModalBody: React.FC<{ track: Track }> = ({ track }) => {
  return (
    <TrackInfoModalBodyWrapper>
      <Global styles={[BlurredBackgroundStyles]} />
      <TrackImageInfoWrapper>
        <img src={track.album.imageUrl} />
        <TitleAuthorsWrapper>
          <Typography.Title level={1}>{track.name}</Typography.Title>
          <Typography.Title level={3}>
            By : {track.mainArtists.map(artist => artist.name)}
          </Typography.Title>
        </TitleAuthorsWrapper>
      </TrackImageInfoWrapper>
      <DetailedInfoWrapper>
        <Typography.Title level={3} className="actions-heading">
          Detailed information's
        </Typography.Title>
        <div>Popularity: {track.popularity}</div>
      </DetailedInfoWrapper>
    </TrackInfoModalBodyWrapper>
  );
};

const TrackInfoModal: React.FC = () => {
  const { track } = useBigMusicPlayer();

  if (!track) return null;

  return (
    <Modal
      style={{ width: 'auto' }}
      visible={true}
      css={[ModalStyles]}
      title={false}
      closable={false}
      footer={false}
      maskStyle={{ background: 'rgba(0,0,0,0.9)' }}
    >
      <TrackInfoModalBody track={track} />
    </Modal>
  );
};

export default TrackInfoModal;
