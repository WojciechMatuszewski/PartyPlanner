import React from 'react';
import { Subject, from, Observable, of } from 'rxjs';
import {
  switchMap,
  flatMap,
  catchError,
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  tap
} from 'rxjs/operators';
import axios, { AxiosResponse, AxiosPromise } from 'axios';

interface TypeaheadProps<FetchResponsePreFormat, FetchResult, EventType> {
  fetchFunction: (value: string) => Promise<any> | AxiosPromise<any>;
  responseTransformFunction: (
    fetchResponse: FetchResponsePreFormat
  ) => FetchResult;
  onResult: (result: FetchResult) => void;
  onChangeTransformFunction?: (e: EventType) => string;
}

type InitialStreamType<K, EventType> = K extends (e: EventType) => string
  ? EventType
  : string;

function useBetterTypeahead<
  FetchResponsePreFormat,
  FetchResult,
  E extends React.ChangeEvent
>({
  fetchFunction,
  responseTransformFunction,
  onResult,
  onChangeTransformFunction
}: TypeaheadProps<any, FetchResult, E>) {
  type StreamType = InitialStreamType<typeof onChangeTransformFunction, E>;

  const fetchFunctionRef = React.useRef<
    TypeaheadProps<FetchResponsePreFormat, FetchResult, E>['fetchFunction']
  >(fetchFunction);

  const inputStream$ = React.useRef<Subject<StreamType>>(new Subject());

  const fetchOperator = (source: Observable<string>): Observable<FetchResult> =>
    source.pipe(
      switchMap(inputValue =>
        from(fetchFunctionRef.current(inputValue)).pipe(
          map(responseTransformFunction),
          catchError(e => {
            console.log(e);
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
  // function handleSubscriptionCallback(result: FetchResult) {
  //   onResult(result);
  // }

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
        fetchOperator
      )
      .subscribe(onResult);
  }

  return {
    onChange
  };
}

export default useBetterTypeahead;
