import React from 'react';
import styled from '@emotion/styled';
import { animated } from 'react-spring';

const ChatMessagesWrapper = styled(animated.div)`
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  padding: 0 15px;
  h1 {
    background: transparent;
    margin: 20px;
    background: lightblue;
  }
`;

interface Props {
  onNewMessage: (duration?: number) => void;
  isWithinBottomLockRange: boolean;
  scrollToBottom: VoidFunction;
}

const ChatMessages = React.forwardRef(
  (_: Props, ref: React.Ref<HTMLDivElement>) => {
    const [state] = React.useState<React.ReactNode[]>(
      Array.from({ length: 30 }, (_, index) => (
        <h1 key={index}>Works {index}</h1>
      ))
    );

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setState(prevState => [
    //       ...prevState,
    //       <h1 key={prevState.length}>Works {prevState.length}</h1>
    //     ]);
    //     props.isWithinBottomLockRange && props.onNewMessage();
    //   }, 100);
    //   return () => clearInterval(interval);
    // }, [props.isWithinBottomLockRange]);

    // useEffect(() => {
    //   props.scrollToBottom(0);
    // }, []);

    return <ChatMessagesWrapper ref={ref}>{state}</ChatMessagesWrapper>;
  }
);

export default ChatMessages;
