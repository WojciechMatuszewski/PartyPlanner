import React from 'react';
import { PaginateUsersQueryEdges, UserStatus } from '@generated/graphql';
import ChatUser from './ChatUser';
import styled from '@emotion/styled';
import ChatEmptySection from '../ChatEmptySection';

interface Props {
  chatUsers: PaginateUsersQueryEdges[];
}

const ChatUsersWrapper = styled.ul`
  padding: 0;
  margin-top: 1em;
`;

const ChatUsersList: React.FC<Props> = ({ chatUsers }) => {
  if (chatUsers.length == 0)
    return (
      <ChatEmptySection
        image="../static/invite-others.svg"
        title="No other users"
        description="Invite others to populate this area!"
      />
    );

  return (
    <ChatUsersWrapper data-testid="chatUsersList">
      {chatUsers
        .sort((a, b) =>
          a.node.status == UserStatus.Online
            ? b.node.status == UserStatus.Online
              ? 0
              : -1
            : 1
        )
        .map(chatUser => (
          <ChatUser key={chatUser.node.id} chatUser={chatUser.node} />
        ))}
    </ChatUsersWrapper>
  );
};

export default React.memo(ChatUsersList);
