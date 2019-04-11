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

const ChatsListItem: React.FC<Props & WithRouterProps> = ({
  edge: { node },
  router
}) => {
  return (
    <ChatsListItemWrapper
      onClick={handleListItemClick}
      className={isSelected() ? 'selected' : ''}
    >
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

  function handleListItemClick() {
    const url = `/chat?chat=${node.id}`;
    router && router.push(url, url, { shallow: true });
  }
  function isSelected() {
    return router && router.query != null && router.query.chat === node.id;
  }
};

export default withRouter(ChatsListItem);
