import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import {
  Maybe,
  PaginateUsersQueryEdges,
  useMeQuery,
  PaginateUsersQueryVariables,
  PaginateUsersQueryQuery,
  PaginateUsersQueryDocument
} from '@generated/graphql';
import { FormikContext } from 'formik';
import { CreatePartyForm } from '@components/Party/CreateParty';
import { useApolloClient } from 'react-apollo-hooks';
import useMedia from '@hooks/useMedia';
import {
  inviteFriendReducer,
  initialInviteFriendState,
  InviteFriendActionCreators
} from './InviteFriendStateReducer';
import { Spin } from 'antd';
import InviteFriendSearchInput from './InviteFriendSearchInput';
import InviteFriendLoadMoreButton from './InviteFriendLoadMoreButton';
import { connect } from 'formik';
import InviteFriendList from './InviteFriendList';
import InviteFriendListItem from './InviteFriendListItem';

const SpinnerContainer = styled.div`
  ${FlexBoxFullCenteredStyles};
  width: 100%;
`;

function getQueryConstructor(userId: string) {
  return function(
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
  };
}

const InviteFriend: React.FC<{
  formik: FormikContext<CreatePartyForm>;
}> = () => {
  const apolloClient = useApolloClient();
  const shouldUseGrid = useMedia('(min-width:992px)');
  const [invited, setInvited] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<string>();
  const [state, dispatch] = React.useReducer(
    inviteFriendReducer,
    initialInviteFriendState
  );
  const {
    SetLoadingState,
    SetFetchQuery,
    SetResultsState
  } = InviteFriendActionCreators;
  const { loading: meDataLoading, data: meData } = useMeQuery({
    fetchPolicy: 'cache-first'
  });

  if (meDataLoading || !meData || !meData.me)
    return (
      <SpinnerContainer>
        <Spin />
      </SpinnerContainer>
    );

  const constructFetchQuery = getQueryConstructor(meData.me.id);

  const canShowLoadMore =
    !state.loadingState.loadingMore && state.resultsState.fetchInfo.hasNextPage;

  const shouldInputBeDisabled =
    state.loadingState.initiallyLoading ||
    (state.loadingState.initiallyLoaded &&
      state.resultsState.fetchResults.length === 0);

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

  async function inputFetchQueryUpdater() {
    const fetchQuery = constructFetchQuery(state.resultsState.fetchResults, '');
    fetchQuery.where.id_not_in.pop();
    const data = await getData(fetchQuery);
    dispatch(SetResultsState({ fetchInfo: data.paginateUsers.pageInfo }));
  }

  const typeaheadFunctionCallback = React.useCallback(async () => {
    dispatch(SetLoadingState({ loadingMore: true }));
    const data = await getData(state.fetchQuery);
    dispatch(
      SetResultsState({
        fetchInfo: data.paginateUsers.pageInfo,
        fetchResults: data.paginateUsers.edges
      })
    );
    dispatch(SetLoadingState({ loadingMore: false }));
  }, [state.fetchQuery]);

  React.useEffect(() => {
    const fetchQuery = constructFetchQuery(
      state.resultsState.fetchResults,
      inputValue
    );
    dispatch(SetFetchQuery(fetchQuery));
  }, [inputValue, state.resultsState.fetchResults]);

  React.useEffect(() => {
    const fetchQuery = constructFetchQuery(
      state.resultsState.fetchResults,
      inputValue
    );
    dispatch(SetFetchQuery(fetchQuery));
    async function initialFetch() {
      const data = await getData(fetchQuery);
      dispatch(
        SetLoadingState({
          initiallyLoaded: true,
          initiallyLoading: false
        })
      );
      dispatch(
        SetResultsState({
          fetchInfo: data.paginateUsers.pageInfo,
          fetchResults: data.paginateUsers.edges
        })
      );
    }
    initialFetch();
  }, []);

  async function getData(variables: PaginateUsersQueryVariables) {
    const { data } = await apolloClient.query<PaginateUsersQueryQuery>({
      query: PaginateUsersQueryDocument,
      variables: {
        ...variables,
        first: 1
      }
    });
    return data;
  }

  async function handleLoadMore() {
    dispatch(SetLoadingState({ loadingMore: true }));
    const data = await getData(state.fetchQuery);
    dispatch(
      SetResultsState({
        fetchInfo: data.paginateUsers.pageInfo,
        fetchResults: data.paginateUsers.edges
      })
    );
    dispatch(
      SetLoadingState({
        loadingMore: false
      })
    );
  }

  return (
    <React.Fragment>
      <InviteFriendSearchInput
        onChangeHandler={setInputValue}
        inputDisabled={shouldInputBeDisabled}
        fetchQueryUpdater={inputFetchQueryUpdater}
        typeaheadCallback={typeaheadFunctionCallback}
        shouldBeDisabled={shouldInputBeDisabled}
        inputLoading={state.loadingState.loadingMore}
      />
      <InviteFriendList
        listItems={state.resultsState.fetchResults}
        loadMore={
          <InviteFriendLoadMoreButton onLoadMoreClick={handleLoadMore} />
        }
        loading={state.loadingState.initiallyLoading}
        canShowLoadMore={canShowLoadMore}
        renderItem={(edge: PaginateUsersQueryEdges) => (
          <InviteFriendListItem
            key={edge.node.id}
            edge={edge}
            onInvite={handleInvitePerson}
            onRemove={handleRemovePerson}
            personInvited={personInvited(edge.node.id)}
            shouldUseGrid={shouldUseGrid}
          />
        )}
        shouldUseGrid={shouldUseGrid}
        filterValue={inputValue}
      />

      {state.loadingState.loadingMore && (
        <SpinnerContainer>
          <Spin />
        </SpinnerContainer>
      )}
    </React.Fragment>
  );
};

export default connect<{}, CreatePartyForm>(InviteFriend);
