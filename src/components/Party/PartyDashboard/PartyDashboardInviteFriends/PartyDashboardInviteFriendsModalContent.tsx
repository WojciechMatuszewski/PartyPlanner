import React from 'react';
import { Input, Button, Affix } from 'antd';
import {
  PaginateUsersQueryComponent,
  PaginateUsersQueryEdges
} from '@generated/graphql';
import styled from '@emotion/styled';
import css from '@emotion/css';
import { debounce } from 'lodash';
import { compose } from 'ramda';
import GraphqlInlineError from '@components/GraphqlInlineError';
import { handleRefetch } from '@shared/graphqlUtils';
import PartyDashboardInviteFriendsModalList from './PartyDashboardInviteFriendsModalList';

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

const PartyDashboardInviteFriendsModalContent: React.FC = () => {
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
      <PaginateUsersQueryComponent
        notifyOnNetworkStatusChange={true}
        variables={{
          where: {
            OR: [
              { firstName_contains: searchValue },
              { lastName_contains: searchValue }
            ]
          },
          first: 10
        }}
      >
        {({ data, loading, error, refetch }) => {
          if (error)
            return (
              <GraphqlInlineError style={{ padding: '24px 0px' }}>
                <Button
                  data-testid="chatsMenuRefetchButton"
                  onClick={async () => await handleRefetch(refetch)}
                >
                  Try again
                </Button>
              </GraphqlInlineError>
            );
          if (error || !data) return null;
          return (
            <PartyDashboardInviteFriendsModalList
              loading={loading}
              data={
                data && data.paginateUsers && data.paginateUsers.edges
                  ? (data.paginateUsers.edges as PaginateUsersQueryEdges[])
                  : []
              }
            />
          );
        }}
      </PaginateUsersQueryComponent>
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
