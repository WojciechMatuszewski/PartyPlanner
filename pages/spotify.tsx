import React from 'react';
import styled from '@emotion/styled';
import { Button, Slider } from 'antd';

const BottomWrapper = styled.div`
  background: #f0f1f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-top: 1px solid #e8e8e8;
`;

const BottomInnerWrapper = styled.div`
  padding: 12px;
  max-width: 800px;
  margin: 0 auto;
`;

const SliderWrapper = styled.div`
  .ant-slider-track {
    background: #66d26e;
  }

  .ant-slider-rail {
    background: #e1e1e1;
  }

  .ant-slider-handle {
    border: solid 2px #66d26e;
    &:focus {
      border-color: #48aa58;
    }
  }
  .ant-slider:hover {
    .ant-slider-track {
      background: #48aa58;
    }
  }
`;

export default function Spotify() {
  // const audioRef = React.useRef<HTMLAudioElement>(null);

  // const {
  //   play,
  //   pause,
  //   setTime,
  //   skip,
  //   state: { audioCurrentTime, audioDuration, loading, playing }
  // } = useAudio(audioRef, false);

  // // console.log(audioCurrentTime);

  // React.useEffect(() => {
  //   console.log('play changed');
  // }, [play]);

  return (
    <BottomWrapper>
      <BottomInnerWrapper>
        <Button icon="pause" shape="circle" />
        <Button icon="fast-forward" />
        <SliderWrapper>
          <Slider />
        </SliderWrapper>
      </BottomInnerWrapper>
    </BottomWrapper>
  );
}
