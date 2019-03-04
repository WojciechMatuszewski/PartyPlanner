import React from 'react';
import * as BigCalendarStyles from 'react-big-calendar/lib/css/react-big-calendar.css';
import { css } from '@emotion/core';
import moment from 'moment';
import BigCalendar, { View } from 'react-big-calendar';
import CalendarToolbar from './CalendarToolbar';
import CalendarEventWrapper from './CalendarEventWrapper';
import useMedia from '../../hooks/useMedia';

export interface CalendarEvent {
  id: number;
  title: string;
  allDay?: boolean;
  start: Date;
  end: Date;
}

const events: CalendarEvent[] = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1)
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10)
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0)
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0)
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0)
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13)
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0)
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0)
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0)
  },
  {
    id: 22,
    title: 'sds',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 16, 0, 0, 0)
  },
  {
    id: 22,
    title: 'ala ma psa',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 16, 0, 0, 0)
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0)
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0)
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0)
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0)
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0)
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2019, 3, 3, 8, 0, 0),
    end: new Date(2019, 3, 3, 2, 0, 0)
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3))
  }
];

const localizer = BigCalendar.momentLocalizer(moment);

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
        height: 100vh;

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
        .rbc-time-content {
          padding-right: ${scrollXOffset}px;
          box-sizing: content-box;
        }
      `}
      localizer={localizer}
      events={events}
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
