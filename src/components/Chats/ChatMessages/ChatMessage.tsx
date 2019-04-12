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

interface MessageInnerProps {
  isWithinBlock: boolean;
  shouldAddLeftPadding: boolean;
}

const MessageInnerWrapper = styled.div<MessageInnerProps>`
  width: 100%;
  margin-top: ${props => (props.isWithinBlock ? '4px' : '12px')};
  padding-left: ${props => (props.shouldAddLeftPadding ? '44px' : 0)};
  .ant-typography {
    display: block;
    margin-left: 4px;
    margin-bottom: 4px;
  }
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

const ChatMessage: React.FC<Props> = ({
  message,
  isFirstInBlock,
  isLastInBlock
}) => {
  return (
    <MessageWrapper
      className="message"
      css={message.isSendByMe ? SendByMeStyles : ''}
    >
      {isLastInBlock && (
        <UserAvatar
          userData={message.author}
          css={css`
            margin-right: 12px;
            align-self: flex-end;
          `}
        />
      )}

      <MessageInnerWrapper
        shouldAddLeftPadding={!isLastInBlock}
        isWithinBlock={!isFirstInBlock}
      >
        {isFirstInBlock && (
          <Typography.Text type="secondary">
            {message.author.firstName}
          </Typography.Text>
        )}
        <Message className="message-content">{message.content}</Message>
      </MessageInnerWrapper>
    </MessageWrapper>
  );
};

export default ChatMessage;
