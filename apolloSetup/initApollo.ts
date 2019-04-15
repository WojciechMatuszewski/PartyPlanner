import { MeQueryDocument, MeQueryQuery } from './../generated/graphql';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import { PaginateMessagesQueryNode } from '@generated/graphql';
import { ApolloCache } from 'apollo-cache';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloLink } from 'apollo-link';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

interface Options {
  getToken: () => string | null;
}

export function isBrowser() {
  return (process as any).browser;
}

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser()) {
  (global as any).fetch = fetch;
}

function create(initialState: any, { getToken }: Options) {
  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'same-origin'
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    };
  });

  let link = ApolloLink.from([authLink, httpLink]);
  if (isBrowser()) {
    const wsLink = new WebSocketLink({
      uri: 'ws://localhost:4000/graphql',
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
      ApolloLink.from([authLink, httpLink])
    );
  }

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser(),
    ssrMode: !isBrowser(), // Disables forceFetch on the server (so queries are only run once)
    link: link,
    cache: new InMemoryCache().restore(initialState || {}),
    resolvers: {
      Message: {
        isSendByMe: (
          message: PaginateMessagesQueryNode,
          _,
          { cache }: { cache: ApolloCache<any> }
        ) => {
          const data = cache.readQuery<MeQueryQuery>({
            query: MeQueryDocument
          });

          if (!data || !data.me) return false;
          return data.me.id === message.author.id;
        },
        optimisticallyAdded: () => false,
        optimisticallyCreated: () => false,
        hasOptimisticError: () => false
      }
    }
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
