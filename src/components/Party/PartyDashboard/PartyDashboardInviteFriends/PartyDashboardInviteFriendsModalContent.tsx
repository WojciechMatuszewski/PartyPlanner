import React from 'react';
import { Input, Affix } from 'antd';

import styled from '@emotion/styled';
import css from '@emotion/css';
import { debounce } from 'lodash';
import { compose } from 'ramda';

const ModalContentWrapper = styled.div`
  .ant-list-item-meta-avatar {
    margin-bottom: auto;
    margin-top: auto;
  }
  .ant-list-item {
    height: 65px;
  }
`;

const SearchInputStyles = css`
  input {
    border: 0;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 0;
  }
  margin-bottom: 0;
`;

interface Props {
  children: (searchValue: string) => React.ReactNode;
}

const PartyDashboardInviteFriendsModalContent: React.FC<Props> = ({
  children
}) => {
  const [searchValue, setSearchValue] = React.useState<string>('');

  const debouncedSearchHandlerRef = React.useRef<typeof handleOnSearch>(
    debounce(handleOnSearch, 300)
  );

  const handleOnChange = compose(
    debouncedSearchHandlerRef.current,
    parseOnChangeEvent
  );

  return (
    <ModalContentWrapper>
      <Affix>
        <Input.Search
          onChange={handleOnChange}
          css={[SearchInputStyles]}
          placeholder="Search ..."
        />
      </Affix>
      {children(searchValue)}
    </ModalContentWrapper>
  );

  function handleOnSearch(value: string) {
    setSearchValue(value);
  }

  function parseOnChangeEvent(event: React.ChangeEvent<HTMLInputElement>) {
    return event.currentTarget.value;
  }
};

export default PartyDashboardInviteFriendsModalContent;
