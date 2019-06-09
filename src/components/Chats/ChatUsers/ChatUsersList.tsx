import React from 'react';
import { PaginateUsersQueryEdges, UserStatus } from '@generated/graphql';
import ChatUser from './ChatUser';
import styled from '@emotion/styled';
import EmptySection from '@components/UI/EmptySection';
import css from '@emotion/css';
import { FlexBoxFullCenteredStyles } from '@shared/styles';

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
      <EmptySection
        image="/static/invite-others.svg"
        title="No other users"
        description="Invite others to populate this area!"
        emotionCSS={css`
          margin: auto;
          height: 100%;
          ${FlexBoxFullCenteredStyles};
        `}
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
