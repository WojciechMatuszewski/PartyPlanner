import React from 'react';
import styled from '@emotion/styled';
import { PaginateMessagesQueryNode } from '@generated/graphql';
import UserAvatar from '@components/UserDefaultAvatar';
import { Typography, Tooltip } from 'antd';
import css from '@emotion/css';
import OptimisticStatusDot from './OptimisticStatusDot';
import moment from 'moment';

const MESSAGE_MOMENT_FORMAT = 'Do MMMM HH:mm';

interface Props {
  isFirstInBlock: boolean;
  isLastInBlock: boolean;
  message: PaginateMessagesQueryNode;
  style?: React.CSSProperties;
  index: number;
}

interface MessageWrapperProps {
  isFirstInBlock: boolean;
}

interface MessageMessageProps {
  isFirstInBlock: boolean;
  isLastInBlock: boolean;
}

const BaseMessageWrapperStyles = css`
  max-width: 700px;
`;

const BaseMessageInnerWrapperStyles = css`
  display: grid;
  margin-left: auto;
  grid-template-rows: 1fr 1fr;
`;

const BaseMessageStyles = css`
  padding: 12px;
  box-sizing: border-box;
  display: inline-block;
  word-break: break-all;
`;

const ChatMessage: React.FC<Props> = props => {
  return props.message.isSendByMe ? (
    <MyMessage {...props} />
  ) : (
    <OtherUserMessage {...props} />
  );
};

const OtherChatMessageWrapper = styled.div<MessageWrapperProps>`
  ${BaseMessageWrapperStyles};
  margin-right: auto;
  padding-right: 12px;
  margin-top: ${props => (props.isFirstInBlock ? '12px' : '2px')};
  padding-left: 0;
  padding-left: 12px;
`;

const OtherMessageInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  .user-avatar {
    margin-right: auto;
    align-self: flex-end;
    grid-column-start: 1;
    grid-column-end: 1;
  }
`;
const OtherUserMessageMessage = styled.div<MessageMessageProps>`
  ${BaseMessageStyles};
  background: #f1f0f0;
  border-top-right-radius: 1.3em;
  border-bottom-right-radius: 1.3em;
  border-top-left-radius: ${props =>
    props.isFirstInBlock ? '1.3em' : '0.4em'};
  border-bottom-left-radius: ${props =>
    props.isLastInBlock ? '1.3em' : '0.4em'};
`;

const OtherMessageAuthor = styled.div`
  margin-left: 12px;
`;

const OtherUserMessage: React.FC<Props> = props => {
  return (
    <div style={props.style}>
      <OtherChatMessageWrapper isFirstInBlock={props.isFirstInBlock}>
        <OtherMessageInnerWrapper>
          {props.isLastInBlock && (
            <UserAvatar
              userData={props.message.author}
              className="user-avatar"
            />
          )}
          <div
            style={{
              gridColumnStart: 2,
              gridColumnEnd: 3
            }}
          >
            {props.isFirstInBlock && (
              <OtherMessageAuthor>
                <Typography.Text type="secondary">
                  {props.message.author.firstName}
                </Typography.Text>
              </OtherMessageAuthor>
            )}
            <Tooltip
              title={moment(props.message.createdAt).format(
                MESSAGE_MOMENT_FORMAT
              )}
            >
              <OtherUserMessageMessage
                isFirstInBlock={props.isFirstInBlock}
                isLastInBlock={props.isLastInBlock}
              >
                {props.message.content}
              </OtherUserMessageMessage>
            </Tooltip>
          </div>
        </OtherMessageInnerWrapper>
      </OtherChatMessageWrapper>
    </div>
  );
};

const MyMessageWrapper = styled.div<MessageWrapperProps>`
  ${BaseMessageWrapperStyles};
  margin-left: auto;
  padding-left: 12px;
  margin-top: ${props => (props.isFirstInBlock ? '12px' : '2px')};
  padding-right: 0;
`;
const MyMessageInnerWrapper = styled.div`
  ${BaseMessageInnerWrapperStyles};
  grid-template-columns: 1fr 16px;
`;

const MyMessageMessage = styled.div<MessageMessageProps>`
  ${BaseMessageStyles};
  background: #1890ff;
  color: white;
  margin-left: auto;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  border-top-left-radius: 1.3em;
  border-bottom-left-radius: 1.3em;
  border-top-right-radius: ${props =>
    props.isFirstInBlock ? '1.3em' : '0.4em'};
  border-bottom-right-radius: ${props =>
    props.isLastInBlock ? '1.3em' : '0.4em'};
`;

const MyMessageAuthor = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-end: 1;
  text-align: right;
  margin-right: 12px;
`;

const MyMessage: React.FC<Props> = props => {
  return (
    <div style={props.style}>
      <MyMessageWrapper isFirstInBlock={props.isFirstInBlock}>
        <MyMessageInnerWrapper>
          {props.isFirstInBlock && (
            <MyMessageAuthor>
              <Typography.Text type="secondary">
                {props.message.author.firstName}
              </Typography.Text>
            </MyMessageAuthor>
          )}
          <Tooltip
            title={moment(props.message.createdAt).format(
              MESSAGE_MOMENT_FORMAT
            )}
          >
            <MyMessageMessage
              isFirstInBlock={props.isFirstInBlock}
              isLastInBlock={props.isLastInBlock}
            >
              {props.message.content}
            </MyMessageMessage>
          </Tooltip>
          <OptimisticStatusDot
            hasOptimisticError={props.message.hasOptimisticError}
            optimisticallyAdded={props.message.optimisticallyAdded}
            optimisticallyCreated={props.message.optimisticallyCreated}
          />
        </MyMessageInnerWrapper>
      </MyMessageWrapper>
    </div>
  );
};

export default ChatMessage;
