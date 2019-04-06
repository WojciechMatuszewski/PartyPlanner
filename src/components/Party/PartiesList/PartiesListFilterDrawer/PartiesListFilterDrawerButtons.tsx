import React from 'react';
import styled from '@emotion/styled';
import posed, { PoseGroup } from 'react-pose';
import css from '@emotion/css';
import { Button } from 'antd';

const TRANSITION_OPTIONS = {
  ease: 'linear',
  duration: 100
};

const PosedFilterActionButton = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: TRANSITION_OPTIONS
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: TRANSITION_OPTIONS
  }
});

const FilterActionButtonStyles = css`
  position: absolute;
  height: 46px;
  bottom: 0;
  width: 100%;
  border: 0;
  left: 0;
  padding: 0;
  button {
    height: 100%;
    padding: 0;
    border-radius: 0;
  }
`;

const AnimatedFiltersActionButton = styled(PosedFilterActionButton)`
  ${FilterActionButtonStyles};
`;
export interface FiltersActionButtonsProps {
  state: 'apply' | 'clear' | 'hidden';
  onClear: VoidFunction;
  onApply: VoidFunction;
}
const PartiesListFilterDrawerButtons: React.FC<
  FiltersActionButtonsProps
> = props => {
  return (
    <PoseGroup>
      {props.state === 'apply' ? (
        <AnimatedFiltersActionButton key={1}>
          <Button
            data-testid="apply-filters-button"
            onClick={props.onApply}
            block={true}
            type="primary"
          >
            Apply filters
          </Button>
        </AnimatedFiltersActionButton>
      ) : props.state === 'clear' ? (
        <AnimatedFiltersActionButton key={2}>
          <Button
            data-testid="clear-filters-button"
            onClick={props.onClear}
            block={true}
            type="danger"
          >
            Clear filters
          </Button>
        </AnimatedFiltersActionButton>
      ) : (
        []
      )}
    </PoseGroup>
  );
};

export default PartiesListFilterDrawerButtons;
