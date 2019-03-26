import React from 'react';
import * as BigCalendarStyles from 'react-big-calendar/lib/css/react-big-calendar.css';
import { css } from '@emotion/core';
import moment from 'moment';
import BigCalendar, { View } from 'react-big-calendar';
import CalendarToolbar from './CalendarToolbar';
import CalendarEventWrapper from './CalendarEventWrapper';
import useMedia from '@hooks/useMedia';
import CalendarCreateEventModal from './CalendarCreateEventModal';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { usePartiesQuery } from '@generated/graphql';
import { Spin } from 'antd';

const localizer = BigCalendar.momentLocalizer(moment);

const OverriddenCalendarStyles = css`
  width: 100%;
  height: auto;
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

const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  z-index: 15;
  ${FlexBoxFullCenteredStyles}
`;

interface CalendarContext extends ControlCalendarProps {
  onMonthEventClicked: VoidFunction;
}

export const CalendarContext = React.createContext<CalendarContext>({
  onMonthEventClicked: () => {},
  controlled: false,
  selectable: false,
  controlledView: undefined
});

interface Props extends ControlCalendarProps {
  userId: string;
}

const UserCalendar: React.FC<Props> = props => {
  const isOnMobile = useMedia('(max-width: 800px)');
  const [scrollXOffset, setScrollXOffset] = React.useState<number>(0);
  const canShowCreateModal = React.useRef<boolean>(true);
  const prevSelectedDate = React.useRef<Date>(new Date());

  const [calendarView, setCalendarView] = React.useState<View>(
    props.controlled
      ? (props.controlledView as any)
      : isOnMobile
      ? 'day'
      : 'month'
  );
  const [contextState] = React.useState<CalendarContext>({
    onMonthEventClicked: onMonthEventClickHandler,
    controlled: props.controlled,
    controlledView: props.controlledView,
    selectable: props.selectable
  });

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

  const {
    fetchMore,
    data: partiesData,
    loading: partiesLoading
  } = usePartiesQuery({
    variables: getUsePartiesVariables(new Date())
  });

  function getUsePartiesVariables(dateToGetVariablesFor: Date) {
    return {
      where: {
        start_gte: moment(dateToGetVariablesFor)
          .startOf('month')
          .subtract(7, 'days')
          .format(),
        end_lte: moment(dateToGetVariablesFor)
          .endOf('month')
          .add(7, 'days')
          .format(),
        members_some: {
          id: props.userId
        }
      }
    };
  }

  function handleDataRefetch(dateToFetchFor: Date) {
    fetchMore({
      variables: getUsePartiesVariables(dateToFetchFor),
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        const idsFromPrev = previousResult.parties.map(res => res!.id);
        const filteredFetchMore = fetchMoreResult.parties.filter(
          fetchMoreRes => !idsFromPrev.includes(fetchMoreRes!.id)
        );

        // TODO: find a better solution here

        return {
          parties: [...previousResult.parties, ...filteredFetchMore]
        };
      }
    });
  }

  function handleDateChange(date: Date) {
    const parsedPrevDate = moment(prevSelectedDate.current);
    const parsedCurrentDate = moment(date);

    if (
      parsedCurrentDate.isAfter(parsedPrevDate, 'month') ||
      parsedCurrentDate.isBefore(parsedPrevDate, 'month')
    ) {
      handleDataRefetch(date);
    }

    prevSelectedDate.current = date;
  }

  function onMonthEventClickHandler() {
    canShowCreateModal.current = false;
  }

  const parsedParties =
    partiesData && partiesData.parties
      ? partiesData.parties.map(party => ({
          ...party,
          start: new Date(party!.start),
          end: new Date(party!.end)
        }))
      : [];

  return (
    <CalendarContext.Provider value={contextState}>
      {partiesLoading && (
        <LoaderWrapper>
          <Spin size="large" />
        </LoaderWrapper>
      )}
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
        onNavigate={handleDateChange}
        events={parsedParties}
        defaultDate={new Date()}
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
          toolbar: CalendarToolbar,
          eventWrapper: (eventWrapperProps: any) => (
            <CalendarEventWrapper
              {...eventWrapperProps}
              calendarView={calendarView}
            />
          )
        }}
      />
    </CalendarContext.Provider>
  );
};

UserCalendar.defaultProps = {
  controlled: false,
  controlledView: 'week',
  selectable: false
} as Props;

export default React.memo(UserCalendar);
