import UserPeopleList from './UserPeopleList';

import AntdSearch from '@components/AntdSearch';
import GraphqlLoading from '@components/GraphqlLoading';
import { AffixedBarContainer } from '@components/Party/Music/shared/styles';
import ErrorSection from '@components/UI/ErrorSection';
import styled from '@emotion/styled';
import { useUser_PeopleConnection } from '@generated/graphql';
import {
  handleRefetch,
  hasGraphqlData,
  isLoadingError,
  isLoadingInitially,
  isLoadingMore
} from '@shared/graphqlUtils';
import { Affix, Button } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

interface Props {
  userId: string;
}

const PAGE_SIZE = 20;
const UserPeopleContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  flex: 1;
  width: 100%;

  padding: 12px;
`;
export const USER_PEOPLE_CONNECTION_QUERY = gql`
  query User_PeopleConnection(
    $where: UserWhereInput
    $orderBy: UserOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    usersConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          firstName
          lastName
          avatar
          createdAt
        }
      }
    }
  }
`;
export default function UserPeople({ userId }: Props) {
  const [searchQuery, setSearchQuery] = React.useState<string | undefined>(
    undefined
  );

  const {
    data,
    error,
    loading,
    networkStatus,
    refetch,
    fetchMore
  } = useUser_PeopleConnection({
    variables: {
      where: {
        id_not: userId,
        OR: [
          { firstName_contains: searchQuery },
          { lastName_contains: searchQuery }
        ]
      },
      first: PAGE_SIZE
    },
    notifyOnNetworkStatusChange: true
  });

  function handleOnLoadMore() {
    fetchMore({
      variables: {
        after: pageInfo.endCursor,
        first: PAGE_SIZE
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || fetchMoreResult.usersConnection == undefined)
          return prev;
        return {
          ...prev,
          usersConnection: {
            __typename: 'UserConnection',
            edges: [
              ...prev.usersConnection.edges,
              ...fetchMoreResult.usersConnection.edges
            ],
            pageInfo: fetchMoreResult.usersConnection.pageInfo
          }
        };
      }
    });
  }

  if (
    isLoadingInitially(networkStatus) ||
    !hasGraphqlData(data, ['usersConnection'])
  )
    return <GraphqlLoading loading={true} isLoadingInitially={true} />;

  if (error)
    return (
      <ErrorSection>
        <Button
          onClick={() => handleRefetch(refetch)}
          loading={isLoadingError(networkStatus)}
        >
          Try again
        </Button>
      </ErrorSection>
    );

  const {
    usersConnection: { edges, pageInfo }
  } = data;

  const canLoadMore = pageInfo.hasNextPage;

  return (
    <React.Fragment>
      <Affix>
        <AffixedBarContainer>
          <AntdSearch
            debounceOnChange={true}
            onChange={setSearchQuery}
            placeholder="Search for a user ..."
          />
        </AffixedBarContainer>
      </Affix>
      <UserPeopleContentWrapper>
        <UserPeopleList
          users={edges}
          onLoadMore={handleOnLoadMore}
          loading={loading}
          canLoadMore={canLoadMore}
          loadingMore={isLoadingMore(networkStatus)}
        />
      </UserPeopleContentWrapper>
    </React.Fragment>
  );
}
