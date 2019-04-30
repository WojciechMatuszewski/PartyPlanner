import React from 'react';
import {
  PaginatePartiesQueryQuery,
  PaginatePartiesQueryEdges
} from '@generated/graphql';
import { render, wait } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import PartiesList, {
  partiesListVariablesConstructorFactory
} from '@components/Party/PartiesList/PartiesList';
import { PAGINATE_PARTIES_QUERY } from '@graphql/queries';
import { createdMockedClient } from '@shared/graphqlUtils';
import { ApolloProvider } from 'react-apollo-hooks';

import '../__mocks__/matchMedia';
import { MockedResponse } from 'react-apollo/test-utils';

const USER_ID = '123';

const fakeParty: PaginatePartiesQueryEdges = {
  node: {
    id: '1',
    title: 'some title',
    description: 'some description',
    location: {
      placeName: 'Some place',
      __typename: 'Location'
    },
    colorTint: '1',
    members: [],
    author: {
      firstName: 'Wojtek',
      lastName: 'Matuszewski',
      id: '2',
      __typename: 'User'
    },
    start: new Date(),
    end: new Date(),
    isPublic: true,
    __typename: 'Party'
  },
  __typename: 'PartyEdge'
};

const fakeData: PaginatePartiesQueryQuery = {
  partiesConnection: {
    edges: [fakeParty],
    pageInfo: {
      hasNextPage: true,
      endCursor: '1',
      __typename: 'PageInfo'
    },
    __typename: 'PartyConnection'
  }
};

describe('PartiesList', () => {
  it('Correctly renders when there is data', async () => {
    const mocks: MockedResponse[] = [
      {
        request: {
          query: PAGINATE_PARTIES_QUERY,
          variables: partiesListVariablesConstructorFactory(USER_ID)('', {})
        },
        result: {
          data: fakeData
        }
      }
    ];
    const client = createdMockedClient(mocks);
    const { getByTestId } = render(
      <ApolloProvider client={client}>
        <PartiesList userId={USER_ID} />
      </ApolloProvider>
    );
    const partiesGrid = getByTestId('partiesListGrid');
    expect(getByTestId('loadMoreSpinner')).toBeDefined();
    await wait(() => expect(partiesGrid.innerHTML).not.toBe(''));
    expect(partiesGrid.childNodes).toHaveLength(1);
    expect(getByTestId('loadMoreButton')).toBeDefined();
  });
  it('Correctly renders when there is an error', async () => {
    const mocks: MockedResponse[] = [
      {
        request: {
          query: PAGINATE_PARTIES_QUERY
        },
        result: {
          error: []
        }
      }
    ];
    const client = createdMockedClient(mocks);
    const { queryByTestId, getByTestId } = render(
      <ApolloProvider client={client}>
        <PartiesList userId={USER_ID} />
      </ApolloProvider>
    );
    await wait(() => expect(queryByTestId('loadMoreSpinner')).toBeNull);
    expect(getByTestId('graphqlException')).toBeDefined();
  });
});
