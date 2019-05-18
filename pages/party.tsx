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
import posed from 'react-pose';
import PartyDashboardTop from '@components/Party/PartyDashboard/PartyDashboardTop';
import PartyDashboardTopMenu from '@components/Party/PartyDashboard/PartyDashboardTopMenu';
import useMedia from '@hooks/useMedia';

const PartyDashboardMap = dynamic(
  () =>
    import(
      '@components/Party/PartyDashboard/PartyDashboardMap/PartyDashboardMap'
    ),
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

const PartyDashboardContentWrapper = styled(
  posed.section({
    visible: {
      opacity: 1,
      y: 0
    },
    hidden: {
      opacity: 0,
      y: 100
    }
  })
)`
  margin: 24px auto 24px auto;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: white;
  z-index: 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
  transform: translateY(100%);
  .dashboard-content-item {
    padding: 12px 24px;
  }
  .no-padding-mobile {
    @media screen and (max-width: ${BREAKPOINT}) {
      padding: 12px 0;
    }
  }
  @media screen and (max-width: 1500px) {
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 0;
    width: 100%;
    max-width: 100%;
  }
`;

type RouteQueryProps = { id?: string };

const PartyBgContainer = styled(
  posed.div({
    visible: {
      opacity: 1
    },
    hidden: {
      opacity: 0
    }
  })
)`
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: absolute;
  z-index: 0;
  opacity: 0;
  border-bottom: 1px solid #e8e8e8;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

const PartyBgImage = styled.div`
  z-index: 0;
  height: 100%;
  background: linear-gradient(to right, #00c6ff, #0072ff);
`;

const PosedWrapper = styled(
  posed.div({
    visible: {
      staggerChildren: 200
    },
    hidden: {}
  })
)`
  width: 100%;
  display: flex;
  position: relative;
  min-height: calc(100vh - 66px);
`;

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
    <PosedWrapper initialPose="hidden" pose="visible">
      <PartyMenu />
      <PartyBgContainer initialPose="hidden">
        <PartyBgImage />
      </PartyBgContainer>
      <PartyDashboardContentWrapper initialPose="hidden">
        <PartyDashboardTop party={party} />
        <PartyDashboardTopMenu />
        <PartyDashboardBasicInfo
          author={party.author}
          description={party.description}
          title={party.title}
          partyEnd={party.end}
          partyStart={party.start}
          placeName={party.location.placeName}
        />
        <Row css={[PartyMapRowStyles]}>
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
    </PosedWrapper>
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
