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

const StickedToBottom = styled(
  posed.div({
    visible: {
      y: 0,
      transition: {
        ease: 'linear',
        duration: 100
      }
    },
    hidden: {
      y: 100,
      transition: {
        ease: 'linear',
        duration: 100
      }
    }
  })
)`
  background: #f0f1f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 0 12px;
  border-top: 1px solid #e8e8e8;
  display: flex;
  flex: 1;
`;

const StickedVisibilityTriggerStyles = css`
  position: absolute;
  top: 0;
  right: 12px;
  width: 178.2px;
  height: 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: translateY(-100%);
  background: #f0f1f5;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #f0f1f5 !important;
  box-shadow: none;
`;

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
    'BQCSg0nDOtwoTOzHpO2msjMYRCRmM2fs6tPgFBUsO7WMoTAb-xj8vjD9wzNS7pfDdyz_oMzEVOz8uMb-ZD2fEI45GtDeai5S_QvIi18HaHgYoNeTIpFx_OpblDThrEGJZxaWHrgtIJRxunDoTxbcwa3qYANG2JuMoCqmvksQx1_RUETFVDcjU0HjF6JINmZg2mqg2hiae2hxdEBhk0gQxexSK1KH0YjlUgMX6bJQCm8B_3iP-QtWmxm49n8V23U7zzPGREZvW661bBC8e7D10d6twPdpyShSNk_JDfU"'
});

export default function Spotify() {
  const [resourcesLoaded, setResourcesLoaded] = React.useState<number>(0);

  const [musicPlayerVisible, setMusicPlayerVisible] = React.useState<boolean>(
    false
  );

  return (
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

      <StickedToBottom pose={musicPlayerVisible ? 'visible' : 'hidden'}>
        <Button
          icon={musicPlayerVisible ? 'caret-down' : 'caret-up'}
          css={[StickedVisibilityTriggerStyles]}
          onClick={() => setMusicPlayerVisible(prev => !prev)}
        >
          Music Player
        </Button>
        <BigMusicPlayer />
      </StickedToBottom>
    </PageWrapper>
  );

  function handleResourceLoaded() {
    setResourcesLoaded(prev => prev + 1);
  }
}
