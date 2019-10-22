import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import { PARTY_SAVED_TRACKS_QUERY } from '@graphql/queries';
import { message } from 'antd';

import {
  PARTY_SAVED_TRACKS_CONNECTION_PAGINATION_SIZE,
  PARTY_SAVED_TRACKS_CONNECTION_QUERY
} from '../SavedTracks/SavedTracks';
import {
  Party_SavedTracksQuery,
  useAddTrackToParty
} from './../../../../../generated/graphql';

// do it lazily here so that big music player can pass a null value first
function mapTrackToMutationVariables(
  track: Full_Saved_Track_FragmentFragment,
  partyId: string
) {
  return {
    data: {
      spotifyId: track.id,
      name: track.name,
      length: track.length,
      uri: track.uri,
      popularity: track.popularity,
      durationMs: track.durationMs,
      previewUrl: track.previewUrl,
      stringArtists: track.stringArtists,
      album: {
        create: {
          spotifyId: track.album.id,
          uri: track.album.uri,
          name: track.album.name,
          imageUrl: track.album.imageUrl,
          releaseDate: track.album.releaseDate
        }
      },
      explicit: track.explicit,
      party: { connect: { id: partyId } }
    }
  };
}

export function useSaveTrack(
  track: Full_Saved_Track_FragmentFragment,
  partyId: string
) {
  const whereVariables = { party: { id: partyId } };

  const [mutate, stateProps] = useAddTrackToParty({
    onCompleted: () => message.success('Track successfully added!'),
    onError: () =>
      message.error('Could not add track to given party playlist!'),
    refetchQueries: [
      {
        query: PARTY_SAVED_TRACKS_CONNECTION_QUERY,
        variables: {
          where: whereVariables,
          first: PARTY_SAVED_TRACKS_CONNECTION_PAGINATION_SIZE
        }
      }
    ],
    update: (proxy, { data }) => {
      if (!data) return;

      const { createPartySavedTrack } = data;

      const savedTracksInCache = proxy.readQuery<Party_SavedTracksQuery>({
        query: PARTY_SAVED_TRACKS_QUERY,
        variables: { where: whereVariables }
      });

      if (!savedTracksInCache || savedTracksInCache.partySavedTracks == null) {
        proxy.writeQuery<Party_SavedTracksQuery>({
          query: PARTY_SAVED_TRACKS_QUERY,
          variables: { where: whereVariables },
          data: {
            __typename: 'Query',
            partySavedTracks: [{ spotifyId: createPartySavedTrack.spotifyId }]
          }
        });
      } else {
        proxy.writeQuery<Party_SavedTracksQuery>({
          query: PARTY_SAVED_TRACKS_QUERY,
          variables: { where: whereVariables },
          data: {
            ...savedTracksInCache,
            partySavedTracks: [
              ...savedTracksInCache.partySavedTracks,
              {
                spotifyId: createPartySavedTrack.spotifyId,
                __typename: 'PartySavedTrack'
              }
            ]
          }
        });
      }
    }
  });

  return [
    () => mutate({ variables: mapTrackToMutationVariables(track, partyId) }),
    stateProps
  ] as ReturnType<typeof useAddTrackToParty>;
}
