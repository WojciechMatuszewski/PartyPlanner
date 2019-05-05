import React from 'react';
import { Track } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import { Typography } from 'antd';

const TrackImageInfoWrapper = styled.div`
  display: flex;
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
`;

interface Props {
  track: Track;
}
const TrackInfoModalBasicInfo: React.FC<Props> = ({ track }) => {
  return (
    <TrackImageInfoWrapper>
      <img src={track.album.imageUrl} />
      <TitleAuthorsWrapper>
        <Typography.Title level={1}>{track.name}</Typography.Title>
        <Typography.Title level={3}>
          By : {track.mainArtists.map(artist => artist.name)}
        </Typography.Title>
      </TitleAuthorsWrapper>
    </TrackImageInfoWrapper>
  );
};

export default TrackInfoModalBasicInfo;
