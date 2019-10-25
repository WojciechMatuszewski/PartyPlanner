import React from 'react';
import { Party_SavedTracksQuery } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';

type SavedTracksContextType =
  | DeepWithoutMaybe<Party_SavedTracksQuery['partySavedTracks']>
  | undefined;

const SavedTracksContext = React.createContext<SavedTracksContextType>(
  undefined
);

interface Props {
  savedTracks: DeepWithoutMaybe<Party_SavedTracksQuery['partySavedTracks']>;
  children: React.ReactNode;
}

export default function SavedTracksProvider({ savedTracks, children }: Props) {
  return (
    <SavedTracksContext.Provider value={savedTracks}>
      {children}
    </SavedTracksContext.Provider>
  );
}

export function useIsTrackSaved(
  trackSpotifyId: string,
  { lazy }: { lazy: boolean } = { lazy: false }
) {
  const [isSaved, setIsSaved] = React.useState(false);

  const listOfSavedTracks = React.useContext(SavedTracksContext);

  if (!listOfSavedTracks)
    throw Error('useIsTrackSaved can only be used within SavedTracksProvider');

  const checkIfSaved = React.useCallback(
    trackSpotifyId => {
      return (
        listOfSavedTracks.filter(({ spotifyId }) => spotifyId == trackSpotifyId)
          .length > 0
      );
    },
    [listOfSavedTracks, trackSpotifyId]
  );

  React.useEffect(() => {
    if (lazy) return;
    return setIsSaved(checkIfSaved(trackSpotifyId));
  }, [listOfSavedTracks, trackSpotifyId]);

  return [isSaved, checkIfSaved] as [boolean, (spotifyId: string) => boolean];
}
