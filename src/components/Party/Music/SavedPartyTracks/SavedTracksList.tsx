import GraphqlLoading from '@components/GraphqlLoading';
import EmptySection from '@components/UI/EmptySection';
import ErrorSection from '@components/UI/ErrorSection';
import {
  PartySavedTrackOrderByInput,
  useParty_SavedTracksConnection
} from '@generated/graphql';
import { handleRefetch, hasGraphqlData } from '@shared/graphqlUtils';
import { Button, List } from 'antd';
import { NetworkStatus } from 'apollo-client';
import React from 'react';
import gql from 'graphql-tag';

interface Props {
  partyId: string;
}

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
        }
      }
    }
  }
`;

export default function SavedTracksList(props: Props) {
  const {
    data,
    error,
    refetch,
    networkStatus
  } = useParty_SavedTracksConnection({
    variables: {
      where: { party: { id: props.partyId } },
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
    <List bordered={true}>
      {edges.map(() => (
        <List.Item key={Math.random()}>works</List.Item>
      ))}
    </List>
  );
}
