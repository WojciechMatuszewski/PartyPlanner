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
    'BQBWhvJOxFhXrcxLSFctwXOhHpCNpDktv-_AXeuGlnoTTxcG-kAObrbj3WfnoOyvujCo3sRSABenEVu37TLmObsH4Ub3NOIm6NGvOA3F9Wkqqrz-2dtmOIsdDEFZgeBn7u3Z1TAonQS_uSKGN_iI4u417m4MtmZ31l3rGgmTO0tfCSou8e6Uf1HJ7RVUN4WAYM15f4w94v7U1PZLTaqWczbDgmN25XT7BEcx1abzePcJ5G8bXcCUrMr_cfUwsr5rfW10m7_-n_FdtrWg_i9pfSEXcnPZU2ZDDWRgQfY'
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
    console.log('GOING TO CHANGE TO', !musicPlayerVisible);
    setMusicPlayerVisible(!musicPlayerVisible);
  }
}
