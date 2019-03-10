import React, { useEffect, useState } from 'react';

interface ReturnProps {
  isWithinBottomLockRange: boolean;
  calculateRelativeScrollPositions: (
    element?: HTMLDivElement
  ) => { bottom: number; top: number };
}

function useChatWindowScrollPosition(
  elementRef: React.RefObject<HTMLDivElement>,
  bottomLockRange: number = 50
): ReturnProps {
  const [isWithinBottomLockRange, setIsWithinBottomLockRange] = useState<
    boolean
  >(false);

  const calculateRelativeScrollPositions = (
    element: HTMLDivElement = elementRef.current!
  ) => ({
    bottom: element.scrollHeight - (element.scrollTop + element.clientHeight),
    top: element.scrollTop
  });

  useEffect(() => {
    if (!elementRef.current) return;
    function eventHandler(event: Event) {
      const { bottom } = calculateRelativeScrollPositions(
        event.currentTarget as HTMLDivElement
      );
      if (bottom < bottomLockRange && isWithinBottomLockRange) return;
      if (bottom > bottomLockRange && !isWithinBottomLockRange) return;
      setIsWithinBottomLockRange(bottom < bottomLockRange);
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

  return {
    isWithinBottomLockRange,
    calculateRelativeScrollPositions
  };
}

export default useChatWindowScrollPosition;
