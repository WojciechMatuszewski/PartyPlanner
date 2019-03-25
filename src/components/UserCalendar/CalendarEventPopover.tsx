import React from 'react';
import styled from '@emotion/styled';
import { Icon, Popover, Modal } from 'antd';
import { AvatarList } from 'ant-design-pro';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import useMedia from '@hooks/useMedia';
import { CalendarContext } from './UserCalendar';
import { PartiesQueryParties } from '@generated/graphql';
import moment from 'moment';

const CalendarEventPopoverWrapper = styled.div`
  width: ${(props: { isInModal: boolean }) =>
    props.isInModal ? '100%' : '300px'};
  .title {
    margin: 0;
  }
  h2 {
    margin-bottom: 0;
  }
  .item-wrapper {
    ${FlexBoxVerticallyCenteredStyles};
    font-size: 16px;
    color: #747987;
    &:last-of-type {
      margin-top: 5px;
    }
    .item-icon {
      display: flex;
      align-items: center;
      align-self: flex-start;
      width: 25px;
      height: 30px;
    }
    span {
      flex: 1;
    }
    .antd-pro-avatar-list-avatarList {
      ul {
        padding: 0;
      }
    }
  }
`;

const ModalClickContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CalendarEventPopoverToolbar = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: flex-end;
  margin-bottom: 10px;
  .anticon {
    padding: 10px;
    font-size: 14px;
    background: #eee;
    margin: 0 5px;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
      background: rgb(238, 238, 238, 0.4);
    }
  }
`;

const CalendarEventPopoverContent: React.FC<{
  isInModal: boolean;
  party: PartiesQueryParties;
}> = ({ isInModal, party }) => {
  return (
    <CalendarEventPopoverWrapper isInModal={isInModal}>
      <CalendarEventPopoverToolbar>
        <Icon type="edit" />
        <Icon type="delete" />
        <Icon type="message" />
        {!isInModal && <Icon type="close" />}
      </CalendarEventPopoverToolbar>
      <h2>{party.title}</h2>
      <div className="item-wrapper">
        <Icon type="clock-circle" theme="filled" className="item-icon" />
        <span className="item-description">
          {moment(party.start).format('DD MMM HH:mm')} to{' '}
          {moment(party.end).format('DD MMM HH:mm')}
        </span>
      </div>
      <div className="item-wrapper">
        <Icon type="home" className="item-icon" />
        <span>{party.location.placeName}</span>
      </div>
      <div className="item-wrapper">
        <Icon type="user" className="item-icon" />
        <span>
          {party.author.firstName} {party.author.lastName}
        </span>
      </div>
      <div className="item-wrapper">
        <Icon type="usergroup-add" className="item-icon" />
        <span>{party!.members!.length} invitee's</span>
      </div>
      <div className="item-wrapper">
        <div className="item-icon" />
        <AvatarList
          size="default"
          maxLength={5}
          excessItemsStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          {party!.members!.map((partyMember, index) => (
            <AvatarList.Item
              key={index}
              tips={partyMember.firstName}
              src={
                partyMember.avatar ||
                'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'
              }
            />
          ))}
        </AvatarList>
      </div>
      <div className="item-wrapper">
        <div className="item-icon" />
        <a>More details</a>
      </div>
    </CalendarEventPopoverWrapper>
  );
};

const CalendarEventPopover: React.FC<{
  children: React.ReactNode;
  onVisibilityChange?: (visible: boolean) => void;
  party: PartiesQueryParties;
}> = ({ children, onVisibilityChange, party }) => {
  const isOnMobile = useMedia('(max-width:800px)');
  const calendarContext = React.useContext(CalendarContext);

  function handleMobileClick() {
    Modal.info({
      className: 'user-calendar-modal',
      icon: <div />,
      centered: true,
      okText: 'Close',
      maskClosable: true,
      content: <CalendarEventPopoverContent isInModal={true} party={party} />
    });
  }

  return calendarContext.controlled || isOnMobile ? (
    <ModalClickContainer onClick={handleMobileClick}>
      {children}
    </ModalClickContainer>
  ) : (
    <Popover
      content={<CalendarEventPopoverContent isInModal={false} party={party} />}
      trigger="click"
      onVisibleChange={onVisibilityChange}
    >
      {children}
    </Popover>
  );
};

export default CalendarEventPopover;
