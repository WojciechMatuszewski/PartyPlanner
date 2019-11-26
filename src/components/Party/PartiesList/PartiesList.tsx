import PartiesListCardGrid from './PartiesListCardGrid';
import PartiesListFilterChips from './PartiesListFilterChips';
import PartiesListFilterDrawer from './PartiesListFilterDrawer/PartiesListFilterDrawer';
import PartiesListLoadMore from './PartiesListLoadMore';
import PartiesListNoResults from './PartiesListNoResults';
import PartiesListPane from './PartiesListPane';
import {
  initialPartiesListState,
  PartiesListDrawerActions,
  PartiesListFilterActions,
  PartiesListFilters,
  PartiesListReducer,
  PartiesListState
} from './PartiesListReducer';

import PageException from '@components/UI/PageException';
import styled from '@emotion/styled';
import {
  PaginatePartiesQueryQuery,
  PaginatePartiesQueryQueryVariables,
  PartyWhereInput,
  usePaginatePartiesQueryQuery
} from '@generated/graphql';
import useLocalStorage from '@hooks/useLocalStorage';
import { handleRefetch } from '@shared/graphqlUtils';
import { Button, message } from 'antd';
import React from 'react';
import { BehaviorSubject } from 'rxjs';

const NUM_OF_RESULTS_PER_PAGE = 10;

const queryVariablesSubject = new BehaviorSubject<
  PaginatePartiesQueryQueryVariables
>({});

export function getPartiesListQueryVariables() {
  return queryVariablesSubject.getValue();
}

interface Props {
  userId: string;
  isInitiallyEmpty: boolean;
  children: React.ReactNode;
}

const PartiesListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function mapFiltersToWhereVariables(
  filters: PartiesListFilters,
  userId: string
) {
  const { ...restOfFilters } = filters;

  let additionalFilters = {};

  if (!restOfFilters.isPublic) {
    additionalFilters = { members_some: { id: userId } };
  }

  const mappedFilters = Object.entries(restOfFilters).reduce(
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
  return { ...mappedFilters, ...additionalFilters };
}

export function partiesListVariablesConstructorFactory(userId: string) {
  return function(
    searchValue: string,
    filters: PartiesListFilters = {},
    first: number = NUM_OF_RESULTS_PER_PAGE
  ): PaginatePartiesQueryQueryVariables {
    return {
      where: {
        normalizedTitle_contains: searchValue
          .toLowerCase()
          .replace(/[ -.,]/g, ''),
        ...mapFiltersToWhereVariables(filters, userId)
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
  userId: string;
}>({
  state: initialPartiesListState,
  dispatch: () => {},
  userId: ''
});

const PartiesList: React.FC<Props> = ({
  userId,
  isInitiallyEmpty,
  children
}) => {
  const variablesConstructor = React.useRef<any>(
    partiesListVariablesConstructorFactory(userId)
  );
  const isFirstRender = React.useRef<boolean>(true);

  const { saveToStorage, retrieveFromStorage } = useLocalStorage(
    'PARTIES_LIST_FILTERS'
  );

  const [appliedFilters, setAppliedFilters] = React.useState<
    PartiesListFilters
  >(JSON.parse(retrieveFromStorage()) || {});

  React.useEffect(() => {
    saveToStorage(JSON.stringify(appliedFilters));
  }, [appliedFilters]);

  const [state, dispatch] = React.useReducer(PartiesListReducer, {
    ...initialPartiesListState,
    filters: appliedFilters
  });

  const [contextState] = React.useState<{
    state: PartiesListState;
    dispatch: React.Dispatch<any>;
    userId: string;
  }>({
    state,
    dispatch,
    userId
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

  const {
    data,
    loading,
    error,
    fetchMore,
    refetch,
    variables
  } = usePaginatePartiesQueryQuery({
    variables: variablesConstructor.current(
      state.filterInputValue,
      appliedFilters
    ),
    notifyOnNetworkStatusChange: true
  });

  React.useEffect(() => {
    queryVariablesSubject.next(variables);
  }, [variables]);

  if (error)
    return (
      <PageException
        desc="Could not fetch the data"
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
          loading={loading}
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

        {isInitiallyEmpty ? (
          children
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
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
