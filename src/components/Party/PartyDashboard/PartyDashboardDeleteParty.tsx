import { useParty_DeleteParty } from '@generated/graphql';
import { Button, message, Modal, Typography, Icon } from 'antd';
import gql from 'graphql-tag';
import { withRouter, WithRouterProps } from 'next/router';
import React from 'react';
import { PAGINATE_PARTIES_QUERY } from '@graphql/queries';
import { getPartiesListQueryVariables } from '../PartiesList/PartiesList';

export const DELETE_PARTY_MUTATION = gql`
  mutation Party_DeleteParty($where: PartyWhereUniqueInput!) {
    deleteParty(where: $where) {
      id
    }
  }
`;

interface Props {
  partyId: string;
  partyTitle: string;
}
function PartyDashboardDeleteParty({
  partyId,
  router
}: Props & WithRouterProps) {
  const [deleteParty, { loading }] = useParty_DeleteParty({
    variables: { where: { id: partyId } },
    onCompleted: () => {
      if (!router) return;
      router.push('/user-dashboard', '/user/dashboard');
      message.success('Party deleted!');
    },
    onError: () => message.error('Something went wrong, try again!'),
    refetchQueries: [
      {
        query: PAGINATE_PARTIES_QUERY,
        variables: getPartiesListQueryVariables()
      }
    ],
    awaitRefetchQueries: true
  });

  function handleButtonClick() {
    Modal.confirm({
      title: 'Are you sure you want to delete this party?',
      content: (
        <Typography.Text strong={true}>
          This action is irreversible
        </Typography.Text>
      ),
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => deleteParty()
    });
  }

  return (
    <Button type="danger" onClick={handleButtonClick} loading={loading}>
      <Icon type="delete" />
      Delete party
    </Button>
  );
}

export default withRouter(PartyDashboardDeleteParty);
