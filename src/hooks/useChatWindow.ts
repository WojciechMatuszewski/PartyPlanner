import { styler, tween } from 'popmotion';
import React, { useEffect } from 'react';
import { Styler } from 'stylefire';

interface ReturnProps {
  wheelHandler: () => void;
  scrollToBottom: (duration?: number) => void;
  isWithinBottomLockRange: boolean;
}

function useChatWindow(
  elementRef: React.RefObject<HTMLDivElement>,
  bottomLockRange: number = 100
): ReturnProps {
  const stylerRef = React.useRef<Styler | null>(null);
  const currentlyRunningAnimationRef = React.useRef<any>(null);
  const [isWithinBottomLockRange, setIsWithinBottomLockRange] = React.useState<
    boolean
  >(false);

  useEffect(() => {
    if (!elementRef.current) return;
    stylerRef.current = styler(elementRef.current);
  }, []);

  const calculateRelativeScrollPositions = (element: HTMLDivElement) => ({
    relativeToBottom:
      element.scrollHeight - (element.scrollTop + element.clientHeight),
    relativeToTop: element.scrollTop
  });

  useEffect(() => {
    if (!elementRef.current) return;
    function eventHandler(event: Event) {
      const { relativeToBottom } = calculateRelativeScrollPositions(
        event.currentTarget as HTMLDivElement
      );
      if (relativeToBottom < bottomLockRange && isWithinBottomLockRange) return;
      if (relativeToBottom > bottomLockRange && !isWithinBottomLockRange)
        return;
      setIsWithinBottomLockRange(relativeToBottom < bottomLockRange);
    }
    elementRef.current.addEventListener('scroll', eventHandler, {
      passive: true
    });
    return () =>
      void (
        elementRef.current &&
        elementRef.current.removeEventListener('scroll', eventHandler)
      );
  }, [isWithinBottomLockRange]);

  function scrollToBottom(duration: number = 200) {
    const { relativeToBottom } = calculateRelativeScrollPositions(
      elementRef.current as HTMLDivElement
    );
    currentlyRunningAnimationRef.current = tween({
      from: elementRef.current!.scrollTop,
      to: elementRef.current!.scrollTop + relativeToBottom,
      duration
    }).start({
      update: (value: number) => stylerRef.current!.set('scrollTop', value),
      complete: () => (currentlyRunningAnimationRef.current = null)
    });
  }

  function wheelHandler() {
    if (currentlyRunningAnimationRef.current) {
      currentlyRunningAnimationRef.current.stop();
    }
    return;
  }

  return {
    wheelHandler,
    scrollToBottom,
    isWithinBottomLockRange
  };
}

export default useChatWindow;
