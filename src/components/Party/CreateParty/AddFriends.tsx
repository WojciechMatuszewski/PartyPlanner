import React from 'react';
import { connect, FormikContext } from 'formik';
import { CreatePartyForm } from '../CreateParty';
import {
  useMeQuery,
  PaginateUsersQueryEdges,
  PaginateUsersQueryPageInfo,
  PaginateUsersQueryDocument,
  PaginateUsersQueryQuery,
  Maybe
} from '@generated/graphql';
import { Spin, Form, Input, Button } from 'antd';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';

import AddFriendListItem from './AddFriendListItem';
import { useApolloClient } from 'react-apollo-hooks';
import { debounce } from 'lodash';
import AddFriendList from './AddFriendList';

const SpinnerContainer = styled.div`
  ${FlexBoxFullCenteredStyles};
  width: 100%;
`;

interface PaginationState {
  initialLoading: boolean;
  loadingMore: boolean;
  results: Maybe<PaginateUsersQueryEdges>[];
  paginationInfo: PaginateUsersQueryPageInfo;
  initiallyLoaded: boolean;
}

const initialPaginationState: PaginationState = {
  initialLoading: true,
  loadingMore: false,
  initiallyLoaded: false,
  results: [],
  paginationInfo: {
    hasNextPage: false,
    endCursor: null
  }
};

function constructPaginationQuery(
  userId: string,
  results: Maybe<PaginateUsersQueryEdges>[],
  searchValue: string | undefined
) {
  return {
    where: {
      id_not_in: [userId, ...results.map(result => result!.node.id)],
      friends_some: { id: userId },
      OR: [
        { firstName_contains: searchValue },
        { lastName_contains: searchValue }
      ]
    }
  };
}

const AddFriends: React.FC<{ formik: FormikContext<CreatePartyForm> }> = () => {
  const apolloClient = useApolloClient();
  const shouldUseGrid = useMedia('(min-width:992px)');
  const [invited, setInvited] = React.useState<string[]>([]);

  const [paginationState, setPaginationState] = React.useState<PaginationState>(
    initialPaginationState
  );

  const filterQueryRef = React.useRef<string>('');

  const { loading: meDataLoading, data: meData } = useMeQuery({
    fetchPolicy: 'cache-first'
  });

  if (meDataLoading || !meData || !meData.me)
    return (
      <SpinnerContainer>
        <Spin />
      </SpinnerContainer>
    );

  function personInvited(id: string) {
    return invited.includes(id);
  }

  function handleInvitePerson(id: string) {
    setInvited(prevInvited => [...prevInvited, id]);
  }

  function handleRemovePerson(id: string) {
    setInvited(prevInvited =>
      prevInvited.filter(currInvited => currInvited !== id)
    );
  }

  function getPaginationQuery() {
    return constructPaginationQuery(
      meData!.me!.id,
      paginationState.results,
      filterQueryRef.current
    );
  }

  React.useEffect(() => {
    setPaginationState(state => ({ ...state, initialLoading: true }));
    const fetchData = async () => {
      const { data } = await apolloClient.query<PaginateUsersQueryQuery>({
        query: PaginateUsersQueryDocument,
        variables: {
          ...getPaginationQuery(),
          first: 1
        }
      });
      if (data && data.paginateUsers) {
        setPaginationState(state => ({
          ...state,
          initialLoading: false,
          initiallyLoaded: true,
          results: data.paginateUsers.edges,
          paginationInfo: data.paginateUsers.pageInfo
        }));
      }
    };
    fetchData();
  }, []);

  async function handleLoadMore() {
    setPaginationState(state => ({ ...state, loadingMore: true }));
    const { data } = await apolloClient.query<PaginateUsersQueryQuery>({
      query: PaginateUsersQueryDocument,
      variables: {
        ...getPaginationQuery(),
        first: 1
      }
    });
    if (data && data.paginateUsers) {
      const mergedResults = [
        ...data.paginateUsers.edges,
        ...paginationState.results
      ] as Maybe<PaginateUsersQueryEdges>[];
      setPaginationState(state => ({
        ...state,
        loadingMore: false,
        results: mergedResults,
        paginationInfo: data.paginateUsers.pageInfo
      }));
    }
  }

  async function handleTypeahead(value: string) {
    filterQueryRef.current = value;
    debounce(async () => await handleLoadMore(), 300)();
  }

  const LoadMoreContent = (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px'
      }}
    >
      <Button onClick={() => handleLoadMore()}>Load more</Button>
    </div>
  );

  return (
    <React.Fragment>
      <Form.Item>
        <Input
          disabled={
            paginationState.initiallyLoaded &&
            paginationState.results.length === 0
          }
          onChange={e => handleTypeahead(e.currentTarget.value)}
          placeholder="Type your friend's name"
        />
      </Form.Item>
      {paginationState.initialLoading ? (
        <SpinnerContainer>
          <Spin />
        </SpinnerContainer>
      ) : (
        <AddFriendList
          listItems={paginationState.results}
          loadMore={
            !paginationState.loadingMore &&
            paginationState.paginationInfo.hasNextPage
              ? LoadMoreContent
              : null
          }
          loading={paginationState.loadingMore}
          renderItem={(edge: PaginateUsersQueryEdges) => (
            <AddFriendListItem
              key={edge.node.id}
              edge={edge}
              onInvite={handleInvitePerson}
              onRemove={handleRemovePerson}
              personInvited={personInvited(edge.node.id)}
              shouldUseGrid={shouldUseGrid}
            />
          )}
          shouldUseGrid={shouldUseGrid}
          filterValue={filterQueryRef.current}
        />
      )}
    </React.Fragment>
  );
};

export default connect<{}, CreatePartyForm>(AddFriends);
