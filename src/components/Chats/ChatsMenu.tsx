import React from 'react';
import useMedia from '@hooks/useMedia';
import {
  PaginateChatsQueryQuery,
  PaginateChatsQueryEdges,
  PaginateChatsQueryPageInfo,
  PaginateChatsQueryVariables,
  PaginateUsersQueryQuery,
  PaginateChatsQueryDocument,
  PaginateChatsQueryComponent,
  usePaginateMessagesQuery,
  useChatMessagesSubscription
} from '@generated/graphql';
import ChatSideNavigation from './ChatSideNavigation';
import ChatsListSearch from './ChatsList/ChatsListSearch';
import ChatsList from './ChatsList/ChatsList';
import css from '@emotion/css';
import { ChatsContext } from '@pages/chats';
import ChatsListFilteredEmpty from './ChatsList/ChatsListFilteredEmpty';
import ChatSectionLoading from './ChatSectionLoading';
import { LAST_CHAT_MESSAGE_FRAGMENT } from '@graphql/fragments';

interface Props {
  initialChatsData: PaginateChatsQueryQuery;
  userId: string;
}

const ChatsMenu: React.FC<Props> = props => {
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
        client.writeFragment({
          id: `Chat:${data.message.node.chat.id}`,
          fragment: LAST_CHAT_MESSAGE_FRAGMENT,
          data: {
            messages: [
              {
                author: data.message.node.author,
                createdAt: data.message.node.createdAt,
                content: data.message.node.content,
                __typename: 'Message'
              }
            ],
            hasUnreadMessages:
              currentlySelectedChatId !== data.message.node.chat.id,
            __typename: 'Chat'
          }
        });
      } catch (e) {}
      // check if chat exists in cache
      // append new message, mark as unread if needed
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
        {({ data, loading, error }) => {
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
};

export default ChatsMenu;
