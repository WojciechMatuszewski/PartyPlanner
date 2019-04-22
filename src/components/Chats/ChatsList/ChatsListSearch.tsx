import React from 'react';
import styled from '@emotion/styled';
import { Input, Icon } from 'antd';
import { InputProps } from 'antd/lib/input';
import useBetterTypeahead from '@hooks/useBetterTypeahead';
import { callAll } from '@shared/functionUtils';
import { compose } from 'ramda';

const SearchWrapper = styled.div`
  width: 100%;
  padding: 10px;
  input {
    background: #f0f2f5;
  }
`;

interface Props {
  inputProps?: InputProps;
}

const ChatsListSearch: React.FC<Props> = props => {
  return (
    <SearchWrapper>
      <Input
        type="ghost"
        placeholder="Search ..."
        allowClear={true}
        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
        {...props.inputProps}
      />
    </SearchWrapper>
  );

  function parseInputEvent(e: React.ChangeEvent<HTMLInputElement>) {
    return e.currentTarget.value;
  }
};

export default ChatsListSearch;
