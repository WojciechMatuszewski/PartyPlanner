import React from 'react';
import styled from '@emotion/styled';
import { Tag } from 'antd';
import { PartiesListFilters } from './PartiesListReducer';

const FilterChipsWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 0 12px;
  }
  margin-top: 30px;
  margin-bottom: 30px;
  h4 {
    margin-bottom: 0;
  }
`;

const FilterTagsWrapper = styled.div`
  width: 100%;
`;
interface Props {
  filters: PartiesListFilters;
}
const PartiesListFilterChips: React.FC<Props> = ({ filters }) => {
  return (
    <FilterChipsWrapper>
      <FilterTagsWrapper>
        {Object.entries(filters).map(([, filter], index) => (
          <Tag color="#1890ff" key={index}>
            {filter.displayText}
          </Tag>
        ))}
      </FilterTagsWrapper>
    </FilterChipsWrapper>
  );
};

export default PartiesListFilterChips;
