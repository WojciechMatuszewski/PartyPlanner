import React from 'react';
import {
  PaginatePartiesQueryEdges,
  PaginatePartiesQueryDocument,
  PaginatePartiesQueryQuery,
  PaginatePartiesQueryVariables
} from '@generated/graphql';
import PartiesListPane from './PartiesListPane';
import PartiesListFilterDrawer from './PartiesListFilterDrawer';
import PartiesListFilterChips from './PartiesListFilterChips';
import PartiesListCardGrid from './PartiesListCardGrid';
import {
  PartiesListReducer,
  initialPartiesListState,
  PartiesListState,
  PartiesListFetchActions
} from './PartiesListReducer';
import { useApolloClient } from 'react-apollo-hooks';

import PartiesListLoadMore from './PartiesListLoadMore';

const PAGE_SIZE = 3;

function queryConstructorFactory(userId: string) {
  return function(
    currentResults: PaginatePartiesQueryEdges[],
    searchValue: string
  ): PaginatePartiesQueryVariables {
    return {
      where: {
        members_some: {
          id: userId
        },
        id_not_in: currentResults.map(edge => edge.node.id),
        title: searchValue.trim().length === 0 ? undefined : searchValue
      },
      first: PAGE_SIZE
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
    dispatch(
      PartiesListFetchActions.setQueryVariables({
        where: {
          members_some: {
            id: userId
          }
        }
      })
    );
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
          variables: queryConstructor(state.parties, state.filterInputValue)
        });
        if (!isInitial) {
          dispatch(PartiesListFetchActions.setLoadingMore(false));
        } else {
          dispatch(PartiesListFetchActions.setLoadingInitially(false));
        }
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
    },
    [state.queryVariables, state.parties, state.filterInputValue]
  );

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
        <PartiesListFilterDrawer drawerVisible={state.drawerVisible} />
        {/* <PartiesListLoading isLoadingInitially={true} loading={loading} /> */}
        {!state.initiallyLoading ? (
          <React.Fragment>
            <PartiesListFilterChips />
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
