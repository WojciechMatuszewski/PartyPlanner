import React from 'react';
import { PaginateUsersQueryEdges } from '@generated/graphql';
import ChatUser from './ChatUser';
import styled from '@emotion/styled';

interface Props {
  chatUsers: PaginateUsersQueryEdges[];
}

const ChatUsersWrapper = styled.ul`
  padding: 0;
  margin-top: 1em;
`;

const ChatUsersList: React.FC<Props> = ({ chatUsers }) => {
  return (
    <ChatUsersWrapper>
      {chatUsers.map(chatUser => (
        <ChatUser key={chatUser.node.id} chatUser={chatUser.node} />
      ))}
    </ChatUsersWrapper>
  );
};

export default ChatUsersList;
