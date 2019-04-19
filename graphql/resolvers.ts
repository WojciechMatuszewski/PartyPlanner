import { Resolvers } from 'apollo-boost';
import {
  PaginateMessagesQueryNode,
  MeQueryQuery,
  MeQueryDocument
} from '@generated/graphql';
import { ApolloCache } from 'apollo-cache';

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
  }
};
