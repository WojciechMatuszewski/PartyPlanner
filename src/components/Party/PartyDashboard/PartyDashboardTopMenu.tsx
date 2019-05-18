import React from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';

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
  return (
    <Wrapper>
      <InnerWrapper className="dashboard-content-item ">
        <Button.Group>
          <Button type="primary">Invite your friends</Button>
          <Button icon="paper-clip">Copy invitation link</Button>
        </Button.Group>
        <Button type="dashed" style={{ marginLeft: 'auto' }}>
          Edit
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
};

export default PartyDashboardTopMenu;
