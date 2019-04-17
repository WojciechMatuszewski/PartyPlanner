import React from 'react';
import { OnScrollParams } from 'react-virtualized';
import { tween } from 'popmotion';

interface State {
  isWithinBottomLockZone: boolean;
  animatedScrollTop: number | undefined;
}

const initialState: State = {
  isWithinBottomLockZone: false,
  animatedScrollTop: undefined
};

interface ReturnProps extends State {
  scrollToBottom: (duration?: number) => void;
  handleScroll: (params: OnScrollParams) => void;
}

function useBottomScrollLock(
  height: number,
  scrollGoalGetter: () => number,
  onScrolledTop: () => void,
  bottomOffset: number = 12
): ReturnProps {
  const [state, setState] = React.useState<State>(initialState);
  const onScrolledTopRef = React.useRef<() => void>(onScrolledTop);
  const animationRef = React.useRef<any>();
  const scrollTopRef = React.useRef<number>(0);

  React.useEffect(() => {
    onScrolledTopRef.current = onScrolledTop;
  }, [onScrolledTop]);

  function checkIfIsWithinBottomLockZone({
    scrollTop,
    scrollHeight,
    clientHeight
  }: OnScrollParams) {
    return scrollHeight - (scrollTop + clientHeight) <= height;
  }

  const handleScroll = React.useCallback(
    (scrollParams: OnScrollParams) => {
      scrollTopRef.current = scrollParams.scrollTop;

      if (scrollTopRef.current == 0) onScrolledTopRef.current();
      // TODO:
      // stopCurrentAnimation();
      if (
        !state.isWithinBottomLockZone &&
        checkIfIsWithinBottomLockZone(scrollParams)
      ) {
        setState(prevState => ({ ...prevState, isWithinBottomLockZone: true }));
      } else if (
        state.isWithinBottomLockZone &&
        !checkIfIsWithinBottomLockZone(scrollParams)
      ) {
        setState(prevState => ({
          ...prevState,
          isWithinBottomLockZone: false
        }));
      }
    },
    [state.isWithinBottomLockZone]
  );

  function scrollToBottom(duration: number = 0) {
    const goal = scrollGoalGetter();

    if (!shouldStartScrollingDown(goal) || goal == 0) return;

    animationRef.current = animateScrollTop(goal, duration);
  }

  function shouldStartScrollingDown(goal: number) {
    return goal !== scrollTopRef.current;
  }

  function animateScrollTop(goal: number, duration: number) {
    return tween({
      from: scrollTopRef.current,
      to: goal + bottomOffset,
      duration
    }).start({
      update: (value: number) =>
        setState(prevState => ({ ...prevState, animatedScrollTop: value })),
      complete: () => {
        setState(prevState => ({ ...prevState, animatedScrollTop: undefined }));
      }
    });
  }

  // TODO:
  // function stopCurrentAnimation() {
  //   if (animationRef.current) {
  //     animationRef.current.stop();
  //     animationRef.current = null;
  //     setState(prevState => ({ ...prevState, currentScrollTop: undefined }));
  //   }
  // }

  return {
    ...state,
    scrollToBottom,
    handleScroll
  };
}

export default useBottomScrollLock;
