import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { Icon } from 'antd';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

interface Props {
  visible: boolean;
  unreadCount: number;
  onClick: () => void;
}

const Notifier = styled(
  posed.div({
    visible: {
      opacity: 1,
      y: 0
    },
    hidden: {
      opacity: 0,
      y: 20
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
  background: #595959;
`;

const NotifierInnerWrapper = styled.div`
  padding: 8px;
  color: white;
  ${FlexBoxFullCenteredStyles};
  height: 100%;
  .anticon {
    margin-right: 8px;
  }
`;

const NewMessagesBelowNotifier: React.FC<Props> = props => {
  return (
    <Notifier
      onClick={props.onClick}
      pose={props.visible ? 'visible' : 'hidden'}
    >
      <NotifierInnerWrapper>
        <Icon type="down-circle" /> 1 New messages below
      </NotifierInnerWrapper>
    </Notifier>
  );
};

export default NewMessagesBelowNotifier;
