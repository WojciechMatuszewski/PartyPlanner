import { LocalResolvers } from './../graphql/resolvers';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import { WebSocketLink } from 'apollo-link-ws';

import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
import { BatchHttpLink } from 'apollo-link-batch-http';

const BATCHED_APOLLO_OPERATIONS = [
  'CreatePartyInvitation',
  'DeletePartyInvitationMutation'
];

interface Options {
  getAuthToken: () => string | null;
}

export function isBrowser() {
  return (process as any).browser;
}

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser()) {
  (global as any).fetch = fetch;
}

function create(initialState: any, { getAuthToken }: Options) {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_STATIC_GRAPHQL_ENDPOINT,
    credentials: 'same-origin'
  });

  const batchLink = new BatchHttpLink({
    uri: process.env.NEXT_STATIC_GRAPHQL_ENDPOINT,
    credentials: 'same-origin'
  });

  const authLink = setContext((_, { headers }) => {
    const token = getAuthToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  });

  const splitAuthLinkWithBatching = authLink.split(
    operation => BATCHED_APOLLO_OPERATIONS.includes(operation.operationName),
    batchLink,
    httpLink
  );

  let link = splitAuthLinkWithBatching;

  if (isBrowser()) {
    const wsLink = new WebSocketLink({
      uri: process.env.NEXT_STATIC_WEBSOCKET_URL as string,
      options: {
        reconnect: true
      }
    });
    link = split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
      splitAuthLinkWithBatching
    );
  }

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser(),
    ssrMode: !isBrowser(), // Disables forceFetch on the server (so queries are only run once)
    link: link,
    cache: new InMemoryCache().restore(initialState || {}),
    resolvers: LocalResolvers
  });
}

export default function initApollo(initialState: any, options: any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser()) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
