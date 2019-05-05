import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { init } from 'spotify-web-sdk';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import { Typography, Modal } from 'antd';
import UserTopTracks from '@components/Party/Music/UserTop/UserTopTracks/UserTopTracks';
import UserTopArtists from '@components/Party/Music/UserTop/UserTopArtists/UserTopArtists';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import BigMusicPlayerStickedToBottom from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal';

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
    'BQDWQOLZ52cdCGuU823EcPRkrsgK-3fMFkMWdoFy6NzCwZuED75ohnOqfF-sPpAxlmK0-Pp4A4GQ3T_JuR8XGQfUETKbe_gDMWBlgURQniJ5EsC9UWEjVqdwDDuESbT_u-I6V06EEHvcHDP6yK91iCWDjo9PLdSgJLaQdU5jjT20nW-Tu7nXTNKDEnUIwpXF8yL7qMBmiUyW8qAAE0OjWorLfGaoChUM6uLYT_kvNhsLceK6sd8tLE1GDQaPIltTAP1o7ZbbAlAdj6ViraQzIjl1oUzAPqWtYE17KI4'
});

export default function Spotify() {
  const [resourcesLoaded, setResourcesLoaded] = React.useState<number>(0);

  const [musicPlayerVisible, setMusicPlayerVisible] = React.useState<boolean>(
    false
  );

  return (
    <BigMusicPlayerProvider>
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
    console.log('GOING TO CHANGE TO', !musicPlayerVisible);
    setMusicPlayerVisible(!musicPlayerVisible);
  }
}
