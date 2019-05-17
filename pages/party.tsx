import React from 'react';
import PartyMenu from '@components/Party/PartyMenu';
import { Row, Col } from 'antd';
import dynamic from 'next/dynamic';
import PartyDashboardCommuteButtons from '@components/Party/PartyDashboard/PartyDashboardCommuteButtons';
import css from '@emotion/css';
import PartyDashboardBasicInfo from '@components/Party/PartyDashboard/PartyDashboardBasicInfo';
import styled from '@emotion/styled';
import PartyDashboardLocationSecondary from '@components/Party/PartyDashboard/PartyDashboardLocationSecondary';
import { NextFunctionComponent } from 'next';
import { NextContextWithApollo } from './_app';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import {
  PartiesQueryParties,
  PartiesQueryQuery,
  PartiesQueryVariables
} from '@generated/graphql';
import { PARTIES_QUERY } from '@graphql/queries';
import GraphqlException from '@components/GraphqlException';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';

const PartyDashboardMap = dynamic(
  () => import('@components/Party/PartyDashboard/PartyDashboardMap'),
  {
    ssr: false,
    loading: () => <GraphqlInlineLoading style={{ height: '100%' }} />
  }
);

const BREAKPOINT = '992px';

const PartyMapColumnStyles = css`
  position: relative;
  width: 100%;
  height: 400px;
  background: #e8e8e8;
  border-radius: 4px;
  @media screen and (max-width: ${BREAKPOINT}) {
    box-shadow: none;
  }
  .map-wrapper {
    height: 400px;
  }

  .fullscreen-enabled .map-wrapper {
    height: 100%;
    overflow: hidden;
  }
`;

const PartyMapRowStyles = css`
  @media screen and (max-width: ${BREAKPOINT}) {
    box-shadow: none;
  }
`;

const PartyDashboardContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
  .dashboard-content-item {
    padding: 12px 24px;
  }
  .no-padding-mobile {
    @media screen and (max-width: ${BREAKPOINT}) {
      padding: 12px 0;
    }
  }
`;

type RouteQueryProps = { id?: string };

interface InjectedProps {
  partyData: {
    party: PartiesQueryParties | null;
    responseType: 'error' | 'success' | 'missingOrUnauthorized';
  };
}

const Party: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouteQueryProps>
> = ({ partyData }) => {
  if (partyData.responseType == 'missingOrUnauthorized')
    return (
      <GraphqlException desc="Party either does not exist or you are not invited" />
    );
  if (partyData.responseType == 'error') return null;

  const { party } = partyData as { party: PartiesQueryParties };

  return (
    <React.Fragment>
      <PartyMenu />
      <PartyDashboardContentWrapper>
        <PartyDashboardBasicInfo
          author={party.author}
          description={party.description}
          title={party.title}
          partyEnd={party.end}
          partyStart={party.start}
          placeName={party.location.placeName}
        />
        <Row
          css={[PartyMapRowStyles]}
          className="dashboard-content-item no-padding-mobile"
        >
          <Col span={24} css={[PartyMapColumnStyles]}>
            <PartyDashboardMap location={party.location} />
          </Col>
        </Row>

        <PartyDashboardLocationSecondary
          placeName={party.location.placeName}
          title={party.title}
        />
        <PartyDashboardCommuteButtons location={party.location} />
      </PartyDashboardContentWrapper>
    </React.Fragment>
  );
};

async function getParty(
  partyId: string,
  userId: string,
  context: NextContextWithApollo
): Promise<InjectedProps> {
  const {
    data: { parties }
  } = await context.apolloClient.query<
    PartiesQueryQuery,
    PartiesQueryVariables
  >({
    query: PARTIES_QUERY,
    variables: {
      where: {
        id: partyId,
        members_some: {
          id: userId
        }
      }
    }
  });

  const [party] = parties;

  return {
    partyData: {
      party,
      responseType: party ? 'success' : 'missingOrUnauthorized'
    }
  };
}

Party.getInitialProps = async (context): Promise<InjectedProps> => {
  const userData = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });

  if (!userData)
    return {
      partyData: { party: null, responseType: 'missingOrUnauthorized' }
    };

  const {
    query: { id: partyId }
  } = context;

  if (!partyId) {
    return {
      partyData: { party: null, responseType: 'missingOrUnauthorized' }
    };
  }

  try {
    return await getParty(partyId, userData.me.id, context);
  } catch (e) {
    return { partyData: { party: null, responseType: 'error' } };
  }
};

export default Party;
