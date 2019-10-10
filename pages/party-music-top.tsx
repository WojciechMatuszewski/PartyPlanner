import React from 'react';
import { NextFunctionComponent } from 'next';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import UserTopArtists from '@components/Party/Music/UserTop/UserTopArtists/UserTopArtists';
import UserTopTracks from '@components/Party/Music/UserTop/UserTopTracks/UserTopTracks';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import BigMusicPlayerStickedToBottom from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal/TrackInfoModal';
import SpotifyGuard from '@guards/SpotifyGuard';
import PageException from '@components/UI/PageException';
import { PartyContentWrapper } from '@components/Party/styles';
import PartyAuthenticator from '@auth/party-auth';
import { NextContextWithApollo } from './_app';

type RouterQuery = { id?: string };
interface InjectedProps {
  isInParty: boolean;
  partyId: string;
}

const PartyMusicTopPage: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouterQuery>
> = props => {
  const [playerVisible, setPlayerVisible] = React.useState<boolean>(false);

  if (!props.isInParty)
    return (
      <PageException
        desc="Party either does not exist or you are not invited"
        backText="Back to dashboard"
        redirectPath="/user/dashboard"
      />
    );

  return (
    <React.Fragment>
      <PartyMenu routerPath={'/party-music-top'} partyId={props.partyId} />
      <PartyContentWrapper>
        <SpotifyGuard>
          <BigMusicPlayerProvider>
            <TrackInfoModalProvider>
              <UserTopTracks />
              <UserTopArtists />
              <BigMusicPlayerStickedToBottom
                onTrackChanged={handleTrackChanged}
                onVisibilityTriggerClicked={handleMusicPlayerVisibilityChange}
                visible={playerVisible}
              />
              <TrackInfoModal />
            </TrackInfoModalProvider>
          </BigMusicPlayerProvider>
        </SpotifyGuard>
      </PartyContentWrapper>
    </React.Fragment>
  );

  function handleTrackChanged() {
    if (!playerVisible) {
      setPlayerVisible(true);
    }
  }

  function handleMusicPlayerVisibilityChange() {
    setPlayerVisible(!playerVisible);
  }
};

PartyMusicTopPage.getInitialProps = PartyAuthenticator.isUserInParty;

export default PartyMusicTopPage;
