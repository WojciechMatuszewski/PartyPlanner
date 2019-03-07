import React, { useEffect } from 'react';
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
  }
`;

interface Props {
  onNewMessage: () => void;
}

const ChatMessages = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => {
    const [state, setState] = React.useState<React.ReactNode[]>(
      Array.from({ length: 30 }, (_, index) => <h1 key={index}>Works</h1>)
    );

    useEffect(() => {
      const interval = setInterval(() => {
        setState(prevState => [
          ...prevState,
          <h1 key={prevState.length}>Works</h1>
        ]);
        props.onNewMessage();
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return <ChatMessagesWrapper ref={ref}>{state}</ChatMessagesWrapper>;
  }
);

export default ChatMessages;
