import React from 'react';
import 'react-testing-library/cleanup-after-each';
import {
  PaginateUsersQueryEdges,
  UserStatus,
  PaginateUsersQueryQuery
} from '@generated/graphql';
import { MockedResponse } from 'react-apollo/test-links';
import { PAGINATE_USERS_QUERY } from '@graphql/queries';
import { render, wait, fireEvent } from 'react-testing-library';
import ChatUsersMenu from '@components/Chats/ChatUsersMenu';
import '../__mocks__/matchMedia';
import 'react-testing-library/cleanup-after-each';
import { ChatContextProps, ChatsContext } from '@pages/party-chats';
import { BehaviorSubject } from 'rxjs';
import { MockedProvider } from 'react-apollo/test-utils';
import { createMockedApolloClient } from '@shared/testUtils';
import { ApolloProvider } from 'react-apollo-hooks';
import { MockLink } from 'apollo-link-mock';

const CURRENT_USER_ID = '123';
const CURRENT_CHAT_ID = '1';

const fakeUser: PaginateUsersQueryEdges = {
  __typename: 'UserEdge',
  node: {
    id: 'SomeUserId',
    firstName: 'Some name',
    lastName: 'Some last name',
    avatar: null,
    lastOnline: new Date(),
    status: UserStatus.Online,
    __typename: 'User'
  }
};

const fakeData: PaginateUsersQueryQuery = {
  paginateUsers: {
    __typename: 'UserConnection',
    edges: [fakeUser],
    pageInfo: {
      hasNextPage: false,
      endCursor: '1',
      __typename: 'PageInfo'
    }
  }
};

const fakeContextValues: ChatContextProps = {
  currentlyLoggedUserData: {
    ...fakeUser.node,
    email: 'wowo',
    id: CURRENT_USER_ID
  },
  currentlySelectedChatId: CURRENT_CHAT_ID,
  selectedChatIdStream$: new BehaviorSubject(null as string | null)
};

function getQueryVariables() {
  return {
    where: {
      chats_some: { id: CURRENT_CHAT_ID },
      id_not: CURRENT_USER_ID
    }
  };
}

describe('ChatUsersMenu', () => {
  it('Correctly shows users', async () => {
    const mocks: MockedResponse[] = [
      {
        request: {
          query: PAGINATE_USERS_QUERY,
          variables: getQueryVariables()
        },
        result: {
          data: fakeData
        }
      }
    ];

    const client = createMockedApolloClient(new MockLink(mocks));

    const { container, getByTestId, queryByTestId } = render(
      <ApolloProvider client={client}>
        <MockedProvider mocks={mocks}>
          <ChatsContext.Provider value={fakeContextValues}>
            <ChatUsersMenu />
          </ChatsContext.Provider>
        </MockedProvider>
      </ApolloProvider>
    );
    await wait(() =>
      expect(container.querySelector('.ant-spinner')).toBeNull()
    );
    await wait(() => expect(queryByTestId('chatUsersList')).not.toBeNull());
    expect(getByTestId('chatUsersList').childNodes).toHaveLength(1);
  });
  it('Correctly displays error', async () => {
    const mocks: MockedResponse[] = [
      {
        request: {
          query: PAGINATE_USERS_QUERY,
          variables: getQueryVariables()
        },
        error: new Error('aw shucks')
      }
    ];
    const client = createMockedApolloClient(new MockLink(mocks));
    const { container, getByTestId } = render(
      <ApolloProvider client={client}>
        <MockedProvider mocks={mocks}>
          <ChatsContext.Provider value={fakeContextValues}>
            <ChatUsersMenu />
          </ChatsContext.Provider>
        </MockedProvider>
      </ApolloProvider>
    );
    await wait(() =>
      expect(container.querySelector('.ant-spinner')).toBeNull()
    );
    expect(getByTestId('graphqlInlineError')).toBeDefined();
  });
  it('Correctly refetches data on error', async () => {
    const mocks: MockedResponse[] = [
      {
        request: {
          query: PAGINATE_USERS_QUERY,
          variables: getQueryVariables()
        },
        error: new Error('some error')
      },
      {
        request: {
          query: PAGINATE_USERS_QUERY,
          variables: getQueryVariables()
        },
        result: {
          data: fakeData
        }
      }
    ];
    const client = createMockedApolloClient(new MockLink(mocks));
    const { container, getByTestId, queryByTestId } = render(
      <ApolloProvider client={client}>
        <MockedProvider mocks={mocks}>
          <ChatsContext.Provider value={fakeContextValues}>
            <ChatUsersMenu />
          </ChatsContext.Provider>
        </MockedProvider>
      </ApolloProvider>
    );
    await wait(() =>
      expect(container.querySelector('.ant-spinner')).toBeNull()
    );
    expect(getByTestId('graphqlInlineError')).toBeDefined();
    fireEvent.click(getByTestId('refetchButton'));
    await wait(() => expect(queryByTestId('chatUsersList')).not.toBeNull());
    await wait(() =>
      expect(getByTestId('chatUsersList').childNodes).toHaveLength(1)
    );
  });
});
