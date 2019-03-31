import React, { Reducer } from 'react';
import { Subject, Observable, from, identity } from 'rxjs';
import {
  tap,
  map,
  distinctUntilChanged,
  debounceTime,
  filter,
  switchMap,
  flatMap
} from 'rxjs/operators';

interface UseTypeaheadInputProps {
  onChange: (value: string) => void;
  value: string;
}

interface UseTypeaheadHelperProps<T> {
  setInputValue: (value: string) => void;
  setResults: (results: T[]) => void;
}

interface UseTypeaheadErrorState {
  hasError: boolean;
  rawError: any;
}

interface UseTypeaheadState<T extends any[]> {
  loading: boolean;
  error: UseTypeaheadErrorState;
  results: T;
}

const initialUseTypeaheadState: UseTypeaheadState<any> = {
  loading: false,
  results: [],
  error: {
    hasError: false,
    rawError: null
  }
};

enum UseTypeaheadActionsEnum {
  setLoading = 'SET_LOADING',
  setResults = 'SET_RESULTS',
  setError = 'SET_ERROR'
}

interface UseTypeaheadAction {
  readonly type: string;
  payload?: any;
}

interface SetLoadingAction extends UseTypeaheadAction {
  readonly type: UseTypeaheadActionsEnum.setLoading;
  payload: boolean;
}

interface SetErrorAction extends UseTypeaheadAction {
  readonly type: UseTypeaheadActionsEnum.setError;
  payload: UseTypeaheadErrorState;
}

interface SetResultsAction extends UseTypeaheadAction {
  readonly type: UseTypeaheadActionsEnum.setResults;
  payload: any[];
}

const SetLoading = (payload: boolean): SetLoadingAction => ({
  type: UseTypeaheadActionsEnum.setLoading,
  payload
});

const SetResults = <T extends any[]>(payload: T): SetResultsAction => ({
  type: UseTypeaheadActionsEnum.setResults,
  payload
});

const SetError = (payload: UseTypeaheadErrorState): SetErrorAction => ({
  type: UseTypeaheadActionsEnum.setError,
  payload
});

export type OnChangeTransformFunction = (
  e: React.ChangeEvent<HTMLInputElement>
) => string;
type InputOnChangeCbValue<TFT> = TFT extends OnChangeTransformFunction
  ? React.ChangeEvent<HTMLInputElement>
  : string;

function reducer(
  state = initialUseTypeaheadState,
  action: SetLoadingAction | SetResultsAction | SetErrorAction
) {
  switch (action.type) {
    case UseTypeaheadActionsEnum.setLoading:
      return {
        ...state,
        loading: action.payload
      };
    case UseTypeaheadActionsEnum.setResults:
      return {
        results: action.payload,
        loading: false
      };
    case UseTypeaheadActionsEnum.setError:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

// tried typing this function with T extends any[] but weird things would happen
export function useRxjsTypeahead<ResultType = any>(
  fetchFunction: (value: string) => Promise<any>,
  fetchResultTransformFunction: (fetchResponse: any) => Promise<ResultType[]>,
  onChangeTransformFunction?: OnChangeTransformFunction
) {
  type UseTypeaheadReducer = Reducer<
    UseTypeaheadState<ResultType[]>,
    SetLoadingAction | SetResultsAction | SetErrorAction
  >;

  const [state, dispatch] = React.useReducer<UseTypeaheadReducer>(
    reducer as UseTypeaheadReducer,
    initialUseTypeaheadState
  );
  const [inputValue, setInputValue] = React.useState('');

  // support for useCallback
  const fetchFunctionRef = React.useRef<(value: string) => Promise<any>>(
    fetchFunction
  );

  const typeaheadSubject = React.useRef<Subject<string>>(new Subject());

  function typeaheadEffectFunction() {
    const typeaheadSubscription = typeaheadSubject.current
      .pipe(typeaheadOperator)
      .subscribe((results: ResultType[]) => {
        dispatch(SetResults<ResultType[]>(results));
      });

    return () => typeaheadSubscription.unsubscribe();
  }

  const typeaheadOperator = (
    source: Observable<string>
  ): Observable<ResultType[]> =>
    source.pipe(
      tap(
        () =>
          state.error.hasError &&
          dispatch(SetError({ hasError: false, rawError: null }))
      ),
      filter(str => !!str),
      debounceTime(300),
      distinctUntilChanged(),
      map((str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim()),
      filter(str => !!str),
      tap(() => {
        dispatch(SetLoading(true));
      }),
      switchMap(value =>
        from(fetchFunctionRef.current(value)).pipe(
          flatMap(fetchResultTransformFunction)
        )
      )
    );

  function onChange(
    val: InputOnChangeCbValue<typeof onChangeTransformFunction>
  ) {
    const parsedValue =
      typeof val === 'string' ? identity(val) : onChangeTransformFunction!(val);

    typeaheadSubject.current.next(parsedValue);
    setInputValue(parsedValue);
  }

  const getInputProps = (): UseTypeaheadInputProps => ({
    onChange,
    value: inputValue
  });

  const getHelperProps = (): UseTypeaheadHelperProps<ResultType> => ({
    setInputValue,
    setResults: results => dispatch(SetResults(results))
  });

  React.useEffect(typeaheadEffectFunction, []);
  React.useEffect(() => {
    fetchFunctionRef.current = fetchFunction;
  }, [fetchFunction]);

  return {
    inputProps: getInputProps(),
    helperProps: getHelperProps(),
    state
  };
}
