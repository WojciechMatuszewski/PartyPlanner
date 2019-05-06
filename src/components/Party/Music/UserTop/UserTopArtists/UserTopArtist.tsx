import React from 'react';
import { Artist } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { Button, Icon, Typography } from 'antd';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

const TopArtistImageWrapper = styled(
  posed.div({
    hoverable: true
  })
)`
  position: relative;
  overflow: hidden;
  width: 203px;
  height: 203px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 660px) {
    height: 270px;
    width: 100%;
    border-radius: 0;
  }
`;

const ArtistImageOverlay = styled(
  posed.div({
    init: {
      applyAtEnd: { visibility: 'none' },
      opacity: 0
    },
    hover: {
      applyAtStart: { visibility: 'visible' },
      opacity: 1
    }
  })
)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  ${FlexBoxFullCenteredStyles};
  button {
    &:hover {
      transform: scale(1.3);
    }
    &:hover,
    &:active {
      color: white;
      border-color: white;
    }
    color: #d9d9d9;
  }
`;

const TopArtistTileWrapper = styled.div`
  position: relative;
  width: 203px;
  margin: 0 auto;
  .ant-typography {
    margin-bottom: 0;
  }
  @media screen and (max-width: 660px) {
    width: 100%;
  }
`;

const TopArtistNameWrapper = styled.div`
  width: 100%;
  padding: 12px;
  text-align: center;
`;

interface Props {
  artist: Artist;
}

const UserTopArtist: React.FC<Props> = props => {
  return (
    <TopArtistTileWrapper>
      <TopArtistImageWrapper>
        <img src={props.artist.images[1].url} />
        <ArtistImageOverlay>
          <Button shape="circle-outline" type="ghost" size="large">
            <Icon type="info" />
          </Button>
        </ArtistImageOverlay>
      </TopArtistImageWrapper>
      <TopArtistNameWrapper>
        <Typography.Paragraph style={{ color: 'black' }}>
          {props.artist.name}
        </Typography.Paragraph>
      </TopArtistNameWrapper>
    </TopArtistTileWrapper>
  );
};

export default UserTopArtist;
