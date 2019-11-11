import UserAvatar from '../UserDefaultAvatar';
import { FriendInvite } from './FriendInvitesNoticeIcon';
import { FriendInvitesMachine, FriendInvitesMachineContext } from './machine';

import GraphqlInlineError from '@components/GraphqlInlineError';
import styled from '@emotion/styled';
import {
  useUser_AcceptFriendInvitation,
  useUser_DeleteFriendInvitation
} from '@generated/graphql';
import {
  getUserFriendsQueryVariables,
  USER_FRIENDS_QUERY
} from '@pages/user-people';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { useMachine } from '@xstate/react';
import { Button, Modal, Typography } from 'antd';
import gql from 'graphql-tag';
import React from 'react';
import { actions } from 'xstate';

export const ACCEPT_FRIEND_INVITATION_MUTATION = gql`
  mutation User_AcceptFriendInvitation(
    $invitationId: ID!
    $invitingUserId: ID!
  ) {
    acceptFriendInvitation(
      invitationId: $invitationId
      invitingUserId: $invitingUserId
    )
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 14px;
  button:first-of-type {
    margin-right: 14px;
  }
`;

const ModalContentsWrapper = styled.div`
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
`;

interface Props {
  friendInvite: FriendInvite | undefined;
  visible: boolean;
  onClose: VoidFunction;
}
export default function FriendInvitesModal({
  friendInvite,
  visible,
  onClose
}: Props) {
  const userFriendsQueryVariables = getUserFriendsQueryVariables();

  // no variables = user has not been there yet = nothing to refetch
  const queriesToRefetch = userFriendsQueryVariables
    ? [
        {
          query: USER_FRIENDS_QUERY,
          variables: userFriendsQueryVariables
        }
      ]
    : [];

  const [deleteFriendInvitation] = useUser_DeleteFriendInvitation({
    refetchQueries: queriesToRefetch,
    awaitRefetchQueries: true
  });
  const [acceptFriendInvitation] = useUser_AcceptFriendInvitation({
    refetchQueries: queriesToRefetch,
    awaitRefetchQueries: true
  });

  const [machine, send] = useMachine(FriendInvitesMachine, {
    services: {
      acceptFriendInvitation: onAcceptFriendInvitation,
      rejectFriendInvitation: onRejectFriendInvitation
    },
    actions: {
      setFriendInvite: actions.assign({
        friendInvite: (_: any, event: any) => event.payload
      }),
      closeModal: () => {
        send('IDLE');
        onClose();
      }
    }
  });

  React.useEffect(() => {
    send('IDLE');
  }, [visible]);

  const { value: machineState } = machine;

  const isErrorLoading = ['errorRejectLoading', 'errorAcceptLoading'].includes(
    machineState as string
  );
  const isError = ['errorReject', 'errorAccept'].includes(
    machineState as string
  );
  const isLoadingAccept = machineState == 'workingAccept';
  const isLoadingReject = machineState == 'workingReject';

  const isLoading = isLoadingAccept || isLoadingReject;

  const showError = isError || isErrorLoading;

  if (!friendInvite) return null;

  const {
    node: {
      invitedBy: { firstName, lastName, avatar }
    }
  } = friendInvite;

  return (
    <Modal
      closable={!(isErrorLoading || isLoading)}
      maskClosable={true}
      title="Friend Invitation!"
      visible={visible}
      onCancel={onClose}
      footer={<Button onClick={onClose}>Close</Button>}
    >
      <ModalContentsWrapper>
        {showError ? (
          <GraphqlInlineError.WithButton
            title="Something went wrong"
            onRetry={() => send('ERROR_RETRY')}
            loading={isErrorLoading}
          />
        ) : (
          <React.Fragment>
            <p>
              <UserAvatar userData={{ firstName, lastName, avatar }} />
            </p>
            <span style={{ textAlign: 'center' }}>
              <Typography.Text strong={true}>
                {firstName} {lastName}{' '}
              </Typography.Text>
              <Typography.Text>wants to be your friend!</Typography.Text>
            </span>
            <ButtonsWrapper>
              <Button
                type="dashed"
                loading={isLoadingReject}
                disabled={isLoadingAccept}
                onClick={() => send('REJECT', { payload: friendInvite })}
              >
                Not now
              </Button>
              <Button
                loading={isLoadingAccept}
                disabled={isLoadingReject}
                type="primary"
                onClick={() =>
                  send('ACCEPT', {
                    payload: friendInvite
                  })
                }
              >
                Confirm
              </Button>
            </ButtonsWrapper>
          </React.Fragment>
        )}
      </ModalContentsWrapper>
    </Modal>
  );

  function onRejectFriendInvitation({
    friendInvite
  }: FriendInvitesMachineContext) {
    return deleteFriendInvitation({
      variables: { where: { id: friendInvite.node.id } }
    });
  }

  function onAcceptFriendInvitation({
    friendInvite
  }: FriendInvitesMachineContext) {
    return acceptFriendInvitation({
      variables: {
        invitationId: friendInvite.node.id,
        invitingUserId: friendInvite.node.invitedBy.id
      }
    });
  }
}
