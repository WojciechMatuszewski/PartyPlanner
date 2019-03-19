import React, { Reducer } from 'react';
import { Subject, Observable, from } from 'rxjs';
import {
  tap,
  map,
  distinctUntilChanged,
  debounceTime,
  filter,
  switchMap
} from 'rxjs/operators';

interface UseTypeaheadInputProps {
  onChange: (value: string) => void;
  value: string;
}

interface UseTypeaheadHelperProps<T> {
  setInputValue: (value: string) => void;
  setResults: (results: T[]) => void;
}

interface UseTypeaheadState<T extends any[]> {
  loading: boolean;
  results: T;
}

const initialUseTypeaheadState: UseTypeaheadState<any> = {
  loading: false,
  results: []
};

const initializer = () => ({
  loading: false,
  results: []
});

enum UseTypeaheadActionsEnum {
  setLoading = 'SET_LOADING',
  setResults = 'SET_RESULTS'
}

interface UseTypeaheadAction {
  readonly type: string;
  payload?: any;
}

interface SetLoadingAction extends UseTypeaheadAction {
  readonly type: UseTypeaheadActionsEnum.setLoading;
  payload: boolean;
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

type TypeaheadReducer<T extends any[]> = Reducer<
  UseTypeaheadState<T>,
  SetLoadingAction | SetResultsAction
>;

function reducer(
  state = initialUseTypeaheadState,
  action: SetLoadingAction | SetResultsAction
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
  }
}

// tried typing this function with T extends any[] but weird things would happen
export function useRxjsTypeahead<ResultType = any>(
  fetchFunction: (value: string) => Promise<any>,
  transformFunction: (response: any) => ResultType[]
) {
  const [state, dispatch] = React.useReducer<
    TypeaheadReducer<ResultType[]>,
    any
  >(reducer, null, initializer);
  const [inputValue, setInputValue] = React.useState('');
  const fetchFunctionRef = React.useRef<(value: string) => Promise<any>>(
    fetchFunction
  );

  const typeaheadSubject = React.useRef<Subject<string>>(new Subject());

  function effectFunction() {
    const typeaheadSubscription = typeaheadSubject.current
      .pipe(
        typeaheadOperator,
        map(transformFunction)
      )
      .subscribe((results: ResultType[]) => {
        dispatch(SetResults<ResultType[]>(results));
      });
    return () => typeaheadSubscription.unsubscribe();
  }

  const typeaheadOperator = (
    source: Observable<string>
  ): Observable<ResponseType[]> =>
    source.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(str => !!str),
      map((str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim()),
      filter(str => !!str),
      tap(() => dispatch(SetLoading(true))),
      switchMap(value => from(fetchFunctionRef.current(value)))
    );

  function onChange(value: string) {
    typeaheadSubject.current.next(value);
    setInputValue(value);
  }

  const getInputProps = (): UseTypeaheadInputProps => ({
    onChange,
    value: inputValue
  });

  const getHelperProps = (): UseTypeaheadHelperProps<ResultType> => ({
    setInputValue,
    setResults: results => dispatch(SetResults(results))
  });

  React.useEffect(() => {
    fetchFunctionRef.current = fetchFunction;
  }, [fetchFunction]);
  React.useEffect(effectFunction, []);
  return {
    inputProps: getInputProps(),
    helperProps: getHelperProps(),
    state
  };
}
