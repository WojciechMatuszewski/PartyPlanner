import React from 'react';
import styled from '@emotion/styled';
import { Tag } from 'antd';
import {
  PartiesListFilters,
  PartiesListFilterActions
} from './PartiesListReducer';

import css from '@emotion/css';
import {
  NotWrappingTextStyles,
  FlexBoxFullCenteredStyles
} from '@shared/styles';
import { PartiesListContext } from './PartiesList';

const FilterChipsWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px;
  width: 100%;

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
  position:relative;
  text-overflow: ellipsis;
  padding-right: 24px;
  .anticon-close {
    position: absolute;
    right: 0;
    height: 100%;
    width: 24px;

    ${FlexBoxFullCenteredStyles};
    top: 0;
    margin-left: 0;
  }
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
