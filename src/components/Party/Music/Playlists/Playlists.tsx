import GraphqlLoading from '@components/GraphqlLoading';
import { PartyContentInnerWrapper } from '@components/Party/styles';
import EmptySection from '@components/UI/EmptySection';
import ErrorSection from '@components/UI/ErrorSection';
import { useParty_PlaylistsConnection } from '@generated/graphql';
import { PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT } from '@graphql/fragments';
import {
  handleRefetch,
  hasGraphqlData,
  isLoadingError,
  isLoadingInitially,
  isLoadingMore,
  isLoadingOnSearch
} from '@shared/graphqlUtils';
import { Affix, Button } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

import { AffixedBarContainer } from '../shared/styles';
import PlaylistsControls from './PlaylistsControls';
import PlaylistsList from './PlaylistsList';

export const PLAYLIST_CONNECTION_PAGINATION_SIZE = 20;
export const PLAYLIST_CONNECTION_CACHE_KEY = 'party_playlists';
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
  userId: string;
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

  if (
    isLoadingInitially(networkStatus) ||
    !hasGraphqlData(data, ['playlistsConnection'])
  )
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
        <Button
          loading={isLoadingError(networkStatus)}
          onClick={() => handleRefetch(refetch)}
        >
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
            loading={isLoadingOnSearch(networkStatus)}
            onSearch={handleSearch}
          />
        </AffixedBarContainer>
      </Affix>
      <PartyContentInnerWrapper style={{ padding: 12 }}>
        {edges.length == 0 ? (
          <EmptySection
            title="No saved playlists to display"
            image="/static/music-note.svg"
          />
        ) : (
          <PlaylistsList
            loading={isLoadingOnSearch(networkStatus)}
            canLoadMore={
              pageInfo.hasNextPage && !isLoadingOnSearch(networkStatus)
            }
            loadingMore={isLoadingMore(networkStatus)}
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
