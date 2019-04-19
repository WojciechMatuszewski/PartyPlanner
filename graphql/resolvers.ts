const DATE_DIFF_LIMIT = 60000;

import { Resolvers } from 'apollo-boost';
import {
  PaginateMessagesQueryNode,
  MeQueryQuery,
  MeQueryDocument,
  PaginateUsersQueryNode
} from '@generated/graphql';
import { ApolloCache } from 'apollo-cache';
import { compose, curry, ifElse, always, lt, gt } from 'ramda';

function parseUserDateToTimestamp(user: PaginateUsersQueryNode) {
  return new Date(user.lastOnline).getTime();
}

function getCurrentDateTimestamp() {
  return new Date().getTime();
}

function diffBetweenNumbers(x: number, y: number) {
  return x - y;
}

const dateDiffer = compose(
  lt(DATE_DIFF_LIMIT),
  curry(diffBetweenNumbers)(getCurrentDateTimestamp()),
  parseUserDateToTimestamp
);

export const LocalResolvers: Resolvers = {
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
  },
  Chat: {
    hasUnreadMessages: () => false
  },
  User: {
    status: ifElse(dateDiffer, always('OFFLINE'), always('ONLINE'))
  }
};
