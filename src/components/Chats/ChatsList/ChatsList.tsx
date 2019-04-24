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
          if (a.node.hasUnreadMessages && b.node.hasUnreadMessages) return 0;
          if (!a.node.hasUnreadMessages && !b.node.hasUnreadMessages) return 0;
          if (a.node.hasUnreadMessages && !b.node.hasUnreadMessages) return -1;
          return 1;
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
};

export default React.memo(ChatsList);
