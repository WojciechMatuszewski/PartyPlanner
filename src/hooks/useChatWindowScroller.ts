import { Styler } from 'stylefire';
import React, { useEffect } from 'react';

import { styler, tween } from 'popmotion';
import { smooth } from '@popmotion/popcorn';

interface ReturnProps {
  scrollToBottom: (duration?: number) => void;
}

function useChatWindowScroller(
  elementRef: React.RefObject<HTMLDivElement>
): ReturnProps {
  const stylerRef = React.useRef<Styler | null>(null);
  const currentAnimationRef = React.useRef<any>(null);

  function scrollToBottom(duration: number = 200) {
    currentAnimationRef.current = tween({
      from: elementRef.current!.scrollTop,
      to: elementRef.current!.scrollTop + 40,
      duration
    })
      .pipe(smooth(200))
      .start({
        update: (value: number) => stylerRef.current!.set('scrollTop', value),
        complete: () => (currentAnimationRef.current = null)
      });
  }

  useEffect(() => {
    if (!elementRef.current) return;
    stylerRef.current = styler(elementRef.current);
  }, []);

  return {
    scrollToBottom
  };
}

export default useChatWindowScroller;
