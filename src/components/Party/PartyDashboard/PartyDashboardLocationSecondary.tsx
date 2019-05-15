import React from 'react';
import { Typography } from 'antd';

const PartyDashboardLocationSecondary: React.FC = () => {
  return (
    <span style={{ margin: '0 auto', textAlign: 'center' }}>
      <Typography.Paragraph
        strong={true}
        style={{ marginBottom: 0, marginTop: 24 }}
      >
        Party Title
      </Typography.Paragraph>
      <Typography.Paragraph type="secondary">location</Typography.Paragraph>
    </span>
  );
};

export default PartyDashboardLocationSecondary;
