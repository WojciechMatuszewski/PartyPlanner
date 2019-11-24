import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';

const UserProfileTileWrapper = styled.div`
  width: 900px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin: 0 auto;
  margin-top: 24px;

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
  h2 {
    margin-bottom: 0;
  }

  @media screen and (max-width: 800px) {
    h2 {
      font-size: 20px;
    }
  }
`;

const UserProfileTileContent = styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  background: white;
`;

interface Props {
  title: string;
  children: React.ReactNode;
}
const UserProfileTile: React.FC<Props> = ({ title, children }) => {
  return (
    <UserProfileTileWrapper>
      <UserProfileTileTitle>
        <Typography.Title level={2}>{title}</Typography.Title>
      </UserProfileTileTitle>
      <UserProfileTileContent>{children}</UserProfileTileContent>
    </UserProfileTileWrapper>
  );
};

export default UserProfileTile;
