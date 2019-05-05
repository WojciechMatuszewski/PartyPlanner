import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import BigMusicPlayer from '@components/Party/Music/BigMusicPlayer/BigMusicPlayer';
import { init } from 'spotify-web-sdk';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import { Typography, Button } from 'antd';
import css from '@emotion/css';
import UserTopTracks from '@components/Party/Music/UserTop/UserTopTracks/UserTopTracks';
import UserTopArtists from '@components/Party/Music/UserTop/UserTopArtists/UserTopArtists';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import BigMusicPlayerStickedToBottom from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';

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
    'BQClm6bdsfgAL2N0jS5FUxK6SU72BhN8O76C8tQ5RsHiaTd4XiC4LLOjzmns5WHsTPbLm4zjWo7gvcyfs_FT2kTmTaqATaAGgxYoHyFIeP4DMTcyX939ZSdOepmC1JUiHPg3zlqg4wstZGkJJR2XtUW884r3cZyv8cgc08yt6GfurVjyYP_Sxnpt767Cw5K9GhXtei9tFKRXN6We4NXairJ_C8t4KbLHAJqHoTA7wEQS7RwG_P5t_-0rf0fX01xGTn0ClYHM9gW2uvhW6tgeEMAJvvdR-njWdui0by4'
});

export default function Spotify() {
  const [resourcesLoaded, setResourcesLoaded] = React.useState<number>(0);

  const [musicPlayerVisible, setMusicPlayerVisible] = React.useState<boolean>(
    false
  );

  return (
    <BigMusicPlayerProvider>
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
        <BigMusicPlayerStickedToBottom />
      </PageWrapper>
    </BigMusicPlayerProvider>
  );

  function handleResourceLoaded() {
    setResourcesLoaded(prev => prev + 1);
  }
}
