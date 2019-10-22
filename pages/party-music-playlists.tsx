import React from 'react';
import { PartyPage } from '@components/Party/shared';
import PartyAuthenticator from '@auth/party-auth';
import PageException from '@components/UI/PageException';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { PartyContentWrapper } from '@components/Party/styles';

const PartyMusicPlaylistsPage: PartyPage = ({ isInParty, partyId }) => {
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
      <PartyContentWrapper>works</PartyContentWrapper>
    </React.Fragment>
  );
};

PartyMusicPlaylistsPage.getInitialProps = PartyAuthenticator.isUserInParty;

export default PartyMusicPlaylistsPage;
