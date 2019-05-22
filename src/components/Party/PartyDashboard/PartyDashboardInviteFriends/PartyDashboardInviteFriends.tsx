import React from 'react';
import { Button, Modal, Icon } from 'antd';
import PartyDashboardInviteFriendsModalContent from './PartyDashboardInviteFriendsModalContent';
import {
  PaginateUsersInviteToPartyQueryComponent,
  PaginateUsersInviteToPartyQueryQuery,
  PaginateUsersInviteToPartyQueryEdges,
  useCreatePartyInvitation,
  PaginateUsersInviteToPartyQueryDocument,
  useDeletePartyInvitationMutation
} from '@generated/graphql';
import GraphqlInlineError from '@components/GraphqlInlineError';
import { handleRefetch } from '@shared/graphqlUtils';
import PartyDashboardInviteFriendsModalList from './PartyDashboardInviteFriendsModalList';
import { PartyDashboardContext } from '@pages/party';

interface Props {
  isOnMobile: boolean;
}

const PartyDashboardInviteFriends: React.FC<Props> = ({ isOnMobile }) => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = React.useState<boolean>(false);

  const { partyId, currentlyAuthenticatedUserId } = React.useContext(
    PartyDashboardContext
  );

  const QUERY_VARIABLES = React.useMemo(
    () => ({
      partyInvitationWhere: {
        party: { id: partyId }
      },
      where: {
        parties_none: { id: partyId }
      }
    }),
    [partyId]
  );

  const createPartyInvitation = useCreatePartyInvitation({
    refetchQueries: [
      {
        query: PaginateUsersInviteToPartyQueryDocument,
        variables: QUERY_VARIABLES
      }
    ]
  });

  const deletePartyInvitation = useDeletePartyInvitationMutation({
    refetchQueries: [
      {
        query: PaginateUsersInviteToPartyQueryDocument,
        variables: QUERY_VARIABLES
      }
    ]
  });

  const [toBeInvitedPeople, setToBeInvitedPeople] = React.useState<
    Record<string, boolean>
  >({});

  const [
    toHaveInvitationCanceledPeople,
    setToHaveInvitationCanceledPeople
  ] = React.useState<Record<string, boolean>>({});

  return (
    <React.Fragment>
      <Modal
        width={isOnMobile ? '100%' : undefined}
        centered={true}
        visible={modalVisible}
        title="Invite your friends!"
        maskClosable={false}
        confirmLoading={confirmLoading}
        onCancel={resetState}
        onOk={handleModalClose}
        bodyStyle={{ padding: 0 }}
      >
        <PartyDashboardInviteFriendsModalContent>
          {searchValue => (
            <PaginateUsersInviteToPartyQueryComponent
              notifyOnNetworkStatusChange={true}
              variables={{
                partyInvitationWhere: {
                  party: { id: partyId }
                },
                where: {
                  OR: [
                    { firstName_contains: searchValue },
                    { lastName_contains: searchValue }
                  ],
                  parties_none: { id: partyId }
                }
              }}
            >
              {({ data, loading, error, refetch }) => {
                if (error)
                  return (
                    <GraphqlInlineError style={{ padding: '24px 0px' }}>
                      <Button
                        data-testid="chatsMenuRefetchButton"
                        onClick={async () => await handleRefetch(refetch)}
                      >
                        Try again
                      </Button>
                    </GraphqlInlineError>
                  );
                if (error || !data) return null;
                return (
                  <PartyDashboardInviteFriendsModalList
                    toHaveInvitationCanceledPeople={
                      toHaveInvitationCanceledPeople
                    }
                    onAddToHaveInvitationCanceled={
                      handleAddToHaveInvitationCanceled
                    }
                    onRemoveToHaveInvitationCanceled={
                      handleRemoveToHaveInvitationCanceled
                    }
                    toBeInvitedPeople={toBeInvitedPeople}
                    onAddToBeInvited={handleAddToBeInvited}
                    onRemoveToBeInvited={handleRemoveToBeInvited}
                    loading={loading}
                    data={getModalListData(data)}
                  />
                );
              }}
            </PaginateUsersInviteToPartyQueryComponent>
          )}
        </PartyDashboardInviteFriendsModalContent>
      </Modal>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        {!isOnMobile ? 'Manage invitations' : <Icon type="usergroup-add" />}
      </Button>
    </React.Fragment>
  );

  function handleAddToBeInvited(personId: string) {
    setToBeInvitedPeople(prevObj => ({ ...prevObj, [personId]: true }));
  }

  function handleRemoveToBeInvited(personId: string) {
    const modifiedToBeInvitedPeople = { ...toBeInvitedPeople };
    Reflect.deleteProperty(modifiedToBeInvitedPeople, personId);
    setToBeInvitedPeople(modifiedToBeInvitedPeople);
  }

  function handleAddToHaveInvitationCanceled(invitationId: string) {
    setToHaveInvitationCanceledPeople(prevObj => ({
      ...prevObj,
      [invitationId]: true
    }));
  }

  function handleRemoveToHaveInvitationCanceled(invitationId: string) {
    const modifiedToHaveInvitationCanceledPeople = {
      ...toHaveInvitationCanceledPeople
    };
    Reflect.deleteProperty(
      modifiedToHaveInvitationCanceledPeople,
      invitationId
    );
    setToHaveInvitationCanceledPeople(modifiedToHaveInvitationCanceledPeople);
  }

  async function handleModalClose() {
    const idsToInvite = Object.keys(toBeInvitedPeople);
    const idsToCancel = Object.keys(toHaveInvitationCanceledPeople);
    if (idsToInvite.length <= 0 && idsToCancel.length <= 0) {
      setModalVisible(false);
      return;
    }
    setConfirmLoading(true);
    if (idsToInvite.length > 0) {
      const promises = idsToInvite.map(createPartyInvitationPromise);
      const test = await Promise.all(promises);
      console.log(test);
    }
    if (idsToCancel.length > 0) {
      const promises = idsToCancel.map(createDeletePartyInvitationPromise);
      await Promise.all(promises);
    }
    resetState();
  }

  function resetState() {
    setConfirmLoading(false);
    setModalVisible(false);
    setToBeInvitedPeople({});
    setToHaveInvitationCanceledPeople({});
  }

  function createPartyInvitationPromise(userToInvite: string) {
    return createPartyInvitation({
      variables: {
        data: {
          invitedBy: { connect: { id: currentlyAuthenticatedUserId } },
          party: { connect: { id: partyId } },
          user: { connect: { id: userToInvite } },
          userId: userToInvite
        }
      }
    });
  }

  function createDeletePartyInvitationPromise(idToDelete: string) {
    return deletePartyInvitation({
      variables: {
        where: { id: idToDelete }
      }
    });
  }

  function getModalListData(data: PaginateUsersInviteToPartyQueryQuery) {
    return data && data.paginateUsers && data.paginateUsers.edges
      ? (data.paginateUsers.edges as PaginateUsersInviteToPartyQueryEdges[])
      : [];
  }
};

export default PartyDashboardInviteFriends;
