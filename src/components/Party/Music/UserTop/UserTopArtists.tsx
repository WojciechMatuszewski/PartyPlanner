import React from 'react';
import {
  UserTopWrapper,
  UserTopTitleWrapper,
  UserTopTitleInnerWrapper
} from './shared';
import { Typography, Button, Spin, Icon, Divider, Affix } from 'antd';
import { Artist, getCurrentUserTopArtists, Page } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import UserTopHeading from './UserTopHeading';

interface State {
  loading: boolean;
  data: Page<Artist> | null;
}

const ArtistsGridWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(203px, 1fr));
  grid-gap: 12px;
  box-sizing: border-box;
`;

const TopArtistImageWrapper = styled(
  posed.div({
    hoverable: true
  })
)`
  position: relative;
  overflow: hidden;
  width: 203px;
  height: 203px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const ArtistImageOverlay = styled(
  posed.div({
    init: {
      applyAtEnd: { visibility: 'none' },
      opacity: 0
    },
    hover: {
      applyAtStart: { visibility: 'visible' },
      opacity: 1
    }
  })
)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  ${FlexBoxFullCenteredStyles};
  button {
    &:hover {
      transform: scale(1.3);
    }
    &:hover,
    &:active {
      color: white;
      border-color: white;
    }
    color: #d9d9d9;
  }
`;

const TopArtistTileWrapper = styled.div`
  position: relative;
  width: 203px;
  .ant-typography {
    margin-bottom: 0;
  }
`;

const TopArtistNameWrapper = styled.div`
  width: 100%;
  padding: 12px;
  text-align: center;
`;

const UserTopArtists: React.FC = () => {
  const [state, setState] = React.useState<State>({
    loading: true,
    data: null
  });

  const [headingFixed, setHeadingFixed] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function handleDataFetch() {
      const data = await getCurrentUserTopArtists();
      setState({ loading: false, data });
    }
    handleDataFetch();
  }, []);

  if (state.loading || !state.data) return <Spin />;

  return (
    <UserTopWrapper>
      <UserTopHeading
        headingText="Your top artists"
        onMoreClick={() => console.log('artists clicked')}
      />
      <ArtistsGridWrapper className="grid-wrapper">
        {state.data.items.map(topArtist => (
          <TopArtistTileWrapper key={topArtist.id}>
            <TopArtistImageWrapper>
              <img src={topArtist.images[1].url} />
              <ArtistImageOverlay>
                <Button shape="circle-outline" type="ghost" size="large">
                  <Icon type="info" />
                </Button>
              </ArtistImageOverlay>
            </TopArtistImageWrapper>
            <TopArtistNameWrapper>
              <Typography.Paragraph style={{ color: 'black' }}>
                {topArtist.name}
              </Typography.Paragraph>
            </TopArtistNameWrapper>
          </TopArtistTileWrapper>
        ))}
      </ArtistsGridWrapper>
    </UserTopWrapper>
  );
};

export default UserTopArtists;
