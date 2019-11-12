import { useParty } from '../../PartyProvider';
import {
  getPartyCartItemsVariables,
  PARTY_CART_ITEMS_CONNECTION_QUERY
} from '../PartyCartItems';
import PartyCartAddItemForm, {
  PartyCartAddItemFormValues
} from './PartyCartAddItemForm';

import {
  PartyCartItemStatus,
  useParty_CreatePartyCartItem
} from '@generated/graphql';
import { PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT } from '@graphql/fragments';
import useMedia from '@hooks/useMedia';
import { Button, Icon, Modal, Result } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

export const CREATE_PARTY_CART_ITEM_MUTATION = gql`
  mutation Party_CreatePartyCartItem($data: PartyCartItemCreateInput!) {
    createPartyCartItem(data: $data) {
      ...PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT
    }
  }
  ${PARTY_CART_ITEMS_CONNECTION_NODE_FRAGMENT}
`;
interface Props {
  cartId: string;
}
export default function PartyCartAddItem({ cartId }: Props) {
  const { userId } = useParty();
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleModalVisible = () => setModalVisible(prev => !prev);
  const isOnMobile = useMedia('(max-width:680px)');

  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;
    return () => void (isMounted.current = false);
  }, []);

  const formValuesRef = React.useRef<PartyCartAddItemFormValues | undefined>(
    undefined
  );

  const [
    createPartyCartItem,
    { loading, called, error, data }
  ] = useParty_CreatePartyCartItem();

  async function handleCreateCartItem(values: PartyCartAddItemFormValues) {
    formValuesRef.current = values;

    const parsedMonetaryValue = values.price * 100;

    try {
      await createPartyCartItem({
        variables: {
          data: {
            ...values,
            price: parsedMonetaryValue,
            user: { connect: { id: userId } },
            cart: { connect: { id: cartId } },
            status: PartyCartItemStatus.Pending
          }
        },
        refetchQueries: [
          {
            query: PARTY_CART_ITEMS_CONNECTION_QUERY,
            variables: getPartyCartItemsVariables()
          }
        ],
        awaitRefetchQueries: true
      });
    } catch (e) {
      // noop
    }
  }

  React.useEffect(() => {
    if (called && error) {
      return setStatus('error');
    }
    if (called && data) {
      return setStatus('success');
    }
  }, [called, error, data]);

  React.useEffect(() => {}, [modalVisible]);

  React.useEffect(
    () => () =>
      void setTimeout(() => isMounted.current && setStatus('idle'), 100),
    [modalVisible]
  );

  return (
    <React.Fragment>
      <Button
        type="primary"
        style={{ marginRight: isOnMobile ? 6 : 16 }}
        onClick={toggleModalVisible}
      >
        <Icon type="plus" />
        {!isOnMobile && 'Add an item'}
      </Button>
      <Modal
        onCancel={toggleModalVisible}
        title="Add an item"
        visible={modalVisible}
        closable={true}
        maskClosable={true}
        footer={null}
      >
        {status == 'error' ? (
          <Result
            status="error"
            title="Operation failed"
            subTitle="Something went wrong, please try again"
            extra={
              <Button
                loading={loading}
                onClick={() =>
                  handleCreateCartItem(
                    formValuesRef.current as PartyCartAddItemFormValues
                  )
                }
              >
                Try again
              </Button>
            }
          />
        ) : status == 'success' ? (
          <Result
            status="success"
            title="Item added"
            subTitle="Item was successfully added"
            extra={<Button onClick={toggleModalVisible}>Close</Button>}
          />
        ) : (
          <PartyCartAddItemForm
            onSubmit={handleCreateCartItem}
            loading={loading}
          />
        )}
      </Modal>
    </React.Fragment>
  );
}
