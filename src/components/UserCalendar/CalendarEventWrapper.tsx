import React from 'react';

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
import classNames from 'classnames';
import {
  EventWrapperProps as _EventWrapperProps,
  Event
} from 'react-big-calendar';
import { ColorTint } from './ColorTints';

interface EventWrapperProps<T extends Event = Event>
  extends _EventWrapperProps<T> {
  continuesPrior: boolean;
  continuesAfter: boolean;
}

interface EventTileWrapperProps {
  isDay: boolean;
  colorTint: ColorTint;
}

const EventTileWrapper = styled(animated.div, {
  shouldForwardProp: prop => prop !== 'isDay'
})`
  background: ${(props: EventTileWrapperProps) =>
    props.colorTint.weekTileColor} !important;
  border-left: 3px solid
    ${(props: EventTileWrapperProps) => props.colorTint.weekBorderColor} !important;
  border-right: 0 !important;
  border-top: 0 !important;
  border-bottom: 0 !important;
  border-radius: 0 !important;
  transition: transform 0.3s ease;
  box-sizing: border-box;
  @media screen and (min-width: 800px) {
    &.clicked {
      z-index: 99;
      background: ${(props: EventTileWrapperProps) =>
        props.colorTint.weekBorderColor} !important;
      transform: scale(
        ${({ isDay }: EventTileWrapperProps) => (isDay ? 1 : 1.1)}
      );
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
  background: ${(props: { longerThanOneDay: boolean; colorTint: ColorTint }) =>
    props.longerThanOneDay
      ? `${props.colorTint.spanningMoreThanOneDayColor}`
      : 'transparent'};
  .ant-badge-status-processing {
    background: ${(props: { colorTint: ColorTint }) =>
      props.colorTint.dotColor};
  }
  .ant-badge-status-success {
    background: ${(props: { colorTint: ColorTint }) =>
      props.colorTint.dotColor};
  }
  .ant-badge-status-processing::after {
    border: 1px solid
      ${(props: { colorTint: ColorTint }) => props.colorTint.dotColor};
  }
  @media screen and (min-width: 800px) {
    transition: transform 0.3s ease;
    &:hover,
    &.otherPartHovered {
      cursor: pointer;
      background: white;
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
  span {
    font-weight: bold;
  }
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
      colorTint={props.event.colorTint}
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
  function getCorrectClasses() {
    if (props.continuesPrior) {
      return {
        lookup: `${props.event.id}-continuesAfter`,
        self: `${props.event.id}-continuesPrior`
      };
    } else if (props.continuesAfter) {
      return {
        lookup: `${props.event.id}-continuesPrior`,
        self: `${props.event.id}-continuesAfter`
      };
    } else return null;
  }

  const spanningIds = getCorrectClasses();

  function checkAndReturnOtherEventPart() {
    if (!spanningIds) return null;
    const elem = document.getElementById(spanningIds.lookup);
    if (!elem) return null;
    return elem;
  }

  const start = moment(props.event.start);
  const end = moment(props.event.end);

  const isLongerThanOneDay = !end.isSame(start, 'day');
  const [clicked, setClicked] = React.useState<boolean>(false);

  const wrapperClasses = classNames({
    clicked: clicked
  });

  function toggleClicked() {
    if (spanningIds) {
      const elem = document.getElementById(spanningIds.lookup);
      if (elem && !clicked) {
        elem.classList.add('clicked');
      }
      if (elem && clicked) {
        elem.classList.remove('clicked');
      }
    }
    setClicked(!clicked);
  }

  function handleMouseEnter() {
    const elem = checkAndReturnOtherEventPart();
    if (!elem) return;
    elem.classList.add('otherPartHovered');
  }

  function handleMouseLeave() {
    const elem = checkAndReturnOtherEventPart();
    if (!elem) return;
    elem.classList.remove('otherPartHovered');
  }

  return (
    <CalendarEventPopover onVisibilityChange={toggleClicked}>
      <MonthCalendarWrapper
        colorTint={props.event.colorTint}
        longerThanOneDay={isLongerThanOneDay}
        className={wrapperClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id={`${spanningIds ? spanningIds.self : ''}`}
      >
        <MonthCalendarInnerWrapper>
          {!props.continuesPrior && (
            <Badge status={clicked ? 'processing' : 'success'} />
          )}
          <span css={[NotWrappingTextStyles]}>
            {props.event.title} {start.format('h:mma')} - {end.format('h:mma')}
          </span>
        </MonthCalendarInnerWrapper>
      </MonthCalendarWrapper>
    </CalendarEventPopover>
  );
};

class CalendarEventWrapper extends React.Component<
  EventWrapperProps<CalendarEvent> & { calendarView: string }
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
