import AntdSearch from '@components/AntdSearch';
import React from 'react';
import { Button, Icon } from 'antd';

interface Props {
  onSearch: (query: string) => void;
  loading: boolean;
  onImportModalOpen: VoidFunction;
}
export default function PlaylistsControls({
  onSearch,
  loading,
  onImportModalOpen
}: Props) {
  return (
    <React.Fragment>
      <Button
        style={{ marginRight: 12 }}
        type="primary"
        onClick={onImportModalOpen}
      >
        <Icon type="import" />
        Import playlist
      </Button>
      <AntdSearch
        loading={loading}
        debounceOnChange={true}
        onChange={onSearch}
        placeholder="Search ..."
      />
    </React.Fragment>
  );
}
