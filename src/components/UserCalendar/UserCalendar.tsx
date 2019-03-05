import React from 'react';
import * as BigCalendarStyles from 'react-big-calendar/lib/css/react-big-calendar.css';
import { css } from '@emotion/core';
import moment from 'moment';
import BigCalendar, { View } from 'react-big-calendar';
import CalendarToolbar from './CalendarToolbar';
import CalendarEventWrapper from './CalendarEventWrapper';
import useMedia from '../../hooks/useMedia';
import { CalendarEvents } from './Events';

const localizer = BigCalendar.momentLocalizer(moment);

const OverriddenCalendarStyles = css`
  height: calc(100vh - 64px);
  width: 100%;
  .rbc-date-cell a {
    font-size: 18px;
  }
  .rbc-show-more {
    padding-left: 10px;
    padding-top: 2px;
  }
  .rbc-time-view {
    overflow: hidden;
  }
  .rbc-row-segment {
    a {
      background: transparent;
    }
  }
`;

const UserCalendar: React.FC = () => {
  const isOnMobile = useMedia('(max-width: 800px)');
  const [scrollXOffset, setScrollXOffset] = React.useState<number>(0);
  const [calendarView, setCalendarView] = React.useState<View>(
    isOnMobile ? 'day' : 'month'
  );

  React.useEffect(() => {
    if (!isOnMobile || (calendarView === 'day' && isOnMobile)) return;
    setCalendarView('day');
  }, [isOnMobile]);

  React.useEffect(() => {
    if (calendarView === 'month' || document == undefined) return;
    const element = document.getElementsByClassName('rbc-time-content')[0];
    const offsetToSet =
      (element as HTMLDivElement).offsetWidth - element.clientWidth;
    setScrollXOffset(offsetToSet);
  }, [calendarView]);

  return (
    <BigCalendar
      css={css`
        ${BigCalendarStyles};
        ${OverriddenCalendarStyles};
        .rbc-time-content {
          padding-right: ${scrollXOffset}px;
          box-sizing: content-box;
        }
      `}
      localizer={localizer}
      events={CalendarEvents}
      defaultDate={new Date(2015, 3, 12)}
      onView={setCalendarView}
      view={calendarView}
      step={15}
      timeslots={3}
      components={{
        toolbar: CalendarToolbar,
        // i cannot be bothered to fix someones types ;/
        eventWrapper: (props: any) => (
          <CalendarEventWrapper {...props} calendarView={calendarView} />
        )
      }}
    />
  );
};

export default UserCalendar;
