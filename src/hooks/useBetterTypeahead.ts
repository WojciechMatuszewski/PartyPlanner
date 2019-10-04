import React from 'react';
import { Subject, from, Observable, of } from 'rxjs';
import {
  switchMap,
  catchError,
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  tap
} from 'rxjs/operators';
import { AxiosPromise } from 'axios';
import { identity } from 'ramda';

export interface TypeaheadProps<
  FetchResponsePreFormat,
  FetchResult,
  EventType
> {
  fetchFunction: (value: string) => Promise<any> | AxiosPromise<any>;
  responseTransformFunction?: (
    fetchResponse: FetchResponsePreFormat
  ) => FetchResult;
  onResult?: (result: FetchResult) => void;
  onChangeTransformFunction?: (e: EventType) => string;
  onError?: (inputValueWhenErrorOccurred?: string, e?: Error) => void;
  initialState?: ReducerState<FetchResult>;
}

type InitialStreamType<K, EventType> = K extends (e: EventType) => string
  ? EventType
  : string;

type ReducerState<FetchResult = any> = {
  data: FetchResult;
  loading: boolean;
  error: boolean;
};

const setStateAction = (payload: Partial<ReducerState>) => ({
  type: 'SET_STATE',
  payload
});

function Reducer<S extends ReducerState>(
  state: S,
  action: ReturnType<typeof setStateAction>
) {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

function createInitialReducerState<FetchResult = any>(
  data: FetchResult
): ReducerState<FetchResult> {
  return {
    data,
    loading: false,
    error: false
  };
}

function useBetterTypeahead<
  FetchResponsePreFormat,
  FetchResult,
  E = React.ChangeEvent
>({
  fetchFunction,
  responseTransformFunction = identity as any,
  onResult,
  onChangeTransformFunction,
  onError = () => {},
  initialState
}: TypeaheadProps<FetchResponsePreFormat, FetchResult, E>) {
  type StreamType = InitialStreamType<typeof onChangeTransformFunction, E>;

  type TypeaheadPropsType = TypeaheadProps<
    FetchResponsePreFormat,
    FetchResult,
    E
  >;

  type UseTypeaheadReducer = React.Reducer<
    ReducerState<FetchResult>,
    ReturnType<typeof setStateAction>
  >;

  const initialReducerState: ReducerState<FetchResult> = initialState
    ? initialState
    : createInitialReducerState([] as any);

  const [state, dispatch] = React.useReducer<UseTypeaheadReducer>(
    Reducer,
    initialReducerState
  );

  const fetchFunctionRef = React.useRef<TypeaheadPropsType['fetchFunction']>(
    fetchFunction
  );

  const inputStream$ = React.useRef<Subject<StreamType>>(new Subject());

  const fetchOperator = (source: Observable<string>): Observable<FetchResult> =>
    source.pipe(
      tap(() => dispatch(setStateAction({ loading: true }))),
      switchMap(inputValue =>
        from(fetchFunctionRef.current(inputValue)).pipe(
          map(responseTransformFunction),
          tap(data =>
            dispatch(setStateAction({ loading: false, error: false, data }))
          ),
          catchError(e => {
            dispatch(setStateAction({ error: true, loading: false }));
            onError(inputValue, e);
            return of('' as any);
          })
        )
      )
    );

  const typeaheadOperator = (source: Observable<string>): Observable<string> =>
    source.pipe(
      filter(str => !!str.trim()),
      debounceTime(300),
      inputValidateOperator,
      distinctUntilChanged()
    );

  const inputValidateOperator = (
    source: Observable<string>
  ): Observable<string> =>
    source.pipe(
      map(stripDangerousCharacters),
      filter(str => !!str)
    );

  React.useEffect(handleFetchFunctionChange, [fetchFunction]);
  React.useEffect(typeaheadFunction, []);

  // ---- //

  function handleFetchFunctionChange() {
    fetchFunctionRef.current = fetchFunction;
  }

  function stripDangerousCharacters(str: string) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim();
  }

  function onChange(value: StreamType) {
    inputStream$.current.next(value);
  }

  function typeaheadFunction() {
    inputStream$.current
      .pipe(
        map(val =>
          onChangeTransformFunction
            ? onChangeTransformFunction(val as E)
            : (val as string)
        ),
        typeaheadOperator,
        fetchOperator,
        filter(data => typeof data !== 'string')
      )
      .subscribe(onResult);
  }

  return {
    onChange,
    state
  };
}

export default useBetterTypeahead;
