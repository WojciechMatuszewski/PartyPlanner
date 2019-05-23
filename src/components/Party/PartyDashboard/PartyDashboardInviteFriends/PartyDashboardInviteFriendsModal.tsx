import React from 'react';
import styled from '@emotion/styled';
import { Modal } from 'antd';

const ModalContentWrapper = styled.div`
  .ant-list-item-meta-avatar {
    margin-bottom: auto;
    margin-top: auto;
  }
  .ant-list-item {
    height: 65px;
  }
`;
interface Props {
  children: React.ReactNode;
  visible: boolean;
  isOnMobile: boolean;
  confirmLoading: boolean;
  onCancel: VoidFunction;
  onOk: VoidFunction;
}
const PartyDashboardInviteFriendsModal: React.FC<Props> = props => {
  return (
    <Modal
      width={props.isOnMobile ? '100%' : undefined}
      centered={true}
      visible={props.visible}
      title="Invite your friends!"
      maskClosable={false}
      confirmLoading={props.confirmLoading}
      onCancel={props.onCancel}
      onOk={props.onOk}
      bodyStyle={{ padding: 0 }}
    >
      <ModalContentWrapper>{props.children}</ModalContentWrapper>
    </Modal>
  );
};

export default PartyDashboardInviteFriendsModal;
