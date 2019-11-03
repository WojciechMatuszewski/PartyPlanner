import React from 'react';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Party_PlaylistsConnectionEdges } from '@generated/graphql';
import ModalPlaylistItem from '../shared/ModalPlaylistItem';
import { List } from 'antd';

interface Props {
  numberOfSelectedItems: number;
  playlists: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>[];
  isPlaylistStillSelected: (
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) => boolean;
  onDeselectPlaylist: (
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) => void;
  onSelectPlaylist: (
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) => void;
}
export default function CombinePlaylistsList({
  numberOfSelectedItems,
  playlists,
  isPlaylistStillSelected,
  onDeselectPlaylist,
  onSelectPlaylist
}: Props) {
  return (
    <List
      bordered={true}
      header={`Selected playlists (${numberOfSelectedItems})`}
    >
      {playlists.map(playlist => (
        <ModalPlaylistItem
          isSelected={isPlaylistStillSelected(playlist)}
          playlist={playlist.node}
          onDeselect={() => onDeselectPlaylist(playlist)}
          onSelect={() => onSelectPlaylist(playlist)}
          onSpotifyButtonClick={() =>
            window.open(playlist.node.spotifyExternalUrl)
          }
          key={playlist.node.id}
        />
      ))}
    </List>
  );
}
