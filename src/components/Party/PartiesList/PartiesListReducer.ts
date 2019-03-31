import {
  createAction,
  ActionType,
  createStandardAction
} from 'typesafe-actions';
import {
  PaginatePartiesQueryEdges,
  PaginatePartiesQueryVariables,
  PaginatePartiesQueryPageInfo
} from '@generated/graphql';

// drawer stuff
enum drawerActionTypes {
  setVisible = 'SET_VISIBLE',
  setHidden = 'SET_HIDDEN',
  toggle = 'TOGGLE'
}
export const PartiesListDrawerActions = {
  setDrawerVisible: createAction(drawerActionTypes.setVisible),
  setDrawerHidden: createAction(drawerActionTypes.setHidden),
  toggleDrawer: createAction(drawerActionTypes.toggle)
};
type DrawerActions = ActionType<typeof PartiesListDrawerActions>;
// drawer stuff ends

// data fetching stuff
enum dataFetchingActionTypes {
  setLoadingMore = 'SET_LOADING_MORE',
  setResults = 'SET_RESULTS',
  setPaginationInfo = 'SET_PAGINATION_INFO',
  setLoadingInitially = 'SET_LOADING_INITIALLY',
  setQueryVariables = 'SET_QUERY_VARIABLES'
}

export const PartiesListFetchActions = {
  setLoadingMore: createStandardAction(dataFetchingActionTypes.setLoadingMore)<
    boolean
  >(),
  setResults: createStandardAction(dataFetchingActionTypes.setResults)<
    PaginatePartiesQueryEdges[]
  >(),
  setPaginationInfo: createStandardAction(
    dataFetchingActionTypes.setPaginationInfo
  )<PaginatePartiesQueryPageInfo>(),
  setLoadingInitially: createStandardAction(
    dataFetchingActionTypes.setLoadingInitially
  )<boolean>(),
  setQueryVariables: createStandardAction(
    dataFetchingActionTypes.setQueryVariables
  )<PaginatePartiesQueryVariables>()
};
type DataFetchingActions = ActionType<typeof PartiesListFetchActions>;
// data fetching stuff ends

// filtering stuff starts
enum filterActionTypes {
  setInputFilterValue = 'SET_INPUT_FILTER_VALUE',
  addFilter = 'ADD_FILTER',
  removeFilter = 'REMOVE_FILTER',
  removeAllFilters = 'REMOVE_ALL_FILTERS'
}

export const PartiesListFilterActions = {
  setInputFilterValue: createStandardAction(
    filterActionTypes.setInputFilterValue
  )<string>(),
  addFilter: createStandardAction(filterActionTypes.addFilter)<
    PartiesListFilter
  >(),
  removeFilter: createStandardAction(filterActionTypes.removeFilter)
};
type FilterActions = ActionType<typeof PartiesListFilterActions>;
// filtering stuff ends

export interface PartiesListFilter {
  type: 'OrderBy' | 'where';
  value: any;
  id: string;
}

export interface PartiesListState {
  initiallyLoading: boolean;
  drawerVisible: boolean;
  loadingMore: boolean;
  parties: PaginatePartiesQueryEdges[];
  paginationInfo: PaginatePartiesQueryPageInfo;
  queryVariables: PaginatePartiesQueryVariables;
  filterInputValue: string;
  filters: PartiesListFilter[];
}

export const initialPartiesListState: PartiesListState = {
  initiallyLoading: true,
  drawerVisible: false,
  loadingMore: false,
  parties: [],
  paginationInfo: {
    hasNextPage: false,
    endCursor: ''
  },
  queryVariables: {},
  filterInputValue: '',
  filters: []
};

export function PartiesListReducer(
  state: PartiesListState = initialPartiesListState,
  action: DrawerActions | DataFetchingActions | FilterActions
): PartiesListState {
  switch (action.type) {
    // DRAWER
    case drawerActionTypes.toggle:
      return {
        ...state,
        drawerVisible: !state.drawerVisible
      };
    case drawerActionTypes.setVisible:
      return {
        ...state,
        drawerVisible: true
      };
    case drawerActionTypes.setHidden:
      return {
        ...state,
        drawerVisible: false
      };
    // DRAWER ENDS

    // DATA FETCHING
    case dataFetchingActionTypes.setLoadingInitially:
      return {
        ...state,
        initiallyLoading: action.payload
      };
    case dataFetchingActionTypes.setLoadingMore:
      return {
        ...state,
        loadingMore: action.payload
      };
    case dataFetchingActionTypes.setResults:
      // console.log('setResults', action.payload);
      return {
        ...state,
        parties: [...state.parties, ...action.payload]
      };
    case dataFetchingActionTypes.setPaginationInfo:
      return {
        ...state,
        paginationInfo: action.payload
      };
    case dataFetchingActionTypes.setQueryVariables:
      return {
        ...state,
        queryVariables: action.payload
      };
    // DATA FETCHING ENDS

    // FILTERING ACTIONS BEGIN
    case filterActionTypes.setInputFilterValue:
      return {
        ...state,
        filterInputValue: action.payload
      };
    case filterActionTypes.addFilter:
      return {
        ...state,
        filters: [...state.filters, action.payload]
      };
    default:
      return state;
  }
}
