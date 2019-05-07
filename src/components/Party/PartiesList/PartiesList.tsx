import React from 'react';
import {
  PartyWhereInput,
  PaginatePartiesQueryVariables,
  usePaginatePartiesQuery,
  PaginatePartiesQueryQuery
} from '@generated/graphql';
import styled from '@emotion/styled';
import PartiesListPane from './PartiesListPane';
import {
  PartiesListFilters,
  PartiesListReducer,
  initialPartiesListState,
  PartiesListState,
  PartiesListFilterActions,
  PartiesListDrawerActions
} from './PartiesListReducer';
import PartiesListFilterDrawer from './PartiesListFilterDrawer/PartiesListFilterDrawer';
import PartiesListFilterChips from './PartiesListFilterChips';
import PartiesListCardGrid from './PartiesListCardGrid';
import PartiesListLoadMore from './PartiesListLoadMore';
import PartiesListNoResults from './PartiesListNoResults';
import GraphqlException from '@components/GraphqlException';
import { Button, message } from 'antd';
import { handleRefetch } from '@shared/graphqlUtils';

const NUM_OF_RESULTS_PER_PAGE = 10;

interface Props {
  userId: string;
}

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

export function partiesListVariablesConstructorFactory(userId: string) {
  return function(
    searchValue: string,
    filters: PartiesListFilters = {},
    first: number = NUM_OF_RESULTS_PER_PAGE
  ): PaginatePartiesQueryVariables {
    return {
      where: {
        members_some: {
          id: userId
        },
        normalizedTitle_contains: searchValue.toLowerCase(),
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

const PartiesList: React.FC<Props> = ({ userId }) => {
  const variablesConstructor = React.useRef<any>(
    partiesListVariablesConstructorFactory(userId)
  );
  const isFirstRender = React.useRef<boolean>(true);

  const [appliedFilters, setAppliedFilters] = React.useState<
    PartiesListFilters
  >({});

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

  const isDrawerOpen = React.useCallback(() => state.drawerVisible, [
    state.drawerVisible
  ]);

  const handleFiltersChanged = React.useCallback(
    () => setAppliedFilters(state.filters),
    [state.filters]
  );

  const hasFiltersApplied = React.useCallback(() => {
    return Object.keys(state.filters).length > 0;
  }, [state.filters]);

  React.useEffect(handleFilterChipRemoved, [state.filters]);

  const { data, loading, error, fetchMore, refetch } = usePaginatePartiesQuery({
    variables: variablesConstructor.current(
      state.filterInputValue,
      appliedFilters
    ),
    notifyOnNetworkStatusChange: true
  });

  if (error)
    return (
      <GraphqlException
        actions={
          <Button
            type="primary"
            onClick={async () =>
              await handleRefetch(
                refetch,
                variablesConstructor.current(
                  state.filterInputValue,
                  appliedFilters
                )
              )
            }
          >
            Try again
          </Button>
        }
      />
    );

  return (
    <PartiesListContext.Provider value={contextState}>
      <PartiesListWrapper>
        <PartiesListPane
          onDrawerOpen={() => dispatch(PartiesListDrawerActions.toggleDrawer())}
          onChange={value =>
            dispatch(PartiesListFilterActions.setInputFilterValue(value))
          }
        />
        <PartiesListFilterDrawer
          onFiltersChanged={handleFiltersChanged}
          drawerVisible={state.drawerVisible}
          filters={state.filters}
        />
        <PartiesListFilterChips filters={state.filters} />
        <PartiesListCardGrid
          parties={
            data && data.partiesConnection
              ? (data.partiesConnection.edges as any[])
              : []
          }
          filterInputValue={state.filterInputValue}
        >
          {hasResults => (
            <React.Fragment>
              <PartiesListLoadMore
                hasResults={hasResults}
                isLoadingMore={loading}
                canLoadMore={
                  data && data.partiesConnection
                    ? data.partiesConnection.pageInfo.hasNextPage
                    : false
                }
                onLoadMoreButtonClick={handleLoadMore}
              />
              <PartiesListNoResults
                hasFiltersApplied={hasFiltersApplied()}
                showBeVisible={!hasResults && !loading}
                onClearAllFilters={() =>
                  dispatch(PartiesListFilterActions.removeAllFilters())
                }
                queryString={state.filterInputValue}
              />
            </React.Fragment>
          )}
        </PartiesListCardGrid>
      </PartiesListWrapper>
    </PartiesListContext.Provider>
  );

  function handleFilterChipRemoved() {
    if (!isDrawerOpen() && !isFirstRender.current) handleFiltersChanged();
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }

  function handleLoadMore() {
    try {
      fetchMore({
        variables: {
          after: data!.partiesConnection!.pageInfo.endCursor
        },
        updateQuery: fetchMoreQueryUpdater
      });
    } catch (e) {
      message.error('Something went wrong!');
    }
  }

  function fetchMoreQueryUpdater(
    prev: PaginatePartiesQueryQuery,
    {
      fetchMoreResult
    }: { fetchMoreResult?: PaginatePartiesQueryQuery | undefined }
  ): PaginatePartiesQueryQuery {
    if (!fetchMoreResult || fetchMoreResult.partiesConnection.edges.length == 0)
      return prev;
    return {
      partiesConnection: {
        edges: [
          ...prev.partiesConnection.edges,
          ...fetchMoreResult.partiesConnection.edges
        ],
        pageInfo: fetchMoreResult.partiesConnection.pageInfo,
        __typename: 'PartyConnection'
      }
    };
  }
};

export default PartiesList;
