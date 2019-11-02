import GraphqlLoading from '@components/GraphqlLoading';
import {
  PartyCartItemStatus,
  useParty_PendingCartItemsConnection
} from '@generated/graphql';
import { hasGraphqlData } from '@shared/graphqlUtils';
import { Divider, Empty, Table } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

export const PARTY_CART_PENDING_ITEMS_CONNECTION_QUERY = gql`
  query Party_PendingCartItemsConnection(
    $where: PartyCartItemWhereInput
    $orderBy: PartyCartItemOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    partyCartItemsConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          price
          quantity
          user {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

const TABLE_COLUMNS = [
  {
    title: 'By',
    dataIndex: 'by'
  },
  {
    title: 'What',
    dataIndex: 'what'
  },
  {
    title: 'Price',
    dataIndex: 'price'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity'
  }
];
interface Props {
  cartId: string;
}
export default function PartyCartPending({ cartId }: Props) {
  const { data, loading } = useParty_PendingCartItemsConnection({
    variables: {
      where: {
        cart: { id: cartId },
        status: PartyCartItemStatus.Pending
      }
    }
  });

  if (loading || !hasGraphqlData(data, ['partyCartItemsConnection']))
    return <GraphqlLoading loading={true} isLoadingInitially={true} />;

  const {
    partyCartItemsConnection: { edges }
  } = data;

  return (
    <Table
      columns={TABLE_COLUMNS.concat({
        title: 'Actions',
        dataIndex: 'actions',
        render: () => (
          <span>
            <a>Accept</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        )
      })}
      useFixedHeader={true}
      locale={{ emptyText: <Empty description="No pending items to accept" /> }}
      dataSource={edges.map(({ node }) => ({
        by: `${node.user.firstName} ${node.user.lastName}`,
        what: node.name,
        price: node.price,
        quantity: node.quantity
      }))}
    />
  );
}
