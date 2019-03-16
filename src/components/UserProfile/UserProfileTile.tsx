import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';

interface Props {
  title: string;
  anchorLink: string;
}

const UserProfileTileWrapper = styled.div`
  width: 900px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  @media screen and (max-width: 680px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const UserProfileTileTitle = styled.div`
  width: 100%;
  background: white;
  border-bottom: 1px solid #d9d9d9;
  padding: 20px;
  h1 {
    margin-bottom: 0;
  }
`;

const UserProfileTileContent = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  height: 400px;
  background: rgba(255, 255, 255, 0.5);
`;

const UserProfileTile: React.FC<Props> = ({ title, anchorLink }) => {
  return (
    <UserProfileTileWrapper>
      <UserProfileTileTitle>
        <a href={anchorLink}>
          <Typography.Title type="secondary">{title}</Typography.Title>
        </a>
      </UserProfileTileTitle>
      <UserProfileTileContent>sosososo</UserProfileTileContent>
    </UserProfileTileWrapper>
  );
};

export default UserProfileTile;
