import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import {
  PaginateUsersQueryQuery,
  PaginateUsersQueryDocument,
  useMeQueryQuery,
  User
} from '@generated/graphql';
import { FormikContext } from 'formik';
import { useApolloClient } from '@apollo/react-hooks';
import useMedia from '@hooks/useMedia';
import {
  inviteFriendReducer,
  initialInviteFriendState,
  InviteFriendActionCreators
} from './InviteFriendStateReducer';
import { Spin, message } from 'antd';
import InviteFriendSearchInput from './InviteFriendSearchInput';
import InviteFriendLoadMoreButton from './InviteFriendLoadMoreButton';
import { connect } from 'formik';
import InviteFriendList from './InviteFriendList';
import InviteFriendListItem from './InviteFriendListItem';
import { CreatePartyFormValues } from '../CreatePartyForm';

const SpinnerContainer = styled.div`
  ${FlexBoxFullCenteredStyles};
  width: 100%;
`;

const NUM_OF_USERS_PER_PAGE = 10;

function getQueryConstructor(userId: string) {
  return function(
    results: PaginateUsersQueryQuery['paginateUsers']['edges'],
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
      },
      first: NUM_OF_USERS_PER_PAGE
    };
  };
}

const InviteFriend: React.FC<{
  formik: FormikContext<CreatePartyFormValues>;
}> = props => {
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
  const { loading: meDataLoading, data: meData } = useMeQueryQuery({
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

  const personInvited = React.useCallback(
    (id: string) => invited.includes(id),
    [invited]
  );

  const handleInvitePerson = React.useCallback(
    (id: string) => {
      setInvited(prevInvited => [...prevInvited, id]);
    },
    [invited]
  );

  React.useEffect(() => {
    props.formik.setFieldValue('invitedFriends', invited);
  }, [invited]);

  const handleRemovePerson = React.useCallback(
    (id: string) =>
      setInvited(prevInvited =>
        prevInvited.filter(currInvited => currInvited !== id)
      ),
    []
  );

  async function inputFetchQueryUpdater() {
    const fetchQuery = constructFetchQuery(state.resultsState.fetchResults, '');
    fetchQuery.where.id_not_in.pop();
    const data = await getData(fetchQuery);
    if (!data) return;
    dispatch(SetResultsState({ fetchInfo: data.paginateUsers.pageInfo }));
  }

  const typeaheadFunctionCallback = React.useCallback(async () => {
    dispatch(SetLoadingState({ loadingMore: true }));
    const data = await getData(state.fetchQuery);
    if (!data) return;
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
      if (!data) return;
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
    message.config({ maxCount: 1 });
  }, []);

  async function getData(variables: ReturnType<typeof constructFetchQuery>) {
    try {
      const { data } = await apolloClient.query<PaginateUsersQueryQuery>({
        query: PaginateUsersQueryDocument,
        variables: variables
      });
      return data;
    } catch (e) {
      dispatch(
        SetLoadingState({
          initiallyLoaded: true,
          initiallyLoading: false,
          loadingMore: false
        })
      );
      message.error('Something went wrong!');
    }
  }

  async function handleLoadMore() {
    dispatch(SetLoadingState({ loadingMore: true }));
    const data = await getData(state.fetchQuery);
    if (!data) return;
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
        inputLoading={state.loadingState.loadingMore}
      />
      <InviteFriendList
        listItems={state.resultsState.fetchResults}
        loadMore={
          <InviteFriendLoadMoreButton onLoadMoreClick={handleLoadMore} />
        }
        loading={state.loadingState.initiallyLoading}
        canShowLoadMore={canShowLoadMore}
        renderItem={(edge: { node: User }) => (
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

export default React.memo(connect<{}, CreatePartyFormValues>(InviteFriend));
