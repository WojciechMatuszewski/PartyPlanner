import PartyAuthenticator from '@auth/party-auth';
import PartyMusicPlaylists from '@components/Party/Music/Playlists/Playlists';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { PartyPage } from '@components/Party/shared';
import { PartyContentWrapper } from '@components/Party/styles';
import PageException from '@components/UI/PageException';
import React from 'react';
import { PartyProvider } from '@components/Party/PartyProvider';
import SpotifyGuard from '@guards/SpotifyGuard';

const PartyMusicPlaylistsPage: PartyPage = ({ isInParty, partyId, userId }) => {
  if (!isInParty)
    return (
      <PageException
        desc="Party either does not exist or you are not invited"
        backText="Back to dashboard"
        redirectPath="/user/dashboard"
      />
    );

  return (
    <React.Fragment>
      <PartyMenu partyId={partyId} routerPath="/party-music-playlists" />
      <PartyContentWrapper>
        <SpotifyGuard>
          <PartyProvider userId={userId} partyId={partyId}>
            <PartyMusicPlaylists partyId={partyId} userId={userId} />
          </PartyProvider>
        </SpotifyGuard>
      </PartyContentWrapper>
    </React.Fragment>
  );
};

PartyMusicPlaylistsPage.getInitialProps = PartyAuthenticator.isUserInParty;

export default PartyMusicPlaylistsPage;
