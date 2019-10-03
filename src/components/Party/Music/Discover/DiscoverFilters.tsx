import React from 'react';
import { Button, Drawer, Typography, Select, Icon, Spin } from 'antd';
import styled from '@emotion/styled';
import { Colors } from '@shared/styles';
import { unary, compose, prop, pick, map } from 'ramda';
import useMedia from '@hooks/useMedia';
import useBetterTypeahead from '@hooks/useBetterTypeahead';
import { searchArtists, Page, Artist } from 'spotify-web-sdk';
import { musicGenres } from '../Genres';

const FiltersHeading = styled.div`
  h4 {
    margin-bottom: 0;
  }
  margin-bottom: 12px;
  .icon {
    margin-right: 6px;
    color: ${Colors.AntdBlue};
  }
`;

const DrawerButtons = styled.div`
  display: flex;
  button {
    flex: 1;
  }
  button:first-of-type {
    margin-right: 24px;
  }
`;

const FiltersBody = styled.div`
  margin-bottom: 24px;
`;

function DiscoverFilters() {
  const [genres, setGenres] = React.useState<string[]>([]);
  const [artists, setArtists] = React.useState<string[]>([]);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const isOnMobile = useMedia('(max-width:630px)');

  function clearButtonDisabled() {
    return genres.concat(artists).length == 0;
  }

  return (
    <React.Fragment>
      <Button onClick={() => setDrawerOpen(true)}>Filters</Button>
      <Drawer
        onClose={() => setDrawerOpen(false)}
        mask={true}
        maskClosable={true}
        closable={true}
        visible={drawerOpen}
        width={isOnMobile ? '100% ' : 500}
        title={
          <Typography.Title level={3} style={{ marginBottom: 0 }}>
            Filters
          </Typography.Title>
        }
      >
        <SelectGenres onChange={setGenres} />
        <SelectArtists onChange={setArtists} />
        <DrawerButtons>
          <Button type="primary">Save</Button>
          <Button type="danger" disabled={clearButtonDisabled()}>
            Clear all
          </Button>
        </DrawerButtons>
      </Drawer>
    </React.Fragment>
  );
}

type SelectGenresProps = {
  onChange: (genres: string[]) => void;
};
function SelectGenres({ onChange }: SelectGenresProps) {
  return (
    <React.Fragment>
      <FiltersHeading>
        <Typography.Title level={4}>
          <Icon type="customer-service" className="icon" />
          Genre
        </Typography.Title>
        <Typography.Text type="secondary">Choose a song genres</Typography.Text>
      </FiltersHeading>
      <FiltersBody>
        <Select
          onChange={unary(onChange)}
          mode="multiple"
          allowClear={true}
          style={{ width: '100%' }}
          placeholder="Search through genres"
        >
          {musicGenres.map(musicGenre => (
            <Select.Option key={musicGenre}>{musicGenre}</Select.Option>
          ))}
        </Select>
      </FiltersBody>
    </React.Fragment>
  );
}

type SelectArtistProps = {
  onChange: (artists: string[]) => void;
};
type FetchedArtist = { id: string; name: string };
function SelectArtists({ onChange }: SelectArtistProps) {
  const {
    onChange: onSearch,
    state: { loading, data }
  } = useBetterTypeahead<Page<Artist>, FetchedArtist[], string>({
    fetchFunction: searchArtists,
    responseTransformFunction: compose<Page<Artist>, FetchedArtist[]>(
      map(pick(['id', 'name'])) as any,
      prop('items') as any
    )
  });

  return (
    <React.Fragment>
      <FiltersHeading>
        <Typography.Title level={4}>
          <Icon type="audio" className="icon" />
          Artists
        </Typography.Title>

        <Typography.Text type="secondary">
          Pick a specific artists
        </Typography.Text>
      </FiltersHeading>
      <FiltersBody>
        <Select
          onChange={unary(onChange)}
          onSearch={onSearch}
          mode="multiple"
          allowClear={true}
          filterOption={false}
          notFoundContent={loading ? <Spin size="small" /> : null}
          placeholder="Search through artists"
          style={{ width: '100%' }}
        >
          {data.map(artist => (
            <Select.Option key={artist.id}>{artist.name}</Select.Option>
          ))}
        </Select>
      </FiltersBody>
    </React.Fragment>
  );
}

export default DiscoverFilters;
