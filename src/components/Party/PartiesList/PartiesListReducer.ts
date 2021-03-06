import {
  createAction,
  ActionType,
  createStandardAction
} from 'typesafe-actions';
import {} from '@generated/graphql';

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
  appendResults = 'APPEND_RESULTS',
  setResults = 'SET_RESULTS',
  setPaginationInfo = 'SET_PAGINATION_INFO',
  setLoadingInitially = 'SET_LOADING_INITIALLY',
  setQueryVariables = 'SET_QUERY_VARIABLES',
  setLoadingFilters = 'SET_LOADING_FILTERS',
  setError = 'SET_ERROR'
}

export const PartiesListFetchActions = {
  setLoadingMore: createStandardAction(dataFetchingActionTypes.setLoadingMore)<
    boolean
  >(),
  setError: createStandardAction(dataFetchingActionTypes.setError)<boolean>(),
  setResults: createStandardAction(dataFetchingActionTypes.setResults)<any>(),
  appendResults: createStandardAction(dataFetchingActionTypes.appendResults)<
    any
  >(),
  setPaginationInfo: createStandardAction(
    dataFetchingActionTypes.setPaginationInfo
  )<any>(),
  setLoadingInitially: createStandardAction(
    dataFetchingActionTypes.setLoadingInitially
  )<boolean>(),
  setQueryVariables: createStandardAction(
    dataFetchingActionTypes.setQueryVariables
  )<any>(),
  setLoadingFilters: createStandardAction(
    dataFetchingActionTypes.setLoadingFilters
  )<boolean>()
};
type DataFetchingActions = ActionType<typeof PartiesListFetchActions>;
// data fetching stuff ends

// filtering stuff starts
enum filterActionTypes {
  setInputFilterValue = 'SET_INPUT_FILTER_VALUE',
  addFilter = 'ADD_FILTER',
  removeFilter = 'REMOVE_FILTER',
  removeAllFilters = 'REMOVE_ALL_FILTERS',
  editFilter = 'EDIT_FILTER'
}

export const PartiesListFilterActions = {
  setInputFilterValue: createStandardAction(
    filterActionTypes.setInputFilterValue
  )<string>(),
  addFilter: createStandardAction(filterActionTypes.addFilter)<
    PartiesListFilterPayload
  >(),
  removeFilter: createStandardAction(filterActionTypes.removeFilter)<string>(),

  removeAllFilters: createAction(filterActionTypes.removeAllFilters),
  editFilter: createStandardAction(filterActionTypes.editFilter)<{
    filterName: string;
    newValue: any;
  }>()
};
type FilterActions = ActionType<typeof PartiesListFilterActions>;
// filtering stuff ends

export interface PartiesListFilter<
  T = 'orderBy' | 'where',
  // https://github.com/Microsoft/TypeScript/issues/6230
  // sadly til this pull request is not finished i will probably not be able to type this correctly
  K = T extends 'where' ? any : boolean
> {
  id: string;
  variablesType: T;
  variablesName: K;
  variablesValue: K;
  displayText: string;
}

export interface PartiesListFilterPayload {
  keyName: string;
  filter: PartiesListFilter;
}

export type PartiesListFilters = Record<string, PartiesListFilter>;

export interface PartiesListState {
  initiallyLoading: boolean;
  drawerVisible: boolean;
  loadingMore: boolean;
  parties: any[];
  paginationInfo: any;
  queryVariables: any;
  filterInputValue: string;
  filters: PartiesListFilters;
  loadingFilters: boolean;
  hasError: boolean;
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
  filters: {},
  loadingFilters: false,
  hasError: false
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
    case dataFetchingActionTypes.setLoadingFilters:
      return {
        ...state,
        loadingFilters: action.payload
      };
    case dataFetchingActionTypes.setLoadingMore:
      return {
        ...state,
        loadingMore: action.payload
      };
    case dataFetchingActionTypes.appendResults:
      return {
        ...state,
        parties: [...state.parties, ...action.payload]
      };
    case dataFetchingActionTypes.setResults:
      return {
        ...state,
        parties: action.payload
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
    case dataFetchingActionTypes.setError:
      return {
        ...state,
        hasError: action.payload
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
        filters: {
          ...state.filters,
          [action.payload.keyName]: action.payload.filter
        }
      };
    case filterActionTypes.removeFilter:
      // eslint-disable-next-line
      const { [action.payload]: _, ...restOfFilters } = state.filters;
      return {
        ...state,
        filters: restOfFilters
      };
    case filterActionTypes.removeAllFilters:
      return {
        ...state,
        filters: {}
      };
    // FILTERING ACTIONS END
    default:
      return state;
  }
}
