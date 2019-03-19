import {
  PaginateUsersQueryEdges,
  Maybe,
  PaginateUsersQueryPageInfo,
  PaginateUsersQueryVariables
} from '@generated/graphql';

enum ActionTypes {
  SET_LOADING_STATE = 'SET_LOADING_STATE',
  SET_RESULTS_STATE = 'SET_RESULTS_STATE',
  SET_QUERY = 'SET_QUERY',
  SET_LOAD_MORE = 'SET_LOAD_MORE'
}

interface LoadingState {
  initiallyLoading: boolean;
  initiallyLoaded: boolean;
  loadingMore: boolean;
}
interface ResultsState {
  fetchResults: Maybe<PaginateUsersQueryEdges>[];
  fetchInfo: PaginateUsersQueryPageInfo;
}
interface State {
  loadingState: LoadingState;
  resultsState: ResultsState;
  fetchQuery: PaginateUsersQueryVariables;
  canShowLoadMoreButton: boolean;
}

interface SetResultsStateAction {
  payload: Partial<ResultsState>;
  type: ActionTypes.SET_RESULTS_STATE;
}

interface SetFetchQueryAction {
  payload: PaginateUsersQueryVariables;
  type: ActionTypes.SET_QUERY;
}

interface SetLoadingStateAction {
  payload: Partial<LoadingState>;
  type: ActionTypes.SET_LOADING_STATE;
}

const SetLoadingState = (
  payload: Partial<LoadingState>
): SetLoadingStateAction => ({
  payload,
  type: ActionTypes.SET_LOADING_STATE
});

const SetResultsState = (
  payload: Partial<ResultsState>
): SetResultsStateAction => ({
  payload,
  type: ActionTypes.SET_RESULTS_STATE
});

const SetFetchQuery = (
  payload: PaginateUsersQueryVariables
): SetFetchQueryAction => ({
  payload,
  type: ActionTypes.SET_QUERY
});

const initialResultsState: ResultsState = {
  fetchResults: [],
  fetchInfo: {
    hasNextPage: false,
    endCursor: null
  }
};
const initialLoadingState: LoadingState = {
  initiallyLoaded: false,
  initiallyLoading: true,
  loadingMore: false
};

export const initialInviteFriendState: State = {
  loadingState: initialLoadingState,
  resultsState: initialResultsState,
  fetchQuery: {},
  canShowLoadMoreButton: true
};

export const InviteFriendActionCreators = {
  SetLoadingState,
  SetResultsState,
  SetFetchQuery
};

export function inviteFriendReducer(
  state: State = initialInviteFriendState,
  action: SetLoadingStateAction | SetResultsStateAction | SetFetchQueryAction
): State {
  switch (action.type) {
    case ActionTypes.SET_LOADING_STATE:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          ...action.payload
        }
      };
    case ActionTypes.SET_RESULTS_STATE:
      return {
        ...state,
        resultsState: {
          ...state.resultsState,
          fetchInfo: action.payload.fetchInfo
            ? action.payload.fetchInfo
            : state.resultsState.fetchInfo,
          fetchResults: [
            ...state.resultsState.fetchResults,
            ...(action.payload.fetchResults || [])
          ]
        }
      };
    case ActionTypes.SET_QUERY:
      return {
        ...state,
        fetchQuery: action.payload
      };
    default:
      return state;
  }
}
