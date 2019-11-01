import ImportPlaylists from '../ImportPlaylists/ImportPlaylists';

import AntdSearch from '@components/AntdSearch';
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
  children: React.ReactNode;
}
export default function PlaylistsControls({
  onSearch,
  loading,
  onSelectPlaylistClick,
  selectingPlaylists,
  children
}: Props) {
  return (
    <React.Fragment>
      <PlaylistControlsButtons>
        {children}
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
