import React from 'react';
import {
  PaginatePartiesQueryEdges,
  PaginatePartiesQueryDocument,
  PaginatePartiesQueryQuery,
  PaginatePartiesQueryVariables,
  PartyWhereInput
} from '@generated/graphql';
import PartiesListPane from './PartiesListPane';
import PartiesListFilterChips from './PartiesListFilterChips';
import PartiesListCardGrid from './PartiesListCardGrid';
import {
  PartiesListReducer,
  initialPartiesListState,
  PartiesListState,
  PartiesListFetchActions,
  PartiesListFilters,
  PartiesListFilterActions
} from './PartiesListReducer';
import { useApolloClient } from 'react-apollo-hooks';
import PartiesListLoadMore from './PartiesListLoadMore';
import PartiesListFilterDrawer from './PartiesListFilterDrawer/PartiesListFilterDrawer';
import PartiesListNoResults from './PartiesListNoResults';
import styled from '@emotion/styled';
import NoData from '@components/NoData';
import { Button } from 'antd';
import { withRouter, WithRouterProps } from 'next/router';
import GraphqlException from '@components/GraphqlException';
import GraphqlLoading from '@components/GraphqlLoading';

const PAGE_SIZE = 3;

const PartiesListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function mapFiltersToWhereVariables(filters: PartiesListFilters) {
  const newFilters = { ...filters };
  if (!Object.keys(newFilters).includes('isPublic')) {
    newFilters['isPublic'] = {
      variablesName: 'OR',
      variablesType: 'where',
      variablesValue: { isPublic: false },
      id: Math.random().toString()
    } as any;
  }
  return Object.entries(newFilters).reduce(
    (acc: PartyWhereInput, [, filterObject]) => {
      if (filterObject.variablesType === 'where') {
        acc[filterObject.variablesName as keyof PartyWhereInput] = acc[
          filterObject.variablesName as keyof PartyWhereInput
        ]
          ? [
              ...acc[filterObject.variablesName as keyof PartyWhereInput],
              filterObject.variablesValue
            ]
          : filterObject.variablesValue;
      }
      return acc;
    },
    {}
  );
}

function queryConstructorFactory(userId: string) {
  return function(
    currentResults: PaginatePartiesQueryEdges[],
    searchValue: string,
    filters: PartiesListFilters = {},
    first: number = PAGE_SIZE
  ): PaginatePartiesQueryVariables {
    return {
      where: {
        members_some: {
          id: userId
        },
        id_not_in: currentResults.map(edge => edge.node.id),
        title_contains:
          searchValue.trim().length === 0 ? undefined : searchValue,
        ...mapFiltersToWhereVariables(filters)
      },
      orderBy: filters['orderBy']
        ? filters['orderBy'].variablesValue
        : undefined,
      first
    };
  };
}

export const PartiesListContext = React.createContext<{
  state: PartiesListState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialPartiesListState,
  dispatch: () => {}
});

interface Props {
  userId: string;
}

const PartiesList: React.FC<Props & WithRouterProps> = ({ userId, router }) => {
  const apolloClient = useApolloClient();
  const [state, dispatch] = React.useReducer(
    PartiesListReducer,
    initialPartiesListState
  );
  const [shouldShowEmpty, setShouldShowEmpty] = React.useState<boolean>(false);
  const [contextState] = React.useState<{
    state: PartiesListState;
    dispatch: React.Dispatch<any>;
  }>({
    state,
    dispatch
  });
  const isFirstRender = React.useRef<boolean>(false);
  const queryConstructor = React.useCallback(queryConstructorFactory(userId), [
    userId
  ]);

  React.useEffect(() => {
    handleDataFetch(true);
  }, []);

  const isDrawerOpen = React.useCallback(() => {
    return state.drawerVisible;
  }, [state.drawerVisible]);

  React.useEffect(handleFilterChipRemoved, [state.filters]);

  const hasFiltersApplied = React.useCallback(() => {
    return Object.keys(state.filters).length > 0;
  }, [state.filters]);

  const fetchData = React.useCallback(() => {
    return apolloClient.query<PaginatePartiesQueryQuery>({
      query: PaginatePartiesQueryDocument,
      variables: queryConstructor(
        state.parties,
        state.filterInputValue,
        state.filters
      )
    });
  }, [
    state.queryVariables,
    state.parties,
    state.filterInputValue,
    state.filters
  ]);

  const handleFiltersChanged = React.useCallback(async () => {
    try {
      dispatch(PartiesListFetchActions.setLoadingFilters(true));
      const { data } = await apolloClient.query<PaginatePartiesQueryQuery>({
        query: PaginatePartiesQueryDocument,
        variables: queryConstructor([], state.filterInputValue, state.filters)
      });
      dispatch(PartiesListFetchActions.setLoadingFilters(false));
      dispatch(
        PartiesListFetchActions.setResults(data.partiesConnection
          .edges as PaginatePartiesQueryEdges[])
      );
      dispatch(
        PartiesListFetchActions.setPaginationInfo(
          data.partiesConnection.pageInfo
        )
      );
    } catch (e) {
      handleError();
    }
  }, [state.filters]);

  const paginationInfoUpdater = React.useCallback(async () => {
    try {
      const { data } = await apolloClient.query<PaginatePartiesQueryQuery>({
        query: PaginatePartiesQueryDocument,
        variables: queryConstructor(state.parties, state.filterInputValue)
      });
      dispatch(
        PartiesListFetchActions.setPaginationInfo(
          data.partiesConnection.pageInfo
        )
      );
    } catch (e) {
      handleError();
    }
  }, [state.queryVariables, state.parties, state.filterInputValue]);

  return (
    <PartiesListContext.Provider value={contextState}>
      <PartiesListWrapper>
        <GraphqlLoading
          isLoadingInitially={state.initiallyLoading}
          loading={state.initiallyLoading || state.loadingFilters}
          textToDisplay="Loading your parties ..."
        />
        {!state.initiallyLoading && shouldShowEmpty && (
          <NoData
            message="You currently do not have any parties"
            action={
              <Button
                type="primary"
                onClick={() => router && router.push('/create-party')}
              >
                Create new party
              </Button>
            }
          />
        )}
        {!state.initiallyLoading && !shouldShowEmpty && !state.hasError ? (
          <React.Fragment>
            <PartiesListPane
              onError={handleError}
              inputValue={state.filterInputValue}
              paginationInfoUpdater={paginationInfoUpdater}
              onDataFetch={handleTypeaheadDataFetch}
              onDataFetched={data => handleDataFetched(false, data)}
            />
            <PartiesListFilterDrawer
              onFiltersChanged={handleFiltersChanged}
              drawerVisible={state.drawerVisible}
              filters={state.filters}
            />

            <PartiesListFilterChips filters={state.filters} />
            <PartiesListCardGrid
              parties={state.parties}
              filterInputValue={state.filterInputValue}
            >
              {hasResultsAfterFiltering => (
                <React.Fragment>
                  <PartiesListLoadMore
                    hasResults={hasResultsAfterFiltering}
                    isLoadingMore={state.loadingMore}
                    canLoadMore={state.paginationInfo.hasNextPage}
                    onLoadMoreButtonClick={handleOnLoadMoreButton}
                  />
                  <PartiesListNoResults
                    hasFiltersApplied={hasFiltersApplied()}
                    showBeVisible={
                      !hasResultsAfterFiltering &&
                      !state.loadingMore &&
                      !state.loadingFilters
                    }
                    onClearAllFilters={handleNoResultsResetFilters}
                    queryString={state.filterInputValue}
                  />
                </React.Fragment>
              )}
            </PartiesListCardGrid>
          </React.Fragment>
        ) : state.hasError ? (
          <GraphqlException />
        ) : null}
      </PartiesListWrapper>
    </PartiesListContext.Provider>
  );

  function handleNoResultsResetFilters() {
    dispatch(PartiesListFilterActions.removeAllFilters());
    dispatch(PartiesListFilterActions.setInputFilterValue(''));
  }

  function handleDataFetched(
    wasInitialLoad: boolean = false,
    data: PaginatePartiesQueryQuery
  ) {
    if (!wasInitialLoad) {
      dispatch(PartiesListFetchActions.setLoadingMore(false));
    } else {
      dispatch(PartiesListFetchActions.setLoadingInitially(false));
    }
    if (data.partiesConnection.edges.length <= 0 && wasInitialLoad) {
      setShouldShowEmpty(true);
    }
    dispatch(
      PartiesListFetchActions.appendResults(data.partiesConnection
        .edges as PaginatePartiesQueryEdges[])
    );
    dispatch(
      PartiesListFetchActions.setPaginationInfo(data.partiesConnection.pageInfo)
    );
  }

  function handlePreDataFetch(isInitial: boolean) {
    if (!isInitial) {
      dispatch(PartiesListFetchActions.setLoadingMore(true));
    }
  }

  function handleTypeaheadDataFetch() {
    handlePreDataFetch(false);
    return fetchData();
  }

  async function handleDataFetch(isFromInitialFetch: boolean = false) {
    handlePreDataFetch(isFromInitialFetch);
    try {
      const { data } = await fetchData();
      handleDataFetched(isFromInitialFetch, data);
    } catch (e) {
      handleError();
    }
  }

  function handleOnLoadMoreButton() {
    return handleDataFetch(false);
  }

  function handleFilterChipRemoved() {
    if (!isDrawerOpen() && !isFirstRender.current) {
      handleFiltersChanged();
    }
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }

  function handleError() {
    dispatch(PartiesListFetchActions.setLoadingInitially(false));
    dispatch(PartiesListFetchActions.setLoadingMore(false));
    dispatch(PartiesListFetchActions.setLoadingFilters(false));
    dispatch(PartiesListFetchActions.setError(true));
  }
};

export default withRouter(PartiesList);
