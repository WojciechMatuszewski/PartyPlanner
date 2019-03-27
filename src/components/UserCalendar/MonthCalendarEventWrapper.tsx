import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import CalendarEventPopover from './CalendarEventPopover';
import styled from '@emotion/styled';
import { ColorTint, getCalendarColorTint } from './ColorTints';
import { Badge } from 'antd';
import { CorrectedEventWrapperProps } from './CalendarEventWrapper';
import {
  FlexBoxVerticallyCenteredStyles,
  NotWrappingTextStyles
} from '@shared/styles';
import { CalendarContext } from './UserCalendar';
import { PartiesQueryParties } from '@generated/graphql';

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

const MonthCalendarEventWrapper: React.FC<
  CorrectedEventWrapperProps<PartiesQueryParties>
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

  // handles the case when you click on tile and that tile spans on multiple rows
  // it makes it so that that tile on another row is also highlighted
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

  const calendarContext = React.useContext(CalendarContext);

  return (
    <CalendarEventPopover
      onVisibilityChange={toggleClicked}
      party={props.event}
    >
      <MonthCalendarWrapper
        onClick={calendarContext.onMonthEventClicked}
        colorTint={getCalendarColorTint(props.event.colorTint)}
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

export default MonthCalendarEventWrapper;
