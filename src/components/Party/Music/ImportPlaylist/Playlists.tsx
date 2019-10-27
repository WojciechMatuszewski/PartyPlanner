import React from 'react';
import {
  useParty_PlaylistsConnection,
  Party_Playlists_Connection_Node_FragmentFragment
} from '@generated/graphql';
import {
  isLoadingInitially,
  hasGraphqlData,
  isLoadingError,
  handleRefetch,
  isLoadingOnSearch,
  isLoadingMore
} from '@shared/graphqlUtils';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import GraphqlInlineError from '@components/GraphqlInlineError';
import AntdSearch from '@components/AntdSearch';
import PlaylistItemList from './PlaylistItemList';

interface Props {
  partyId: string;
  userId: string;
  importingPlaylists: boolean;
  onSelectPlaylists: (
    playlist: Party_Playlists_Connection_Node_FragmentFragment
  ) => void;
  onDeselectPlaylist: (
    playlist: Party_Playlists_Connection_Node_FragmentFragment
  ) => void;
  selectedPlaylists: Party_Playlists_Connection_Node_FragmentFragment[];
}
export default function Playlists({
  partyId,
  userId,
  importingPlaylists,
  onSelectPlaylists,
  onDeselectPlaylist,
  selectedPlaylists
}: Props) {
  const [filterQuery, setFilterQuery] = React.useState<string | undefined>(
    undefined
  );

  const {
    data,
    error,
    networkStatus,
    refetch,
    fetchMore
  } = useParty_PlaylistsConnection({
    variables: {
      where: {
        parties_none: { id: partyId },
        user: { id: userId },
        name_contains: filterQuery
      }
    },
    notifyOnNetworkStatusChange: true
  });

  if (
    isLoadingInitially(networkStatus) ||
    !hasGraphqlData(data, ['playlistsConnection'])
  )
    return <GraphqlInlineLoading />;

  if (error)
    return (
      <GraphqlInlineError.WithButton
        title="Something went wrong while fetching data"
        loading={isLoadingError(networkStatus)}
        onRetry={() => handleRefetch(refetch)}
      />
    );

  const {
    playlistsConnection: {
      pageInfo: { hasNextPage, endCursor },
      edges
    }
  } = data;

  return (
    <React.Fragment>
      <AntdSearch
        disabled={importingPlaylists}
        debounceOnChange={true}
        placeholder="Search ..."
        loading={isLoadingOnSearch(networkStatus)}
        onChange={setFilterQuery}
      />
      <PlaylistItemList
        onLoadMore={handleLoadMore}
        onSelectPlaylists={onSelectPlaylists}
        onDeselectPlaylist={onDeselectPlaylist}
        playlists={edges}
        loading={isLoadingOnSearch(networkStatus)}
        loadingMore={isLoadingMore(networkStatus)}
        canLoadMore={hasNextPage && isLoadingOnSearch(networkStatus)}
        selectedPlaylists={selectedPlaylists}
      />
    </React.Fragment>
  );

  async function handleLoadMore() {
    await fetchMore({
      variables: { after: endCursor },
      updateQuery: (resultsInCache, { fetchMoreResult }) => {
        if (
          fetchMoreResult == null ||
          fetchMoreResult.playlistsConnection == null
        )
          return resultsInCache;
        return {
          ...resultsInCache,
          playlistsConnection: {
            __typename: 'PlaylistConnection',
            pageInfo: fetchMoreResult.playlistsConnection.pageInfo,
            edges: [
              ...resultsInCache.playlistsConnection.edges,
              ...fetchMoreResult.playlistsConnection.edges
            ]
          }
        };
      }
    });
  }
}
