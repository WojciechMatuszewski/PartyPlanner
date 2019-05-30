import React from 'react';
import UserCalendar from '@components/User/UserCalendar/UserCalendar';
import styled from '@emotion/styled';

import {
  withApolloAuth,
  WithApolloAuthInjectedProps
} from '@apolloSetup/withApolloAuth';

const CalendarPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 66px);
`;

const Calendar: React.FC<WithApolloAuthInjectedProps> = ({ me }) => {
  return (
    <CalendarPageWrapper>
      <UserCalendar userId={me.id} />
    </CalendarPageWrapper>
  );
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(Calendar);
