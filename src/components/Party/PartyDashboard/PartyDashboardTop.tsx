import React from 'react';
import { Row, Col, Typography } from 'antd';
import css from '@emotion/css';
import { PartiesQueryParties } from '@generated/graphql';

import moment from 'moment';

const RowStyles = css`
  height: 350px;
  border-bottom: 1px solid #e8e8e8;
  img {
    height: 100%;
    width: 100%;
    display: block;
    padding: 24px;
    background: rgba(24, 144, 255, 0.1);
  }
  @media screen and (max-width: 992px) {
    height: auto;
    img {
      height: 300px;
    }
  }
`;

const InfoTileStyles = css`
  background: white;
  border-left: 1px solid #e8e8e8;
  height: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h2 {
    margin-bottom: 0;
  }
  @media screen and (max-width: 992px) {
    flex-direction: row-reverse;
    align-items: center;
    .party-type {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

interface Props {
  party: PartiesQueryParties;
}

const PartyDashboardTop: React.FC<Props> = ({ party }) => {
  const [startMonth, startDay] = moment(party.start)
    .format('MMMM d')
    .split(' ');

  return (
    <Row css={[RowStyles]}>
      <Col lg={16} sm={24} style={{ height: '100%' }}>
        <img src="./static/having-fun.svg" />
      </Col>
      <Col lg={8} sm={24} css={[InfoTileStyles]}>
        <div>
          <Typography.Text strong={true} style={{ fontSize: 16 }}>
            {startMonth} {startDay}
          </Typography.Text>
        </div>
        <div>
          <Typography.Title level={2}>{party.title}</Typography.Title>
          <Typography.Paragraph>
            by {party.author.firstName} {party.author.lastName}
          </Typography.Paragraph>
        </div>
        <div className="party-type">
          <Typography.Text>Party is set to: </Typography.Text>
          <Typography.Text type="warning" strong={true}>
            {party.isPublic ? 'Public' : 'Private'}
          </Typography.Text>
        </div>
      </Col>
    </Row>
  );
};

export default PartyDashboardTop;
