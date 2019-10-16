import { useParty } from '@components/Party/PartyProvider';
import { Full_Saved_Track_FragmentFragment, useAddTrackToParty } from '@generated/graphql';
import { message } from 'antd';
import React from 'react';

import { AddToQueueTrackButton, MoreInfoTrackButton, PlayPauseTrackButton } from '../../TrackControls';
import VirtualizedListTrackItem from '../../VirtualizedListTrackItem';

interface Props {
  track: Full_Saved_Track_FragmentFragment;
  style?: React.CSSProperties;
  trackPlaying: boolean;
  onTogglePlayClick: (track: Full_Saved_Track_FragmentFragment) => void;
  onMoreInfoClick: (track: Full_Saved_Track_FragmentFragment) => void;
}

function DiscoverTrack(props: Props) {
  const { partyId } = useParty();

  const { track } = props;

  const [mutate, { loading }] = useAddTrackToParty({
    variables: {
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
        explicit: props.track.explicit,
        party: { connect: { id: partyId } }
      }
    },
    onCompleted: () => message.success('Track successfully added!'),
    onError: () => message.error('Could not add track to given party playlist!')
  });

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
