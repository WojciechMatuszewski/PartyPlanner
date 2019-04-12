import React from 'react';
import styled from '@emotion/styled';
import { animated } from 'react-spring';

const ChatMessagesWrapper = styled(animated.div)`
  flex: 1;
  width: 100%;
  overflow-y: auto;

  padding: 0 15px;
  h1 {
    background: transparent;
    margin: 20px;
    background: lightblue;
  }
`;

interface Props {
  onNewMessage: (duration?: number) => void;
}

const ChatWindowMessages = React.forwardRef(
  (_: Props, ref: React.Ref<HTMLDivElement>) => {
    // const [state, setState] = React.useState<React.ReactNode[]>(
    //   Array.from({ length: 30 }, (_, index) => (
    //     <h1 key={index}>Works {index}</h1>
    //   ))
    // );

    // React.useEffect(() => {
    //   const interval = setInterval(() => {
    //     setState(prevState => [
    //       ...prevState,
    //       <h1 key={prevState.length}>Works {prevState.length}</h1>
    //     ]);
    //     props.onNewMessage();
    //   }, 100);
    //   return () => clearInterval(interval);
    // });

    // useEffect(() => {
    //   props.scrollToBottom(0);
    // }, []);

    return <ChatMessagesWrapper ref={ref}>works</ChatMessagesWrapper>;
  }
);

export default ChatWindowMessages;
