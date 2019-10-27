import AntdSearch from '@components/AntdSearch';
import React from 'react';

import ImportPlaylists from '../ImportPlaylists/ImportPlaylists';

interface Props {
  onSearch: (query: string) => void;
  loading: boolean;
}
export default function PlaylistsControls({ onSearch, loading }: Props) {
  return (
    <React.Fragment>
      <ImportPlaylists />
      <AntdSearch
        loading={loading}
        debounceOnChange={true}
        onChange={onSearch}
        placeholder="Search ..."
      />
    </React.Fragment>
  );
}
