import React from 'react';
import styled from '@emotion/styled';
import { Popover, Modal } from 'antd';
import useMedia from '@hooks/useMedia';
import { CalendarContext } from './UserCalendar';
import { PartiesQueryParties } from '@generated/graphql';
import CalendarEventPopoverContent from './CalendarEventPopoverContent';
import { callAll } from '@shared/functionUtils';

const ModalClickContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const CalendarEventPopover: React.FC<{
  children: React.ReactNode;
  onVisibilityChange?: (visible: boolean) => void;
  party: PartiesQueryParties;
}> = ({ children, onVisibilityChange, party }) => {
  const isOnMobile = useMedia('(max-width:800px)');
  const calendarContext = React.useContext(CalendarContext);

  const [popoverVisible, setPopoverVisible] = React.useState<boolean>(false);

  function handleOnPopoverClose() {
    setPopoverVisible(false);
  }

  function togglePopoverVisible(visibleState: boolean) {
    setPopoverVisible(visibleState);
    return null;
  }

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
      content={
        <CalendarEventPopoverContent
          onPopoverClose={handleOnPopoverClose}
          isInModal={false}
          party={party}
        />
      }
      trigger="click"
      onVisibleChange={callAll(togglePopoverVisible, onVisibilityChange)}
      visible={popoverVisible}
    >
      {children}
    </Popover>
  );
};

export default CalendarEventPopover;
