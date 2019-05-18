import React from 'react';
import styled from '@emotion/styled';
import posed from 'react-pose';
import css, { SerializedStyles } from '@emotion/css';

const SlidableWrapper = styled(
  posed.div({
    visible: {
      y: 0,
      transition: {
        ease: 'linear',
        duration: 100
      }
    },
    hidden: {
      y: 100,
      transition: {
        ease: 'linear',
        duration: 100
      }
    }
  })
)`
  background: white;
  width: 100%;
  height: 100px;
  padding: 0 12px;
  border-top: 1px solid #e8e8e8;
  display: flex;
  flex: 1;
  transform: translateY(100%);
  z-index: 10;
`;

const SlidableTriggerStyles = css`
  position: absolute;
  top: 0;
  right: 12px;
  width: 178.2px;
  height: 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform: translateY(-100%);
  background: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid white !important;
  box-shadow: none;
`;

interface Props {
  children: React.ReactNode;
  containerCSS?: SerializedStyles;
  visible: boolean;
  trigger: (suggestedTriggerStyles: SerializedStyles) => React.ReactNode;
}

const SlidableWithTrigger: React.FC<Props> = props => {
  return (
    <SlidableWrapper
      css={[props.containerCSS]}
      pose={props.visible ? 'visible' : 'hidden'}
      initialPose="hidden"
    >
      {props.trigger(SlidableTriggerStyles)}
      {props.children}
    </SlidableWrapper>
  );
};

export default SlidableWithTrigger;
