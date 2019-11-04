import {
  Party_CartItemsConnectionEdges,
  PartyCartItemStatus
} from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Button, Divider, Icon, Input, Table, Tag } from 'antd';
import React from 'react';
import { PaginationConfig } from 'antd/lib/table';

export type CartItem = DeepWithoutMaybe<Party_CartItemsConnectionEdges>;
export type CartItemActions =
  | PartyCartItemStatus.Accepted
  | PartyCartItemStatus.Rejected
  | PartyCartItemStatus.Pending;

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
}
export default function PartyCartItemsTable({
  cartItems,
  loading,
  onCartItemUpdate,
  onUserSearch,
  onStatusFilter
}: Props) {
  function handleTableChange(_: PaginationConfig, sorter: any) {
    sorter.status.length == 0
      ? onStatusFilter(undefined)
      : onStatusFilter(sorter.status);
  }

  return (
    <Table
      dataSource={cartItems}
      loading={loading}
      onChange={handleTableChange}
    >
      <Table.Column<CartItem>
        title="Added By"
        key="addedby"
        filterIcon={<Icon type="search" />}
        filterDropdown={() => (
          <NameFilter
            onSearch={onUserSearch}
            onClear={() => onUserSearch(undefined)}
          />
        )}
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
  <span>{price}</span>
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
  onClear: VoidFunction;
}
function NameFilter({ onSearch, onClear }: NameFilterProps) {
  const searchQueryRef = React.useRef<string | undefined>(undefined);

  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder="Search..."
        onChange={e => (searchQueryRef.current = e.target.value)}
        style={{ width: 188, marginBottom: 8, display: 'block' }}
      />
      <Button
        type="primary"
        onClick={() => onSearch(searchQueryRef.current)}
        icon="search"
        size="small"
        style={{ width: 90, marginRight: 8 }}
      >
        Search
      </Button>
      <Button onClick={onClear} size="small" style={{ width: 90 }}>
        Reset
      </Button>
    </div>
  );
}
