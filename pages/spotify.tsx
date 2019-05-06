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
    'BQDD0eUsbnZVe2L4xoN_8JkMdTQFD1gHPgMwdsZlS2Bd_PrsahBbgjDVZh_PA2N_6rspQHDX14du1UHLkwWPgmO3TdQDt4-4mSh_-W25RupwLXCx9Z3IQsG-AarB-1cVgS8HeDOwdizGWidZv-Kf_8LBtwDM14iU5gs9CFDmh0I21VtzHpLCF0YvkHH4lFYwis7ykHwY62HC0VoDumjhggZHzhL2Pm299iuhTwMsaUtib5qtMwTO18R273r94X-_FGXJuvVOZYDZ9nG_IFe26Bea6dNP-gcgs9X8UgM'
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
