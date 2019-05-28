import React from 'react';
import PartyDashboardParticipantsTopMenu from './PartyDashboardParticipantsTopMenu';
import { gql } from 'apollo-boost';
import PartyDashboardParticipantsList from './PartyDashboardParticipantsList';
import { PartyDashboardParticipantsQueryComponent } from '@generated/graphql';
import { hasGraphqlData } from '@shared/graphqlUtils';
import { Spin } from 'antd';

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
        {({ data, loading, error }) => {
          if (
            !hasGraphqlData(data, ['usersConnection', 'usersConnection.edges'])
          )
            return <Spin />;
          return (
            <PartyDashboardParticipantsList
              loading={loading}
              rowCount={data.usersConnection.aggregate.count}
            />
          );
        }}
      </PartyDashboardParticipantsQueryComponent>
    </React.Fragment>
  );
}
