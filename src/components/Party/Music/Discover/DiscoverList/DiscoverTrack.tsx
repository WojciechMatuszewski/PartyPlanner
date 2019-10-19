import { useParty } from '@components/Party/PartyProvider';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import React from 'react';

import { useIsTrackSaved } from '../../Saved/SavedTracksProvider';
import {
  AddToQueueTrackButton,
  MoreInfoTrackButton,
  PlayPauseTrackButton
} from '../../shared/TrackControls';
import { useSaveTrack } from '../../shared/useSaveTrack';
import VirtualizedListTrackItem from '../../shared/VirtualizedListTrackItem';

interface Props {
  track: Full_Saved_Track_FragmentFragment;
  style?: React.CSSProperties;
  trackPlaying: boolean;
  onTogglePlayClick: (track: Full_Saved_Track_FragmentFragment) => void;
  onMoreInfoClick: (track: Full_Saved_Track_FragmentFragment) => void;
}

function DiscoverTrack(props: Props) {
  const { track } = props;

  const { partyId } = useParty();
  const [mutate, { loading }] = useSaveTrack(track, partyId);
  const [isAlreadySaved] = useIsTrackSaved(track.id);

  return (
    <VirtualizedListTrackItem
      style={props.style}
      trackPlaying={props.trackPlaying}
      actions={[
        <PlayPauseTrackButton
          onTogglePlayClick={handleTogglePlayClick}
          key={1}
          trackPlaying={props.trackPlaying}
          hasPreviewUrl={props.track.previewUrl != null}
        />,
        <MoreInfoTrackButton onMoreInfoClick={handleMoreInfoClick} key={2} />,
        <AddToQueueTrackButton
          disabled={isAlreadySaved}
          key={3}
          onAddToQueueClick={mutate}
          loading={loading}
        />
      ]}
      track={track}
    />
  );

  function handleTogglePlayClick() {
    props.onTogglePlayClick(props.track);
  }
  function handleMoreInfoClick() {
    props.onMoreInfoClick(props.track);
  }
}

export default React.memo(DiscoverTrack);
