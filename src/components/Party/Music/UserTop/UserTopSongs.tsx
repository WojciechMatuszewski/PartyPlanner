import React from 'react';
import axiosSpotifyInstance from '@axios/axiosSpotifyInstance';
import { Typography, Divider, Button, Icon } from 'antd';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

export declare module SpotifyTracksData {
  export interface ExternalUrls {
    spotify: string;
  }

  export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Image {
    height: number;
    url: string;
    width: number;
  }

  export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  }

  export interface ExternalUrls3 {
    spotify: string;
  }

  export interface Artist2 {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalIds {
    isrc: string;
  }

  export interface ExternalUrls4 {
    spotify: string;
  }

  export interface Item {
    album: Album;
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  }

  export interface ResponseData {
    items: Item[];
    total: number;
    limit: number;
    offset: number;
    previous: string;
    href: string;
    next: string;
  }
}

const UserTopArtistsWrapper = styled.div`
  width: 100%;
  .ant-divider {
    margin-top: 0;
    background: #f0f1f5;
  }
  padding: 24px;

  @media screen and (max-width: 400px) {
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopSongsGrid = styled(
  posed.div({
    loading: {
      opacity: 0
    },
    loaded: {
      opacity: 1,
      delayChildren: 500404040
    },
    initialPose: 'loading'
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
    .ant-typography {
      //   color: #f0f1f2;
    }
    .ant-typography-secondary {
      //   color: #bdbebf;
    }
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

const UserTopSongs: React.FC = () => {
  const [
    topTracks,
    setTopTracks
  ] = React.useState<SpotifyTracksData.ResponseData | null>(null);

  React.useEffect(() => {
    async function handleDataFetch() {
      const { data } = await fetchTopTracks();
      setTopTracks(data);
    }
    handleDataFetch();
  }, []);

  return (
    <UserTopArtistsWrapper>
      <TitleWrapper>
        <Typography.Title level={3}>Your top songs</Typography.Title>
        <Button shape="round">Show more</Button>
      </TitleWrapper>
      <TopSongsGrid pose={!topTracks ? 'loading' : 'loaded'}>
        {topTracks &&
          topTracks.items.map(topTrack => (
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
                  <p>4:30</p>
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
    </UserTopArtistsWrapper>
  );

  async function fetchTopTracks() {
    return await axiosSpotifyInstance.get('/me/top/tracks');
  }
};

export default UserTopSongs;
