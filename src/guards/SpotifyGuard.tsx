import React from 'react';
import useSpotifyWebSdk from '@hooks/useSpotifyWebSdk';
import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import { Typography } from 'antd';
import styled from '@emotion/styled';
import { FlexBoxHorizontallyCenteredStyles } from '@shared/styles';
import socialLoginPopup from '@shared/socialLoginPopup';
import GraphqlLoading from '@components/GraphqlLoading';

const GuardSectionWrapper = styled.section`
  padding: 12px;
  height: 100%;
  width: 100%;
  text-align: center;
  button {
    margin: 0 auto;
  }
  h3 {
    margin-bottom: 0;
  }
  flex-direction: column;
  ${FlexBoxHorizontallyCenteredStyles};
  img {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 12px;
    display: block;
  }
`;

export default function SpotifyGuard(props: { children: React.ReactNode }) {
  const {
    shouldAskForNewToken,
    initWithNewTokens,
    initializing
  } = useSpotifyWebSdk();

  if (initializing)
    return <GraphqlLoading loading={true} isLoadingInitially={true} />;

  if (shouldAskForNewToken)
    return <AskForNewSpotifyTokens onReAuthClick={handleReAuthClick} />;

  return <React.Fragment>{props.children}</React.Fragment>;

  async function handleReAuthClick() {
    const tokens = await socialLoginPopup<any>(
      `${process.env.NEXT_STATIC_ENDPOINT_URL}/auth/spotify/reauth`
    );
    initWithNewTokens(tokens.providerToken, tokens.providerRefreshToken);
  }
}

function AskForNewSpotifyTokens(props: { onReAuthClick: () => Promise<any> }) {
  return (
    <GuardSectionWrapper>
      <img src="/static/require-spotify-auth.svg" />
      <Typography.Title level={3}>Authorize us</Typography.Title>
      <Typography.Paragraph type="secondary">
        We need you to authorize us on Spotify to access this section
      </Typography.Paragraph>
      <GreenSpotifyButton size="large" onClick={props.onReAuthClick}>
        Authorize with Spotify
      </GreenSpotifyButton>
    </GuardSectionWrapper>
  );
}
