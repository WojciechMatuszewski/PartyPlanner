import React from 'react';
import { Row, Col, Typography, Input, Divider, Affix } from 'antd';
import styled from '@emotion/styled';

const TopMenuHeader = styled.header`
  background: white;
`;

interface Props {
  onSearch: (value: string) => void;
}

export default function PartyDashboardParticipantsTopMenu(props: Props) {
  return (
    <Affix style={{ background: 'white' }}>
      <TopMenuHeader>
        <Divider style={{ margin: 0 }} />
        <Row className="dashboard-content-item">
          <Col span={8}>
            <Typography.Title level={3} style={{ margin: 0 }}>
              Participants
            </Typography.Title>
          </Col>
          <Col span={16}>
            <Input.Search
              onSearch={props.onSearch}
              onChange={e => props.onSearch(e.currentTarget.value)}
              placeholder="Search here..."
            />
          </Col>
        </Row>
        <Divider style={{ margin: 0 }} />
      </TopMenuHeader>
    </Affix>
  );
}
