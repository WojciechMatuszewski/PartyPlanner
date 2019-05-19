import React from 'react';
import { Button, Modal, Icon } from 'antd';
import PartyDashboardInviteFriendsModalContent from './PartyDashboardInviteFriendsModalContent';

interface Props {
  isOnMobile: boolean;
}

const PartyDashboardInviteFriends: React.FC<Props> = ({ isOnMobile }) => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Modal
        width={isOnMobile ? '100%' : undefined}
        centered={true}
        visible={modalVisible}
        title="Invite your friends!"
        maskClosable={false}
        onCancel={() => setModalVisible(false)}
        onOk={() => setModalVisible(false)}
        bodyStyle={{ padding: 0 }}
      >
        <PartyDashboardInviteFriendsModalContent />
      </Modal>

      <Button type="primary" onClick={() => setModalVisible(true)}>
        {!isOnMobile ? 'Invite your friends' : <Icon type="usergroup-add" />}
      </Button>
    </React.Fragment>
  );
};

export default PartyDashboardInviteFriends;
