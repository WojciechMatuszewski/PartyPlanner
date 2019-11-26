import GraphqlLoading from '@components/GraphqlLoading';
import { PartyContentInnerWrapper } from '@components/Party/styles';
import EmptySection from '@components/UI/EmptySection';
import ErrorSection from '@components/UI/ErrorSection';
import {
  useParty_PlaylistsConnection,
  Party_PlaylistsConnectionVariables,
  Party_PlaylistsConnectionEdges
} from '@generated/graphql';
import { PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT } from '@graphql/fragments';
import {
  handleRefetch,
  hasGraphqlData,
  isLoadingError,
  isLoadingInitially,
  isLoadingMore,
  isLoadingOnSearch,
  DeepWithoutMaybe
} from '@shared/graphqlUtils';
import { Affix, Button } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

import { AffixedBarContainer } from '../shared/styles';
import PlaylistsControls from './PlaylistsControls';
import PlaylistsList from './PlaylistsList';
import { BehaviorSubject } from 'rxjs';
import PlaylistCard from './PlaylistCard/PlaylistCard';
import CombinePlaylists from '../CombinePlaylists/CombinePlaylists';

const queryVariablesSubject = new BehaviorSubject<
  Party_PlaylistsConnectionVariables
>({});

export function getPartyPlaylistConnectionVariables() {
  return queryVariablesSubject.getValue();
}

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
          createdAt
        }
      }
    }
  }
  ${PARTY_PLAYLISTS_CONNECTION_NODE_FRAGMENT}
`;

const PLAYLIST_CONNECTION_PAGINATION_SIZE = 20;

interface Props {
  partyId: string;
  userId: string;
}
export default function PartyMusicPlaylists({ partyId, userId }: Props) {
  const [filterQuery, setFilterQuery] = React.useState<undefined | string>(
    undefined
  );

  const [selectedPlaylists, setSelectedPlaylists] = React.useState<
    DeepWithoutMaybe<Party_PlaylistsConnectionEdges[]>
  >([]);

  const [selectingPlaylists, setSelectingPlaylists] = React.useState(false);

  const toggleSelectingPlaylists = () => {
    setSelectingPlaylists(p => !p);
    setSelectedPlaylists([]);
  };

  function handleSelectPlaylist(
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) {
    setSelectedPlaylists(prev => [...prev, playlist]);
  }

  function handleDeselectPlaylist(
    playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>
  ) {
    setSelectedPlaylists(prev =>
      prev.filter(({ node: { id } }) => id != playlist.node.id)
    );
  }

  function resetState() {
    setSelectedPlaylists([]);
    setSelectingPlaylists(false);
  }

  const {
    data,
    error,
    networkStatus,
    refetch,
    fetchMore,
    variables
  } = useParty_PlaylistsConnection({
    variables: {
      where: { parties_some: { id: partyId }, name_contains: filterQuery },
      first: PLAYLIST_CONNECTION_PAGINATION_SIZE
    },
    notifyOnNetworkStatusChange: true
  });

  React.useEffect(() => {
    queryVariablesSubject.next(variables);
  }, [variables]);

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
            hasAtLeastOnePlaylist={edges.length > 0}
            onSelectPlaylistClick={toggleSelectingPlaylists}
            selectingPlaylists={selectingPlaylists}
            loading={isLoadingOnSearch(networkStatus)}
            onSearch={setFilterQuery}
          >
            <CombinePlaylists
              onFinished={resetState}
              partyId={partyId}
              userId={userId}
              selectedPlaylists={selectedPlaylists}
            />
          </PlaylistsControls>
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
          >
            {playlist => (
              <PlaylistCard
                key={playlist.node.id}
                playlist={playlist}
                selecting={selectingPlaylists}
                isSelected={selectedPlaylists.some(
                  p => p.node.id == playlist.node.id
                )}
                onPlaylistCardDeselected={handleDeselectPlaylist}
                onPlaylistCardSelected={handleSelectPlaylist}
              />
            )}
          </PlaylistsList>
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
