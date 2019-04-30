import { ApolloClient } from 'apollo-boost';
import { PartiesQueryVariables } from '@generated/graphql';
import moment from 'moment';
import { OperationVariables } from 'react-apollo';
import { message } from 'antd';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { MockLink } from 'apollo-link-mock';
import { LocalResolvers } from '@graphql/resolvers';

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

export function createMockedApolloClient(mocks: any[]) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new MockLink(mocks),
    resolvers: LocalResolvers
  })
}
