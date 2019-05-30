import React from 'react';
import { ToolbarProps, View } from 'react-big-calendar';
import { Button, Icon, DatePicker } from 'antd';
import styled from '@emotion/styled';
import ButtonGroup from 'antd/lib/button/button-group';
import css from '@emotion/css';
import { Radio } from 'antd';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import useMedia from '@hooks/useMedia';
import moment from 'moment';
import { CalendarContext } from './UserCalendar';

const ToolbarWrapper = styled.div<{ controlled?: boolean }>`
  ${FlexBoxVerticallyCenteredStyles};
  width: 100%;
  justify-content: space-between;
  padding: ${(props: { controlled?: boolean }) =>
    props.controlled ? '10px 0' : '10px'};
  h2 {
    margin: 0;
    @media screen and (max-width: 800px) {
      padding-right: 5px;
    }
  }
`;

const DatePickerStyles = css`
  position: relative;
  & input {
    border-radius: 0;
  }
  outline: 0;
  &:hover {
    z-index: 2;
  }
`;

const MobileToolbarView: React.FC<ToolbarProps> = props => {
  const { controlled } = React.useContext(CalendarContext);

  return (
    <ToolbarWrapper controlled={controlled}>
      <DatePicker
        onChange={momentDate => props.onNavigate('DATE', momentDate.toDate())}
        value={moment(props.date)}
        defaultValue={moment(props.date)}
        css={[DatePickerStyles]}
        allowClear={false}
      />
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
      <ButtonGroup style={{ display: 'flex' }}>
        <Button onClick={() => props.onNavigate('PREV')}>
          <Icon type="left" />
          Back
        </Button>
        <Button onClick={() => props.onNavigate('TODAY')}>Today</Button>
        <DatePicker
          onChange={momentDate => props.onNavigate('DATE', momentDate.toDate())}
          value={moment(props.date)}
          allowClear={false}
          defaultValue={moment(props.date)}
          css={[DatePickerStyles]}
        />
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
  const calendarContext = React.useContext(CalendarContext);

  return calendarContext.controlled || isOnMobile ? (
    <MobileToolbarView {...props} />
  ) : (
    <DesktopToolbarView {...props} />
  );
};

export default CalendarToolbar;
