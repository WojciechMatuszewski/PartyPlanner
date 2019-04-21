import React from 'react';
import { PaginateChatsQueryEdges } from '@generated/graphql';
import ChatsListItem from './ChatsListItem';
import { ChatsContext } from '@pages/chats';
import styled from '@emotion/styled';
import { useFuzzySearch } from '@hooks/useFuzzySearch';

interface RenderProps {
  hasResultsAfterFiltering: boolean;
}
interface Props {
  chats: PaginateChatsQueryEdges[];
  filterQuery: string;
  children: (props: RenderProps) => React.ReactNode;
}

const ChatsListWrapper = styled.ul`
  padding: 0;
  flex: 1;
`;

const ChatsList: React.FC<Props> = ({ chats, filterQuery, children }) => {
  const { currentlySelectedChatId } = React.useContext(ChatsContext);

  const filteredChats = useFuzzySearch(filterQuery, chats, {
    keys: ['node.party.title'] as any,
    shouldSort: true,
    tokenize: true
  });

  return (
    <ChatsListWrapper>
      {filteredChats.map(chat => (
        <ChatsListItem
          selected={currentlySelectedChatId === chat.node.id}
          key={chat.node.id}
          edge={chat}
        />
      ))}
      {children({ hasResultsAfterFiltering: filteredChats.length > 0 })}
    </ChatsListWrapper>
  );
};

export default React.memo(ChatsList);
