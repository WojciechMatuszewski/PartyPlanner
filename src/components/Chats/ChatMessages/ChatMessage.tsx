import React from 'react';
import styled from '@emotion/styled';
import { PaginateMessagesQueryNode } from '@generated/graphql';
import UserAvatar from '@components/UserDefaultAvatar';
import { Typography } from 'antd';
import css from '@emotion/css';

interface Props {
  isFirstInBlock: boolean;
  isLastInBlock: boolean;
  message: PaginateMessagesQueryNode;
}

const MessageWrapper = styled.div`
  max-width: 700px;
  display: flex;
`;

const MessageInnerWrapper = styled.div`
  width: 100%;
`;

const Message = styled.div`
  background: white;
  border-radius: 10px;
  padding: 12px;
  box-sizing: border-box;
`;

const SendByMeStyles = css`
  margin-left: auto;
  .ant-avatar {
    display: none;
  }
  .message-content {
    background: #1890ff;
    color: white;
  }
`;

const ChatMessage: React.FC<Props> = ({ message, isFirstInBlock }) => {
  return (
    <MessageWrapper
      className="message"
      css={message.isSendByMe ? SendByMeStyles : ''}
    >
      <UserAvatar
        userData={message.author}
        css={css`
          margin-right: 12px;
          align-self: flex-end;
        `}
      />
      <MessageInnerWrapper>
        {isFirstInBlock && (
          <Typography.Text>{message.author.firstName}</Typography.Text>
        )}
        <Message className="message-content">{message.content}</Message>
      </MessageInnerWrapper>
    </MessageWrapper>
  );
};

export default ChatMessage;
