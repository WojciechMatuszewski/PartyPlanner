import ModalPlaylistItem from '../shared/ModalPlaylistItem';

import css from '@emotion/css';
import {
  Party_Playlists_Connection_Node_FragmentFragment,
  Party_PlaylistsConnectionEdges
} from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Button, Empty, List } from 'antd';
import React from 'react';

interface Props {
  playlists: DeepWithoutMaybe<Party_PlaylistsConnectionEdges[]>;
  loading: boolean;
  canLoadMore: boolean;
  loadingMore: boolean;
  selectedPlaylists: Party_Playlists_Connection_Node_FragmentFragment[];
  onSelectPlaylists: (
    playlist: Party_Playlists_Connection_Node_FragmentFragment
  ) => void;
  onDeselectPlaylist: (
    playlist: Party_Playlists_Connection_Node_FragmentFragment
  ) => void;
  onLoadMore: VoidFunction;
}

const LoadMoreButtonStyles = css`
  display: block;
  margin: 0 auto;
  margin-top: 12px;
  @media screen and (max-width: 530px) {
    margin-right: auto;
    margin-left: 12px;
  }
`;

const ListStyles = css`
  .ant-spin-container.ant-spin-blur > div:first-of-type {
    display: none;
  }
  margin-top: 12px;
`;

export default function ImportPlaylistsItemList({
  playlists,
  loading,
  canLoadMore,
  loadingMore,
  selectedPlaylists,
  onSelectPlaylists,
  onDeselectPlaylist,
  onLoadMore
}: Props) {
  const hasItems = playlists.length != 0;

  return (
    <React.Fragment>
      <List bordered={hasItems} loading={loading} css={[ListStyles]}>
        {!hasItems ? (
          <Empty description="No playlists to import found" />
        ) : (
          playlists.map(edge => (
            <ModalPlaylistItem
              key={edge.node.id}
              playlist={edge.node}
              onSelect={() => onSelectPlaylists(edge.node)}
              onDeselect={() => onDeselectPlaylist(edge.node)}
              onSpotifyButtonClick={() =>
                window.open(edge.node.spotifyExternalUrl)
              }
              isSelected={selectedPlaylists.includes(edge.node)}
            />
          ))
        )}
      </List>
      {canLoadMore && (
        <Button
          css={[LoadMoreButtonStyles]}
          loading={loadingMore}
          onClick={onLoadMore}
        >
          Load More
        </Button>
      )}
    </React.Fragment>
  );
}
