import { useBigMusicPlayer } from '../BigMusicPlayer/BigMusicPlayerProvider';
import CreatePlaylists from '../CreatePlaylist/CreatePlaylist';
import { AffixedBarContainer } from '../shared/styles';
import SavedTrack from './SavedTrack';
import SavedTracksControls from './SavedTracksControls';
import SavedTracksList from './SavedTracksList';

import GraphqlLoading from '@components/GraphqlLoading';
import { MOBILE_LIST_BREAKPOINT } from '@components/Party/shared';
import { PartyContentInnerWrapper } from '@components/Party/styles';
import EmptySection from '@components/UI/EmptySection';
import ErrorSection from '@components/UI/ErrorSection';
import css from '@emotion/css';
import styled from '@emotion/styled-base';
import {
  Full_Saved_Track_FragmentFragment,
  useParty_SavedTracksConnection
} from '@generated/graphql';
import { FULL_SAVED_TRACK_FRAGMENT } from '@graphql/fragments';
import { handleRefetch, hasGraphqlData } from '@shared/graphqlUtils';
import { Affix, Button } from 'antd';
import { NetworkStatus } from 'apollo-client';
import gql from 'graphql-tag';
import React from 'react';
import { ListRowRenderer } from 'react-virtualized';

const SavedTracksInnerWrapper = styled(PartyContentInnerWrapper)`
  padding: 12px;
  @media screen and (max-width: ${MOBILE_LIST_BREAKPOINT}) {
    padding: 0;
    padding-bottom: 12px;
    .discover-tracks-list {
      border-radius: 0;
      box-shadow: none;
      border-left: 0;
      border-right: 0;
    }
  }
`;

const EmptySectionStyles = css`
  height: calc() @media screen and (max-width: ${MOBILE_LIST_BREAKPOINT}) {
    padding: 12px;
  }
`;

export const PARTY_SAVED_TRACKS_CONNECTION_PAGINATION_SIZE = 20;
export const PARTY_SAVED_TRACKS_CONNECTION_QUERY = gql`
  query Party_SavedTracksConnection(
    $where: PartySavedTrackWhereInput
    $orderBy: PartySavedTrackOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    partySavedTracksConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      edges {
        node {
          ...FULL_SAVED_TRACK_FRAGMENT
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${FULL_SAVED_TRACK_FRAGMENT}
`;

interface Props {
  partyId: string;
}

export default function SavedTracks({ partyId }: Props) {
  const [selectingTracks, setSelectingTracks] = React.useState(false);

  const [selectedTracks, setSelectedTracks] = React.useState<
    Full_Saved_Track_FragmentFragment[]
  >([]);

  const [
    createPlaylistModalVisible,
    setCreatePlaylistModalVisible
  ] = React.useState(false);

  const {
    data,
    error,
    refetch,
    networkStatus,
    fetchMore
  } = useParty_SavedTracksConnection({
    variables: {
      where: { party: { id: partyId } },
      first: PARTY_SAVED_TRACKS_CONNECTION_PAGINATION_SIZE
    },
    notifyOnNetworkStatusChange: true
  });

  const toggleSetSelectingSongs = () => {
    setSelectingTracks(prev => !prev);
    setSelectedTracks([]);
  };
  const toggleCreatePlaylistModalVisible = (shouldResetState: boolean) => {
    setCreatePlaylistModalVisible(prev => !prev);
    if (shouldResetState) {
      setSelectedTracks([]);
      setSelectingTracks(false);
    }
  };

  const {
    setTrack,
    audioPlayerCommands$,
    track: currentTrackInMusicPlayer,
    playerState
  } = useBigMusicPlayer();

  const handlePlayPauseClick = React.useCallback(
    (track: Full_Saved_Track_FragmentFragment) => {
      audioPlayerCommands$.next({ command: 'toggle', trackInQuestion: track });
      setTrack(track);
    },
    []
  );

  if (
    networkStatus == NetworkStatus.loading ||
    !hasGraphqlData(data, ['partySavedTracksConnection'])
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
          loading={networkStatus == NetworkStatus.refetch}
          onClick={() => handleRefetch(refetch)}
        >
          Try again
        </Button>
      </ErrorSection>
    );

  const {
    partySavedTracksConnection: {
      edges,
      pageInfo: { hasNextPage, endCursor }
    }
  } = data;

  const renderTrack: ListRowRenderer = ({ style, index }) => {
    const trackToRender = edges[index].node;

    return (
      <SavedTrack
        onSelectTrack={() => selectTrack(trackToRender)}
        onDeselectTrack={() => deselectTrack(trackToRender)}
        isSelected={isTrackSelected(trackToRender)}
        onPlayPauseClick={handlePlayPauseClick}
        selecting={selectingTracks}
        style={style}
        track={trackToRender}
        key={index}
        trackPlaying={isTrackPlaying(trackToRender)}
      />
    );
  };

  return (
    <React.Fragment>
      {createPlaylistModalVisible && (
        <CreatePlaylists
          onClose={toggleCreatePlaylistModalVisible}
          tracks={selectedTracks}
        />
      )}

      <Affix>
        <AffixedBarContainer>
          <SavedTracksControls
            hasTracks={edges.length > 0}
            onSearch={searchValue =>
              refetch({
                where: { name_contains: searchValue, party: { id: partyId } }
              })
            }
            hasSelectedAtLeastOneTrack={!(selectedTracks.length == 0)}
            onCreatePlaylistClick={toggleCreatePlaylistModalVisible}
            onSelectSongsClick={toggleSetSelectingSongs}
            selectingTracks={selectingTracks}
          />
        </AffixedBarContainer>
      </Affix>
      <SavedTracksInnerWrapper>
        {edges.length == 0 ? (
          <EmptySection
            emotionCSS={EmptySectionStyles}
            title="No saved tracks with that name"
            image="/static/music-note.svg"
          />
        ) : (
          <React.Fragment>
            <SavedTracksList
              onLoadMore={handleLoadMore}
              canLoadMore={
                hasNextPage && networkStatus != NetworkStatus.setVariables
              }
              loadingMore={networkStatus == NetworkStatus.fetchMore}
              trackRenderer={renderTrack}
              tracksLength={edges.length}
              loading={networkStatus == NetworkStatus.setVariables}
              selectingSongs={selectingTracks}
            />
          </React.Fragment>
        )}
      </SavedTracksInnerWrapper>
    </React.Fragment>
  );

  function deselectTrack(trackToDeselect: Full_Saved_Track_FragmentFragment) {
    return setSelectedTracks(prev =>
      prev.filter(({ id: selectedId }) => selectedId != trackToDeselect.id)
    );
  }
  function selectTrack(trackToSelect: Full_Saved_Track_FragmentFragment) {
    return setSelectedTracks(prev => [...prev, trackToSelect]);
  }
  function isTrackPlaying(trackToCheck: Full_Saved_Track_FragmentFragment) {
    return (
      currentTrackInMusicPlayer != null &&
      currentTrackInMusicPlayer.id == trackToCheck.id &&
      playerState == 'playing'
    );
  }
  function isTrackSelected(trackToCheck: Full_Saved_Track_FragmentFragment) {
    return selectedTracks.filter(({ id }) => trackToCheck.id == id).length > 0;
  }

  function handleLoadMore() {
    fetchMore({
      variables: {
        after: endCursor,
        where: {
          party: { id: partyId }
        }
      },
      updateQuery: (prevResults, { fetchMoreResult }) => {
        if (!fetchMoreResult || !fetchMoreResult.partySavedTracksConnection)
          return prevResults;
        return {
          ...prevResults,
          partySavedTracksConnection: {
            ...prevResults.partySavedTracksConnection,
            edges: [
              ...prevResults.partySavedTracksConnection.edges,
              ...fetchMoreResult.partySavedTracksConnection.edges
            ],
            pageInfo: fetchMoreResult.partySavedTracksConnection.pageInfo
          }
        };
      }
    });
  }
}
