import React from 'react';
import { PaginateChatsQueryEdges } from '@generated/graphql';
import ChatsListItemAvatarList from './ChatsListItemAvatarList';
import { Typography } from 'antd';
import ChatsListItemLastMessage from './ChatsListItemLastMessage';
import styled from '@emotion/styled';
import {
  NotWrappingTextStyles,
  FlexBoxHorizontallyCenteredStyles
} from '@shared/styles';
import { WithRouterProps, withRouter } from 'next/router';
import { useApolloClient } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import { cond } from 'ramda';

interface Props {
  edge: PaginateChatsQueryEdges;
  selected: boolean;
}

interface StyleProps {
  hasUnreadMessages: boolean;
}

const ChatsListItemWrapper = styled.li<StyleProps>`
  padding: 12px;
  display: flex;
  .chat-title {
    color: rgba(0, 0, 0, 0.8);
  }
  .ant-typography {
    margin-bottom: 0;
    font-weight: ${props => (props.hasUnreadMessages ? 'bold' : 'inherit')};
    color: ${props =>
      props.hasUnreadMessages ? 'rgba(0, 0, 0, 0.8)' : 'auto'};
  }
  &:hover {
    cursor: pointer;
  }
  &:active,
  &:hover {
    background: #f5f5f5;
  }
  &.selected {
    background: #e6f7ff;
  }
`;

const InnerWrapper = styled.div`
  max-width: calc(100% - 50px);
  padding-left: 12px;
  ${FlexBoxHorizontallyCenteredStyles};
  flex-direction: column;
  flex: 1;
`;

const DateTitleWrapper = styled.div`
  display: flex;
  span:nth-of-type(2) {
    display: inline-block;
    white-space: nowrap;
    padding-left: 12px;
    margin-left: auto;
  }
`;

const ChatsListItem: React.FC<Props & WithRouterProps> = ({
  edge: { node },
  router,
  selected
}) => {
  const apolloClient = useApolloClient();

  React.useEffect(() => {
    if (selected) markAsReadThread();
  }, [selected]);

  return (
    <ChatsListItemWrapper
      hasUnreadMessages={node.hasUnreadMessages}
      onClick={cond([[shouldSwitchUrl, changeUrlToCorrectChat]])}
      className={selected ? 'selected' : ''}
    >
      <ChatsListItemAvatarList userAvatarsData={node.members || []} />
      <InnerWrapper>
        <ChatsListItemLastMessage lastMessage={(node.messages || [])[0]}>
          <DateTitleWrapper>
            <Typography.Text
              css={[NotWrappingTextStyles]}
              ellipsis={true}
              className="chat-title"
            >
              {node.party.title}
            </Typography.Text>
            <ChatsListItemLastMessage.MessageTimestamp />
          </DateTitleWrapper>
          <ChatsListItemLastMessage.MessageMain />
        </ChatsListItemLastMessage>
      </InnerWrapper>
    </ChatsListItemWrapper>
  );

  function shouldSwitchUrl() {
    return !selected;
  }

  function changeUrlToCorrectChat() {
    const url = `/chats?chat=${node.id}`;
    router && router.push(url, url, { shallow: true });
  }

  function markAsReadThread() {
    apolloClient.writeFragment({
      id: `Chat:${node.id}`,
      fragment: gql`
        fragment IS_UNREAD_THREAD on Chat {
          hasUnreadMessages @client
        }
      `,
      data: {
        hasUnreadMessages: false,
        __typename: 'Chat'
      }
    });
  }
};

export default withRouter(ChatsListItem);
