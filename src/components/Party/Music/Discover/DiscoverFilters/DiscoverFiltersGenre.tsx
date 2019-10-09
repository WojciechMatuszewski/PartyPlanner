import React from 'react';
import { musicGenres } from '../../Genres';
import { Icon, Select, Typography } from 'antd';
import { unary } from 'ramda';
import { FilterValue, FiltersHeading, FiltersBody } from './shared';

type SelectGenresProps = {
  onChange: (genres: string) => void;
  currentGenre: FilterValue;
};
function DiscoverFiltersGenre(props: SelectGenresProps) {
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
            <Select.Option key={`${musicGenre.name}_${musicGenre.id}`}>
              {musicGenre.name}
            </Select.Option>
          ))}
        </Select>
      </FiltersBody>
    </React.Fragment>
  );
}

export default DiscoverFiltersGenre;
