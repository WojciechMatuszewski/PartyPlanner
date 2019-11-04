import PartyCartItemsTable, {
  CartItem,
  CartItemActions
} from './PartyCartItemsTable';

import {
  Party_CartItemsConnectionQuery,
  Party_CartItemsConnectionVariables,
  useParty_CartItemsConnection,
  useParty_UpdatePartyCartItem
} from '@generated/graphql';
import { PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT } from '@graphql/fragments';
import { DeepWithoutMaybe, isLoadingInitially } from '@shared/graphqlUtils';
import { message, Modal } from 'antd';
import gql from 'graphql-tag';
import React from 'react';
import { BehaviorSubject } from 'rxjs';
import { noop } from 'lodash';

const variablesSubject = new BehaviorSubject<
  Party_CartItemsConnectionVariables
>({});

export function getPartyCartItemsVariables() {
  return variablesSubject.getValue();
}
export const PARTY_CART_ITEMS_CONNECTION_QUERY = gql`
  query Party_CartItemsConnection(
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
          ...PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT
        }
      }
    }
  }
  ${PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT}
`;

export const UPDATE_PARTY_CART_ITEM_MUTATION = gql`
  mutation Party_UpdatePartyCartItem(
    $data: PartyCartItemUpdateInput!
    $where: PartyCartItemWhereUniqueInput!
  ) {
    updatePartyCartItem(data: $data, where: $where) {
      id
    }
  }
`;

interface Props {
  cartId: string;
}
export default function PartyCartItems({ cartId }: Props) {
  const lastUpdateCartItemPayload = React.useRef<
    Parameters<typeof handleCartItemUpdate>[0] | undefined
  >(undefined);

  const [statusFilter, setStatusFilter] = React.useState<any[] | undefined>(
    undefined
  );

  const [userQuery, setUserQuery] = React.useState<string | undefined>(
    undefined
  );

  const {
    data,
    loading,
    variables,
    networkStatus
  } = useParty_CartItemsConnection({
    variables: {
      where: {
        cart: {
          id: cartId
        },
        status_in: statusFilter,
        user: {
          OR: [
            { firstName_contains: userQuery },
            { lastName_contains: userQuery }
          ]
        }
      }
    },
    notifyOnNetworkStatusChange: true
  });

  const [
    updateCartItem,
    { loading: updateLoading }
  ] = useParty_UpdatePartyCartItem({
    onCompleted: () => message.success('Successfully updated an item'),
    onError: () =>
      Modal.confirm({
        centered: true,
        onOk: () =>
          handleCartItemUpdate(lastUpdateCartItemPayload.current as any),
        title: 'Something went wrong',
        content: 'Something went wrong and we could not finish this operation',
        okText: 'Try again',
        cancelText: 'Close'
      })
  });

  function handleCartItemUpdate({
    cartItem,
    newStatus
  }: {
    newStatus: CartItemActions;
    cartItem: CartItem;
  }) {
    lastUpdateCartItemPayload.current = { cartItem, newStatus };
    try {
      updateCartItem({
        variables: {
          where: {
            id: cartItem.node.id
          },
          data: {
            status: newStatus
          }
        },
        refetchQueries: [
          {
            query: PARTY_CART_ITEMS_CONNECTION_QUERY,
            variables: variables
          }
        ]
      });
    } catch (e) {
      // e
    }
  }

  React.useEffect(() => {
    variablesSubject.next(variables);
  }, [variables]);

  if (isLoadingInitially(networkStatus))
    return (
      <PartyCartItemsTable
        cartItems={[]}
        loading={loading}
        onCartItemUpdate={noop}
        onStatusFilter={noop}
        onUserSearch={noop}
      />
    );

  const {
    partyCartItemsConnection: { edges }
  } = data as DeepWithoutMaybe<Party_CartItemsConnectionQuery>;

  return (
    <PartyCartItemsTable
      onStatusFilter={setStatusFilter}
      onUserSearch={setUserQuery}
      cartItems={edges}
      loading={loading || updateLoading}
      onCartItemUpdate={handleCartItemUpdate}
    />
  );
}
