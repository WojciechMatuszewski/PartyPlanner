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
import { init } from 'spotify-web-sdk';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import BigMusicPlayerStickedToBottom from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal/TrackInfoModal';

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

init({
  token:
    'BQAYskzUvIZxy09HmVDyaz21rkjh21p3RsbqxsWeMqEclJMnd5809Lt0ZpRF_4jqXvUNHk1CXz3WcAQKancbntK9qTH9IXQS9Ma8fVj8jAgdVT0UzBMbLw5iC_6x5narpwxazchJ3ojUVzvtcXK8oiq64WwdbxG3U7SNT7fgSw6-AWOg_utyhAJiltPpVyx2RUEjYMw29T2kKMopzu4Aa7t8ezYr34046Vc-P8cbKEXoDokaUDoEyyhIHkIul3qxfcDyFalw7N7_UvjmxUbippC528QB_I-bpEaF3BA'
});

const PartyMusicTopPage: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouterQuery>
> = props => {
  if (!props.isInParty)
    return (
      <GraphqlException desc="Party either does not exist or you are not invited" />
    );

  const [playerVisible, setPlayerVisible] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <PartyMenu routerPath={'/party-music-top'} partyId={props.partyId} />
      <ContentWrapper>
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
