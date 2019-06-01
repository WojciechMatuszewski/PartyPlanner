import React from 'react';
import { Track } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import { Typography } from 'antd';
// import { TRACK_INFO_MODAL_MOBILE_BREAKPOINT } from './TrackInfoModal';

const TRACK_INFO_MODAL_MOBILE_BREAKPOINT = 678;

const TrackImageInfoWrapper = styled.div`
  display: flex;
  img {
    width: 196px;
    height: 196px;
    border-radius: 6px;
    display: inline-block;
  }
  @media screen and (max-width: ${TRACK_INFO_MODAL_MOBILE_BREAKPOINT}px) {
    flex-direction: column;
    margin-top: 24px;
    img {
      width: 96px;
      height: 96px;
      margin: 0 auto;
    }
  }
`;

const TitleAuthorsWrapper = styled.div`
  margin: 0 auto;
  padding-left: 32px;
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

  @media screen and (max-width: ${TRACK_INFO_MODAL_MOBILE_BREAKPOINT}px) {
    text-align: center;
    padding: 0;
    margin-top: 12px;
    h1 {
      font-size: 20px;
    }
    h3.ant-typography {
      font-size: 16px;
      margin-top: 0;
    }
  }
`;

interface Props {
  track: Track;
}
const TrackInfoModalBasicInfo: React.FC<Props> = ({ track }) => {
  return (
    <TrackImageInfoWrapper>
      <img src={track.album.images[0].url} />
      <TitleAuthorsWrapper>
        <Typography.Title level={1}>{track.name}</Typography.Title>
        <Typography.Title level={3}>
          By : {track.artists.map(artist => artist.name).join(', ')}
        </Typography.Title>
      </TitleAuthorsWrapper>
    </TrackImageInfoWrapper>
  );
};

export default TrackInfoModalBasicInfo;
