import React from 'react';
import { EventWrapperProps } from 'react-big-calendar';
import styled from '@emotion/styled';
import { Badge } from 'antd';
import { useSpring, animated } from 'react-spring';
import moment from 'moment';
import {
  FlexBoxVerticallyCenteredStyles,
  NotWrappingTextStyles
} from '../../shared/styles';
import CalendarEventPopover from './CalendarEventPopover';
import { CalendarEvent } from './UserCalendar';

const EventTileWrapper = styled(animated.div)`
  background: rgba(124, 179, 66, 0.7) !important;
  border-left: 3px solid #7cb342 !important;
  border-right: 0 !important;
  border-top: 0 !important;
  border-bottom: 0 !important;
  border-radius: 0 !important;
`;

const EventTileWrapperInner = styled.div`
  width: 100%;
  height: 100%;
  span.title {
    font-weight: bold;
  }
`;

const MonthCalendarWrapper = styled.div`
  ${FlexBoxVerticallyCenteredStyles};
  padding-left: 10px;
  overflow: hidden;
  .ant-badge-status-processing {
    background: #7cb342;
  }
  &:hover {
    cursor: pointer;
    background: #eee;
  }
`;

const MonthCalendarInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

const OtherCalendarEventWrapper: React.FC<
  EventWrapperProps<CalendarEvent> & { parsedStyles: React.CSSProperties }
> = props => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <EventTileWrapper
      className="rbc-event"
      style={{ ...props.parsedStyles, ...animationProps }}
    >
      <CalendarEventPopover>
        <EventTileWrapperInner
          className="calendarPopupContainer"
          onClick={() => null}
        >
          <span className="title">works</span>
          <p>Title</p>
        </EventTileWrapperInner>
      </CalendarEventPopover>
    </EventTileWrapper>
  );
};

const MonthCalendarEventWrapper: React.FC<
  EventWrapperProps<CalendarEvent>
> = props => {
  const start = moment(props.event.start).format('h:mma');
  const end = moment(props.event.end).format('h:mma');

  return (
    <MonthCalendarWrapper>
      <CalendarEventPopover>
        <MonthCalendarInnerWrapper className="calendarPopupContainer">
          <Badge status="processing" />
          <span css={[NotWrappingTextStyles]}>
            {props.event.title} {start} - {end}
          </span>
        </MonthCalendarInnerWrapper>
      </CalendarEventPopover>
    </MonthCalendarWrapper>
  );
};

class CalendarEventWrapper extends React.Component<
  EventWrapperProps<any> & { calendarView: string }
> {
  render() {
    const parsedStyles = Object.entries(this.props.style || {}).reduce(
      (acc: { [key: string]: string }, [value, prop]) => {
        if (!value || !prop) return acc;
        acc[value === 'xOffset' ? 'left' : value] = `${prop}%`;
        return acc;
      },
      {}
    );
    return this.props.calendarView === 'month' ? (
      <MonthCalendarEventWrapper {...this.props} />
    ) : (
      <OtherCalendarEventWrapper {...this.props} parsedStyles={parsedStyles} />
    );
  }
}

export default CalendarEventWrapper;
