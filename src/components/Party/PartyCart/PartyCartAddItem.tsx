import React from 'react';
import { Button, Modal, Icon } from 'antd';
import gql from 'graphql-tag';
import { useParty_CreatePartyCartItem } from '@generated/graphql';
import { useParty } from '../PartyProvider';
import PartyCartAddItemForm, {
  PartyCartAddItemFormValues
} from './PartyCartAddItemForm';

export const CREATE_PARTY_CART_ITEM_MUTATION = gql`
  mutation Party_CreatePartyCartItem($data: PartyCartItemCreateInput!) {
    createPartyCartItem(data: $data) {
      id
    }
  }
`;
interface Props {
  cartId: string;
}
export default function PartyCartAddItem({ cartId }: Props) {
  const { userId } = useParty();

  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleModalVisible = () => setModalVisible(prev => !prev);

  const [createPartyCartItem, { loading }] = useParty_CreatePartyCartItem();

  async function handleFormSubmit(values: PartyCartAddItemFormValues) {
    await createPartyCartItem({
      variables: {
        data: {
          ...values,
          user: { connect: { id: userId } },
          cart: { connect: { id: cartId } }
        }
      }
    });
  }

  return (
    <React.Fragment>
      <Button
        type="primary"
        style={{ marginRight: 16 }}
        onClick={toggleModalVisible}
      >
        <Icon type="plus" />
        Add an item
      </Button>
      <Modal
        onCancel={toggleModalVisible}
        title="Propose an item"
        visible={modalVisible}
        closable={true}
        maskClosable={true}
        footer={null}
      >
        <PartyCartAddItemForm onSubmit={handleFormSubmit} loading={loading} />
      </Modal>
    </React.Fragment>
  );
}
