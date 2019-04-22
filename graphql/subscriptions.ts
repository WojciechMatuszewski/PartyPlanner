import { gql } from 'apollo-boost';
export const CHAT_MESSAGES_SUBSCRIPTION = gql`
  subscription ChatMessagesSubscription($where: MessageSubscriptionWhereInput) {
    message(where: $where) {
      node {
        id
        author {
          firstName
          lastName
          avatar
          id
        }
        isSendByMe @client
        optimisticallyAdded @client
        optimisticallyCreated @client
        hasOptimisticError @client
        content
        createdAt
        chat {
          id
        }
      }
    }
  }
`;
