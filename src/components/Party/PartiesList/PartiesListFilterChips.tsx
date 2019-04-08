import React from 'react';
import styled from '@emotion/styled';
import { Tag } from 'antd';
import {
  PartiesListFilters,
  PartiesListFilterActions
} from './PartiesListReducer';
import { PartiesListContext } from './PartiesList';
import css from '@emotion/css';
import { NotWrappingTextStyles } from '@shared/styles';

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
  display: flex;
  flex-wrap: wrap;
`;
const TagStyles = css`
  margin-top: 8px;
  ${NotWrappingTextStyles}
  text-overflow:ellipsis;
`;

interface Props {
  filters: PartiesListFilters;
}
const PartiesListFilterChips: React.FC<Props> = ({ filters }) => {
  const { dispatch } = React.useContext(PartiesListContext);

  return (
    <FilterChipsWrapper>
      <FilterTagsWrapper>
        {Object.entries(filters).map(([key, filter]) => (
          <Tag
            css={[TagStyles]}
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

  function handleTagClose(filterKeyName: string) {
    dispatch(PartiesListFilterActions.removeFilter(filterKeyName));
  }
};

export default React.memo(PartiesListFilterChips);
