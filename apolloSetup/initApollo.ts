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

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser(),
    ssrMode: !isBrowser(), // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
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
        }
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
