import React from 'react';
import { PaginateChatsQueryEdges } from '@generated/graphql';
import ChatsListItemAvatarList from './ChatsListItemAvatarList';
import { Typography } from 'antd';
import ChatsListItemLastMessage from './ChatsListItemLastMessage';
import styled from '@emotion/styled';
import { NotWrappingTextStyles } from '@shared/styles';

interface Props {
  edge: PaginateChatsQueryEdges;
}

const ChatsListItemWrapper = styled.div`
  padding: 12px;
  width: 298px;
  display: flex;
  .ant-typography {
    margin-bottom: 0;
  }
  &:hover {
    background: #f5f5f5;
    cursor: pointer;
  }
`;

const InnerWrapper = styled.div`
  max-width: calc(100% - 50px);
  padding-left: 12px;
`;

const DateTitleWrapper = styled.div`
  display: flex;
  span:nth-of-type(2) {
    display: inline-block;
    white-space: nowrap;
    padding-left: 2px;
    margin-left: auto;
  }
`;

const ChatsListItem: React.FC<Props> = ({ edge: { node } }) => {
  return (
    <ChatsListItemWrapper>
      <ChatsListItemAvatarList userAvatarsData={node.members || []} />
      <InnerWrapper>
        <ChatsListItemLastMessage lastMessage={(node.messages || [])[0]}>
          <DateTitleWrapper>
            <Typography.Text css={[NotWrappingTextStyles]} ellipsis={true}>
              {node.party.title}
            </Typography.Text>
            <ChatsListItemLastMessage.MessageTimestamp />
          </DateTitleWrapper>
          <ChatsListItemLastMessage.MessageMain />
        </ChatsListItemLastMessage>
      </InnerWrapper>
    </ChatsListItemWrapper>
  );
};

export default ChatsListItem;
