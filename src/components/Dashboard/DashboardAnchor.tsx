import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;
const DashboardAnchor: React.FC = () => {
  return (
    <Anchor
      style={{
        background: 'transparent',
        paddingLeft: 20
      }}
      offsetTop={10}
    >
      <Link href="#Your-Info" title="Your Info" />
      <Link href="#Your-Friends" title="Your Friends" />
    </Anchor>
  );
};

export default DashboardAnchor;
