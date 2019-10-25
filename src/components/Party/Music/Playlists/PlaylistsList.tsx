import css from '@emotion/css';
import styled from '@emotion/styled';
import { Party_PlaylistsConnectionEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Button } from 'antd';
import React from 'react';

import PlaylistCard from './PlaylistCard';

interface Props {
  playlists: DeepWithoutMaybe<Party_PlaylistsConnectionEdges[]>;
  loading: boolean;
  loadingMore: boolean;
  canLoadMore: boolean;
  onLoadMore: VoidFunction;
}

const CardsList = styled.div<{ isLoading: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 12px;
  opacity: ${({ isLoading }) => (isLoading ? '0.6' : '1')};
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : 'all')};
  transition: opacity 0.3s ease;
`;
const LoadMoreButtonStyles = css`
  display: block;
  margin: 0 auto;
  margin-top: 12px;
  @media screen and (max-width: 530px) {
    margin-right: auto;
    margin-left: 12px;
  }
`;

export default function PlaylistsList({
  playlists,
  loading,
  canLoadMore,
  loadingMore,
  onLoadMore
}: Props) {
  return (
    <React.Fragment>
      <CardsList isLoading={loading}>
        {playlists.map(playlist => (
          <PlaylistCard playlist={playlist} key={playlist.node.id} />
        ))}
      </CardsList>
      {canLoadMore && (
        <Button
          onClick={onLoadMore}
          loading={loadingMore}
          css={[LoadMoreButtonStyles]}
        >
          Load More Playlists
        </Button>
      )}
    </React.Fragment>
  );
}
