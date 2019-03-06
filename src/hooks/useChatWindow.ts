import { styler, tween } from 'popmotion';
import React, { useEffect } from 'react';
import { Styler } from 'stylefire';

interface State {
  isWithinBottomLock: boolean;
}

const initialState: State = {
  isWithinBottomLock: true
};

interface ReturnProps {
  scrollHandler: (event: React.UIEvent<HTMLDivElement>) => void;
  wheelHandler: () => void;
  ref: React.Ref<HTMLDivElement>;
}

function useChatWindow(): ReturnProps {
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRefStyler = React.useRef<Styler | null>(null);
  const currentlyRunningAnimationRef = React.useRef<any>(null);
  const [state, setState] = React.useState<State>(initialState);

  /*
    TODO:
    1. On init scroll without animation
    2. Listen to scroll event, decide if user is within bottom scroll lock zone
    3. On every new message 
        3.1 if user is within bottom scroll lock zone , scroll
        3.2 if not do nothing
    4. Every animation should be cancellable, for example if someone sends a very long message, user scrolls mid scroll animation, animation should stop and let user to scroll
  
  */

  // 1
  useEffect(() => {
    if (!scrollerRef.current) return;
    scrollerRefStyler.current = styler(scrollerRef.current);
    scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
  }, []);

  // 2
  const calculateRelativeScrollPositions = (element: HTMLDivElement) => ({
    relativeToBottom:
      element.scrollHeight - (element.scrollTop + element.clientHeight),
    relativeToTop: element.scrollTop
  });
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const { relativeToBottom } = calculateRelativeScrollPositions(
      event.target as HTMLDivElement
    );
    if (relativeToBottom <= 50 && state.isWithinBottomLock === false)
      setState({ isWithinBottomLock: true });
    if (relativeToBottom > 50 && state.isWithinBottomLock === true)
      setState({ isWithinBottomLock: false });
  };

  // 3 very inefficient
  useEffect(() => {
    if (!state.isWithinBottomLock) return;
    if (!scrollerRef.current || !scrollerRefStyler.current) return;

    const { relativeToBottom } = calculateRelativeScrollPositions(
      scrollerRef.current
    );

    currentlyRunningAnimationRef.current = tween({
      from: scrollerRef.current.scrollTop,
      to: scrollerRef.current.scrollTop + relativeToBottom,
      duration: 200
    }).start({
      update: (value: number) =>
        scrollerRefStyler.current!.set('scrollTop', value),
      complete: () => (currentlyRunningAnimationRef.current = null)
    });
  });

  // 4
  function wheelHandler() {
    if (currentlyRunningAnimationRef.current) {
      currentlyRunningAnimationRef.current.stop();
    }
    return;
  }

  return {
    scrollHandler,
    ref: scrollerRef,
    wheelHandler
  };
}

export default useChatWindow;
