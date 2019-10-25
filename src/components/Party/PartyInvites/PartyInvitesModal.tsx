import React from 'react';
import { Modal, Typography, Button, message } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import {
  PartyInvitationsConnectionQueryEdges,
  useDeletePartyInvitationMutation,
  PartyInvitationsQueryComponent,
  useJoinPartyMutation
} from '@generated/graphql';
import UserAvatar from '@components/UserDefaultAvatar';
import styled from '@emotion/styled';
import { withRouter, WithRouterProps } from 'next/router';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import { hasGraphqlData, handleRefetch } from '@shared/graphqlUtils';
import GraphqlInlineError from '@components/GraphqlInlineError';

interface Props extends ModalProps {
  invitation: PartyInvitationsConnectionQueryEdges | undefined;
  onCancel: () => void;
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  button:nth-of-type(2) {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const PartyInvitesModal: React.FC<Props & WithRouterProps> = props => {
  const [joinParty] = useJoinPartyMutation();
  const [deletePartyInvitation] = useDeletePartyInvitationMutation();
  const [loading, setLoading] = React.useState<boolean>(false);

  if (!props.invitation || !props.router) return null;

  return (
    <PartyInvitationsQueryComponent
      variables={{
        where: {
          AND: [
            { user: { id: props.invitation.node.user.id } },
            { party: { id: props.invitation.node.party.id } },
            { id_not: props.invitation.node.id }
          ]
        }
      }}
    >
      {({ data, loading: AdditionalInvitesLoading, error, refetch }) => {
        if (error)
          return (
            <Modal
              footer={null}
              visible={props.visible}
              onCancel={props.onCancel}
            >
              <GraphqlInlineError>
                <Button onClick={async () => await handleRefetch(refetch)}>
                  Try again
                </Button>
              </GraphqlInlineError>
            </Modal>
          );
        if (
          !hasGraphqlData(data, ['partyInvitations']) ||
          AdditionalInvitesLoading
        )
          return (
            <Modal footer={null} visible={props.visible}>
              <GraphqlInlineLoading />
            </Modal>
          );

        const { partyInvitations: additionalInvitations } = data;

        return (
          <Modal
            closable={true}
            onCancel={() => (!loading ? props.onCancel() : undefined)}
            footer={
              <Button disabled={loading} onClick={props.onCancel}>
                Cancel
              </Button>
            }
            visible={props.visible}
          >
            <UserAvatar
              userData={props.invitation!.node.invitedBy}
              style={{ margin: '0 auto', display: 'block', marginBottom: 14 }}
            />
            <Typography.Title
              style={{ textAlign: 'center', marginBottom: 0 }}
              level={3}
            >
              {props.invitation!.node.invitedBy.firstName} invites you to a
              party!
            </Typography.Title>
            <Typography.Paragraph style={{ textAlign: 'center' }}>
              {props.invitation!.node.party.title}
            </Typography.Paragraph>
            <ButtonsWrapper>
              <Button
                loading={loading}
                onClick={() =>
                  handleOnAcceptClick(additionalInvitations.map(({ id }) => id))
                }
                type="primary"
              >
                Accept
              </Button>
              <Button
                loading={loading}
                onClick={handleOnDeclineClick}
                type="danger"
              >
                Decline
              </Button>
              {data.partyInvitations.length > 0 && (
                <Button
                  loading={loading}
                  onClick={() =>
                    handleDeclineAll(additionalInvitations.map(({ id }) => id))
                  }
                  type="danger"
                >
                  Decline all
                </Button>
              )}
            </ButtonsWrapper>
          </Modal>
        );
      }}
    </PartyInvitationsQueryComponent>
  );

  async function handleDeclineAll(additionalIds: string[]) {
    try {
      setLoading(true);
      await Promise.all(
        makeDeletePromises(additionalIds.concat([props.invitation!.node.id]))
      );
      setLoading(false);
      props.onCancel();
    } catch (e) {
      handleError();
    }
  }

  async function handleOnAcceptClick() {
    try {
      await joinParty({
        variables: { partyId: props.invitation!.node.party.id }
      });
      handleAcceptSuccess();
    } catch (e) {
      handleError();
    }
  }

  async function handleOnDeclineClick() {
    try {
      setLoading(true);
      await deletePartyInvitation({
        variables: { where: { id: props.invitation!.node.id } }
      });
      handleDeleteSuccess();
    } catch (e) {
      handleError();
    }
  }

  function handleDeleteSuccess() {
    setLoading(false);
    props.onCancel();
  }

  function handleError() {
    setLoading(false);
    message.error('An error occurred!, try again.');
  }

  function makeDeletePromises(ids: string[]) {
    return ids.map(id =>
      deletePartyInvitation({ variables: { where: { id } } })
    );
  }

  function handleAcceptSuccess() {
    setLoading(false);
    props.onCancel();
    props.router!.push(
      `/party-dashboard?id=${props.invitation!.node.party.id}`,
      `/party/${props.invitation!.node.party.id}`
    );
  }
};

export default withRouter(PartyInvitesModal);
