import { ColorTint, getCalendarColorTint } from './ColorTints';

export interface CalendarEvent {
  id: number;
  title: string;
  allDay?: boolean;
  start: Date;
  end: Date;
  colorTint: ColorTint;
}

export const CalendarEvents: CalendarEvent[] = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
    colorTint: getCalendarColorTint()
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
    colorTint: getCalendarColorTint()
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
    colorTint: getCalendarColorTint()
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
    colorTint: getCalendarColorTint()
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    colorTint: getCalendarColorTint()
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 22,
    title: 'sds',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 16, 0, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 22,
    title: 'ala ma psa',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 16, 0, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2019, 3, 3, 8, 0, 0),
    end: new Date(2019, 3, 3, 2, 0, 0),
    colorTint: getCalendarColorTint()
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
    colorTint: getCalendarColorTint()
  }
];