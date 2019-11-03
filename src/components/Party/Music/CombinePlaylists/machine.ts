import { Playlist } from './../../../../../generated/graphql';
import { EventObject, Machine } from 'xstate';
import { CombinePlaylistsMachineContext } from './CombinePlaylists';

type EventId = 'IDLE' | 'START' | 'ERROR_RETRY';

interface CombinePlaylistEvent extends EventObject {
  type: EventId;
  payload: Partial<CombinePlaylistsMachineContext>;
  data?: Playlist;
}

interface CombinePlaylistMachineSchema {
  states: {
    idle: {};
    workingSpotify: {};
    workingPartyPlanner: {};
    errorSpotify: {};
    errorPartyPlanner: {};
    errorSpotifyLoading: {};
    errorPartyPlannerLoading: {};
    success: {};
  };
}

export const CombinePlaylistsMachine = Machine<
  CombinePlaylistsMachineContext,
  CombinePlaylistMachineSchema,
  CombinePlaylistEvent
>({
  key: 'combinePlaylists',
  initial: 'idle',
  states: {
    idle: {
      onExit: 'setPreWorkData',
      on: {
        START: 'workingSpotify'
      }
    },
    workingSpotify: {
      invoke: {
        src: 'createPlaylistInSpotify',
        onDone: {
          target: 'workingPartyPlanner',
          actions: 'setSpotifyPlaylistData'
        },
        onError: 'errorSpotify'
      }
    },
    workingPartyPlanner: {
      invoke: {
        src: 'combineSelectedPlaylists',
        onDone: {
          target: 'success'
        },
        onError: 'errorPartyPlanner'
      }
    },
    errorSpotify: {
      on: {
        ERROR_RETRY: 'errorSpotifyLoading'
      }
    },
    errorPartyPlanner: {
      on: {
        ERROR_RETRY: 'errorPartyPlannerLoading'
      }
    },
    errorSpotifyLoading: {
      invoke: {
        src: 'createPlaylistInSpotify',
        onDone: {
          target: 'errorPartyPlannerLoading',
          actions: 'setSpotifyPlaylistData'
        },
        onError: 'errorSpotify'
      }
    },
    errorPartyPlannerLoading: {
      invoke: {
        src: 'combineSelectedPlaylists',
        onDone: {
          target: 'success'
        },
        onError: 'errorPartyPlanner'
      }
    },
    success: {
      on: {
        IDLE: 'idle'
      }
    }
  }
});
