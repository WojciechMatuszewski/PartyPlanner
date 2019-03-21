import React from 'react';
import UserCalendar from '@components/UserCalendar/UserCalendar';
import styled from '@emotion/styled';

const CalendarPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 66px);
`;

const Calendar: React.FC = () => {
  return (
    <CalendarPageWrapper>
      <UserCalendar />
    </CalendarPageWrapper>
  );
};

export default Calendar;
