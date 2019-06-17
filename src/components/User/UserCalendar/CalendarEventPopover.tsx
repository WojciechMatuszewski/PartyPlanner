import React from 'react';
import styled from '@emotion/styled';
import { Popover, Modal, Button } from 'antd';
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

  return calendarContext.controlled || isOnMobile ? (
    <React.Fragment>
      <Modal
        className="user-calendar-modal"
        visible={popoverVisible}
        maskClosable={true}
        centered={true}
        closable={false}
        footer={<Button onClick={() => setPopoverVisible(false)}>Close</Button>}
      >
        <CalendarEventPopoverContent isInModal={true} party={party} />
      </Modal>
      <ModalClickContainer onClick={() => setPopoverVisible(true)}>
        {children}
      </ModalClickContainer>
    </React.Fragment>
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
