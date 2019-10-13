import { useParty } from '@components/Party/PartyProvider';
import { useAddTrackToParty } from '@generated/graphql';
import { message } from 'antd';
import React from 'react';
import { Track } from 'spotify-web-sdk';

import {
  AddToQueueTrackButton,
  MoreInfoTrackButton,
  PlayPauseTrackButton
} from '../../TrackControls';
import VirtualizedListTrackItem from '../../VirtualizedListTrackItem';

interface Props {
  track: Track;
  style?: React.CSSProperties;
  trackPlaying: boolean;
  onTogglePlayClick: (track: Track) => void;
  onMoreInfoClick: (track: Track) => void;
}

function DiscoverTrack(props: Props) {
  const { partyId } = useParty();

  const { track } = props;

  const [mutate, { loading }] = useAddTrackToParty({
    variables: {
      data: {
        spotifyId: track.id,
        name: track.name,
        downVotes: 0,
        upVotes: 1,
        length: track.length,
        durationMs: track.durationMs,
        preview_url: track.previewUrl,
        imageUrl: track.album.imageUrl,
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
      track={{
        name: track.name,
        imageUrl: track.album.imageUrl,
        artists: track.artists.reduce(
          (acc, artist) => acc.concat(`${artist.name} ,`),
          ''
        ),
        explicit: track.explicit,
        length: track.length
      }}
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
