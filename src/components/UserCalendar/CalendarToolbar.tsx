import React from 'react';
import { ToolbarProps, View } from 'react-big-calendar';
import { Button, Icon } from 'antd';
import styled from '@emotion/styled';
import ButtonGroup from 'antd/lib/button/button-group';
import css from '@emotion/css';
import { Radio } from 'antd';
import {
  NotWrappingTextStyles,
  FlexBoxVerticallyCenteredStyles
} from '../../shared/styles';
import useMedia from '../../hooks/useMedia';

const ToolbarWrapper = styled.div`
  ${FlexBoxVerticallyCenteredStyles};
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  h2 {
    margin: 0;
    @media screen and (max-width: 800px) {
      padding-right: 5px;
    }
  }
`;

const MobileToolbarView: React.FC<ToolbarProps> = props => {
  return (
    <ToolbarWrapper>
      <h2
        css={css`
          ${NotWrappingTextStyles};
          text-overflow: ellipsis;
        `}
      >
        {props.label}
      </h2>
      <div style={{ display: 'flex' }}>
        <Button shape="circle" onClick={() => props.onNavigate('PREV')}>
          <Icon type="left" />
        </Button>
        <Button
          style={{ margin: '0 5px' }}
          onClick={() => props.onNavigate('TODAY')}
        >
          Today
        </Button>
        <Button shape="circle" onClick={() => props.onNavigate('NEXT')}>
          <Icon type="right" />
        </Button>
      </div>
    </ToolbarWrapper>
  );
};

const DesktopToolbarView: React.FC<ToolbarProps> = props => {
  return (
    <ToolbarWrapper>
      <ButtonGroup>
        <Button onClick={() => props.onNavigate('PREV')}>
          <Icon type="left" />
          Back
        </Button>
        <Button onClick={() => props.onNavigate('TODAY')}>Today</Button>
        <Button onClick={() => props.onNavigate('NEXT')}>
          Next
          <Icon type="right" />
        </Button>
      </ButtonGroup>
      <h1>
        <Icon
          type="calendar"
          css={css`
            padding-right: 10px;
          `}
        />
        {props.label}
      </h1>
      <Radio.Group value={props.view}>
        {(props.views as View[])
          .filter(view => view !== 'agenda')
          .map((view, index) => (
            <Radio.Button
              value={view}
              key={index}
              onClick={() => props.onView(view)}
            >
              {view}
            </Radio.Button>
          ))}
      </Radio.Group>
    </ToolbarWrapper>
  );
};

const CalendarToolbar: React.FC<ToolbarProps> = props => {
  const isOnMobile = useMedia('(max-width: 800px)');
  return isOnMobile ? (
    <MobileToolbarView {...props} />
  ) : (
    <DesktopToolbarView {...props} />
  );
};

export default CalendarToolbar;
