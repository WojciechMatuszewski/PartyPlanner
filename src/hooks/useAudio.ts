import React from 'react';

export interface UseAudioState {
  audioDuration: number;
  audioCurrentTime: {
    value: number;
    dispatchedFrom: 'setTime' | 'timeUpdate' | 'init';
  };
  loading: boolean;
  playing: boolean;
}

interface SetTimeProps {
  timeToSet: number;
  pauseOnSet?: boolean;
  shouldIgnoreAudioElementTime?: boolean;
}

export interface UseAudioApi {
  play: VoidFunction;
  pause: VoidFunction;
  toggle: VoidFunction;
  skip: (amountToSkip: number, pauseOnSkip?: boolean) => void;
  setTime: (props: SetTimeProps) => void;
  state: UseAudioState;
}

export function useAudio(
  audioRef: React.RefObject<HTMLAudioElement>,
  trackUrl: string | null,
  disabled: boolean
): UseAudioApi {
  const [state, setState] = React.useState<UseAudioState>({
    audioDuration: 0,
    audioCurrentTime: { value: 0, dispatchedFrom: 'init' },
    loading: !disabled,
    playing: false
  });

  const listenersApplied = React.useRef<boolean>(false);

  React.useEffect(
    () => setState(prevState => ({ ...prevState, disabled: disabled })),
    [disabled]
  );

  React.useEffect(() => {
    if (!shouldApplyListeners(audioRef.current) || trackUrl == null) return;
    audioRef.current.src = trackUrl;
    setState(prevState => ({ ...prevState, loading: true }));
    if (audioRef.current.readyState > 3) {
      handleAudioLoadedCached();
      return;
    }
    applyListeners();
    listenersApplied.current = true;
    return () => {
      clearListeners();
      listenersApplied.current = false;
    };
  }, [audioRef.current, trackUrl]);

  const hasReachedTheEndOfTrack = React.useCallback(
    () => state.audioCurrentTime.value === state.audioDuration,
    [state.audioCurrentTime, state.audioDuration]
  );

  const skip: UseAudioApi['skip'] = React.useCallback(
    (amountToSkip, shouldPauseOnSkip = false) => {
      let actualAmountToSkip = 0;
      const timeAfterSkipping = state.audioCurrentTime.value + amountToSkip;
      if (timeAfterSkipping >= state.audioDuration)
        actualAmountToSkip = state.audioDuration;
      else if (timeAfterSkipping <= 0) actualAmountToSkip = 0;
      else actualAmountToSkip = timeAfterSkipping;
      setTime({ timeToSet: actualAmountToSkip, pauseOnSet: shouldPauseOnSkip });
    },
    [state.audioCurrentTime, state.audioDuration]
  );

  function toggle() {
    state.playing ? pause() : play();
  }

  function onAudioLoaded() {
    if (!audioRef.current) return;
    setState(prevState => ({
      ...prevState,
      loading: false,
      audioDuration: Math.round(audioRef.current!.duration)
    }));
  }

  function pause() {
    if (!audioRef.current) return;
    setState(prevState => ({
      ...prevState,
      playing: false
    }));
    audioRef.current.pause();
  }

  function setTime({
    timeToSet,
    pauseOnSet = false,
    shouldIgnoreAudioElementTime = false
  }: SetTimeProps) {
    if (!audioRef.current) return;

    const shouldPause = hasReachedTheEndOfTrack() || pauseOnSet;

    shouldPause && audioRef.current.pause();

    if (!shouldIgnoreAudioElementTime) {
      audioRef.current.currentTime = timeToSet;
    }

    setState(prevState => ({
      ...prevState,
      audioCurrentTime: { value: timeToSet, dispatchedFrom: 'setTime' }
    }));
  }

  function applyListeners() {
    if (!audioRef.current) return;
    audioRef.current.addEventListener('canplay', onAudioLoaded);
    audioRef.current.addEventListener('ended', pause);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
  }

  function clearListeners() {
    if (!audioRef.current) return;
    audioRef.current.removeEventListener('canplay', onAudioLoaded);
    audioRef.current.removeEventListener('ended', pause);
    audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
  }

  function handleAudioLoadedCached() {
    if (!audioRef.current) return;
    onAudioLoaded();
    audioRef.current.addEventListener('ended', pause);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    listenersApplied.current = true;
  }

  function handleTimeUpdate() {
    const parsedAudioTime = parseCurrentAudioTime();
    setState(prevState => ({
      ...prevState,
      audioCurrentTime: { value: parsedAudioTime, dispatchedFrom: 'timeUpdate' }
    }));
  }

  function parseCurrentAudioTime() {
    return audioRef.current ? Math.round(audioRef.current.currentTime) : 0;
  }

  function play() {
    if (!audioRef.current) return;
    if (hasReachedTheEndOfTrack()) {
      audioRef.current.currentTime = 0;
    }
    audioRef.current
      .play()
      .then(() => setState(prevState => ({ ...prevState, playing: true })));
  }

  function callIfNotDisabled(fnToCall: any) {
    return function(...args: any) {
      if (!disabled) return fnToCall(...args);
      return null;
    };
  }

  function shouldApplyListeners(
    audioRefElement: HTMLAudioElement | null
  ): audioRefElement is HTMLAudioElement {
    return audioRefElement != null && !listenersApplied.current;
  }

  return {
    play: callIfNotDisabled(play),
    pause: callIfNotDisabled(pause),
    setTime: callIfNotDisabled(setTime),
    skip: callIfNotDisabled(skip),
    state,
    toggle: callIfNotDisabled(toggle)
  };
}
