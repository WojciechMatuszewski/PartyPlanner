import React from 'react';
import { NextFunctionComponent } from 'next';
import { NextContextWithApollo } from './_app';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import BigMusicPlayerStickedToBottom, {
  BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT
} from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal/TrackInfoModal';
import SpotifyGuard from '@guards/SpotifyGuard';
import PartyMusicDiscover from '@components/Party/Music/Discover/Discover';
import PageException from '@components/UI/PageException';
import { PartyContentWrapper } from '@components/Party/styles';
import PartyAuthenticator from '@auth/party-auth';
import { PartyProvider } from '@components/Party/PartyProvider';

interface InjectedProps {
  isInParty: boolean;
  partyId: string;
}

type RouterQuery = { id?: string };

const PartyMusicDiscoverPage: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouterQuery>
> = ({ isInParty, partyId }) => {
  const [playerVisible, setPlayerVisible] = React.useState<boolean>(false);

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
      <PartyMenu partyId={partyId} routerPath="/party-music-discover" />
      <PartyProvider partyId={partyId}>
        <PartyContentWrapper>
          <SpotifyGuard>
            <BigMusicPlayerProvider>
              <TrackInfoModalProvider>
                <PartyMusicDiscover paddingBottom={getContentPadding()} />
                <TrackInfoModal />
                <BigMusicPlayerStickedToBottom
                  onTrackChanged={handleTrackChanged}
                  onVisibilityTriggerClicked={handleMusicPlayerVisibilityChange}
                  visible={playerVisible}
                />
              </TrackInfoModalProvider>
            </BigMusicPlayerProvider>
          </SpotifyGuard>
        </PartyContentWrapper>
      </PartyProvider>
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

  function getContentPadding() {
    return playerVisible ? BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT + 12 : 12;
  }
};

PartyMusicDiscoverPage.getInitialProps = PartyAuthenticator.isUserInParty;

export default PartyMusicDiscoverPage;
