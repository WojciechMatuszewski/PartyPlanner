import React from 'react';
import styled from '@emotion/styled';
import { Menu, Icon } from 'antd';
import { css } from '@emotion/core';
import {
  FlexBoxFullCenteredStyles,
  FlexBoxVerticallyCenteredStyles
} from '@shared/styles';

const DashboardBannerImage = styled.div`
  width: 100%;
  max-height: 312px;
  background: rgba(255, 255, 255, 0.5);
  flex: 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  ${FlexBoxFullCenteredStyles};
  position: relative;
  img {
    max-height: 312px;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 680px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const DashboardWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  height: 360px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
`;

const DashboardBannerName = styled.div`
  position: absolute;
  left: 136px;
  bottom: 60px;
  h1 {
    margin-bottom: 0;
  }

  @media screen and (max-width: 680px) {
    position: relative;
    display: block;
    left: 0;
    bottom: 0;
    h1 {
      display: flex;
      flex-direction: column;
      font-size: 18px;
    }
  }
`;

const ChangeBannerPhotoButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;
  @media screen and (max-width: 680px) {
    right: 10px;
  }
`;

const ChangeBannerPhotoButton = styled.button`
  background: rgba(0, 0, 0, 0.4);
  color: white;
  text-align: center;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.8);
  }

  @media screen and (max-width: 680px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

const DashboardBannerMenuStyles = css`
  padding-left: 136px;

  @media screen and (max-width: 680px) {
    padding-left: 0;
  }
`;

const UserImageWrapper = styled.div`
  position: absolute;
  width: 96px;
  height: 96px;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  bottom: 20px;
  left: 20px;
  border: 2px solid #1890ff;
  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (max-width: 680px) {
    position: relative;
    display: block;
    left: 0;
    bottom: 0;
    width: 48px;
    height: 48px;
  }
`;

const UserNameAvatarWrapper = styled.div`
  @media screen and (max-width: 680px) {
    ${FlexBoxVerticallyCenteredStyles}
    padding:10px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    justify-content: space-evenly;
    background: rgba(255, 255, 255, 0.5);
  }
`;

const DashboardBanner: React.FC = () => {
  return (
    <DashboardWrapper>
      <DashboardBannerImage>
        <img src="../static/security.svg" />
        <ChangeBannerPhotoButtonWrapper>
          <ChangeBannerPhotoButton>
            <Icon type="setting" style={{ marginRight: 5 }} />
            Edit Cover
          </ChangeBannerPhotoButton>
        </ChangeBannerPhotoButtonWrapper>
      </DashboardBannerImage>
      <UserNameAvatarWrapper>
        <UserImageWrapper>
          <img src="../static/person.png" />
        </UserImageWrapper>
        <DashboardBannerName>
          <h1>Wojciech Matuszewski</h1>
        </DashboardBannerName>
      </UserNameAvatarWrapper>
      <Menu css={DashboardBannerMenuStyles} mode="horizontal">
        <Menu.Item>Info</Menu.Item>
        <Menu.Item>Friends</Menu.Item>
        <Menu.Item>Parties</Menu.Item>
      </Menu>
    </DashboardWrapper>
  );
};

export default DashboardBanner;
