import React from 'react';
import { Row, Col, Typography, Divider, Affix } from 'antd';
import styled from '@emotion/styled';
import AntdSearch from '@components/AntdSearch';

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
          <Col lg={{ span: 16 }} sm={{ span: 24 }}>
            <AntdSearch
              placeholder="Search here..."
              onSearch={props.onSearch}
              onChange={props.onSearch}
            />
          </Col>
        </Row>
        <Divider style={{ margin: 0 }} />
      </TopMenuHeader>
    </Affix>
  );
}
