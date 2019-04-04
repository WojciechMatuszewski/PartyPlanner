import React from 'react';
import styled from '@emotion/styled';
import { Tag } from 'antd';
import {
  PartiesListFilters,
  PartiesListFilterActions,
  PartiesListFilter
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

  React.useEffect(() => {
    if (shouldNotifyOnRemoved) onFilterRemoved();
  }, [filters, shouldNotifyOnRemoved]);

  function handleTagClose(filter: PartiesListFilter) {
    dispatch(PartiesListFilterActions.removeFilter(filter.variablesName));
  }

  return (
    <FilterChipsWrapper>
      <FilterTagsWrapper>
        {Object.entries(filters).map(([, filter]) => (
          <Tag
            color="geekblue"
            closable={true}
            visible={true}
            key={filter.id}
            onClose={() => handleTagClose(filter)}
          >
            {filter.displayText}
          </Tag>
        ))}
      </FilterTagsWrapper>
    </FilterChipsWrapper>
  );
};

export default PartiesListFilterChips;
