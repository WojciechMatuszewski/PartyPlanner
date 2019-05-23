import React from 'react';
import { Modal, Typography, Button } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import {
  PartyInvitationsConnectionQueryEdges,
  useUpdateUser,
  useDeletePartyInvitationMutation
} from '@generated/graphql';
import UserAvatar from '@components/UserDefaultAvatar';
import styled from '@emotion/styled';
import { withRouter, WithRouterProps } from 'next/router';

interface Props extends ModalProps {
  invitation: PartyInvitationsConnectionQueryEdges | undefined;
  onCancel: () => void;
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  button:nth-of-type(2) {
    margin-left: 12px;
  }
`;

const PartyInvitesModal: React.FC<Props & WithRouterProps> = props => {
  const updateUser = useUpdateUser();
  const deletePartyInvitation = useDeletePartyInvitationMutation();
  const [loading, setLoading] = React.useState<boolean>(false);

  if (!props.invitation || !props.router) return null;

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
        userData={props.invitation.node.invitedBy}
        style={{ margin: '0 auto', display: 'block', marginBottom: 14 }}
      />
      <Typography.Title
        style={{ textAlign: 'center', marginBottom: 0 }}
        level={3}
      >
        {props.invitation.node.invitedBy.firstName} invites you to a party!
      </Typography.Title>
      <Typography.Paragraph style={{ textAlign: 'center' }}>
        {props.invitation.node.party.title}
      </Typography.Paragraph>
      <ButtonsWrapper>
        <Button loading={loading} onClick={handleOnAcceptClick} type="primary">
          Accept
        </Button>
        <Button loading={loading} onClick={handleOnDeclineClick} type="danger">
          Decline
        </Button>
      </ButtonsWrapper>
    </Modal>
  );

  async function handleOnAcceptClick() {
    try {
      setLoading(true);
      await updateUser({
        variables: {
          data: {
            parties: {
              connect: [{ id: props.invitation!.node.party.id }]
            }
          },
          where: {
            id: props.invitation!.node.user.id
          }
        }
      });
      await deletePartyInvitation({
        variables: { where: { id: props.invitation!.node.id } }
      });
      handleAcceptSuccess();
    } catch (e) {
      setLoading(false);
      // TODO:
    }
  }

  async function handleOnDeclineClick() {
    try {
      setLoading(true);
      await deletePartyInvitation({
        variables: { where: { id: props.invitation!.node.id } }
      });
      setLoading(false);
      props.onCancel();
    } catch (e) {
      setLoading(false);
      // TODO:
    }
  }

  function handleAcceptSuccess() {
    setLoading(false);
    props.onCancel();
    props.router!.push(`/party?id=${props.invitation!.node.party.id}`);
  }
};

export default withRouter(PartyInvitesModal);
