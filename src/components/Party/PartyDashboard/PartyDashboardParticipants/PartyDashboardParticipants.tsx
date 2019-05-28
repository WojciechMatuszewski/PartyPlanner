import React from 'react';
import PartyDashboardParticipantsTopMenu from './PartyDashboardParticipantsTopMenu';
import { gql } from 'apollo-boost';
import PartyDashboardParticipantsList from './PartyDashboardParticipantsList';
import { PartyDashboardParticipantsQueryComponent } from '@generated/graphql';
import { hasGraphqlData } from '@shared/graphqlUtils';
import { Spin, Empty } from 'antd';

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
        variables={{
          where: {
            parties_some: {
              id: props.partyId
            },
            OR: [
              { firstName_contains: searchQuery },
              { lastName_contains: searchQuery }
            ]
          },
          first: 10
        }}
      >
        {({ data, loading, error, fetchMore }) => {
          if (
            !hasGraphqlData(data, ['usersConnection', 'usersConnection.edges'])
          )
            return <Spin />;
          if (data.usersConnection.edges.length == 0) return <Empty />;
          return (
            <PartyDashboardParticipantsList
              onLoadMore={async () =>
                data.usersConnection.pageInfo.hasNextPage
                  ? void fetchMore({
                      variables: {
                        after: data.usersConnection.pageInfo.endCursor
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (
                          !prev ||
                          !hasGraphqlData(fetchMoreResult, [
                            'usersConnection',
                            'usersConnection.edges'
                          ]) ||
                          !data.usersConnection.pageInfo.hasNextPage
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
                    })
                  : Promise.resolve()
              }
              participants={data.usersConnection.edges}
              loading={loading}
              rowCount={data.aggregated.aggregate.count}
            />
          );
        }}
      </PartyDashboardParticipantsQueryComponent>
    </React.Fragment>
  );
}
