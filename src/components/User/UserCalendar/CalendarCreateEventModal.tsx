import React from 'react';
import { Icon, Typography, Modal } from 'antd';
import { stringOrDate } from 'react-big-calendar';
import moment from 'moment';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import Router from 'next/router';

const CalendarCreateEventModalContent: React.FC<{
  start: stringOrDate;
  end: stringOrDate;
}> = ({ start, end }) => {
  function shouldDisplayTime() {
    return !moment(start).isSame(end);
  }

  return (
    <div>
      <div css={[FlexBoxVerticallyCenteredStyles]} style={{ marginBottom: 8 }}>
        <Icon type="calendar" style={{ fontSize: 20, marginRight: 12 }} />
        {moment(start).format('MMMM Do')} - {moment(end).format('MMM Do')}
      </div>

      {shouldDisplayTime() && (
        <div
          css={[FlexBoxVerticallyCenteredStyles]}
          style={{ marginBottom: 8 }}
        >
          <Icon type="clock-circle" style={{ fontSize: 20, marginRight: 12 }} />
          {moment(start).format('hh:mm')} - {moment(end).format('hh:mm')}
        </div>
      )}

      <Typography.Text type="warning">
        You will be able to change it later
      </Typography.Text>
    </div>
  );
};

export default (start: stringOrDate, end: stringOrDate) =>
  Modal.confirm({
    title: 'Do you wish to create new party?',
    content: <CalendarCreateEventModalContent start={start} end={end} />,
    okText: 'Proceed',
    onOk: () => Router.push('/create-party')
  });
