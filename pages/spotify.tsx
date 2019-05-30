import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { init } from 'spotify-web-sdk';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import { Typography } from 'antd';
import UserTopTracks from '@components/Party/Music/UserTop/UserTopTracks/UserTopTracks';
import UserTopArtists from '@components/Party/Music/UserTop/UserTopArtists/UserTopArtists';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import BigMusicPlayerStickedToBottom from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal/TrackInfoModal';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';

const PageWrapper = styled.div<{ playerVisible: boolean }>`
  width: 100%;
  padding-bottom: ${props => (props.playerVisible ? '100px' : '0')};
  min-height: calc(100vh - 66px);
`;

const PosedListsWrapper = styled(
  posed.div({
    loading: {},
    loaded: {
      staggerChildren: 150,
      staggerDirection: 1
    }
  })
)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

init({
  token:
    'BQCFkrYLcUQ7vj5tOgk_Yuwh208uFfNC1VR1xDJp_8jO87-gQgLEVdc4vxuQaER8IIwDyLD1chQ-HCieOEZ_pq1zfe2cN4s0GxAqBbVT40-ifFygZln6-fpi1uJ7CaqSmMbYdDOxFNPL7298dLnFnGqVM6vUilHIxNgBqgHe_4ed2v7rgptnsOImb72kjmRas59JrHApKa9mBMmfAHRxEKpJItSyb7ZGpy3be2VTdxpl-dKYsNEqA9KRDmOrwSJQsg_3l3omtgOK7n8ahBxIsnNzjZB10uUiw_uWIVs'
});

export default function Spotify() {
  const [resourcesLoaded, setResourcesLoaded] = React.useState<number>(0);

  const [musicPlayerVisible, setMusicPlayerVisible] = React.useState<boolean>(
    false
  );

  return (
    <BigMusicPlayerProvider>
      <TrackInfoModalProvider>
        <TrackInfoModal />
        <PageWrapper playerVisible={musicPlayerVisible}>
          {resourcesLoaded < 2 && (
            <GraphqlInlineLoading
              style={{ position: 'absolute', height: 'calc(100vh - 66px)' }}
            >
              <Typography.Text>Loading Spotify data ...</Typography.Text>
            </GraphqlInlineLoading>
          )}
          <PosedListsWrapper pose={resourcesLoaded < 2 ? 'loading' : 'loaded'}>
            <UserTopTracks onResourceLoaded={handleResourceLoaded} />
            <UserTopArtists onResourceLoaded={handleResourceLoaded} />
          </PosedListsWrapper>
          <BigMusicPlayerStickedToBottom
            onTrackChanged={handleTrackChanged}
            onVisibilityTriggerClicked={onVisibilityTriggerClicked}
            visible={musicPlayerVisible}
          />
        </PageWrapper>
      </TrackInfoModalProvider>
    </BigMusicPlayerProvider>
  );

  function handleResourceLoaded() {
    setResourcesLoaded(prev => prev + 1);
  }

  function handleTrackChanged() {
    if (!musicPlayerVisible) {
      setMusicPlayerVisible(true);
    }
  }

  function onVisibilityTriggerClicked() {
    setMusicPlayerVisible(!musicPlayerVisible);
  }
}
