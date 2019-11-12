import {
  Party_CartItemsConnectionEdges,
  PartyCartItemStatus
} from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Button, Divider, Icon, Input, Table, Tag } from 'antd';
import React from 'react';
import { PaginationConfig } from 'antd/lib/table';
import { PARTY_CART_ITEMS_PAGE_SIZE } from './PartyCartItems';
import css from '@emotion/css';
import { callAll } from '@shared/functionUtils';
import useMedia from '@hooks/useMedia';

const TableStyles = css`
  .ant-pagination {
    margin-right: 16px;
  }
  .ant-table-thead > tr > th {
    position: sticky;
    top: 0;
    z-index: 2;
  }
  background: white;
  min-width: 600px;
`;

export type CartItem = DeepWithoutMaybe<Party_CartItemsConnectionEdges>;
export type CartItemActions =
  | PartyCartItemStatus.Accepted
  | PartyCartItemStatus.Rejected
  | PartyCartItemStatus.Pending;

function truncate(num, places) {
  return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
}
interface Props {
  cartItems: DeepWithoutMaybe<Party_CartItemsConnectionEdges[]>;
  loading: boolean;
  onCartItemUpdate: ({
    cartItem,
    newStatus
  }: {
    newStatus: CartItemActions;
    cartItem: CartItem;
  }) => void;
  onUserSearch: (query: string | undefined) => void;
  onStatusFilter: (statuses: PartyCartItemStatus[] | undefined) => void;
  numberOfCartItems: number;
  onPageChange: (newPage: number) => void;
  hasUserQueryApplied: boolean;
}
export default function PartyCartItemsTable({
  cartItems,
  loading,
  onCartItemUpdate,
  onUserSearch,
  onStatusFilter,
  numberOfCartItems,
  onPageChange,
  hasUserQueryApplied
}: Props) {
  function handleTableChange(_: PaginationConfig, sorter: any) {
    if (!sorter.status) return;
    sorter.status.length == 0
      ? onStatusFilter(undefined)
      : onStatusFilter(sorter.status);
  }

  const shouldTableBeSmall = useMedia('(max-width:800px)');

  return (
    <Table
      css={[TableStyles]}
      rowKey={cartItem => cartItem.node.id}
      size={shouldTableBeSmall ? 'small' : 'default'}
      pagination={{
        pageSize: PARTY_CART_ITEMS_PAGE_SIZE,
        hideOnSinglePage: true,
        total: numberOfCartItems,
        onChange: onPageChange
      }}
      dataSource={cartItems}
      loading={loading}
      onChange={handleTableChange}
    >
      <Table.Column<CartItem>
        title="Added By"
        key="addedby"
        filterIcon={
          <Icon
            type="search"
            style={{ color: hasUserQueryApplied ? '#1890ff' : undefined }}
          />
        }
        filterDropdown={() => <NameFilter onSearch={onUserSearch} />}
        render={(_, { node: { user } }) => (
          <span>
            {user.firstName} {user.lastName}
          </span>
        )}
      />
      <Table.Column<CartItem> title="What" key="what" render={renderWhat} />
      <Table.Column<CartItem>
        title="Quantity"
        key="quantity"
        render={renderQuantity}
      />
      <Table.Column<CartItem> title="Price" key="price" render={renderPrice} />
      <Table.Column<CartItem>
        title="Status"
        key="status"
        render={renderTag}
        filters={[
          {
            text: 'Pending',
            value: PartyCartItemStatus.Pending
          },
          {
            text: 'Accepted',
            value: PartyCartItemStatus.Accepted
          },
          {
            text: 'Rejected',
            value: PartyCartItemStatus.Rejected
          }
        ]}
      />
      <Table.Column<CartItem>
        title="Actions"
        key="actions"
        render={(_, cartItem) =>
          renderActions({
            item: cartItem,
            onAction: newStatus => onCartItemUpdate({ newStatus, cartItem })
          })
        }
      />
    </Table>
  );
}

type SimpleRenderer = (text: any, item: CartItem) => React.ReactNode;

const renderTag: SimpleRenderer = (_, { node: { status } }) => {
  switch (status) {
    case PartyCartItemStatus.Accepted:
      return <Tag color="green">Accepted</Tag>;
    case PartyCartItemStatus.Rejected:
      return <Tag color="red">Rejected</Tag>;
    case PartyCartItemStatus.Pending:
      return <Tag color="blue">Pending</Tag>;
    default:
      null;
  }
};

const renderQuantity: SimpleRenderer = (_, { node: { quantity } }) => (
  <span>{quantity}</span>
);

const renderPrice: SimpleRenderer = (_, { node: { price } }) => (
  <span>{truncate(price / 100, 2).toFixed(2)}</span>
);

const renderWhat: SimpleRenderer = (_, { node: { name } }) => (
  <span>{name}</span>
);

interface RenderActionsProps {
  onAction: (type: CartItemActions) => void;
  item: CartItem;
}
function renderActions({ item, onAction }: RenderActionsProps) {
  const {
    node: { status }
  } = item;
  switch (status) {
    case PartyCartItemStatus.Accepted:
      return (
        <React.Fragment>
          <a onClick={() => onAction(PartyCartItemStatus.Pending)}>
            Move to Pending
          </a>
          <Divider type="vertical" />
          <a onClick={() => onAction(PartyCartItemStatus.Rejected)}>Reject</a>
        </React.Fragment>
      );
    case PartyCartItemStatus.Pending:
      return (
        <React.Fragment>
          <a onClick={() => onAction(PartyCartItemStatus.Accepted)}>Accept</a>
          <Divider type="vertical" />
          <a onClick={() => onAction(PartyCartItemStatus.Rejected)}>Reject</a>
        </React.Fragment>
      );
    case PartyCartItemStatus.Rejected:
      return (
        <React.Fragment>
          <a onClick={() => onAction(PartyCartItemStatus.Accepted)}>Accept</a>
          <Divider type="vertical" />
          <a onClick={() => onAction(PartyCartItemStatus.Pending)}>
            Move to Pending
          </a>
        </React.Fragment>
      );
  }
}

interface NameFilterProps {
  onSearch: (query: string | undefined) => void;
}
function NameFilter({ onSearch }: NameFilterProps) {
  const [searchQuery, setSearchQuery] = React.useState<string | undefined>(
    undefined
  );

  return (
    <div style={{ padding: 8 }}>
      <Input
        value={searchQuery}
        placeholder="Search..."
        onChange={e => setSearchQuery(e.target.value)}
        style={{ width: 188, marginBottom: 8, display: 'block' }}
      />
      <Button
        type="primary"
        onClick={() => onSearch(searchQuery)}
        icon="search"
        size="small"
        style={{ width: 90, marginRight: 8 }}
      >
        Search
      </Button>
      <Button
        onClick={() => callAll(setSearchQuery, onSearch)(undefined)}
        size="small"
        style={{ width: 90 }}
      >
        Reset
      </Button>
    </div>
  );
}
