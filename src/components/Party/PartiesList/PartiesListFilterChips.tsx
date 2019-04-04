import React from 'react';
import styled from '@emotion/styled';
import { Tag } from 'antd';
import {
  PartiesListFilters,
  PartiesListFilterActions
} from './PartiesListReducer';
import { PartiesListContext } from './PartiesList';

const FilterChipsWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px;
  @media screen and (max-width: 1120px) {
    width: 100%;
  }

  h4 {
    margin-bottom: 0;
  }
`;

const FilterTagsWrapper = styled.div`
  width: 100%;
`;
interface Props {
  filters: PartiesListFilters;
  shouldNotifyOnRemoved: boolean;
  onFilterRemoved: VoidFunction;
}
const PartiesListFilterChips: React.FC<Props> = ({
  filters,
  onFilterRemoved,
  shouldNotifyOnRemoved
}) => {
  const { dispatch } = React.useContext(PartiesListContext);

  const isFirstRun = React.useRef<boolean>(true);

  React.useEffect(() => {
    // prevent onFiltersRemoved being called on first render
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (shouldNotifyOnRemoved) onFilterRemoved();
  }, [filters, shouldNotifyOnRemoved]);

  function handleTagClose(filterKeyName: string) {
    dispatch(PartiesListFilterActions.removeFilter(filterKeyName));
  }

  return (
    <FilterChipsWrapper>
      <FilterTagsWrapper>
        {Object.entries(filters).map(([key, filter]) => (
          <Tag
            color="geekblue"
            closable={true}
            visible={true}
            key={filter.id}
            onClose={() => handleTagClose(key)}
          >
            {filter.displayText}
          </Tag>
        ))}
      </FilterTagsWrapper>
    </FilterChipsWrapper>
  );
};

export default React.memo(PartiesListFilterChips);
