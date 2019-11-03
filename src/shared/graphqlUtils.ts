import { NetworkStatus } from 'apollo-client';
import { PartiesQueryVariables, Maybe } from '@generated/graphql';
import moment from 'moment';
import { OperationVariables } from 'react-apollo';
import { message } from 'antd';
import { get } from 'lodash';
import { curryN, compose, map, filter } from 'ramda';

type DeepWithoutMaybeObject<T> = {
  [K in keyof T]: T[K] extends Maybe<infer E> ? DeepWithoutMaybe<E> : T[K];
};
export type DeepWithoutMaybe<T> = NonNullable<
  T extends (Maybe<infer E>)[]
    ? DeepWithoutMaybeObject<E>[]
    : T extends object
    ? DeepWithoutMaybeObject<T>
    : T
>;
type Diff<T, U> = T extends U ? never : T;
export type NonNullable<T> = Diff<T, null | undefined>;

export function hasGraphqlData<GraphqlDataType extends any>(
  data: GraphqlDataType | undefined,
  pathsToCheck: string[]
): data is NonNullable<DeepWithoutMaybe<GraphqlDataType>> {
  if (data == null) return false;

  return compose(
    arr => arr.length == pathsToCheck.length,
    filter<any>(item => item != null),
    map(curryN(2, get)(data))
  )(pathsToCheck);
}

export function getPartiesDateVariables(
  dateToGetVariablesFor: Date,
  userId: string
): Partial<PartiesQueryVariables> {
  return {
    where: {
      start_gte: moment(dateToGetVariablesFor)
        .startOf('month')
        .subtract(7, 'days')
        .format(),
      end_lte: moment(dateToGetVariablesFor)
        .endOf('month')
        .add(7, 'days')
        .format(),
      members_some: {
        id: userId
      }
    }
  };
}

export function getCorrectTextFromPartyDates(start: Date, end: Date) {
  const parsedStart = moment(start);
  const parsedEnd = moment(end);
  if (parsedStart.isSame(parsedEnd, 'day')) {
    return `${parsedStart.format('DD MMM')} from ${parsedStart.format(
      'HH:mm'
    )} to ${parsedEnd.format('HH:mm')}`;
  } else {
    return `${parsedStart.format('DD MMM HH:mm')} to ${parsedEnd.format(
      'DD MMM HH:mm'
    )}`;
  }
}

export async function handleRefetch<QueryVariables extends OperationVariables>(
  refetchFunc: (variables?: QueryVariables) => void,
  variables?: QueryVariables
) {
  try {
    await refetchFunc(variables);
  } catch (e) {
    message.error('Could not fetch the data');
  }
}

export function isLoadingInitially(networkStatus: NetworkStatus) {
  return networkStatus == NetworkStatus.loading;
}

export function isLoadingMore(networkStatus: NetworkStatus) {
  return networkStatus == NetworkStatus.fetchMore;
}

export function isLoadingError(networkStatus: NetworkStatus) {
  return networkStatus == NetworkStatus.refetch;
}

export function isLoadingOnSearch(networkStatus: NetworkStatus) {
  return networkStatus == NetworkStatus.setVariables;
}
