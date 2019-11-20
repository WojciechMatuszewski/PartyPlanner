import React from 'react';
import { Button, Modal, Typography, message, Icon } from 'antd';
import gql from 'graphql-tag';
import { useParty_LeaveParty } from '@generated/graphql';
import { PAGINATE_PARTIES_QUERY } from '@graphql/queries';
import { getPartiesListQueryVariables } from '../PartiesList/PartiesList';
import { withRouter, WithRouterProps } from 'next/router';

export const LEAVE_PARTY_MUTATION = gql`
  mutation Party_LeaveParty(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;
interface Props {
  partyId: string;
  userId: string;
  partyTitle: string;
}
function PartyDashboardLeaveParty({
  partyId,
  userId,
  router,
  partyTitle
}: Props & WithRouterProps) {
  const [leaveParty] = useParty_LeaveParty({
    variables: {
      where: { id: userId },
      data: {
        parties: {
          disconnect: [{ id: partyId }]
        }
      }
    },
    onCompleted: () => {
      if (!router) return;
      router.push('/user-dashboard', '/user/dashboard');
      message.success(`You left ${partyTitle}`);
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
      title: 'Are you sure you want to leave this party?',
      content: (
        <Typography.Text>
          You will be able to re-join later, either by an direct invitation or
          by joining manually if party is public.
        </Typography.Text>
      ),
      okText: 'Yes',
      cancelText: 'No',
      onOk: leaveParty
    });
  }

  return (
    <Button type="danger" onClick={handleButtonClick}>
      <Icon type="user-delete" />
      Leave party
    </Button>
  );
}

export default withRouter(PartyDashboardLeaveParty);
