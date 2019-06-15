import React from 'react';
import UserCalendar from '@components/User/UserCalendar/UserCalendar';
import styled from '@emotion/styled';
import {
  withApolloAuth,
  WithApolloAuthInjectedProps
} from '@apolloSetup/withApolloAuth';
import { Button, Modal } from 'antd';
import css from '@emotion/css';
import { compose } from 'react-apollo';
import { withRouter, WithRouterProps } from 'next/router';

const CalendarPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 66px);
  position: relative;
`;

const CreatePartyButtonStyles = css`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const Calendar: React.FC<WithApolloAuthInjectedProps & WithRouterProps> = ({
  me,
  router
}) => {
  return (
    <CalendarPageWrapper>
      <UserCalendar userId={me.id} />
      <Button
        shape="circle"
        type="primary"
        icon="plus"
        size="large"
        onClick={handleOnCreatePartyButtonClick}
        css={[CreatePartyButtonStyles]}
      />
    </CalendarPageWrapper>
  );

  function handleOnCreatePartyButtonClick() {
    Modal.confirm({
      title: 'Do you wish to create new party?',
      okText: 'Yes',
      centered: true,
      onOk: handleOnCreateConfirm
    });
  }

  function handleOnCreateConfirm() {
    router && router.push('/party/create');
  }
};

export default compose(
  withApolloAuth({ userHasToBe: 'authenticated' }),
  withRouter
)(Calendar);
