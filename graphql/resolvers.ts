import { Resolvers } from 'apollo-boost';
import {
  PaginateMessagesQueryNode,
  MeQueryQuery,
  MeQueryDocument,
  PaginateUsersQueryNode
} from '@generated/graphql';
import { ApolloCache } from 'apollo-cache';
import { compose, ifElse, always, lt } from 'ramda';

// this probably should go to .env
export const USER_PRESENCE_CONFIG = {
  dateDiffLimit: 60000,
  poolInterval: 30000,
  // we have to check the status locally as well
  // user exits the page => no updates but without an update ui will not rerender
  // so we have to track it locally as well so that we can update given user when he is inactive for (in this case) 61 seconds
  localOfflineTimeoutOffset: 10000,
  localStorageHeartbeatKeyName: 'last-heartbeat'
};

function parseUserDateToTimestamp(user: PaginateUsersQueryNode) {
  return new Date(user.lastOnline).getTime();
}

function getCurrentDateTimestamp() {
  return new Date().getTime();
}

function getDiffBetweenUserAndNow(userLastOnlineTimeStamp: number) {
  return Math.abs(userLastOnlineTimeStamp - getCurrentDateTimestamp());
}

const shouldBeOffline = compose(
  lt(USER_PRESENCE_CONFIG.dateDiffLimit),
  getDiffBetweenUserAndNow,
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
    status: ifElse(shouldBeOffline, always('OFFLINE'), always('ONLINE'))
  }
};
