import React from 'react';
import { Artist, Page } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import posed from 'react-pose';
import UserTopArtist from './UserTopArtist';

const TopArtistsGrid = styled(
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
  padding-top: 22px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(203px, 1fr));
  grid-gap: 12px;
  box-sizing: border-box;
  max-width: 1280px;
  margin: 0 auto;
`;

interface Props {
  artists: Page<Artist>;
}

const UserTopArtistsList: React.FC<Props> = ({ artists }) => {
  return (
    <TopArtistsGrid className="grid-wrapper">
      {artists.items.map(topArtist => (
        <UserTopArtist key={topArtist.id} artist={topArtist} />
      ))}
    </TopArtistsGrid>
  );
};

export default UserTopArtistsList;
