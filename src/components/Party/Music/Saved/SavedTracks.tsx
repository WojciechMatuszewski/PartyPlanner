import GraphqlLoading from '@components/GraphqlLoading';
import { PartyContentInnerWrapper } from '@components/Party/styles';
import EmptySection from '@components/UI/EmptySection';
import ErrorSection from '@components/UI/ErrorSection';
import styled from '@emotion/styled-base';
import {
  PartySavedTrackOrderByInput,
  useParty_SavedTracksConnection
} from '@generated/graphql';
import { handleRefetch, hasGraphqlData } from '@shared/graphqlUtils';
import { Affix, Button } from 'antd';
import { NetworkStatus } from 'apollo-client';
import gql from 'graphql-tag';
import React from 'react';
import { ListRowRenderer } from 'react-virtualized';

import SavedTrack from './SavedTrack';
import SavedTracksControls from './SavedTracksControls';
import SavedTracksList from './SavedTracksList';

const SavedTracksInnerWrapper = styled(PartyContentInnerWrapper)`
  padding-top: 12px;
`;

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
          id
          name
          imageUrl
          explicit
          length
          artists {
            name
          }
        }
      }
    }
  }
`;

interface Props {
  partyId: string;
}
export default function SavedTracks({ partyId }: Props) {
  const {
    data,
    error,
    refetch,
    networkStatus
  } = useParty_SavedTracksConnection({
    variables: {
      where: { party: { id: partyId } },
      orderBy: PartySavedTrackOrderByInput.UpVotesDesc
    },
    notifyOnNetworkStatusChange: true
  });

  const [selectingTracks, setSelectingTracks] = React.useState(false);
  const [, setSelectedTracks] = React.useState<string[]>([]);

  const toggleSetSelectingSongs = () => setSelectingTracks(prev => !prev);

  if (
    networkStatus == NetworkStatus.loading ||
    !hasGraphqlData(data, ['partySavedTracksConnection'])
  )
    return (
      <GraphqlLoading
        height="calc(100vh - 90px)"
        isLoadingInitially={true}
        loading={true}
        textToDisplay="Loading saved tracks"
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
    partySavedTracksConnection: { edges }
  } = data;

  const renderTrack: ListRowRenderer = ({ style, index }) => {
    const trackToRender = edges[index].node;
    return (
      <SavedTrack
        onSelectTrack={() =>
          setSelectedTracks(prev => [...prev, trackToRender.id])
        }
        onDeselectTrack={() => {}}
        selecting={selectingTracks}
        style={style}
        track={{ ...trackToRender, artists: '' }}
        key={index}
        trackPlaying={false}
      />
    );
  };

  if (edges.length == 0)
    return (
      <EmptySection
        title="No saved tracks"
        description="Add tracks in discover tab!"
        image="/static/music-note.svg"
      />
    );

  return (
    <React.Fragment>
      <Affix>
        <SavedTracksControls
          onSelectSongsClick={toggleSetSelectingSongs}
          selectingTracks={selectingTracks}
        />
      </Affix>
      <SavedTracksInnerWrapper>
        <SavedTracksList
          trackRenderer={renderTrack}
          tracks={edges}
          className=""
          loading={false}
          selectingSongs={selectingTracks}
        />
      </SavedTracksInnerWrapper>
    </React.Fragment>
  );
}
