import React from 'react';
import styled from '@emotion/styled';
import { Icon, Popover, Modal } from 'antd';
import { FlexBoxVerticallyCenteredStyles } from '../../shared/styles';
import { AvatarList } from 'ant-design-pro';
import useMedia from '../../hooks/useMedia';

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

const CalendarEventPopoverContent: React.FC<{ isInModal: boolean }> = ({
  isInModal
}) => {
  return (
    <CalendarEventPopoverWrapper isInModal={isInModal}>
      <CalendarEventPopoverToolbar>
        <Icon type="edit" />
        <Icon type="delete" />
        <Icon type="message" />
        {!isInModal && <Icon type="close" />}
      </CalendarEventPopoverToolbar>
      <h2>Some nice meetup</h2>
      <div className="item-wrapper">
        <Icon type="clock-circle" theme="filled" className="item-icon" />
        <span className="item-description">Oct. 23 from 1:00pm to 1:15pm</span>
      </div>
      <div className="item-wrapper">
        <Icon type="home" className="item-icon" />
        <span>Wojskowa 3d/11, Poznań</span>
      </div>
      <div className="item-wrapper">
        <Icon type="user" className="item-icon" />
        <span>Wojciech Matuszewski</span>
      </div>
      <div className="item-wrapper">
        <Icon type="usergroup-add" className="item-icon" />
        <span>8 invitee's</span>
      </div>
      <div className="item-wrapper">
        <div className="item-icon" />
        <AvatarList
          size="default"
          maxLength={5}
          excessItemsStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          <AvatarList.Item
            tips="Jake"
            src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
          />
          <AvatarList.Item
            tips="Andy"
            src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"
          />
          <AvatarList.Item
            tips="Niko"
            src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
          />
          <AvatarList.Item
            tips="Niko"
            src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
          />
          <AvatarList.Item
            tips="Niko"
            src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
          />
          <AvatarList.Item
            tips="Niko"
            src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"
          />
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
}> = ({ children, onVisibilityChange }) => {
  const isOnMobile = useMedia('(max-width:800px)');
  function handleMobileClick() {
    Modal.info({
      icon: <div />,
      centered: true,
      okText: 'Close',
      maskClosable: true,
      content: <CalendarEventPopoverContent isInModal={true} />
    });
  }

  return !isOnMobile ? (
    <Popover
      content={<CalendarEventPopoverContent isInModal={false} />}
      trigger="click"
      onVisibleChange={onVisibilityChange}
    >
      {children}
    </Popover>
  ) : (
    <ModalClickContainer onClick={handleMobileClick}>
      {children}
    </ModalClickContainer>
  );
};

export default CalendarEventPopover;
