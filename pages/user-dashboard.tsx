import React from 'react';
import styled from '@emotion/styled';
import { PoseGroup } from 'react-pose';
import { withRouter, WithRouterProps } from 'next/router';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';
import UserDashboardTitle from '@components/User/UserDashboard/UserDashboardTitle';
import UserDashboardTile from '@components/User/UserDashboard/UserDashboardTile';
import { compose } from 'react-apollo';

const UserDashboardWrapper = styled.div`
  padding: 20px;
  width: 100%;
  min-height: calc(100vh - 66px);
  ${FlexBoxFullCenteredStyles};
  @media screen and (max-width: 780px) {
    padding: 0;
    padding-bottom: 12px;
  }
  @media screen and (max-width: 1050px) {
    display: block;
  }
`;

const UserDashboardWrapperInner = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
`;

const UserDashboardGrid = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(1, minmax(250px, 1fr));
  grid-gap: 12px;
  border-right: 2px dashed #d9d9d9;
  padding-right: 50px;

  @media screen and (max-width: 1050px) {
    border-right: 0;
    padding-right: 0;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
    width: 100%;
  }
`;

const GridTitleWrapper = styled.div`
  width: 500px;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;

const DashboardImageWrapper = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  ${FlexBoxFullCenteredStyles};
  padding-left: 100px;
  align-self: center;

  @media screen and (max-width: 1440px) {
    img,
    svg {
      width: 100%;
    }
    padding-left: 50px;
  }
  @media screen and (min-width: 1441px) {
    img,
    svg {
      width: 800px;
    }
  }

  @media screen and (max-width: 1200px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const UserDashboard: React.FC<WithRouterProps> = ({ router }) => {
  return (
    <UserDashboardWrapper>
      <UserDashboardWrapperInner>
        <GridTitleWrapper>
          <UserDashboardTitle />
          <UserDashboardGrid>
            <PoseGroup>
              <UserDashboardTile
                key={1}
                index={1}
                onClick={() =>
                  router && router.push('/party-parties', '/party/parties')
                }
              >
                <UserDashboardTile.Title iconType="experiment" text="Parties" />
                <UserDashboardTile.Text text="Here you can browse parties you are organizing or taking part of" />
              </UserDashboardTile>
              <UserDashboardTile
                index={2}
                key={2}
                onClick={() =>
                  router && router.push('/party-chats', '/party/chats')
                }
              >
                <UserDashboardTile.Title iconType="message" text="Chats" />
                <UserDashboardTile.Text text="Here you can catch up with your friends about the party you all waiting for" />
              </UserDashboardTile>
              <UserDashboardTile
                index={3}
                key={3}
                onClick={() =>
                  router && router.push('/user-profile', '/user/profile')
                }
              >
                <UserDashboardTile.Title iconType="user" text="Profile" />
                <UserDashboardTile.Text text="Here you can edit your profile, make changes to your bio, edit avatars" />
              </UserDashboardTile>
              <UserDashboardTile
                index={4}
                key={4}
                onClick={() =>
                  router && router.push('/user-calendar', '/user/calendar')
                }
              >
                <UserDashboardTile.Title iconType="calendar" text="Calendar" />
                <UserDashboardTile.Text text="Here you can make plans, create new parties" />
              </UserDashboardTile>
            </PoseGroup>
          </UserDashboardGrid>
        </GridTitleWrapper>
        <DashboardImageWrapper>
          <img src="../static/lost.svg" />
        </DashboardImageWrapper>
      </UserDashboardWrapperInner>
    </UserDashboardWrapper>
  );
};

export default compose(
  withApolloAuth({ userHasToBe: 'authenticated' }),
  withRouter
)(UserDashboard);
