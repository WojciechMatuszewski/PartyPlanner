import React from 'react';
import {
  Party_PlaylistsConnectionEdges,
  Party_Playlists_Connection_Node_FragmentFragment
} from '@generated/graphql';
import { List, Button, Empty } from 'antd';
import PlaylistItem from './PlaylistItem';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import css from '@emotion/css';

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

export default function PlaylistItemList({
  playlists,
  loading,
  canLoadMore,
  loadingMore,
  selectedPlaylists,
  onSelectPlaylists,
  onDeselectPlaylist
}: Props) {
  const hasItems = playlists.length != 0;

  return (
    <React.Fragment>
      <List bordered={hasItems} loading={loading} css={[ListStyles]}>
        {!hasItems ? (
          <Empty description="No playlists to import found" />
        ) : (
          playlists.map(edge => (
            <PlaylistItem
              key={edge.node.id}
              avatarImg={edge.node.imageUrl}
              isPublic={false}
              name={edge.node.name}
              totalTracks={10}
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
        <Button css={[LoadMoreButtonStyles]} loading={loadingMore}>
          Load More
        </Button>
      )}
    </React.Fragment>
  );
}
