import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import BigMusicPlayer from '@components/Party/Music/BigMusicPlayer/BigMusicPlayer';
import UserTopSongs from '@components/Party/Music/UserTop/UserTopSongs';
import { init } from 'spotify-web-sdk';
import UserTopArtists from '@components/Party/Music/UserTop/UserTopArtists';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import { Typography } from 'antd';

const StickedToBottom = styled(
  posed.div({
    visible: {
      y: 0
    },
    hidden: {
      y: -100
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

const PageWrapper = styled(
  posed.div({
    loading: {},
    loaded: {
      staggerChildren: 50
    }
  })
)`
  width: 100%;
  padding-bottom: 100px;
  display: flex;
  min-height: calc(100vh - 66px);
  flex-direction: column;
`;

init({
  token:
    'BQCa2DIHz4yTHunP2gObMiYcNqo6B7mFxVCxwALsydhFe_73d5-ZAGBU_g9P5YO3NPs6LQm6eQJALwiNBO1-XhxwWUqK2ksKourpdXc-y2D4sXaSYmRuwz28SQPfylahs5lOz1CkAMQPVBMmF1SPBETH84x9trtWJazrWCc8ICVoGaDhk-GfEbak8v5dNurQInjf578iu6rrBWae9zu3qRJS0UsknG33qKgDZzRx9xJq_wgxQezafRtfc0F4f_HAZmhTzIqm_NCaryZDrBu5gRNvRZb-p4TKwEnQ1lY'
});

export default function Spotify() {
  const [resourcesLoaded, setResourcesLoaded] = React.useState<number>(0);

  return (
    <PageWrapper pose={resourcesLoaded < 2 ? 'loading' : 'loaded'}>
      {resourcesLoaded < 2 && (
        <GraphqlInlineLoading
          style={{ position: 'absolute', height: 'calc(100vh - 66px)' }}
        >
          <Typography.Text>Loading Spotify data ...</Typography.Text>
        </GraphqlInlineLoading>
      )}
      <UserTopSongs onResourceLoaded={handleResourceLoaded} />
      <UserTopArtists onResourceLoaded={handleResourceLoaded} />
      <StickedToBottom>
        <BigMusicPlayer />
      </StickedToBottom>
    </PageWrapper>
  );

  function handleResourceLoaded() {
    setResourcesLoaded(prev => prev + 1);
  }
}
