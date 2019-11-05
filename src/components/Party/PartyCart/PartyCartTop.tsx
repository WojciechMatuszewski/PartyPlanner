import styled from '@emotion/styled';
import { Skeleton, Typography, Statistic } from 'antd';
import React from 'react';
import gql from 'graphql-tag';
import { useParty_CartCost } from '@generated/graphql';
import { hasGraphqlData, handleRefetch } from '@shared/graphqlUtils';
import GraphqlInlineError from '@components/GraphqlInlineError';

const TopHeader = styled.header`
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  .img-wrapper {
    height: 300px;
    width: 60%;
    padding: 12px;
    background: rgba(24, 144, 255, 0.1);
    img {
      display: block;
      max-height: 100%;
      width: auto;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    .img-wrapper {
      width: 100%;
    }
    border-bottom: 0;
  }
`;

const RightSideWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const PARTY_CART_COST_QUERY = gql`
  query Party_CartCost($id: ID!) {
    partyCartCost(id: $id)
  }
`;

interface Props {
  partyTitle: string;
  cartId: string;
}
export default function PartyCartTop({ partyTitle, cartId }: Props) {
  // probably some kind of query here??

  const { data, loading, error, refetch } = useParty_CartCost({
    variables: { id: cartId }
  });

  if (error)
    return (
      <TopHeader>
        <div className="img-wrapper">
          <img src="/static/wallet.svg" />
        </div>
        <RightSideWrapper style={{ margin: '0 auto' }}>
          <GraphqlInlineError.WithButton
            style={{ padding: 0 }}
            onRetry={() => handleRefetch(refetch)}
            loading={loading}
          />
        </RightSideWrapper>
      </TopHeader>
    );

  if (loading || !hasGraphqlData(data, ['partyCartCost']))
    return (
      <TopHeader>
        <div className="img-wrapper">
          <img src="/static/wallet.svg" />
        </div>
        <RightSideWrapper>
          <Skeleton />
        </RightSideWrapper>
      </TopHeader>
    );

  return (
    <TopHeader>
      <div className="img-wrapper">
        <img src="/static/wallet.svg" />
      </div>
      <RightSideWrapper>
        <Typography.Title level={3}>{partyTitle}s' cart</Typography.Title>
        <Statistic
          title="Estimated cost (PLN)"
          value={data.partyCartCost}
          precision={2}
        />
      </RightSideWrapper>
    </TopHeader>
  );
}
