import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';

interface Props {
  visible: boolean;
  unreadCount: number;
}

const Notifier = styled(
  posed.div({
    visible: {
      y: 0
    },
    hidden: {
      y: 100
    }
  })
)`
  position: absolute;
  bottom: 50px;
  width: 250px;
  margin: 0 auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 0;
  left: 0;
  right: 0;
  height: 35px;
  text-align: center;
  cursor: pointer;
  line-height: 35px;
  background: rgb(45, 183, 245);
`;

const NewMessagesBelowNotifier: React.FC<Props> = props => {
  return <Notifier pose={props.visible ? 'visible' : 'hidden'} />;
};

export default NewMessagesBelowNotifier;
