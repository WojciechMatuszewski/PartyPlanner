import React from 'react';
import { PaginateMessagesQueryEdges } from '@generated/graphql';
import VirtualizedChatMessagesList from './VirtualizedChatMessagesList';
import { OnScrollParams, List } from 'react-virtualized';
import { tween } from 'popmotion';
import { ChatsContext } from '@pages/chats';

interface Props {
  messages: PaginateMessagesQueryEdges[];
  children: (renderProps: RenderProps) => React.ReactNode;
  bottomLockZoneHeight: number;
}

interface RenderProps {
  isWithinBottomLockZone: boolean;
  scrollToBottom: (duration: number) => void;
  hasInitiallyScrolled: boolean;
}

interface State {
  isWithinBottomLockZone: boolean;
  scrollTop: number | undefined;
  hasInitiallyScrolled: boolean;
}

const AnimatedChatMessagesList: React.FC<Props> = props => {
  const { currentlySelectedChatId } = React.useContext(ChatsContext);
  //   const firstScrollFired = React.useRef<boolean>(false);
  const virtualizedListRef: React.RefObject<List> = React.useRef(null);
  const currentScrollTopRef = React.useRef<number>(0);

  React.useEffect(() => {
    setState(prevState => ({ ...prevState, hasInitiallyScrolled: false }));
  }, [currentlySelectedChatId]);

  const [state, setState] = React.useState<State>({
    isWithinBottomLockZone: false,
    scrollTop: undefined,
    hasInitiallyScrolled: false
  });

  const shouldUpdateLockZoneState = React.useCallback(
    (scrollParams: OnScrollParams) => {
      currentScrollTopRef.current = scrollParams.scrollTop;
      if (
        !state.isWithinBottomLockZone &&
        isWithinBottomLockZone(scrollParams)
      ) {
        setState(prevState => ({ ...prevState, isWithinBottomLockZone: true }));
      } else if (
        state.isWithinBottomLockZone &&
        !isWithinBottomLockZone(scrollParams)
      ) {
        setState(prevState => ({
          ...prevState,
          isWithinBottomLockZone: false
        }));
      }
    },
    [state.isWithinBottomLockZone]
  );

  return (
    <React.Fragment>
      <VirtualizedChatMessagesList
        onRowsRendered={onRowsRendered}
        onScroll={shouldUpdateLockZoneState}
        ref={virtualizedListRef}
        messages={props.messages}
        scrollTop={state.scrollTop}
      />
      {props.children({
        isWithinBottomLockZone: state.isWithinBottomLockZone,
        scrollToBottom,
        hasInitiallyScrolled: state.hasInitiallyScrolled
      })}
    </React.Fragment>
  );

  function scrollToBottom(duration: number = 0) {
    if (!virtualizedListRef.current) return;

    const goal = virtualizedListRef.current.getOffsetForRow({
      index: props.messages.length
    });

    if (!shouldStartScrollingDown(goal) || goal == 0) return;

    tween({
      from: currentScrollTopRef.current,
      to: goal + 12,
      duration
    }).start({
      update: (value: number) =>
        setState(prevState => ({ ...prevState, scrollTop: value })),
      complete: () =>
        setState(prevState => ({ ...prevState, scrollTop: undefined }))
    });
  }

  function shouldStartScrollingDown(goal: number) {
    return goal !== currentScrollTopRef.current;
  }

  function onRowsRendered() {
    if (!state.hasInitiallyScrolled) {
      scrollToBottom();
      setState(prevState => ({ ...prevState, hasInitiallyScrolled: true }));
    }
  }

  function isWithinBottomLockZone({
    scrollTop,
    scrollHeight,
    clientHeight
  }: OnScrollParams) {
    return (
      scrollHeight - (scrollTop + clientHeight) <= props.bottomLockZoneHeight
    );
  }
};

export default AnimatedChatMessagesList;
