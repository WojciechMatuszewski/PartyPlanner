import React from 'react';
import { Row, Col, Typography } from 'antd';
import css from '@emotion/css';
import { PartiesQueryParties } from '@generated/graphql';
import moment from 'moment';

const InfoTileStyles = css`
  background: white;
  border-left: 1px solid #e8e8e8;
  height: 100%;
  padding: 24px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  h2 {
    margin-bottom: 0;
  }
  @media screen and (max-width: 992px) {
    flex-direction: row;
    align-items: center;
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
    .format('MMMM Do')
    .split(' ');

  return (
    <header
      css={css`
        display: flex;
        border-bottom: 1px solid #e8e8e8;
        .img-wrapper {
          height: 300px;
          width: 60%;
          padding: 12px;
          background: rgba(24, 144, 255, 0.1);
          img {
            display: block;
            max-height: 100%;
            width: auto;
            margin: 0 auto;
          }
        }

        @media screen and (max-width: 992px) {
          flex-direction: column;
          .img-wrapper {
            width: 100%;
          }
        }
      `}
    >
      <div className="img-wrapper">
        <img src="../static/having-fun.svg" />
      </div>
      <Row style={{ flex: 1 }}>
        <Col lg={8} sm={24} xs={24} css={[InfoTileStyles]}>
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
    </header>
    // <Row css={[RowStyles]}>

    // </Row>
  );
};

export default PartyDashboardTop;
