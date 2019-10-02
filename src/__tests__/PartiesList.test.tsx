import React from 'react';
import {
  PaginatePartiesQueryQuery,
  PaginatePartiesQueryEdges
} from '@generated/graphql';
import { render, wait, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import PartiesList, {
  partiesListVariablesConstructorFactory
} from '@components/Party/PartiesList/PartiesList';
import { PAGINATE_PARTIES_QUERY } from '@graphql/queries';
import { createMockedApolloClient } from '@shared/testUtils';
import { ApolloProvider } from '@apollo/react-hooks';
import '../__mocks__/matchMedia';
import { MockedResponse, MockLink } from 'react-apollo/test-utils';
import * as graphqlUtils from '@shared/graphqlUtils';

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
    inviteSecret: '',
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
    const client = createMockedApolloClient(new MockLink(mocks));
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
  it('Correctly handles an error', async () => {
    jest
      .spyOn(graphqlUtils, 'handleRefetch')
      .mockImplementationOnce(async () => {});

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
    const client = createMockedApolloClient(new MockLink(mocks));
    const { queryByTestId, getByTestId } = render(
      <ApolloProvider client={client}>
        <PartiesList userId={USER_ID} />
      </ApolloProvider>
    );
    await wait(() => expect(queryByTestId('loadMoreSpinner')).toBeNull);
    expect(getByTestId('page-exception')).toBeDefined();
    fireEvent.click(getByTestId('page-exception').querySelector(
      'button'
    ) as HTMLButtonElement);
    expect(graphqlUtils.handleRefetch).toHaveBeenCalled();
    expect(graphqlUtils.handleRefetch).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining(
        partiesListVariablesConstructorFactory(USER_ID)('', {})
      )
    );
  });
});
