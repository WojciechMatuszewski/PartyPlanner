import PartyMusicPlaylists from '@components/Party/Music/Playlists/Playlists';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { PartyProvider } from '@components/Party/PartyProvider';
import { PartyContentWrapper } from '@components/Party/styles';
import withHandledPartyPageLoad, {
  WithHandledPartyPageLoadInjectedProps
} from '@components/Party/withHandledPartyPageLoad';
import SpotifyGuard from '@guards/SpotifyGuard';
import React from 'react';

const PartyMusicPlaylistsPage = ({
  party: { id: partyId },
  user: { id: userId }
}: WithHandledPartyPageLoadInjectedProps) => {
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

export default withHandledPartyPageLoad(PartyMusicPlaylistsPage);
