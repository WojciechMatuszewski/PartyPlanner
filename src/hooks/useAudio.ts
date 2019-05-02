import React from 'react';

export interface UseAudioState {
  audioDuration: number;
  audioCurrentTime: number;
  loading: boolean;
  playing: boolean;
}

export interface UseAudioApi {
  play: VoidFunction;
  pause: VoidFunction;
  toggle: VoidFunction;
  skip: (amountToSkip: number, pauseOnSkip?: boolean) => void;
  setTime: (timeToSet: number, pauseOnSet?: boolean) => void;
  state: UseAudioState;
}

export function useAudio(
  audioRef: React.RefObject<HTMLAudioElement>,
  disabled: boolean
): UseAudioApi {
  const [state, setState] = React.useState<UseAudioState>({
    audioDuration: 0,
    audioCurrentTime: 0,
    loading: !disabled,
    playing: false
  });

  const listenersApplied = React.useRef<boolean>(false);

  React.useEffect(
    () => setState(prevState => ({ ...prevState, disabled: disabled })),
    [disabled]
  );

  React.useEffect(() => {
    if (!audioRef.current || listenersApplied.current) return;
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
  }, [audioRef.current]);

  const hasReachedTheEndOfTrack = React.useCallback(
    () => state.audioCurrentTime === state.audioDuration,
    [state.audioCurrentTime, state.audioDuration]
  );

  const skip: UseAudioApi['skip'] = React.useCallback(
    (amountToSkip, shouldPauseOnSkip = false) => {
      let actualAmountToSkip = 0;
      const timeAfterSkipping = state.audioCurrentTime + amountToSkip;
      if (timeAfterSkipping >= state.audioDuration)
        actualAmountToSkip = state.audioDuration;
      else if (timeAfterSkipping <= 0) actualAmountToSkip = 0;
      else actualAmountToSkip = timeAfterSkipping;
      setTime(actualAmountToSkip, shouldPauseOnSkip);
    },
    [state.audioCurrentTime, state.audioDuration]
  );

  const toggle = React.useCallback(() => (state.playing ? pause() : play()), [
    state.playing,
    state.audioCurrentTime,
    state.audioDuration
  ]);

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

  function setTime(timeToSet: number, pauseOnSet = false) {
    if (!audioRef.current) return;

    const shouldPause = hasReachedTheEndOfTrack() || pauseOnSet;

    shouldPause && audioRef.current.pause();
    audioRef.current.currentTime = timeToSet;

    setState(prevState => ({
      ...prevState,
      audioCurrentTime: timeToSet,
      playing: !shouldPause
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
      audioCurrentTime: parsedAudioTime
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
    audioRef.current.play();
    setState(prevState => ({ ...prevState, playing: true }));
  }

  function callIfNotDisabled(fnToCall: any) {
    return function(...args: any) {
      if (!disabled) return fnToCall(...args);
      return null;
    };
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
