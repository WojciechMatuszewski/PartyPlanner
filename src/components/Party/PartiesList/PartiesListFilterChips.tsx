import React from 'react';
import styled from '@emotion/styled';
import { Typography, Tag } from 'antd';

const FilterChipsWrapper = styled.div`
  max-width: 1100px;
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
  .ant-tag {
    margin-top: 12px;
  }
`;

const PartiesListFilterChips: React.FC = () => {
  return (
    <FilterChipsWrapper>
      <Typography.Title level={4}>You have 17 parties</Typography.Title>
      <FilterTagsWrapper>
        {Array.from({ length: 5 }).map((_, index) => (
          <Tag color="#108ee9" closable={true} key={index}>
            Some filter
          </Tag>
        ))}
      </FilterTagsWrapper>
    </FilterChipsWrapper>
  );
};

export default PartiesListFilterChips;
