import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import { Typography } from 'antd';
import UserAvatar from '../UserDefaultAvatar';

const UserProfileWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
`;

const UserProfileBannerName = styled.div`
  h1 {
    margin-bottom: 0;
  }
  margin-left: 24px;
  @media screen and (max-width: 680px) {
    position: relative;
    display: block;
    h1 {
      display: flex;
      flex-direction: column;
      font-size: 18px;
    }
  }
`;

const UserNameAvatarWrapper = styled.div`
  ${FlexBoxVerticallyCenteredStyles}
  justify-content: center;
  @media screen and (max-width: 680px) {
    padding: 10px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    justify-content: space-evenly;
    background: rgba(255, 255, 255, 0.5);
  }
`;

interface Props {
  firstName: string;
  lastName: string;
  avatar?: string | null;
}

function UserProfileBanner(props: Props) {
  return (
    <UserProfileWrapper>
      <UserNameAvatarWrapper>
        <UserAvatar userData={props} size={'large'} />
        <UserProfileBannerName>
          <Typography.Title level={1}>
            {props.firstName} {props.lastName}
          </Typography.Title>
        </UserProfileBannerName>
      </UserNameAvatarWrapper>
    </UserProfileWrapper>
  );
}

export default UserProfileBanner;
