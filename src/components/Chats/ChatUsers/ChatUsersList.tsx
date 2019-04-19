import React from 'react';
import { PaginateUsersQueryEdges, UserStatus } from '@generated/graphql';
import ChatUser from './ChatUser';
import styled from '@emotion/styled';
import { PoseGroup } from 'react-pose';
import {
  map as RamdaMap,
  pluck,
  compose,
  prop,
  symmetricDifference,
  lensProp,
  pick,
  assocPath,
  path
} from 'ramda';

// import symmetricDifference from 'ramda/es/symmetricDifference';

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
      {chatUsers
        .sort((a, b) => {
          return a.node.status == UserStatus.Online
            ? b.node.status == UserStatus.Online
              ? 0
              : -1
            : 1;
        })
        .map(chatUser => (
          <ChatUser key={chatUser.node.id} chatUser={chatUser.node} />
        ))}
    </ChatUsersWrapper>
  );
};

export default ChatUsersList;
