import React from 'react';
import { debounce } from 'lodash';
import { compose } from 'ramda';
import { Affix, Input } from 'antd';
import css from '@emotion/css';

const SearchInputStyles = css`
  input {
    border: 0;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 0;
    padding-left: 24px;
    padding-right: 37px !important;
  }

  .ant-input-suffix {
    right: 21px;
  }

  margin-bottom: 0;
`;
interface Props {
  onSearchValueChange: (searchValue: string) => void;
}
const PartyDashboardInviteFriendsSearch: React.FC<Props> = props => {
  const debouncedSearchHandlerRef = React.useRef<Props['onSearchValueChange']>(
    debounce(props.onSearchValueChange, 300)
  );

  const handleOnChange = compose(
    debouncedSearchHandlerRef.current,
    parseOnChangeEvent
  );

  return (
    <Affix>
      <Input.Search
        onChange={handleOnChange}
        css={[SearchInputStyles]}
        placeholder="Search ..."
      />
    </Affix>
  );

  function parseOnChangeEvent(event: React.ChangeEvent<HTMLInputElement>) {
    return event.currentTarget.value;
  }
};

export default PartyDashboardInviteFriendsSearch;
