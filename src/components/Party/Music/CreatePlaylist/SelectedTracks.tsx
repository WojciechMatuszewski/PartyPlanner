import React from 'react';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import { List, Button, Icon, Empty } from 'antd';
import VirtualizedListTrackItem from '../shared/VirtualizedListTrackItem';

interface Props {
  tracks: Full_Saved_Track_FragmentFragment[];
  loading: boolean;
  onRemoveTrack: (trackToRemove: Full_Saved_Track_FragmentFragment) => void;
}
export default function SelectedTracks({ tracks, onRemoveTrack }: Props) {
  if (tracks.length == 0) return <Empty description="No selected tracks" />;

  return (
    <List header={`Selected tracks (${tracks.length})`} bordered={true}>
      {tracks.map(track => (
        <VirtualizedListTrackItem
          key={track.id}
          trackPlaying={false}
          track={track}
          actions={[
            <Button
              key={1}
              onClick={() => onRemoveTrack(track)}
              shape="circle-outline"
            >
              <Icon type="delete" />
            </Button>
          ]}
        />
      ))}
    </List>
  );
}
