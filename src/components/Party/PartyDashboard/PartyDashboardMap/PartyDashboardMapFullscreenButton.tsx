import React from 'react';
import { Icon } from 'antd';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

const FullscreenButton = styled.button`
  background-color: #f9f9f9;
  transition: background-color 0.16s ease-out;
  opacity: 0.95;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 28px;
  width: 28px;
  outline: 0;
  cursor: pointer;
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  ${FlexBoxFullCenteredStyles};
  box-sizing: border-box;
  &:hover {
    background: #fff;
    opacity: 1;
  }
`;

interface Props {
  onClick: VoidFunction;
  fullscreenEnabled: boolean;
}

const PartyDashboardMapFullscreenButton: React.FC<Props> = props => {
  return (
    <FullscreenButton
      onClick={props.onClick}
      type="button"
      aria-label="something"
    >
      <Icon
        style={{ color: 'black', fontSize: 18 }}
        type={props.fullscreenEnabled ? 'fullscreen-exit' : 'fullscreen'}
      />
    </FullscreenButton>
  );
};

export default PartyDashboardMapFullscreenButton;
