import React from 'react';
import styled from '@emotion/styled';
import { Button, Typography } from 'antd';
import { useSpring, animated } from 'react-spring';
import { withRouter, WithRouterProps } from 'next/router';
import { CallToActionButtonStyles } from '@shared/styles';

const HomeHeroImage = styled.div`
  width: 100%;
  background: url('/static/people-banner.svg') no-repeat bottom;
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
    margin-top: 0 !important;
  }

  h1 {
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
    ${CallToActionButtonStyles};
  }
`;

const Home: React.FC<WithRouterProps> = ({ router }) => {
  const animationStyles = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <HomeHeroImage>
      <HomeHeroText style={animationStyles}>
        <Typography.Title>Simplify your party life</Typography.Title>
        <Typography.Title level={3}>
          Organize, make plans, schedule, invite others!
        </Typography.Title>
        <HomeHeroControlsWrapper>
          <Button
            onClick={() => router && router.push('/auth-register', '/register')}
          >
            Register now
          </Button>
          <Button
            onClick={() => router && router.push('/auth-login', '/login')}
          >
            Login now
          </Button>
        </HomeHeroControlsWrapper>
      </HomeHeroText>
    </HomeHeroImage>
  );
};

export default withRouter(Home);
