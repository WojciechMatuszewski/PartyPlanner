import React from 'react';
import { Button, Icon } from 'antd';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-around;
`;
const PartyDashboardTopMenu: React.FC = () => {
  const isOnMobile = useMedia('(max-width:680px)');

  return (
    <Wrapper>
      <InnerWrapper className="dashboard-content-item ">
        <Button.Group>
          <Button type="primary">
            {!isOnMobile ? (
              'Invite your friends'
            ) : (
              <Icon type="usergroup-add" />
            )}
          </Button>
          <Button icon="paper-clip">
            {!isOnMobile ? 'Copy invitation link' : 'Invitation link'}
          </Button>
        </Button.Group>
        <Button type="dashed" style={{ marginLeft: 'auto' }}>
          Edit
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
};

export default PartyDashboardTopMenu;
