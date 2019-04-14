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
  style?: React.CSSProperties;
}

const MessageWrapper = styled.div`
  max-width: 700px;
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-gap: 12px;
  padding-left: 12px;
  padding-right: 12px;
`;

interface MessageInnerProps {
  isWithinBlock: boolean;
}

interface MessageProps {
  isSendByMe: boolean;
}

const MessageInnerWrapper = styled.div<MessageInnerProps>`
  margin-top: ${props => (props.isWithinBlock ? '4px' : '12px')};
  grid-column-start: 2;

  .ant-typography {
    display: block;
    margin-left: 4px;
    margin-bottom: 4px;
  }
`;

const Message = styled.div<MessageProps>`
  padding: 12px;
  box-sizing: border-box;
  display: inline-block;
  background: ${props => (props.isSendByMe ? '#1890ff' : 'white')};
  color: ${props => (props.isSendByMe ? 'white' : 'inherit')};
  border-top-right-radius: 1.3em;
  border-bottom-right-radius: 1.3em;
  word-break: break-all;
`;

const StandaloneBlockStyles = css`
  border-radius: 1.3em;
  border-radius: 1.3em;
`;

const LastInBlockStyles = css`
  border-bottom-left-radius: 1.3em;
`;
const FirstInBlockStyles = css`
  border-top-left-radius: 1.3em;
`;

const SendByMeStyles = css`
  margin-left: auto;
  .ant-avatar {
    display: none;
  }
  justify-content: space-between;
  grid-template-columns: 1fr auto;
  padding-left: 0;
`;

const ChatMessage: React.FC<Props> = ({
  message,
  isFirstInBlock,
  isLastInBlock,
  style
}) => {
  return (
    <div style={style}>
      <MessageWrapper
        className="message-wrapper"
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
          className="message-inner-wrapper"
          isWithinBlock={!isFirstInBlock}
        >
          {isFirstInBlock && (
            <Typography.Text type="secondary">
              {message.author.firstName}
            </Typography.Text>
          )}
          <Message
            css={
              isFirstInBlock && isLastInBlock
                ? StandaloneBlockStyles
                : isFirstInBlock
                ? FirstInBlockStyles
                : isLastInBlock
                ? LastInBlockStyles
                : {}
            }
            className="message-content"
            isSendByMe={message.isSendByMe}
          >
            {message.content}
            {message.isSendByMe ? 'BY ME' : 'NOT BY ME'}
          </Message>
        </MessageInnerWrapper>
      </MessageWrapper>
    </div>
  );
};

export default ChatMessage;
