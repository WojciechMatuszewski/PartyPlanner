import ImportPlaylists from '../ImportPlaylists/ImportPlaylists';

import AntdSearch from '@components/AntdSearch';
import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import styled from '@emotion/styled';
import { Button, Icon } from 'antd';
import React from 'react';

const PlaylistControlsButtons = styled.div`
  button {
    margin-right: 12px;
  }
  display: flex;
`;

interface Props {
  onSearch: (query: string) => void;
  loading: boolean;
  onSelectPlaylistClick: VoidFunction;
  selectingPlaylists: boolean;
}
export default function PlaylistsControls({
  onSearch,
  loading,
  onSelectPlaylistClick,
  selectingPlaylists
}: Props) {
  return (
    <React.Fragment>
      <PlaylistControlsButtons>
        <GreenSpotifyButton>Merge playlists</GreenSpotifyButton>
        <Button
          type={selectingPlaylists ? 'danger' : 'primary'}
          onClick={onSelectPlaylistClick}
        >
          <Icon type="select" />
          {selectingPlaylists ? 'Cancel selection' : 'Select playlists'}
        </Button>
        <ImportPlaylists />
      </PlaylistControlsButtons>
      <AntdSearch
        loading={loading}
        debounceOnChange={true}
        onChange={onSearch}
        placeholder="Search ..."
      />
    </React.Fragment>
  );
}
