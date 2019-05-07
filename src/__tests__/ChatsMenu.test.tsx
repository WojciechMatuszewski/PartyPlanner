import React from 'react';
import { ChatMessagesSubscriptionMessage } from '@generated/graphql';
import 'react-testing-library/cleanup-after-each';
import {
  MockedResponse,
  MockSubscriptionLink,
  MockedSubscriptionResult
} from 'apollo-link-mock';
import { PAGINATE_CHATS_QUERY } from '@graphql/queries';
import { render, wait, fireEvent } from 'react-testing-library';
import { ApolloProvider } from 'react-apollo-hooks';
import { MockedProvider } from 'react-apollo/test-utils';
import { ChatsContext } from '@pages/chats';
import ChatsMenu, {
  CHATS_MENU_PAGE_SIZE,
  CHATS_MENU_ORDER_BY
} from '@components/Chats/ChatsMenu';
import { createMockedApolloClient } from '@shared/testUtils';
import '../__mocks__/matchMedia';
const CURRENTLY_SELECTED_CHAT_ID = '1';
const CURRENTLY_LOGGED_USER_ID = '2';
const SUBSCRIPTION_MESSAGE_CONTENT = 'SUBSCRIPTION!';
jest.unmock('lodash');
// require the actual module so that we can mock exports on the module
const lodash = require.requireActual('lodash');

const subscriptionMessage: ChatMessagesSubscriptionMessage = {
  node: {
    __typename: 'Message',
    createdAt: new Date(),
    content: SUBSCRIPTION_MESSAGE_CONTENT,
    author: {
      __typename: 'User',
      firstName: 'Wojtek',
      lastName: 'Matuszewski',
      avatar: null,
      id: '1'
    },
    isSendByMe: false,
    optimisticallyAdded: false,
    optimisticallyCreated: false,
    id: '123',
    hasOptimisticError: false,
    chat: {
      __typename: 'Chat',
      id: CURRENTLY_SELECTED_CHAT_ID
    }
  },
  __typename: 'MessageSubscriptionPayload'
};

const mockedContextValue = {
  currentlyLoggedUserData: { id: CURRENTLY_LOGGED_USER_ID },
  currentlySelectedChatId: CURRENTLY_SELECTED_CHAT_ID
};

const subscriptionResult: MockedSubscriptionResult = {
  result: { data: { message: subscriptionMessage } },
  delay: 0
};

function getMockedDataWithChats(chats: any) {
  return {
    __typename: 'Query',
    chatsConnection: {
      __typename: 'ChatConnection',
      edges: chats,
      pageInfo: {
        __typename: 'PageInfo',
        hasNextPage: false,
        endCursor: null
      }
    }
  };
}

function makeFakeChat(
  title: string,
  id: string,
  hasUnreadMessages: boolean = false
) {
  return {
    __typename: 'ChatEdge',
    node: {
      __typename: 'Chat',
      id: id,
      party: {
        __typename: 'Party',
        title: title
      },
      members: [
        {
          __typename: 'User',
          avatar: null,
          firstName: 'Wojtek',
          lastName: 'Matuszewski'
        }
      ],
      messages: [
        {
          __typename: 'Message',
          createdAt: new Date(),
          content: ' Some message',
          author: {
            __typename: 'User',
            firstName: 'Wojtek',
            lastName: 'Matuszewski'
          }
        }
      ],
      hasUnreadMessages: hasUnreadMessages
    }
  };
}

function makeVariables(title: string = '') {
  return {
    where: {
      party: {
        members_some: { id: CURRENTLY_LOGGED_USER_ID },
        normalizedTitle_contains: title
      }
    },
    first: CHATS_MENU_PAGE_SIZE,
    orderBy: CHATS_MENU_ORDER_BY
  };
}

describe('ChatsMenu', () => {
  it('Correctly displays chats', async () => {
    const queryMocks: MockedResponse[] = [
      {
        request: {
          query: PAGINATE_CHATS_QUERY,
          variables: makeVariables()
        },
        result: {
          data: getMockedDataWithChats([
            makeFakeChat('Some title', CURRENTLY_SELECTED_CHAT_ID)
          ])
        }
      }
    ];
    const subscriptionLink = new MockSubscriptionLink();
    const client = createMockedApolloClient(subscriptionLink);
    const { container, getByTestId } = render(
      <ApolloProvider client={client}>
        <MockedProvider mocks={queryMocks}>
          <ChatsContext.Provider value={mockedContextValue as any}>
            <ChatsMenu />
          </ChatsContext.Provider>
        </MockedProvider>
      </ApolloProvider>
    );
    await wait(() =>
      expect(container.querySelector('.anticon-loading')).toBeNull()
    );
    expect(getByTestId('chatsList').childNodes).toHaveLength(1);
    expect(container.querySelectorAll('.selected')).toHaveLength(1);
  });

  it('Correctly handles search behavior', async () => {
    lodash.debounce = jest.fn(fn => fn);
    const TITLE_SEARCHED_FOR = 'some other title';

    const queryMocks: MockedResponse[] = [
      {
        request: {
          query: PAGINATE_CHATS_QUERY,
          variables: makeVariables()
        },
        result: {
          data: getMockedDataWithChats([
            makeFakeChat('First chat', CURRENTLY_SELECTED_CHAT_ID),
            makeFakeChat(TITLE_SEARCHED_FOR, '99')
          ])
        }
      },
      {
        request: {
          query: PAGINATE_CHATS_QUERY,
          variables: makeVariables(TITLE_SEARCHED_FOR)
        },
        result: {
          data: getMockedDataWithChats([makeFakeChat(TITLE_SEARCHED_FOR, '99')])
        }
      }
    ];
    const subscriptionLink = new MockSubscriptionLink();
    const client = createMockedApolloClient(subscriptionLink);
    const { container, getByTestId } = render(
      <ApolloProvider client={client}>
        <MockedProvider mocks={queryMocks}>
          <ChatsContext.Provider value={mockedContextValue as any}>
            <ChatsMenu />
          </ChatsContext.Provider>
        </MockedProvider>
      </ApolloProvider>
    );
    await wait(() =>
      expect(container.querySelector('.anticon-loading')).toBeNull()
    );
    expect(getByTestId('chatsList').childNodes).toHaveLength(2);
    const input = getByTestId('chatsMenuTypeahead');
    fireEvent.change(input, { target: { value: TITLE_SEARCHED_FOR } });
    await wait(() =>
      expect(getByTestId('chatsList').childNodes).toHaveLength(1)
    );
    expect(getByTestId('chatsList').textContent).toContain(TITLE_SEARCHED_FOR);
  });
  it('Correctly handles error and refetching', async () => {
    const queryMocks: MockedResponse[] = [
      {
        request: { query: PAGINATE_CHATS_QUERY, variables: makeVariables() },
        error: new Error('some error!')
      },
      {
        request: { query: PAGINATE_CHATS_QUERY, variables: makeVariables() },
        result: {
          data: getMockedDataWithChats([
            makeFakeChat('some title', CURRENTLY_SELECTED_CHAT_ID, false)
          ])
        }
      }
    ];
    const subscriptionLink = new MockSubscriptionLink();
    const client = createMockedApolloClient(subscriptionLink);
    const { container, getByTestId } = render(
      <ApolloProvider client={client}>
        <MockedProvider mocks={queryMocks}>
          <ChatsContext.Provider value={mockedContextValue as any}>
            <ChatsMenu />
          </ChatsContext.Provider>
        </MockedProvider>
      </ApolloProvider>
    );
    await wait(() =>
      expect(container.querySelector('.anticon-loading')).toBeNull()
    );
    const refetchButton = getByTestId('chatsMenuRefetchButton');
    expect(refetchButton).toBeDefined();
    fireEvent.click(refetchButton);
    await wait(() =>
      expect(getByTestId('chatsList').childNodes).toHaveLength(1)
    );
  });
  // TODO:
  // why does resolver fire but nothing else?
  it.skip('Correctly handles new chat message (subscription)', async () => {
    const queryMocks: MockedResponse[] = [
      {
        request: {
          query: PAGINATE_CHATS_QUERY,
          variables: makeVariables()
        },
        result: {
          data: getMockedDataWithChats([
            makeFakeChat('someTitle', CURRENTLY_SELECTED_CHAT_ID)
          ])
        }
      }
    ];

    const subscriptionLink = new MockSubscriptionLink();
    const client = createMockedApolloClient(subscriptionLink, {
      me: {
        __typename: 'User',
        id: CURRENTLY_LOGGED_USER_ID,
        email: 'someEmail',
        firstName: 'somefirstname',
        lastName: 'someLastName',
        avatar: null
      }
    });

    const { container } = render(
      <ApolloProvider client={client}>
        <MockedProvider mocks={queryMocks}>
          <ChatsContext.Provider value={mockedContextValue as any}>
            <ChatsMenu />
          </ChatsContext.Provider>
        </MockedProvider>
      </ApolloProvider>
    );

    await wait(() =>
      expect(container.querySelector('.anticon-loading')).toBeNull()
    );
    jest.useFakeTimers();
    await subscriptionLink.simulateResult(subscriptionResult);
    jest.runAllTicks();
    jest.advanceTimersByTime(500);
    // debug();
  });
});
