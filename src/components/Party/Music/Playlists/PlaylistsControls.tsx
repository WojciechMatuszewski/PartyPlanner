import ImportPlaylists from '../ImportPlaylists/ImportPlaylists';

import AntdSearch from '@components/AntdSearch';
import styled from '@emotion/styled';
import { Button, Icon, Dropdown, Menu } from 'antd';
import React from 'react';
import useMedia from '@hooks/useMedia';

const PlaylistControlsButtons = styled.div`
  button {
    margin-right: 12px;
  }
  display: flex;
  width: 100%;
`;

interface Props {
  onSearch: (query: string) => void;
  loading: boolean;
  onSelectPlaylistClick: VoidFunction;
  selectingPlaylists: boolean;
  children: React.ReactNode;
  hasAtLeastOnePlaylist: boolean;
}
export default function PlaylistsControls({
  onSearch,
  loading,
  onSelectPlaylistClick,
  selectingPlaylists,
  children,
  hasAtLeastOnePlaylist
}: Props) {
  const isOnMobile = useMedia('(max-width:800px)');

  if (isOnMobile)
    return (
      <PlaylistControlsButtons>
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu selectedKeys={selectingPlaylists ? ['1'] : []}>
              <Menu.Item
                key="1"
                onClick={onSelectPlaylistClick}
                disabled={!hasAtLeastOnePlaylist}
              >
                <span>
                  <Icon type="select" />
                  Select Playlists
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <ImportPlaylists isOnMobile={isOnMobile} />
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">{children}</Menu.Item>
            </Menu>
          }
        >
          <Button type="primary">
            Actions <Icon type="down" />
          </Button>
        </Dropdown>
        <AntdSearch
          loading={loading}
          debounceOnChange={true}
          onChange={onSearch}
          placeholder="Search ..."
        />
      </PlaylistControlsButtons>
    );

  return (
    <React.Fragment>
      <PlaylistControlsButtons>
        {children}
        <Button
          disabled={!hasAtLeastOnePlaylist}
          type={selectingPlaylists ? 'danger' : 'primary'}
          onClick={onSelectPlaylistClick}
        >
          <Icon type="select" />
          {!isOnMobile &&
            (selectingPlaylists ? 'Cancel selection' : 'Select playlists')}
        </Button>
        <ImportPlaylists isOnMobile={isOnMobile} />
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
