import {
  USER_FRIENDS_QUERY,
  getUserFriendsQueryVariables
} from './../../../../../pages/user-people';

import { DataProxy } from 'apollo-cache';
import { User_FriendsQuery } from '@generated/graphql';

type CacheMutator = (
  fromCache: User_FriendsQuery['userFriends']
) => // arr.push returns a number
User_FriendsQuery['userFriends'];

export function updateUserFriends(proxy: DataProxy, modifyFn: CacheMutator) {
  const variables = getUserFriendsQueryVariables();

  const dataInCache = proxy.readQuery<User_FriendsQuery>({
    query: USER_FRIENDS_QUERY,
    variables
  });

  if (!dataInCache) return;

  const { userFriends } = dataInCache;

  const modifiedUserFriends = modifyFn(userFriends);

  proxy.writeQuery<User_FriendsQuery>({
    query: USER_FRIENDS_QUERY,
    variables,
    data: {
      __typename: 'Query',
      userFriends: {
        __typename: 'UserFriends',
        ...modifiedUserFriends
      }
    }
  });
}
