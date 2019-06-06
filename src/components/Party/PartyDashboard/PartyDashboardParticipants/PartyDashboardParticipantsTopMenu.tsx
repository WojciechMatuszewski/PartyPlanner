import React from 'react';
import { Row, Col, Typography, Affix } from 'antd';
import styled from '@emotion/styled';
import AntdSearch from '@components/AntdSearch';

const TopMenuHeader = styled.header`
  background: white;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  height: 53px;
  .first-col {
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
`;

interface Props {
  onSearch: (value: string) => void;
}

export default function PartyDashboardParticipantsTopMenu(props: Props) {
  return (
    <Affix style={{ background: 'white' }}>
      <TopMenuHeader>
        <Row className="dashboard-content-item">
          <Col span={8} className="first-col">
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
      </TopMenuHeader>
    </Affix>
  );
}
