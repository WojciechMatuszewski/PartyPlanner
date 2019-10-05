import useBetterTypeahead from '@hooks/useBetterTypeahead';
import { Icon, Select, Spin, Typography } from 'antd';
import { compose } from 'lodash/fp';
import { map, pick, prop, unary } from 'ramda';
import React from 'react';
import { Artist, Page, searchArtists } from 'spotify-web-sdk';

import { FiltersBody, FiltersHeading, FilterValue } from './shared';

type SelectArtistProps = {
  onChange: (artist: FilterValue) => void;
  currentArtist: FilterValue;
};

type FetchedArtist = { id: string; name: string };

function transformResponse(response: Page<Artist>): FetchedArtist[] {
  return compose(
    map(pick(['id', 'name'])),
    prop('items')
  )(response);
}

function DiscoverFiltersArtist(props: SelectArtistProps) {
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
            <Select.Option key={`${artist.name}_${artist.id}`}>
              {artist.name}
            </Select.Option>
          ))}
        </Select>
      </FiltersBody>
    </React.Fragment>
  );
}

export default DiscoverFiltersArtist;
