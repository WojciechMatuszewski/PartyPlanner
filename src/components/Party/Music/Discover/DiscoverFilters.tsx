import React from 'react';
import { Button, Drawer, Typography, Select, Icon, Spin } from 'antd';
import styled from '@emotion/styled';
import { Colors } from '@shared/styles';
import { unary, compose, prop, pick, map, isNil } from 'ramda';
import useMedia from '@hooks/useMedia';
import useBetterTypeahead from '@hooks/useBetterTypeahead';
import { searchArtists, Page, Artist } from 'spotify-web-sdk';
import { musicGenres } from '../Genres';
import usePrevious from '@hooks/usePrevious';
import css from '@emotion/css';

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
  flex: 1;
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

const DrawerStyles = css`
  .ant-drawer-wrapper-body {
    display: flex;
    flex-direction: column;
  }
  .ant-drawer-body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  button {
    margin-top: auto;
  }
`;

type FilterKeys = 'genre' | 'artist';
type FilterValue = string | undefined;

export type Filters = Record<FilterKeys, FilterValue>;

type Props = {
  onFiltersChange: (filters: Filters) => void;
};
function DiscoverFilters(props: Props) {
  const [genre, setGenre] = React.useState<FilterValue>(undefined);
  const [artist, setArtist] = React.useState<FilterValue>(undefined);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const prevOpenState = usePrevious(drawerOpen);

  const isOnMobile = useMedia('(max-width:630px)');

  function notifyAboutFilters() {
    props.onFiltersChange({ genre, artist });
  }

  function clearButtonDisabled() {
    return [genre, artist].every(isNil);
  }

  function hasFiltersApplied() {
    return [genre, artist].some(Boolean);
  }

  function onClearFilters() {
    setGenre(undefined);
    setArtist(undefined);
    setDrawerOpen(false);
  }

  React.useEffect(() => {
    if (prevOpenState == true && drawerOpen == false) notifyAboutFilters();
  }, [drawerOpen]);

  return (
    <React.Fragment>
      <Button
        type={hasFiltersApplied() ? 'primary' : 'default'}
        style={{ marginLeft: 8 }}
        onClick={() => setDrawerOpen(true)}
      >
        <Icon type="filter" />
        Filters
      </Button>
      <Drawer
        css={DrawerStyles}
        wrapClassName="filters--wrapper"
        className="something"
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
        <SelectGenres onChange={setGenre} currentGenre={genre} />
        <SelectArtists onChange={setArtist} currentArtist={artist} />
        <DrawerButtons>
          <Button type="primary" onClick={() => setDrawerOpen(false)}>
            Save
          </Button>
          <Button
            type="danger"
            disabled={clearButtonDisabled()}
            onClick={onClearFilters}
          >
            Clear all
          </Button>
        </DrawerButtons>
      </Drawer>
    </React.Fragment>
  );
}

type SelectGenresProps = {
  onChange: (genres: string) => void;
  currentGenre: FilterValue;
};
function SelectGenres(props: SelectGenresProps) {
  return (
    <React.Fragment>
      <FiltersHeading>
        <Typography.Title level={4}>
          <Icon type="customer-service" className="icon" />
          Genre
        </Typography.Title>
        <Typography.Text type="secondary">Choose a song genre</Typography.Text>
      </FiltersHeading>
      <FiltersBody>
        <Select
          onChange={unary(props.onChange)}
          showSearch={true}
          value={props.currentGenre}
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
  onChange: (artists: string) => void;
  currentArtist: FilterValue;
};
type FetchedArtist = { id: string; name: string };
function SelectArtists(props: SelectArtistProps) {
  function transformResponse(response: Page<Artist>): FetchedArtist[] {
    return compose(
      map(pick(['id', 'name'])),
      prop('items')
    )(response);
  }

  const {
    onChange: onSearch,
    state: { loading, data }
  } = useBetterTypeahead<Page<Artist>, FetchedArtist[], string>({
    fetchFunction: searchArtists,
    responseTransformFunction: transformResponse
  });

  return (
    <React.Fragment>
      <FiltersHeading>
        <Typography.Title level={4}>
          <Icon type="audio" className="icon" />
          Artists
        </Typography.Title>

        <Typography.Text type="secondary">
          Pick a specific artist
        </Typography.Text>
      </FiltersHeading>
      <FiltersBody>
        <Select
          onChange={unary(props.onChange)}
          onSearch={onSearch}
          showSearch={true}
          value={props.currentArtist}
          allowClear={true}
          filterOption={false}
          notFoundContent={loading ? <Spin size="small" /> : null}
          placeholder="Search through artists"
          style={{ width: '100%' }}
        >
          {data.map(artist => (
            <Select.Option key={artist.id} value={artist.name}>
              {artist.name}
            </Select.Option>
          ))}
        </Select>
      </FiltersBody>
    </React.Fragment>
  );
}

export default DiscoverFilters;
