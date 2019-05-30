import React from 'react';
import PartyDashboardParticipantsTopMenu from './PartyDashboardParticipantsTopMenu';
import { gql } from 'apollo-boost';
import PartyDashboardParticipantsList from './PartyDashboardParticipantsList';
import {
  PartyDashboardParticipantsQueryComponent,
  PartyDashboardParticipantsQueryQuery
} from '@generated/graphql';
import { hasGraphqlData, handleRefetch } from '@shared/graphqlUtils';
import { Spin, Empty, Button } from 'antd';
import GraphqlInlineError from '@components/GraphqlInlineError';

const PAGE_SIZE = 20;

interface Props {
  partyId: string;
}

export const PARTY_DASHBOARD_PARTICIPANTS_QUERY = gql`
  query partyDashboardParticipantsQuery(
    $where: UserWhereInput
    $orderBy: UserOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    usersConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      before: $before
      first: $first
      last: $last
      after: $after
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          firstName
          lastName
          avatar
        }
      }
    }
    aggregated: usersConnection(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export default function PartyDashboardParticipants(props: Props) {
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  return (
    <React.Fragment>
      <PartyDashboardParticipantsTopMenu onSearch={setSearchQuery} />
      <PartyDashboardParticipantsQueryComponent
        notifyOnNetworkStatusChange={true}
        variables={{
          where: {
            parties_some: {
              id: props.partyId
            },
            OR: [
              { firstName_contains: searchQuery.replace(/ /g, '') },
              { lastName_contains: searchQuery.replace(/ /g, '') }
            ]
          },
          first: PAGE_SIZE
        }}
      >
        {({ data, loading, error, fetchMore, refetch, networkStatus }) => {
          if (error)
            return (
              <GraphqlInlineError style={{ padding: 24 }}>
                <Button
                  loading={error && networkStatus != 7}
                  onClick={async () => await handleRefetch(refetch)}
                >
                  Try again
                </Button>
              </GraphqlInlineError>
            );
          if (
            !hasGraphqlData(data, ['usersConnection', 'usersConnection.edges'])
          )
            return <Spin />;
          if (data.usersConnection.edges.length == 0)
            return (
              <Empty
                style={{ margin: 0, padding: 24 }}
                description="Could not find given user"
              />
            );

          return (
            <PartyDashboardParticipantsList
              onLoadMore={async ({ startIndex, stopIndex }) => {
                data.usersConnection.pageInfo.hasNextPage
                  ? void fetchMore({
                      variables: {
                        skip: startIndex,
                        first: stopIndex - startIndex + 1
                      },
                      updateQuery: fetchMoreQueryUpdater
                    })
                  : Promise.resolve();
              }}
              participants={data.usersConnection.edges}
              loading={loading}
              rowCount={data.aggregated.aggregate.count}
            />
          );
        }}
      </PartyDashboardParticipantsQueryComponent>
    </React.Fragment>
  );

  function fetchMoreQueryUpdater(
    prev: PartyDashboardParticipantsQueryQuery,
    {
      fetchMoreResult
    }: { fetchMoreResult?: PartyDashboardParticipantsQueryQuery }
  ): PartyDashboardParticipantsQueryQuery {
    if (
      !prev ||
      !hasGraphqlData(fetchMoreResult, [
        'usersConnection',
        'usersConnection.edges'
      ])
    )
      return prev;

    return {
      usersConnection: {
        edges: [
          ...prev.usersConnection.edges,
          ...fetchMoreResult.usersConnection.edges
        ],
        pageInfo: fetchMoreResult.usersConnection.pageInfo,
        __typename: 'UserConnection'
      },
      aggregated: prev.aggregated
    };
  }
}
