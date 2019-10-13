import React from 'react';
import styled from '@emotion/styled-base';
import { PartyContentInnerWrapper } from '@components/Party/styles';
import { Affix, Button } from 'antd';
import gql from 'graphql-tag';
import {
  useParty_SavedTracksConnection,
  PartySavedTrackOrderByInput
} from '@generated/graphql';
import GraphqlLoading from '@components/GraphqlLoading';
import { hasGraphqlData, handleRefetch } from '@shared/graphqlUtils';
import { NetworkStatus } from 'apollo-client';
import ErrorSection from '@components/UI/ErrorSection';
import EmptySection from '@components/UI/EmptySection';
import SavedTracksList from './SavedTracksList';
import SavedTracksControls from './SavedTracksControls';

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
        <SavedTracksControls />
      </Affix>
      <SavedTracksInnerWrapper>
        <SavedTracksList tracks={edges} className="" loading={false} />
      </SavedTracksInnerWrapper>
    </React.Fragment>
  );
}
