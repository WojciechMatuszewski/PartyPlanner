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

  // const initiallySortedByNoMessages = React.useRef<boolean>(false);

  return (
    <ChatsListWrapper data-testid="chatsList">
      {chats.map(chat => (
        <ChatsListItem
          selected={currentlySelectedChatId === chat.node.id}
          key={chat.node.id}
          edge={chat}
        />
      ))}
    </ChatsListWrapper>
  );

  // TODO: strange things happening here
  // function sortByNoMessages(chats: PaginateChatsQueryEdges[]) {
  //   if (initiallySortedByNoMessages.current) return chats;
  //   initiallySortedByNoMessages.current = true;
  //   return chats.sort((a, b) => {
  //     return (
  //       sortAgainstBothNoMessages(a, b) || sortAgainstMixedNoMessages(a, b) || 0
  //     );
  //   });
  // }

  // function sortAgainstBothNoMessages(
  //   a: PaginateChatsQueryEdges,
  //   b: PaginateChatsQueryEdges
  // ) {
  //   return a.node.messages ? (b.node.messages ? 0 : 1) : -1;
  // }

  // function sortAgainstMixedNoMessages(
  //   a: PaginateChatsQueryEdges,
  //   b: PaginateChatsQueryEdges
  // ) {
  //   return a.node.messages!.length == 0
  //     ? b.node.messages!.length == 0
  //       ? 0
  //       : -1
  //     : 1;
  // }
};

export default React.memo(ChatsList);
