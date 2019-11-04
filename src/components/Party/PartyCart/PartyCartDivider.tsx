import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'antd';
import PartyCartAddItem from './AddItem/PartyCartAddItem';

const DividerWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  h4 {
    margin: 0;
  }
`;
interface Props {
  cartId: string;
}
export default function PartyCartDivider({ cartId }: Props) {
  return (
    <DividerWrapper>
      <Typography.Title level={4}>Controls</Typography.Title>
      <PartyCartAddItem cartId={cartId} />
    </DividerWrapper>
  );
}
