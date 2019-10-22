import { Affix, Button } from 'antd';
import React from 'react';
import { AffixedBarContainer } from '../shared/styles';
import PlaylistsControls from './PlaylistsControls';
import { PartyContentInnerWrapper } from '@components/Party/styles';
import gql from 'graphql-tag';
import { useParty_PlaylistsConnection } from '@generated/graphql';
import { NetworkStatus } from 'apollo-client';
import { hasGraphqlData, handleRefetch } from '@shared/graphqlUtils';
import GraphqlLoading from '@components/GraphqlLoading';
import ErrorSection from '@components/UI/ErrorSection';
import PlaylistsList from './PlaylistsList';
import EmptySection from '@components/UI/EmptySection';

export const PLAYLIST_CONNECTION_PAGINATION_SIZE = 20;
export const PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT = gql`
  fragment PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT on Playlist {
    id
    spotifyExternalUrl
    name
    imageUrl
    user {
      firstName
      lastName
      avatar
    }
  }
`;
export const PARTY_PLAYLISTS_CONNECTION_QUERY = gql`
  query Party_PlaylistsConnection(
    $where: PlaylistWhereInput
    $orderBy: PlaylistOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    playlistsConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          ...PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT
        }
      }
    }
  }
  ${PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT}
`;

export function getPartyMusicPlaylistsConnectionVariables(partyId: string) {
  return {
    where: { parties_some: { id: partyId } },
    first: PLAYLIST_CONNECTION_PAGINATION_SIZE
  };
}

interface Props {
  partyId: string;
}
export default function PartyMusicPlaylists({ partyId }: Props) {
  const {
    data,
    error,
    networkStatus,
    refetch,
    fetchMore
  } = useParty_PlaylistsConnection({
    variables: getPartyMusicPlaylistsConnectionVariables(partyId),
    notifyOnNetworkStatusChange: true
  });

  function handleSearch(searchQuery: string) {
    refetch({ where: { name_contains: searchQuery } });
  }

  const isLoadingInitially = networkStatus == NetworkStatus.loading;
  const isLoadingOnSearch = networkStatus == NetworkStatus.setVariables;
  const isLoadingError = networkStatus == NetworkStatus.refetch;
  const isLoadingMore = networkStatus == NetworkStatus.fetchMore;

  if (isLoadingInitially || !hasGraphqlData(data, ['playlistsConnection']))
    return (
      <GraphqlLoading
        height="calc(100vh - 90px)"
        isLoadingInitially={true}
        loading={true}
      />
    );

  if (error)
    return (
      <ErrorSection style={{ padding: 0 }}>
        <Button loading={isLoadingError} onClick={() => handleRefetch(refetch)}>
          Try again
        </Button>
      </ErrorSection>
    );

  const {
    playlistsConnection: { pageInfo, edges }
  } = data;

  return (
    <React.Fragment>
      <Affix>
        <AffixedBarContainer>
          <PlaylistsControls
            loading={isLoadingOnSearch}
            onSearch={handleSearch}
          />
        </AffixedBarContainer>
      </Affix>
      <PartyContentInnerWrapper style={{ padding: 12 }}>
        {edges.length == 0 ? (
          <EmptySection title="No saved" image="/static/music-note.svg" />
        ) : (
          <PlaylistsList
            loading={isLoadingOnSearch}
            canLoadMore={pageInfo.hasNextPage && !isLoadingOnSearch}
            loadingMore={isLoadingMore}
            onLoadMore={handleLoadMore}
            playlists={edges}
          />
        )}
      </PartyContentInnerWrapper>
    </React.Fragment>
  );

  function handleLoadMore() {
    fetchMore({
      variables: { after: pageInfo.endCursor },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || !fetchMoreResult.playlistsConnection)
          return prev;
        const { playlistsConnection: prevPlaylistConnection } = prev;
        const { playlistsConnection } = fetchMoreResult;
        return {
          ...prev,
          playlistsConnection: {
            ...prevPlaylistConnection,
            pageInfo: playlistsConnection.pageInfo,
            edges: [
              ...prevPlaylistConnection.edges,
              ...playlistsConnection.edges
            ]
          }
        };
      }
    });
  }
}
