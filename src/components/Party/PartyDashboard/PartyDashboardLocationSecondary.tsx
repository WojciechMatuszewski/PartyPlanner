import React from 'react';
import { Typography } from 'antd';

interface Props {
  title: string;
  placeName: string;
}
const PartyDashboardLocationSecondary: React.FC<Props> = props => {
  return (
    <span style={{ margin: '0 auto', textAlign: 'center' }}>
      <Typography.Paragraph
        strong={true}
        style={{ marginBottom: 0, marginTop: 24 }}
      >
        {props.title}
      </Typography.Paragraph>
      <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
        {props.placeName}
      </Typography.Paragraph>
    </span>
  );
};

export default PartyDashboardLocationSecondary;
