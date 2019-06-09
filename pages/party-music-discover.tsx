import React from 'react';
import { NextFunctionComponent } from 'next';
import { NextContextWithApollo } from './_app';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import { HAS_PARTIES_QUERY } from '@graphql/queries';
import {
  HasPartiesQueryQuery,
  HasPartiesQueryVariables
} from '@generated/graphql';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import BigMusicPlayerStickedToBottom, {
  BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT
} from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal/TrackInfoModal';
import SpotifyGuard from '@guards/SpotifyGuard';
import { FlexWrapperFullHeightMinusHeaderStyles } from '@shared/styles';
import PartyMusicDiscover from '@components/Party/Music/Discover/Discover';
import PageException from '@components/UI/PageException';

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
      <div
        css={[FlexWrapperFullHeightMinusHeaderStyles]}
        style={{ flexDirection: 'column' }}
      >
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
      </div>
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

PartyMusicDiscoverPage.getInitialProps = async function(context) {
  const userData = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });
  // redirected to /login
  if (!userData) return { isInParty: false, partyId: '' };

  if (!context.query.id)
    return {
      isInParty: false,
      partyId: ''
    };

  const {
    data: { hasParties }
  } = await context.apolloClient.query<
    HasPartiesQueryQuery,
    HasPartiesQueryVariables
  >({
    query: HAS_PARTIES_QUERY,
    variables: {
      where: {
        id: context.query.id
      }
    }
  });

  return {
    isInParty: hasParties,
    partyId: context.query.id
  };
};

export default PartyMusicDiscoverPage;
