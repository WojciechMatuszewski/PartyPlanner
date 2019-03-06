import React from 'react';
import styled from '@emotion/styled';
import useChatWindow from '../../hooks/useChatWindow';
import { Subject } from 'rxjs';
import { animated } from 'react-spring';

const ChatMessagesWrapper = styled(animated.div)`
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  padding: 0 15px;
  h1 {
    background: red;
    margin: 20px;
  }
`;

const ChatMessages: React.FC = () => {
  const newMessageSubject$: Subject<void> = new Subject();
  const { scrollHandler, ref, wheelHandler } = useChatWindow();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(prevState => [
        ...prevState,
        <h1 key={prevState.length + 1}>works</h1>
      ]);
      newMessageSubject$.next();
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const [state, setState] = React.useState([
    ...Array.from({ length: 40 }, (_, index) => <h1 key={index}>Works</h1>)
  ]);

  return (
    <ChatMessagesWrapper
      onWheel={wheelHandler}
      ref={ref}
      onScroll={scrollHandler}
    >
      {state}
    </ChatMessagesWrapper>
  );
};

export default ChatMessages;
