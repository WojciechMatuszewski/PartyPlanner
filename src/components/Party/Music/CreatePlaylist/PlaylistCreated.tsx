import styled from '@emotion/styled';
import {
  FlexBoxFullCenteredStyles,
  FlexBoxHorizontallyCenteredStyles
} from '@shared/styles';
import { Button, Typography, Avatar, Icon } from 'antd';
import React from 'react';
import { Playlist } from 'spotify-web-sdk';
import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import Link from 'next/link';
import { useParty } from '@components/Party/PartyProvider';

const PlayListCreatedWrapper = styled.div`
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
`;

const CreatedPlaylistInfo = styled.div`
  ${FlexBoxHorizontallyCenteredStyles}
  margin-bottom:24px;
`;

const PlaylistImage = styled(Avatar)`
  width: 96px;
  height: 96px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
  align-self: center;
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

const PlaylistCreatedParagraph = styled(Typography.Paragraph)``;

interface Props {
  createdPlaylist: Playlist;
}

export default function PlaylistCreated({ createdPlaylist }: Props) {
  const canViewOnSpotify = Boolean(createdPlaylist.externalUrls.spotify);

  function handleViewOnSpotifyClick() {
    canViewOnSpotify && window.open(createdPlaylist.externalUrls.spotify);
  }

  const { partyId } = useParty();

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
            {createdPlaylist.public ? 'Public' : 'Private'}
          </PlaylistCreatedParagraph>
        </CreatedPlaylistBasicInfo>
      </CreatedPlaylistInfo>
      <ButtonsWrapper>
        <Link
          href={`party-music-playlists?id=${partyId}`}
          as={`/party/${partyId}/music/playlists`}
        >
          <Button type="primary">Go to party playlists</Button>
        </Link>
        <GreenSpotifyButton
          disabled={!canViewOnSpotify}
          onClick={handleViewOnSpotifyClick}
        >
          View on Spotify
        </GreenSpotifyButton>
      </ButtonsWrapper>
    </PlayListCreatedWrapper>
  );
}
