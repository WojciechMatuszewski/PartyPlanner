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

export function useIsTrackSaved(trackSpotifyId: string) {
  const [isSaved, setIsSaved] = React.useState(false);

  const listOfSavedTracks = React.useContext(SavedTracksContext);

  if (!listOfSavedTracks)
    throw Error('useIsTrackSaved can only be used within SavedTracksProvider');

  React.useEffect(() => {
    const isInsideList = listOfSavedTracks.filter(
      ({ spotifyId }) => spotifyId == trackSpotifyId
    );

    return setIsSaved(isInsideList.length > 0);
  }, [listOfSavedTracks]);

  return isSaved;
}
