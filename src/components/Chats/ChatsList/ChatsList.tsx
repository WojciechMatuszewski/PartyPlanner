import React from 'react';
import { PaginateChatsQueryEdges } from '@generated/graphql';
import ChatsListItem from './ChatsListItem';
import { ChatsContext } from '@pages/chats';
import styled from '@emotion/styled';

interface Props {
  chats: PaginateChatsQueryEdges[];
}

const ChatsListWrapper = styled.ul`
  padding: 0;
  flex: 1;
`;

const ChatsList: React.FC<Props> = ({ chats }) => {
  const { currentlySelectedChatId } = React.useContext(ChatsContext);

  return (
    <ChatsListWrapper>
      {chats
        .sort((a, b) => {
          // TODO: proper sorting
          return byHasUnread(a, b) || byLastMessageTime(a, b);
        })
        .map(chat => (
          <ChatsListItem
            selected={currentlySelectedChatId === chat.node.id}
            key={chat.node.id}
            edge={chat}
          />
        ))}
    </ChatsListWrapper>
  );

  function byHasUnread(a: any, b: any) {
    return a.node.hasUnreadMessages ? (b.node.hasUnreadMessages ? 0 : -1) : 0;
  }

  function byLastMessageTime(a: any, b: any) {
    return new Date(a.node.messages[0].createdAt).getTime() >
      new Date(b.node.messages[0].createdAt).getTime()
      ? -1
      : 1;
  }
};

export default React.memo(ChatsList);
