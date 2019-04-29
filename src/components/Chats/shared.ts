import {
  PaginateMessagesQueryVariables,
  MessageOrderByInput,
  ChatMessagesSubscriptionNode,
  PaginateMessagesQueryDocument
} from '@generated/graphql';
import { ApolloClient } from 'apollo-boost';

export const PAGINATE_MESSAGES_QUERY_VARIABLES_BATCH_SIZE = 30;

export function createPaginateMessagesQueryVariables(
  currentChatId: string | null,
  batchSize = PAGINATE_MESSAGES_QUERY_VARIABLES_BATCH_SIZE
): PaginateMessagesQueryVariables {
  if (currentChatId == null) return {};
  return {
    where: {
      chat: { id: currentChatId }
    },
    orderBy: MessageOrderByInput.CreatedAtAsc,
    last: batchSize
  };
}

export function updateChatThreadMessages(
  client: ApolloClient<any>,
  message: ChatMessagesSubscriptionNode,
  queryVariables: PaginateMessagesQueryVariables
) {
  const cachedMessages = client.readQuery({
    query: PaginateMessagesQueryDocument,
    variables: queryVariables
  });

  cachedMessages.messagesConnection.edges.push({
    node: message,
    __typename: 'MessageEdge'
  });

  client.writeQuery({
    query: PaginateMessagesQueryDocument,
    variables: queryVariables,
    data: cachedMessages
  });
}
