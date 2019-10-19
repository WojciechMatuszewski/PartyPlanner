import styled from '@emotion/styled';
import {
  FlexBoxFullCenteredStyles,
  FlexBoxHorizontallyCenteredStyles
} from '@shared/styles';
import { Button, Typography, Avatar, Icon } from 'antd';
import React from 'react';
import { Playlist } from 'spotify-web-sdk';
import { GreenSpotifyButton } from '@components/UI/SpotifyButton';

const PlayListCreatedWrapper = styled.div`
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
`;

const CreatedPlaylistInfo = styled.div`
  ${FlexBoxHorizontallyCenteredStyles}
  margin-bottom:24px;
`;

const PlaylistImage = styled(Avatar)`
  width: 196px;
  height: 196px;
  border-radius: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
`;

const CreatedPlaylistBasicInfo = styled.div`
  margin-left: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  button:first-of-type {
    margin-right: 24px;
  }
`;

const PlaylistCreatedParagraph = styled(Typography.Paragraph)`
  font-size: 20px;
`;

interface Props {
  createdPlaylist: Playlist;
}

export default function PlaylistCreated({ createdPlaylist }: Props) {
  const canViewOnSpotify = Boolean(createdPlaylist.externalUrls.spotify);

  function handleViewOnSpotifyClick() {
    canViewOnSpotify && window.open(createdPlaylist.externalUrls.spotify);
  }

  return (
    <PlayListCreatedWrapper>
      <Typography.Title level={2} style={{ marginBottom: 24 }}>
        Playlist created
      </Typography.Title>
      <CreatedPlaylistInfo>
        <PlaylistImage src={createdPlaylist.images[0].url} />
        <CreatedPlaylistBasicInfo>
          <PlaylistCreatedParagraph>
            <Icon type="highlight" style={{ marginRight: 8 }} />
            {createdPlaylist.name}
          </PlaylistCreatedParagraph>
          <PlaylistCreatedParagraph>
            <Icon type="user" style={{ marginRight: 8 }} />
            {createdPlaylist.owner.displayName}
          </PlaylistCreatedParagraph>
          <PlaylistCreatedParagraph>
            <Icon type="lock" style={{ marginRight: 8 }} />
            Public
          </PlaylistCreatedParagraph>
        </CreatedPlaylistBasicInfo>
      </CreatedPlaylistInfo>
      <ButtonsWrapper>
        <Button size="large" type="primary" onClick={() => {}}>
          Go to party playlists
        </Button>
        <GreenSpotifyButton
          disabled={!canViewOnSpotify}
          size="large"
          onClick={handleViewOnSpotifyClick}
        >
          View on Spotify
        </GreenSpotifyButton>
      </ButtonsWrapper>
    </PlayListCreatedWrapper>
  );
}
