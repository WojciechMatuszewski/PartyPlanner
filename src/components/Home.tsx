import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { useSpring, animated } from 'react-spring';
import { withRouter, WithRouterProps } from 'next/router';

const HomeHeroImage = styled.div`
  width: 100%;
  background: url('../../static/people-banner.svg') no-repeat bottom;
  background-size: cover;
  background-size: 100%;
  position: relative;
  flex: 1;
`;

const HomeHeroText = styled(animated.div)`
  padding: 0 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  h3 {
    color: rgba(0, 0, 0, 0.45);
  }

  h1 {
    font-size: 32px;
    color: rgb(49, 70, 89);
    margin-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const HomeHeroControlsWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-evenly;
  .ant-btn {
    box-shadow: 0 8px 16px #0554b7;
    background: linear-gradient(to right, #05cbff, #1e5aff) !important;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    border: 0;
    border-radius: 21px;
    color: #fff;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 20px #0554b7;
    }
    &:active {
      transform: translateY(4px);
      box-shadow: 0 4px 8px #0554b7;
    }
  }
`;

const Home: React.FC<WithRouterProps> = ({ router }) => {
  const animationStyles = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <HomeHeroImage>
      <HomeHeroText style={animationStyles}>
        <h1>Simplify your party life</h1>
        <h3>Organize, make plans, schedule, invite others!</h3>
        <HomeHeroControlsWrapper>
          <Button onClick={() => router && router.push('/register')}>
            Register now
          </Button>
          <Button onClick={() => router && router.push('/login')}>
            Login now
          </Button>
        </HomeHeroControlsWrapper>
      </HomeHeroText>
    </HomeHeroImage>
  );
};

export default withRouter(Home);
