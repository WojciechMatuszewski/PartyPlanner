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
  PartiesListFilters
} from './PartiesListReducer';
import { useApolloClient } from 'react-apollo-hooks';

import PartiesListLoadMore from './PartiesListLoadMore';
import PartiesListFilterDrawer from './PartiesListFilterDrawer/PartiesListFilterDrawer';
import PartiesListLoading from './PartiesListLoading';

const PAGE_SIZE = 3;

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
    console.log(mapFiltersToWhereVariables(filters));
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

const PartiesList: React.FC<Props> = ({ userId }) => {
  const apolloClient = useApolloClient();

  const [state, dispatch] = React.useReducer(
    PartiesListReducer,
    initialPartiesListState
  );

  const [contextState] = React.useState<{
    state: PartiesListState;
    dispatch: React.Dispatch<any>;
  }>({
    state,
    dispatch
  });
  const queryConstructor = React.useCallback(queryConstructorFactory(userId), [
    userId
  ]);

  React.useEffect(() => {
    handleDataFetch(true);
  }, []);

  const handleDataFetch = React.useCallback(
    async (isInitial: boolean = false) => {
      try {
        if (!isInitial) {
          dispatch(PartiesListFetchActions.setLoadingMore(true));
        }
        const { data } = await apolloClient.query<PaginatePartiesQueryQuery>({
          query: PaginatePartiesQueryDocument,
          variables: queryConstructor(
            state.parties,
            state.filterInputValue,
            state.filters
          )
        });
        if (!isInitial) {
          dispatch(PartiesListFetchActions.setLoadingMore(false));
        } else {
          dispatch(PartiesListFetchActions.setLoadingInitially(false));
        }
        dispatch(
          PartiesListFetchActions.appendResults(data.partiesConnection
            .edges as PaginatePartiesQueryEdges[])
        );
        dispatch(
          PartiesListFetchActions.setPaginationInfo(
            data.partiesConnection.pageInfo
          )
        );
      } catch (e) {
        return null;
      }
    },
    [state.queryVariables, state.parties, state.filterInputValue, state.filters]
  );

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
      return null;
    }
  }, [state.filters]);

  const paginationInfoUpdater = React.useCallback(async () => {
    const { data } = await apolloClient.query<PaginatePartiesQueryQuery>({
      query: PaginatePartiesQueryDocument,
      variables: queryConstructor(state.parties, state.filterInputValue)
    });
    dispatch(
      PartiesListFetchActions.setPaginationInfo(data.partiesConnection.pageInfo)
    );
  }, [state.queryVariables, state.parties, state.filterInputValue]);

  return (
    <PartiesListContext.Provider value={contextState}>
      <div style={{ width: '100%' }}>
        <PartiesListPane
          inputValue={state.filterInputValue}
          paginationInfoUpdater={paginationInfoUpdater}
          onFetchHandler={handleDataFetch}
        />
        <PartiesListFilterDrawer
          onFiltersChanged={handleFiltersChanged}
          drawerVisible={state.drawerVisible}
          filters={state.filters}
        />
        <PartiesListLoading
          isLoadingInitially={state.initiallyLoading}
          loading={state.initiallyLoading || state.loadingFilters}
        />
        {!state.initiallyLoading ? (
          <React.Fragment>
            <PartiesListFilterChips
              filters={state.filters}
              shouldNotifyOnRemoved={!state.drawerVisible}
              onFilterRemoved={handleFiltersChanged}
            />
            <PartiesListCardGrid
              parties={state.parties}
              filterInputValue={state.filterInputValue}
            >
              {hasResultsAfterFiltering => (
                <PartiesListLoadMore
                  hasResults={hasResultsAfterFiltering}
                  isLoadingMore={state.loadingMore}
                  canLoadMore={state.paginationInfo.hasNextPage}
                  onLoadMoreButtonClick={() => handleDataFetch()}
                />
              )}
            </PartiesListCardGrid>
          </React.Fragment>
        ) : null}
      </div>
    </PartiesListContext.Provider>
  );
};

export default PartiesList;
