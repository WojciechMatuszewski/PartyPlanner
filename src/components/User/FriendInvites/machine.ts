import { FriendInvite } from './FriendInvitesNoticeIcon';

import { EventObject, Machine } from 'xstate';

type EventId = 'IDLE' | 'ACCEPT' | 'REJECT' | 'ERROR_RETRY';

export type FriendInvitesMachineContext = { friendInvite: FriendInvite };

export interface FriendInvitesEvent extends EventObject {
  type: EventId;
  payload: FriendInvite;
}

interface FriendInvitesMachineSchema {
  states: {
    idle: {};
    workingReject: {};
    workingAccept: {};
    errorReject: {};
    errorAccept: {};
    errorRejectLoading: {};
    errorAcceptLoading: {};
    success: {};
  };
}

export const FriendInvitesMachine = Machine<
  FriendInvitesMachineContext,
  FriendInvitesMachineSchema,
  FriendInvitesEvent
>({
  key: 'FriendInvites',
  initial: 'idle',
  states: {
    idle: {
      on: {
        ACCEPT: 'workingAccept',
        REJECT: 'workingReject'
      },
      onExit: 'setFriendInvite'
    },
    workingAccept: {
      invoke: {
        src: 'acceptFriendInvitation',
        onDone: 'success',
        onError: 'errorAccept'
      }
    },
    workingReject: {
      invoke: {
        src: 'rejectFriendInvitation',
        onDone: 'success',
        onError: 'errorReject'
      }
    },
    errorAccept: {
      on: {
        ERROR_RETRY: 'errorAcceptLoading',
        IDLE: 'idle'
      }
    },
    errorReject: {
      on: {
        ERROR_RETRY: 'errorRejectLoading',
        IDLE: 'idle'
      }
    },
    errorAcceptLoading: {
      invoke: {
        src: 'acceptFriendInvitation',
        onDone: 'success',
        onError: 'errorAccept'
      }
    },
    errorRejectLoading: {
      invoke: {
        src: 'rejectFriendInvitation',
        onDone: 'success',
        onError: 'errorReject'
      }
    },
    success: {
      on: {
        IDLE: 'idle'
      },
      entry: 'closeModal'
    }
  }
});
