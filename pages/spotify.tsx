import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import BigMusicPlayer from '@components/Party/Music/BigMusicPlayer/BigMusicPlayer';

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

export default function Spotify() {
  return (
    <StickedToBottom>
      <BigMusicPlayer />
    </StickedToBottom>
  );
}
