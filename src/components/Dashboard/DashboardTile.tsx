import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  anchorLink: string;
}

const DashboardTileWrapper = styled.div`
  width: 900px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const DashboardTileTitle = styled.div`
  width: 100%;
  background: white;
  border-bottom: 1px solid #d9d9d9;
  padding: 20px;
  h1 {
    margin-bottom: 0;
  }
`;

const DashboardTileContent = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  height: 400px;
  background: rgba(255, 255, 255, 0.5);
`;

const DashboardTile: React.FC<Props> = ({ title, anchorLink }) => {
  return (
    <DashboardTileWrapper>
      <DashboardTileTitle>
        <a href={anchorLink}>
          <h1>{title}</h1>
        </a>
      </DashboardTileTitle>
      <DashboardTileContent>sosososo</DashboardTileContent>
    </DashboardTileWrapper>
  );
};

export default DashboardTile;
