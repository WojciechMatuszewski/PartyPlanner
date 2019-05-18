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
    'BQDbilaGfQI0xW4MuxugoRLSRtoSnF6M4A-irYKPF2s1g0dKRKsJfGj6SCdqeqDc5kmPbKoQvIFAIpw4mKK1OmXsJLZ8f4rnE6qpRcDegH3XlnTJygufP8uFFhBWK53YH9CvJxdvnexB4wfAaGC_2cMIakvKSBR6S8Khjn30B1jFIqpDkEYq3c46hrWTKSumN-Zyk5uOblwgIfoIE6Ay0d5wFqwf-z-3nHV_C8-PZspteGOc1nlfJHQJ_6kfY2G_y0jz49N_r1CwPrM02P34aN1kPGbn9tQ0ScUEq_Y'
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
