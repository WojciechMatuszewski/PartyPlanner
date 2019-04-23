import React from 'react';
import useMedia from '@hooks/useMedia';
import {
  PaginateChatsQueryEdges,
  PaginateChatsQueryComponent,
  useChatMessagesSubscription,
  ChatMessagesSubscriptionNode
} from '@generated/graphql';
import ChatSideNavigation from './ChatSideNavigation';
import ChatsListSearch from './ChatsList/ChatsListSearch';
import ChatsList from './ChatsList/ChatsList';
import css from '@emotion/css';
import { ChatsContext } from '@pages/chats';
import ChatsListFilteredEmpty from './ChatsList/ChatsListFilteredEmpty';
import ChatSectionLoading from './ChatSectionLoading';
import { LAST_CHAT_MESSAGE_FRAGMENT } from '@graphql/fragments';
import { ApolloClient } from 'apollo-boost';
import {
  updateChatThreadMessages,
  createPaginateMessagesQueryVariables
} from './shared';

const ChatsMenu: React.FC = () => {
  const { currentlyLoggedUserData, currentlySelectedChatId } = React.useContext(
    ChatsContext
  );
  const [filterQuery, setFilterQuery] = React.useState<string>('');
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');

  useChatMessagesSubscription({
    variables: {
      where: {
        node: {
          author: {
            id_not: currentlyLoggedUserData.id
          },
          chat: {
            members_some: { id: currentlyLoggedUserData.id }
          }
        }
      }
    },
    onSubscriptionData: ({ client, subscriptionData: { data } }) => {
      if (!data || !data.message || !data.message.node) return;
      try {
        updateLastChatMessage(client, data.message.node);
      } catch (e) {
        // probably have to update the cache with new thread
      }
      try {
        if (hasChatSelected(data.message.node.chat.id)) return;
        updateChatThreadMessages(
          client,
          data.message.node,
          createPaginateMessagesQueryVariables(data.message.node.chat.id)
        );
      } catch (e) {
        // no point in updating, since there are not in cache, they will be fetched when user goes there
      }
    }
  });

  return (
    <ChatSideNavigation
      css={css`
        background: blue;
      `}
      type={shouldDisplayDrawer ? 'drawer' : 'sider'}
      triggerIcon="message"
      placement="left"
      drawerProps={{
        title: 'Your chats',
        closable: false
      }}
    >
      <ChatsListSearch onChange={handleOnInputChange} />
      <PaginateChatsQueryComponent
        variables={{
          where: {
            party: {
              members_some: { id: currentlyLoggedUserData.id },
              normalizedTitle_contains: filterQuery.toLocaleLowerCase()
            }
          },
          first: 10
        }}
      >
        {({ data, loading }) => {
          if (loading || !data || !data.chatsConnection)
            return <ChatSectionLoading />;
          if (!loading && data && data.chatsConnection.edges.length === 0)
            return <ChatsListFilteredEmpty filterQuery={filterQuery} />;
          return (
            <React.Fragment>
              <ChatsList
                chats={data.chatsConnection.edges as PaginateChatsQueryEdges[]}
              />
            </React.Fragment>
          );
        }}
      </PaginateChatsQueryComponent>
    </ChatSideNavigation>
  );

  function handleOnInputChange(inputValue: string) {
    setFilterQuery(inputValue);
  }

  function hasChatSelected(chatIdToCheckAgainst: string) {
    return currentlySelectedChatId == chatIdToCheckAgainst;
  }

  function updateLastChatMessage(
    client: ApolloClient<any>,
    message: ChatMessagesSubscriptionNode
  ) {
    client.writeFragment({
      id: `Chat:${message.chat.id}`,
      fragment: LAST_CHAT_MESSAGE_FRAGMENT,
      data: {
        messages: [
          {
            author: message.author,
            createdAt: message.createdAt,
            content: message.content,
            __typename: 'Message'
          }
        ],
        hasUnreadMessages: !hasChatSelected(message.chat.id),
        __typename: 'Chat'
      }
    });
  }
};

export default ChatsMenu;
