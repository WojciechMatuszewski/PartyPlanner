import React from 'react';
import { Typography, Button } from 'antd';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { getCurrentUserTopTracks, Page, Track } from 'spotify-web-sdk';
import { UserTopWrapper } from './shared';
import UserTopHeading from './UserTopHeading';

const TopSongsGrid = styled(
  posed.div({
    loading: {
      opacity: 0
    },
    loaded: {
      opacity: 1
    }
  })
)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 20px;
  grid-column-gap: 12px;

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1fr);
  }
`;
const TopSongTile = styled(
  posed.div({
    hoverable: true
  })
)`
  display: flex;
  position: relative;
  height: 64px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: #e6f7ff;
  }
`;

const SongTileImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0;
  width: 72px;
  height: 72px;
  top: 50%;
  transform: translateY(-50%);
  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const SongTileInfoWrapper = styled.div`
  padding-left: calc(72px + 8px);

  max-width: 100%;
  .ant-typography {
    margin-bottom: 0;
  }
  p {
    max-width: 100%;
    margin-bottom: 0;
  }
`;
const SongTileControlsWrapper = styled(
  posed.div({
    init: { opacity: 0 },
    hover: { opacity: 1 }
  })
)`
  ${FlexBoxFullCenteredStyles};
  padding-left: 12px;
  padding-right: 8px;
  margin-left: auto;
  flex-direction: column;
  button {
    width: 20px !important;
    height: 20px !important;
    .anticon {
      ${FlexBoxFullCenteredStyles};
    }
  }
  button:first-of-type {
    margin-bottom: 4px;
  }
`;

interface State {
  loading: boolean;
  data: Page<Track> | null;
}

interface Props {
  onResourceLoaded: () => void;
}

const UserTopSongs: React.FC<Props> = props => {
  const [state, setState] = React.useState<State>({
    loading: true,
    data: null
  });

  React.useEffect(() => {
    async function handleDataFetch() {
      const data = await getCurrentUserTopTracks();
      setState({ loading: false, data });
      props.onResourceLoaded();
    }
    handleDataFetch();
  }, []);

  if (state.loading || !state.data) return null;

  return (
    <UserTopWrapper>
      <UserTopHeading headingText="Your top songs" onMoreClick={() => {}} />
      <TopSongsGrid className="grid-wrapper">
        {state.data.items.map(topTrack => (
          <TopSongTile key={topTrack.id}>
            <SongTileImageWrapper>
              <img src={topTrack.album.images[1].url} />
            </SongTileImageWrapper>
            <SongTileInfoWrapper>
              <Typography.Paragraph ellipsis={true}>
                <p>{topTrack.name}</p>
              </Typography.Paragraph>
              <Typography.Paragraph type="secondary" ellipsis={true}>
                <p>{topTrack.artists[0].name}</p>
              </Typography.Paragraph>
              <Typography.Paragraph type="secondary" ellipsis={true}>
                <p>{topTrack.length}</p>
              </Typography.Paragraph>
            </SongTileInfoWrapper>
            <SongTileControlsWrapper>
              <Button
                icon="caret-right"
                type="ghost"
                shape="circle-outline"
                size="small"
              />
              <Button
                icon="ellipsis"
                type="ghost"
                size="small"
                shape="circle-outline"
              />
            </SongTileControlsWrapper>
          </TopSongTile>
        ))}
      </TopSongsGrid>
    </UserTopWrapper>
  );
};

export default UserTopSongs;
