import React from 'react';
import { NextFunctionComponent } from 'next';
import { NextContextWithApollo } from './_app';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import { HAS_PARTIES_QUERY } from '@graphql/queries';
import {
  HasPartiesQueryQuery,
  HasPartiesQueryVariables
} from '@generated/graphql';
import GraphqlException from '@components/GraphqlException';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import styled from '@emotion/styled';
import AntdSearch from '@components/AntdSearch';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Affix } from 'antd';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import BigMusicPlayerStickedToBottom, {
  BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT
} from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal/TrackInfoModal';
import DiscoverTrackList from '@components/Party/Music/Discover/DiscoverTrackList';
import useSpotifyWebSdk from '@hooks/useSpotifyWebSdk';

const ContentWrapper = styled.div`
  min-height: calc(100vh - 66px);
  width: 100%;
  flex: 1;
`;

const InnerContentWrapper = styled.div`
  max-width: 1280px;
  padding: 0 12px;
  width: 100%;
  height: 100%;
  flex: 1;
  margin: 0 auto;
`;

const SearchWrapper = styled.div`
  width: 100%;
  background: white;
  ${FlexBoxFullCenteredStyles};
  padding: 12px;
  border-bottom: 1px solid rgb(232, 232, 232);

  height: 53px;

  & > span {
    max-width: calc(1280px - 24px);
  }
`;

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
  useSpotifyWebSdk();

  if (!isInParty)
    return (
      <GraphqlException desc="Party either does not exist or you are not invited" />
    );

  const [playerVisible, setPlayerVisible] = React.useState<boolean>(false);

  const [searchQuery, setSearchQuery] = React.useState<string>('');

  return (
    <React.Fragment>
      <PartyMenu partyId={partyId} routerPath="/party-music-discover" />
      <ContentWrapper>
        <Affix>
          <SearchWrapper>
            <AntdSearch
              onChange={setSearchQuery}
              placeholder="Track name ..."
            />
          </SearchWrapper>
        </Affix>
        <BigMusicPlayerProvider>
          <TrackInfoModalProvider>
            <TrackInfoModal />
            <InnerContentWrapper
              style={{
                paddingBottom: getInnerContainerPadding()
              }}
            >
              <DiscoverTrackList searchQuery={searchQuery} />
              <BigMusicPlayerStickedToBottom
                onTrackChanged={handleTrackChanged}
                onVisibilityTriggerClicked={handleMusicPlayerVisibilityChange}
                visible={playerVisible}
              />
            </InnerContentWrapper>
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

  function getInnerContainerPadding() {
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
