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

const EventTileWrapper = styled(animated.div, {
  shouldForwardProp: prop => prop !== 'isDay'
})`
  background: rgba(124, 179, 66, 0.7) !important;
  border-left: 3px solid #7cb342 !important;
  border-right: 0 !important;
  border-top: 0 !important;
  border-bottom: 0 !important;
  border-radius: 0 !important;
  transition: transform 0.3s ease;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    &.clicked {
      z-index: 99;
      background: rgba(124, 179, 66, 1) !important;
      transform: scale(${({ isDay }: { isDay: boolean }) => (isDay ? 1 : 1.1)});
    }
  }
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
  position: relative;
  .ant-badge-status-processing {
    background: #7cb342;
  }
  @media screen and (min-width: 800px) {
    transition: transform 0.3s ease;
    &:hover {
      cursor: pointer;
      background: #eee;
    }
    &.clicked {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      border-radius: 2px;
      background: white;
    }
  }
`;

const MonthCalendarInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

const OtherCalendarEventWrapper: React.FC<
  EventWrapperProps<CalendarEvent> & {
    parsedStyles: React.CSSProperties;
    isDay: boolean;
  }
> = props => {
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  const [clicked, setClicked] = React.useState<boolean>(false);
  function toggleClicked() {
    setClicked(!clicked);
  }

  return (
    <EventTileWrapper
      isDay={props.isDay}
      className={`rbc-event ${clicked ? 'clicked' : ''}`}
      style={{ ...props.parsedStyles, ...animationProps }}
    >
      <CalendarEventPopover onVisibilityChange={toggleClicked}>
        <EventTileWrapperInner className="calendarPopupContainer">
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

  const [clicked, setClicked] = React.useState<boolean>(false);

  function toggleClicked() {
    setClicked(!clicked);
  }

  return (
    <CalendarEventPopover onVisibilityChange={toggleClicked}>
      <MonthCalendarWrapper className={clicked ? 'clicked' : ''}>
        <MonthCalendarInnerWrapper className="calendarPopupContainer">
          <Badge status={clicked ? 'processing' : 'success'} />
          <span css={[NotWrappingTextStyles]}>
            {props.event.title} {start} - {end}
          </span>
        </MonthCalendarInnerWrapper>
      </MonthCalendarWrapper>
    </CalendarEventPopover>
  );
};

class CalendarEventWrapper extends React.Component<
  EventWrapperProps<any> & { calendarView: string }
> {
  private isMonth() {
    return this.props.calendarView === 'month';
  }

  private parseSuppliedStyles() {
    return Object.entries(this.props.style || {}).reduce(
      (acc: { [key: string]: string }, [value, prop]) => {
        if (!value || !prop) return acc;
        acc[value === 'xOffset' ? 'left' : value] = `${prop}%`;
        return acc;
      },
      {}
    );
  }

  render() {
    const parsedStyles = this.parseSuppliedStyles();
    const { calendarView } = this.props;

    return this.isMonth() ? (
      <MonthCalendarEventWrapper {...this.props} />
    ) : (
      <OtherCalendarEventWrapper
        {...this.props}
        isDay={calendarView === 'day'}
        parsedStyles={parsedStyles}
      />
    );
  }
}

export default CalendarEventWrapper;
