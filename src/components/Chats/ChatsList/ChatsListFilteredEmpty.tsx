import React from 'react';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import styled from '@emotion/styled';
import { Empty, Typography } from 'antd';

const EmptyWrapper = styled.div`
  height: 100%;
  width: 100%;
  ${FlexBoxFullCenteredStyles};
  .img {
    display: block;
    margin: 0 auto;
  }
  text-align: center;
`;

interface Props {
  filterQuery: string;
}
const ChatsListFilteredEmpty: React.FC<Props> = ({ filterQuery }) => {
  return (
    <EmptyWrapper>
      <Empty
        description={
          <React.Fragment>
            No chats found with title containing
            <br />
            <Typography.Text type="danger">{filterQuery}</Typography.Text>
          </React.Fragment>
        }
      />
    </EmptyWrapper>
  );
};

export default ChatsListFilteredEmpty;
