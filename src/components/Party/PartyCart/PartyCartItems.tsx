import PartyCartItemsTable, {
  CartItem,
  CartItemActions
} from './PartyCartItemsTable';

import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
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
        startCursor
      }
      edges {
        node {
          ...PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT
        }
      }
    }
    pagination: partyCartItemsConnection(where: $where) {
      aggregate {
        count
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

export const PARTY_CART_ITEMS_PAGE_SIZE = 1;

interface Props {
  cartId: string;
}
export default function PartyCartItems({ cartId }: Props) {
  const lastUpdateCartItemPayload = React.useRef<
    Parameters<typeof handleCartItemUpdate>[0] | undefined
  >(undefined);

  const currentPaginationPage = React.useRef<number>(1);

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
    networkStatus,
    refetch
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
      },
      first: PARTY_CART_ITEMS_PAGE_SIZE,
      skip: undefined,
      last: undefined
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
        ],
        awaitRefetchQueries: true
      });
    } catch (e) {
      // e
    }
  }

  React.useEffect(() => {
    variablesSubject.next(variables);
  }, [variables]);

  if (isLoadingInitially(networkStatus)) return <GraphqlInlineLoading />;

  const {
    partyCartItemsConnection: { edges, pageInfo },
    pagination: { aggregate }
  } = data as DeepWithoutMaybe<Party_CartItemsConnectionQuery>;

  return (
    <PartyCartItemsTable
      onStatusFilter={setStatusFilter}
      onUserSearch={setUserQuery}
      cartItems={edges}
      numberOfCartItems={aggregate.count}
      loading={loading || updateLoading}
      onCartItemUpdate={handleCartItemUpdate}
      onPageChange={handlePageChange}
      hasUserQueryApplied={userQuery != undefined}
    />
  );

  function handlePageChange(pageToChangeTo: number) {
    const currentPage = currentPaginationPage.current;

    if (pageToChangeTo == currentPage) return;

    const pageDiff =
      Math.abs(currentPage - pageToChangeTo) * PARTY_CART_ITEMS_PAGE_SIZE;

    if (currentPage > pageToChangeTo) {
      refetch({
        first: undefined,
        last: PARTY_CART_ITEMS_PAGE_SIZE,
        before: pageInfo.startCursor,
        after: undefined,
        skip: pageDiff - 1
      }).then(() => {
        currentPaginationPage.current = pageToChangeTo;
      });
    } else {
      refetch({
        first: PARTY_CART_ITEMS_PAGE_SIZE,
        last: undefined,
        before: undefined,
        after: pageInfo.endCursor,
        skip: pageDiff - 1
      }).then(() => {
        currentPaginationPage.current = pageToChangeTo;
      });
    }
  }
}
