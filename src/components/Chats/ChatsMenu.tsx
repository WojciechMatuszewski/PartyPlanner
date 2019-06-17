import React from 'react';
import useMedia from '@hooks/useMedia';
import {
  PaginateChatsQueryEdges,
  PaginateChatsQueryComponent,
  useChatMessagesSubscription,
  ChatMessagesSubscriptionNode,
  PaginateChatsQueryVariables,
  ChatOrderByInput
} from '@generated/graphql';
import ChatSideNavigation from './ChatSideNavigation';
import ChatsListSearch from './ChatsList/ChatsListSearch';
import ChatsList from './ChatsList/ChatsList';
import css from '@emotion/css';
import { ChatsContext } from '@pages/party-chats';

import ChatSectionLoading from './ChatSectionLoading';
import { LAST_CHAT_MESSAGE_FRAGMENT } from '@graphql/fragments';
import { ApolloClient } from 'apollo-boost';
import {
  updateChatThreadMessages,
  createPaginateMessagesQueryVariables
} from './shared';

import { Button } from 'antd';
import { handleRefetch } from '@shared/graphqlUtils';
import GraphqlInlineError from '@components/GraphqlInlineError';
import EmptySection from '@components/UI/EmptySection';

export const CHATS_MENU_PAGE_SIZE = 10;
export const CHATS_MENU_ORDER_BY = ChatOrderByInput.CreatedAtAsc;

const ChatsMenu: React.FC = () => {
  const { currentlyLoggedUserData, currentlySelectedChatId } = React.useContext(
    ChatsContext
  );
  const [filterQuery, setFilterQuery] = React.useState<string>('');
  const shouldDisplayDrawer = useMedia('(max-width: 992px)');
  const getQueryVariables = React.useCallback((): PaginateChatsQueryVariables => {
    return {
      where: {
        party: {
          members_some: { id: currentlyLoggedUserData.id },
          normalizedTitle_contains: filterQuery
            .toLocaleLowerCase()
            .replace(/[ -.,]/g, '')
        }
      },
      first: CHATS_MENU_PAGE_SIZE,
      orderBy: CHATS_MENU_ORDER_BY
    };
  }, [currentlyLoggedUserData, filterQuery]);

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
      siderProps={{ width: 340 }}
    >
      <ChatsListSearch onChange={handleOnInputChange} />
      <PaginateChatsQueryComponent variables={getQueryVariables()}>
        {({ data, loading, error, refetch }) => {
          if (error)
            return (
              <GraphqlInlineError>
                <Button
                  data-testid="chatsMenuRefetchButton"
                  onClick={async () =>
                    await handleRefetch(refetch, getQueryVariables())
                  }
                >
                  Try again
                </Button>
              </GraphqlInlineError>
            );

          if (loading || !data || !data.chatsConnection)
            return <ChatSectionLoading />;

          if (!loading && data && data.chatsConnection.edges.length === 0)
            return (
              <EmptySection
                style={{ margin: 'auto' }}
                title="No chats found"
                description={`Could not find chats named: ${filterQuery}`}
              />
            );

          return (
            <ChatsList
              chats={data.chatsConnection.edges as PaginateChatsQueryEdges[]}
            />
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
