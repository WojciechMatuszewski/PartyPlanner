import React from 'react';
import styled from '@emotion/styled';
import { Input, Icon } from 'antd';
import { InputProps } from 'antd/lib/input';
import { compose } from 'ramda';
import { debounce } from 'lodash';

const SearchWrapper = styled.div`
  width: 100%;
  padding: 10px;
  input {
    background: #f0f2f5;
  }
`;

interface Props {
  inputProps?: InputProps;
  onChange: (inputValue: string) => void;
}

const ChatsListSearch: React.FC<Props> = props => {
  const debouncedOnChangeRef = React.useRef<any>(debounce(props.onChange, 300));

  return (
    <SearchWrapper>
      <Input
        {...props.inputProps}
        data-testid="chatsMenuTypeahead"
        // TYPE GHOST PREVENT THE EVENT FROM FIRING (when testing), WTF :D
        placeholder="Search ..."
        allowClear={true}
        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
        onChange={compose(
          debouncedOnChangeRef.current,
          parseInputEvent
        )}
      />
    </SearchWrapper>
  );

  function parseInputEvent(e: React.ChangeEvent<HTMLInputElement>) {
    return e.currentTarget.value;
  }
};

export default ChatsListSearch;
