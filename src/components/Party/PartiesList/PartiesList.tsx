import React from 'react';
import {
  PaginatePartiesQueryEdges,
  PaginatePartiesQueryDocument,
  PaginatePartiesQueryQuery,
  PaginatePartiesQueryVariables
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
const MAX_PAGE_SIZE_FILTERS_CHANGED = 20;

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
        title: searchValue.trim().length === 0 ? undefined : searchValue,
        ...Object.entries(filters).reduce(
          (acc: Record<string, any>, [key, value]) => {
            if (key === 'where') {
              acc[value.filterName] = value;
            }
            return acc;
          },
          {}
        )
      },
      orderBy: filters['orderBy'] ? filters['orderBy'].value : undefined,
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
      // dispatch(PartiesListFilterActions.setInputFilterValue(''));
      dispatch(PartiesListFetchActions.setLoadingFilters(true));
      const numOfPartiesToFetch =
        state.parties.length < MAX_PAGE_SIZE_FILTERS_CHANGED
          ? state.parties.length
          : MAX_PAGE_SIZE_FILTERS_CHANGED;
      const { data } = await apolloClient.query({
        query: PaginatePartiesQueryDocument,
        variables: queryConstructor([], '', state.filters, numOfPartiesToFetch)
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
  }, [state.filters, state.parties]);

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
          paginationInfoUpdater={paginationInfoUpdater}
          onFetchHandler={() => handleDataFetch()}
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
              onFiltersChanged={handleFiltersChanged}
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
