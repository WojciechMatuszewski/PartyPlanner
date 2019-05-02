import React from 'react';
import styled from '@emotion/styled';
import { useAudio } from '@hooks/useAdio';
import { Button, Slider } from 'antd';
import { debounce } from 'lodash';

const Wrapper = styled.div`
  background: #f0f1f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-top: 1px solid #e8e8e8;
`;

export default function Spotify() {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const {
    play,
    pause,
    setTime,
    skip,
    state: { audioCurrentTime, audioDuration, loading, playing }
  } = useAudio(audioRef, false);

  // console.log(audioCurrentTime);

  React.useEffect(() => {
    console.log('play changed');
  }, [play]);

  const debouncedPlayFn = React.useRef<any>(debounce(play, 100));

  return (
    <div>
      <Button onClick={play}>Play</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={() => skip(20)}>Skip</Button>
      <Button onClick={() => skip(-20)}>Backwards</Button>
      <Slider
        defaultValue={0}
        max={30}
        disabled={loading}
        value={audioCurrentTime}
        onChange={value => {
          setTime(value, true);
        }}
        onAfterChange={() => {}}
      />
      <audio
        ref={audioRef}
        preload="auto"
        src="https://p.scdn.co/mp3-preview/4839b070015ab7d6de9fec1756e1f3096d908fba?cid=774b29d4f13844c495f206cafdad9c86"
      />
      <Wrapper />
    </div>
  );
}
