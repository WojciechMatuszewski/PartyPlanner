import React from 'react';
import { NextFunctionComponent } from 'next';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import { NextContextWithApollo } from './_app';
import {
  HasPartiesQueryQuery,
  HasPartiesQueryVariables
} from '@generated/graphql';
import { HAS_PARTIES_QUERY } from '@graphql/queries';
import GraphqlException from '@components/GraphqlException';
import styled from '@emotion/styled';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import UserTopArtists from '@components/Party/Music/UserTop/UserTopArtists/UserTopArtists';
import UserTopTracks from '@components/Party/Music/UserTop/UserTopTracks/UserTopTracks';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import BigMusicPlayerStickedToBottom from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal/TrackInfoModal';
import SpotifyGuard from '@guards/SpotifyGuard';

type RouterQuery = { id?: string };
interface InjectedProps {
  isInParty: boolean;
  partyId: string;
}

const ContentWrapper = styled.div`
  min-height: calc(100vh - 66px);
  width: 100%;
  flex: 1;
`;

const PartyMusicTopPage: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouterQuery>
> = props => {
  const [playerVisible, setPlayerVisible] = React.useState<boolean>(false);

  if (!props.isInParty)
    return (
      <GraphqlException desc="Party either does not exist or you are not invited" />
    );

  return (
    <React.Fragment>
      <PartyMenu routerPath={'/party-music-top'} partyId={props.partyId} />
      <ContentWrapper>
        <SpotifyGuard>
          <BigMusicPlayerProvider>
            <TrackInfoModalProvider>
              <UserTopTracks visible={true} />
              <UserTopArtists onResourceLoaded={() => {}} />
              <BigMusicPlayerStickedToBottom
                onTrackChanged={handleTrackChanged}
                onVisibilityTriggerClicked={handleMusicPlayerVisibilityChange}
                visible={playerVisible}
              />
              <TrackInfoModal />
            </TrackInfoModalProvider>
          </BigMusicPlayerProvider>
        </SpotifyGuard>
      </ContentWrapper>
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

PartyMusicTopPage.getInitialProps = async function(context) {
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

export default PartyMusicTopPage;
