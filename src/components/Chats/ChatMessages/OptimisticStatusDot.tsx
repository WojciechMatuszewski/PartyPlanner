import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { Icon } from 'antd';

interface Props {
  optimisticallyAdded: boolean;
  optimisticallyCreated: boolean;
  hasOptimisticError: boolean;
}

const OptimisticDot = styled.div<Props>`
  grid-row-start: 1;
  grid-row-end: 3;
  align-self: flex-end;
  width: 12px;
  height: 12px;
  border: ${props =>
    props.optimisticallyAdded && !props.hasOptimisticError
      ? '1px solid #1890ff'
      : props.hasOptimisticError
      ? '1px solid #E23C39'
      : '0'};
  border-radius: 50%;
  margin: 0 auto;
  ${FlexBoxFullCenteredStyles};
  display: ${props => (props.optimisticallyAdded ? 'flex' : 'none')};
  background: ${props =>
    props.optimisticallyCreated
      ? '#1890ff'
      : props.hasOptimisticError
      ? '#E23C39'
      : 'white'};
  .anticon {
    font-size: ${props => (props.hasOptimisticError ? '8px' : '6px')};
    color: ${props =>
      props.optimisticallyCreated || props.hasOptimisticError
        ? 'white'
        : '#1890ff'};
  }
`;

const OptimisticStatusDot: React.FC<Props> = props => {
  return (
    <OptimisticDot {...props}>
      {props.hasOptimisticError ? (
        <Icon type="exclamation" />
      ) : (
        <Icon type="check" />
      )}
    </OptimisticDot>
  );
};

export default OptimisticStatusDot;
