import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { useAudio } from '@hooks/useAudio';
import { Typography, Slider } from 'antd';
import BigMusicPlayerUserControls from './BigMusicPlayerUserControls';
import useMedia from '@hooks/useMedia';
import BigMusicPlayerTrackInfo from './BigMusicPlayerTrackInfo';
import { debounce } from 'lodash';
import { SliderValue } from 'antd/lib/slider';
import {
  useBigMusicPlayer,
  UseBigMusicPlayerCommandsPayload
} from './BigMusicPlayerProvider';
import BigMusicPlayerControlButtons from './BigMusicPlayerControlButtons';

export const BIG_MUSIC_PLAYER_MOBILE_BREAKPOINT = 800;

const BigMusicPlayerWrapper = styled(
  posed.div({
    loading: {
      opacity: 0.2
    },
    loaded: {
      opacity: 1
    }
  })
)`
  width: 100%;
  height: 100%;
  ${FlexBoxFullCenteredStyles};
  position: relative;
`;

const BigMusicPlayerInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${BIG_MUSIC_PLAYER_MOBILE_BREAKPOINT}px) {
    padding: 0;
    flex-direction: column-reverse;
    width: 100%;
    max-width: 100%;
    height: 100%;
    justify-content: center;
  }
`;

const ControlButtonsWrapper = styled.div`
  padding-bottom: 6px;
  ${FlexBoxFullCenteredStyles};
  button {
    .anticon {
      ${FlexBoxFullCenteredStyles};
    }
  }
  .play-pause-button {
    margin-left: 12px;
    margin-right: 12px;
    margin-top: 0 !important;
  }
  @media screen and (max-width: 800px) {
    .play-pause-button {
      margin-left: 4px;
      margin-right: 4px;
    }
    padding-bottom: 0;
    button {
      margin-top: 0;
    }
  }
`;

const SliderWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;

  width: 100%;

  .ant-slider {
    margin: 0;
    flex: 1;
  }
  & > span {
    font-size: 12px;
    display: inline-block;
    padding: 0 12px;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content min-content;
    margin-bottom: 12px;
    margin-top: 4px;
    .ant-slider-dot {
      display: none;
    }

    & > span {
      grid-row: 2/3;
      padding: 0;
    }

    .ant-slider {
      grid-column: 1/3;
    }
  }
`;

const BigMusicPlayer: React.FC = () => {
  const isOnMobile = useMedia(
    `(max-width:${BIG_MUSIC_PLAYER_MOBILE_BREAKPOINT}px)`
  );
  const { track, audioPlayerCommands$, setPlayerState } = useBigMusicPlayer();
  // used when we want to ignore time update
  const latestDragValue = React.useRef<number>(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [ignoreStateTimeUpdate, setIgnoreStateTimeUpdate] = React.useState<
    boolean
  >(false);

  const shouldPlayOnLoad = React.useRef<boolean>(false);

  const [disabled, setDisabled] = React.useState<boolean>(true);

  // tracks disabled state, player should be disabled if no track is present
  React.useEffect(() => {
    if (!track && !disabled) {
      setDisabled(true);
    } else if (disabled && track) {
      setDisabled(false);
    }
  }, [track, disabled]);

  const {
    play,
    pause,
    setTime,
    skip,
    toggle,
    state: { audioCurrentTime, audioDuration, loading, playing }
  } = useAudio(audioRef, track ? track.previewUrl : null, disabled);

  // used in debounceAfterChange
  const setTimeFuncRef = React.useRef<any>(setTime);
  React.useEffect(() => void (setTimeFuncRef.current = setTime), [setTime]);

  // react ;) to commands from context
  React.useEffect(() => {
    const commandsSub = audioPlayerCommands$.subscribe(
      handleMusicPlayerCommand
    );
    return () => commandsSub.unsubscribe();
  }, [playing, track]);

  // notify context consumers
  React.useEffect(
    () =>
      setPlayerState(playing ? 'playing' : loading ? 'loading' : 'disabled'),
    [playing, loading, disabled]
  );

  // play on track loaded
  React.useEffect(() => {
    if (!loading && shouldPlayOnLoad.current) {
      play();
      shouldPlayOnLoad.current = false;
    }
  }, [loading]);

  const debouncedAfterValueChange = React.useRef<(value: SliderValue) => void>(
    debounce((value: SliderValue) => {
      setIgnoreStateTimeUpdate(false);
      setTimeFuncRef.current({
        timeToSet: value as number,
        pauseOnSet: false,
        shouldIgnoreAudioElementTime: false
      });
    }, 150)
  );

  return (
    <BigMusicPlayerWrapper pose={loading || disabled ? 'loading' : 'loaded'}>
      {!isOnMobile && (
        <BigMusicPlayerTrackInfo track={track} isOnMobile={isOnMobile} />
      )}
      <BigMusicPlayerInnerWrapper>
        <ControlButtonsWrapper>
          {isOnMobile && (
            <BigMusicPlayerTrackInfo track={track} isOnMobile={isOnMobile} />
          )}
          <BigMusicPlayerControlButtons
            playing={playing}
            toggle={toggle}
            disabled={loading || disabled}
            isOnMobile={isOnMobile}
            skip={skip}
          />
          {isOnMobile && <BigMusicPlayerUserControls isOnMobile={isOnMobile} />}
        </ControlButtonsWrapper>
        {isOnMobile && track && (
          <Typography.Text style={{ order: 1 }} ellipsis={true}>
            {track.name} by <strong>{track.mainArtists[0].name}</strong>
          </Typography.Text>
        )}
        <SliderWrapper>
          <audio ref={audioRef} controls={false} preload="auto" />
          {!isOnMobile && (
            <Typography.Text type="secondary">
              0:{getCurrentAudioTime()}
            </Typography.Text>
          )}

          <Slider
            onChange={updateAudioTimeState}
            defaultValue={0}
            disabled={loading}
            max={audioDuration}
            marks={isOnMobile ? getMobileSliderMarks() : undefined}
            tipFormatter={sliderTooltipFormatter}
            onAfterChange={debouncedAfterValueChange.current}
            value={
              ignoreStateTimeUpdate
                ? latestDragValue.current
                : audioCurrentTime.value
            }
          />
          {!isOnMobile && (
            <Typography.Text type="secondary">
              0:{audioDuration}
            </Typography.Text>
          )}
        </SliderWrapper>
      </BigMusicPlayerInnerWrapper>
      {!isOnMobile && <BigMusicPlayerUserControls isOnMobile={isOnMobile} />}
    </BigMusicPlayerWrapper>
  );

  function updateAudioTimeState(value: SliderValue) {
    if (!ignoreStateTimeUpdate) {
      setIgnoreStateTimeUpdate(true);
    }
    latestDragValue.current = value as number;
    setTime({
      timeToSet: value as number,
      pauseOnSet: false,
      shouldIgnoreAudioElementTime: true
    });
  }

  function getCurrentAudioTime() {
    return ignoreStateTimeUpdate
      ? // since we are ignoring audioState format latest dragState
        formatNumberToAudioTime(latestDragValue.current)
      : formatNumberToAudioTime(audioCurrentTime.value);
  }

  function formatNumberToAudioTime(numberToFormat: number) {
    return numberToFormat < 10 ? `0${numberToFormat}` : numberToFormat;
  }

  function sliderTooltipFormatter(value: number) {
    return `${value}s`;
  }

  // used for mobile styling
  function getMobileSliderMarks() {
    return {
      0: {
        style: {
          transform: 'translate(0%, -20%)',
          color: 'rgba(0, 0, 0, 0.45)',
          fontSize: 11
        },
        label: `0:${getCurrentAudioTime()}`
      },
      30: {
        label: `0:${audioDuration}`,
        style: {
          color: 'rgba(0, 0, 0, 0.45)',
          fontSize: 11,
          transform: 'translate(-100%, -20%)'
        }
      }
    };
  }

  function handleMusicPlayerCommand({
    command,
    trackInQuestion
  }: UseBigMusicPlayerCommandsPayload) {
    const isTrackDifferent = track ? track.id != trackInQuestion.id : true;
    // more commands should be added if needed
    if (command == 'toggle') {
      if (isTrackDifferent) return (shouldPlayOnLoad.current = true);
      return toggle();
    } else if (command == 'pause') {
      if (!track) return;
      pause();
    }
  }
};

export default BigMusicPlayer;
