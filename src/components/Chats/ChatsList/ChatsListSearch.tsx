import React from 'react';
import styled from '@emotion/styled';
import { Input, Icon } from 'antd';

const SearchWrapper = styled.div`
  width: 100%;
  padding: 10px;
  input {
    background: #f0f2f5;
  }
`;

const ChatsListSearch: React.FC = () => {
  return (
    <SearchWrapper>
      <Input
        type="ghost"
        placeholder="Search ..."
        allowClear={true}
        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
      />
    </SearchWrapper>
  );
};

export default ChatsListSearch;
