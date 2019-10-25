import AntdSearch from '@components/AntdSearch';
import React from 'react';

interface Props {
  onSearch: (query: string) => void;
  loading: boolean;
}
export default function PlaylistsControls({ onSearch, loading }: Props) {
  return (
    <React.Fragment>
      {/* <Button style={{ marginRight: 12 }} type="primary">
        <Icon type="import" />
        Import playlist
      </Button> */}
      <AntdSearch
        loading={loading}
        debounceOnChange={true}
        onChange={onSearch}
        placeholder="Search ..."
      />
    </React.Fragment>
  );
}
