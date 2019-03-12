import React from 'react';
import { EventWrapperProps, Event } from 'react-big-calendar';
import MonthCalendarEventWrapper from './MonthCalendarEventWrapper';
import OtherCalendarEventWrapper from './OtherCalendarEventWrapper';
import { CalendarEvent } from './Events';

export interface CorrectedEventWrapperProps<T extends Event = Event>
  extends EventWrapperProps<T> {
  continuesPrior: boolean;
  continuesAfter: boolean;
}

class CalendarEventWrapper extends React.Component<
  CorrectedEventWrapperProps<CalendarEvent> & {
    calendarView: string;
  }
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
