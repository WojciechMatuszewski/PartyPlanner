import React from 'react';
import { TooltipRenderProps } from 'react-joyride';
import styled from '@emotion/styled';
import { Typography, Button } from 'antd';

const TooltipBody = styled.div`
  background-color: #fff;
  min-width: 290px;
  max-width: 350px;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  div.ant-typography {
    margin-bottom: 12px;
  }
`;

const TooltipContent = styled.div`
  padding: 24px;
`;

const TooltipControls = styled.div`
  display: flex;
`;

const TooltipControlsNextBack = styled.div`
  margin-left: auto;
  justify-self: flex-end;
  display: flex;
  button:last-of-type {
    justify-self: flex-end;
    margin-left: 12px;
  }
`;

export default function JoyrideTooltip({
  tooltipProps,
  step,
  isLastStep,
  continuous,
  index,
  backProps,
  primaryProps,
  skipProps
}: TooltipRenderProps) {
  function getForwardButtonText() {
    if (continuous && !isLastStep) return 'Next';
    return 'Close';
  }

  return (
    <TooltipBody {...tooltipProps}>
      <TooltipContent>
        <Typography.Title level={4}>{step.title}</Typography.Title>
        {step.content}
        <TooltipControls>
          {!isLastStep && (
            <Button {...skipProps} type="link" style={{ padding: 0 }}>
              Skip
            </Button>
          )}
          <TooltipControlsNextBack>
            {index > 0 && <Button {...backProps}>Back</Button>}
            <Button {...primaryProps} type="primary">
              {getForwardButtonText()}
            </Button>
          </TooltipControlsNextBack>
        </TooltipControls>
      </TooltipContent>
    </TooltipBody>
  );
}
