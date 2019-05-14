import React from 'react';

import PartyMenu from '@components/Party/PartyMenu';
import { Typography, Row, Col } from 'antd';

const Party: React.FC = () => {
  return (
    <React.Fragment>
      <PartyMenu />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: 24
        }}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Typography.Title level={3}>Description</Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              possimus, doloremque laboriosam autem, quam aut architecto ex
              suscipit quasi odit dicta. Perspiciatis debitis quisquam
              voluptates, eius itaque repellendus exercitationem harum!
            </Typography.Paragraph>
          </Col>
          <Col span={12}>
            <Typography.Title level={3}>Date and time</Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            </Typography.Paragraph>
          </Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Party;
