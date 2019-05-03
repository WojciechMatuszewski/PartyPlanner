import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import BigMusicPlayer from '@components/Party/Music/BigMusicPlayer/BigMusicPlayer';
import UserTopSongs from '@components/Party/Music/UserTop/UserTopSongs';
import { init } from 'spotify-web-sdk';
import UserTopArtists from '@components/Party/Music/UserTop/UserTopArtists';

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

init({
  token:
    'BQAlh1x67cNWfHlmZyMWn5Q4h1sgUYAr2LOU7tJqjUGWSQTbqwTMHXEF3XKv5Q6x4MObvpsk3w16DMd3dR8JS4Fb-1-vS4KUgLqT0wHh7StuQPFg7P51JHneJUXlNdRu9RxzHTVyS9sMv2XqPjrJiIBUiiuTXaZmMrbGb4PxJL8-ysdJzDvEwK8EaSladUM6g9Y_GX8OEai_cU0z27_3XnlfyA82SwgfS1p_mxRe7O2oWVf6RjNfspWwVUmOhFazy5cyEijN-LUxcB3mUgYDL2EzFdcJ5Mpj5JBh7sU'
});

export default function Spotify() {
  return (
    <div style={{ width: '100%', paddingBottom: 100 }}>
      <UserTopSongs />
      <UserTopArtists />
      <StickedToBottom>
        <BigMusicPlayer />
      </StickedToBottom>
    </div>
  );
}
