import React from 'react';
import { ScrollParams } from 'react-virtualized';

interface ReturnProps {
  isWithinBottomScrollLockZone: boolean;
  onScroll: (scrollParams: ScrollParams) => void;
}

function useBottomScrollLock(bottomOffset: number): ReturnProps {
  const [state, setState] = React.useState<boolean>(false);

  const onScroll = React.useCallback(
    (scrollParams: ScrollParams) => {
      if (!state && checkIfIsWithinBottomLockZone(scrollParams)) {
        setState(true);
      } else if (state && !checkIfIsWithinBottomLockZone(scrollParams)) {
        setState(false);
      }
    },
    [state]
  );

  function checkIfIsWithinBottomLockZone({
    scrollTop,
    scrollHeight,
    clientHeight
  }: ScrollParams) {
    return scrollHeight - (scrollTop + clientHeight) <= bottomOffset;
  }

  return {
    isWithinBottomScrollLockZone: state,
    onScroll
  };
}

export default useBottomScrollLock;
