import React from 'react';
import * as BigCalendarStyles from 'react-big-calendar/lib/css/react-big-calendar.css';
import { css } from '@emotion/core';
import moment from 'moment';
import BigCalendar, { View } from 'react-big-calendar';
import CalendarToolbar from './CalendarToolbar';
import CalendarEventWrapper from './CalendarEventWrapper';
import { CalendarEvents } from './Events';
import useMedia from '@hooks/useMedia';
import CalendarCreateEventModal from './CalendarCreateEventModal';

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
interface ControlCalendarProps {
  controlled?: boolean;
  selectable?: boolean;
  controlledView?:
    | 'month'
    | 'week'
    | 'work_week'
    | 'day'
    | 'agenda'
    | undefined;
}

export const CalendarContext = React.createContext<
  { onMonthEventClicked: VoidFunction } & ControlCalendarProps
>({
  onMonthEventClicked: () => {},
  controlled: false,
  selectable: false,
  controlledView: undefined
});

const UserCalendar: React.FC<ControlCalendarProps> = props => {
  const isOnMobile = useMedia('(max-width: 800px)');
  const [scrollXOffset, setScrollXOffset] = React.useState<number>(0);

  const [calendarView, setCalendarView] = React.useState<View>(
    props.controlled
      ? (props.controlledView as any)
      : isOnMobile
      ? 'day'
      : 'month'
  );

  const canShowCreateModal = React.useRef<boolean>(true);

  function onMonthEventClickHandler() {
    canShowCreateModal.current = false;
  }

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
    <React.Fragment>
      <BigCalendar
        css={css`
          ${BigCalendarStyles};
          ${OverriddenCalendarStyles};
          .rbc-time-content {
            padding-right: ${scrollXOffset}px;
            box-sizing: content-box;
          }
        `}
        selectable={!props.controlled ? !isOnMobile : props.selectable}
        localizer={localizer}
        events={CalendarEvents}
        defaultDate={new Date(2015, 3, 12)}
        onView={setCalendarView}
        view={calendarView}
        step={15}
        timeslots={3}
        onSelectSlot={({ start, end }) => {
          // this is a hack!!!!
          if (!canShowCreateModal.current) {
            canShowCreateModal.current = true;
            return;
          }
          CalendarCreateEventModal(start, end);
        }}
        components={{
          toolbar: toolbarProps => (
            <CalendarContext.Provider
              value={{
                ...props,
                onMonthEventClicked: onMonthEventClickHandler
              }}
            >
              <CalendarToolbar {...toolbarProps} />
            </CalendarContext.Provider>
          ),
          // i cannot be bothered to fix someones types ;/
          eventWrapper: (eventWrapperProps: any) => (
            <CalendarContext.Provider
              value={{
                ...props,
                onMonthEventClicked: onMonthEventClickHandler
              }}
            >
              <CalendarEventWrapper
                {...eventWrapperProps}
                calendarView={calendarView}
              />
            </CalendarContext.Provider>
          )
        }}
      />
    </React.Fragment>
  );
};

UserCalendar.defaultProps = {
  controlled: false,
  controlledView: 'week',
  selectable: false
};

export default UserCalendar;
