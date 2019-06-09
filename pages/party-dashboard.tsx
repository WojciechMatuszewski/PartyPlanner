import React from 'react';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
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
  PartiesQueryQuery,
  PartiesQueryQueryVariables
} from '@generated/graphql';
import { PARTIES_QUERY } from '@graphql/queries';
import GraphqlException from '@components/GraphqlException';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import posed from 'react-pose';
import PartyDashboardTop from '@components/Party/PartyDashboard/PartyDashboardTop';
import PartyDashboardTopMenu from '@components/Party/PartyDashboard/PartyDashboardTopMenu';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { WithApolloAuthInjectedProps } from '@apolloSetup/withApolloAuth';
import PartyDashboardParticipants from '@components/Party/PartyDashboard/PartyDashboardParticipants/PartyDashboardParticipants';
import { PartyMainContentWrapper } from '@components/Party/shared';
import Head from 'next/head';

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

// const PartyDashboardTopBackground = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 800px;
//   background: url('/static/party-dashboard-background.svg') no-repeat top;
//   background-size: cover;
//   transform: rotate(180deg);
// `;

type RouteQueryProps = { id?: string };

const PosedWrapper = styled(
  posed.div({
    visible: {
      staggerChildren: 200
    },
    hidden: {}
  })
)`
  display: flex;
  flex: 1;
  position: relative;
  min-height: calc(100vh - 66px);
`;

interface InjectedProps {
  partyData: {
    party: PartiesQueryQuery['parties'][0] | null;
    responseType: 'error' | 'success' | 'missingOrUnauthorized';
  };
  userData: WithApolloAuthInjectedProps['me'] | null;
}

interface PartyDashboardContextValue {
  currentlyAuthenticatedUserId: string;
  partyId: string;
}

export const PartyDashboardContext = React.createContext<
  PartyDashboardContextValue
>({
  currentlyAuthenticatedUserId: '',
  partyId: ''
});

const Party: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouteQueryProps>
> = ({ partyData, userData }) => {
  if (partyData.responseType == 'missingOrUnauthorized')
    return (
      <GraphqlException desc="Party either does not exist or you are not invited" />
    );

  if (partyData.responseType == 'error' || !userData) return null;

  const { party } = partyData as {
    party: NonNullable<DeepWithoutMaybe<PartiesQueryQuery['parties'][0]>>;
  };

  const contextValue = React.useMemo<PartyDashboardContextValue>(
    () => ({
      currentlyAuthenticatedUserId: userData.id,
      partyId: party.id
    }),
    []
  );

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <PartyMenu partyId={party.id} routerPath="/party-dashboard" />
      {/* <PartyDashboardTopBackground /> */}
      <PosedWrapper initialPose="hidden" pose="visible">
        <PartyDashboardContext.Provider value={contextValue}>
          <PartyMainContentWrapper initialPose="hidden">
            <PartyDashboardTop party={party} />
            <PartyDashboardTopMenu
              partyId={party.id}
              inviteSecret={party.inviteSecret!}
            />
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
            <Row>
              <Col span={24}>
                <PartyDashboardParticipants partyId={partyData.party!.id} />
              </Col>
            </Row>
          </PartyMainContentWrapper>
        </PartyDashboardContext.Provider>
      </PosedWrapper>
    </React.Fragment>
  );
};

async function getParty(
  partyId: string,
  userId: string,
  context: NextContextWithApollo
): Promise<InjectedProps['partyData']> {
  const {
    data: { parties }
  } = await context.apolloClient.query<
    PartiesQueryQuery,
    PartiesQueryQueryVariables
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
    party,
    responseType: party ? 'success' : 'missingOrUnauthorized'
  };
}

Party.getInitialProps = async (context): Promise<InjectedProps> => {
  const userData = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });

  if (!userData)
    return {
      partyData: { party: null, responseType: 'missingOrUnauthorized' },
      userData: null
    };

  const {
    query: { id: partyId }
  } = context;

  if (!partyId) {
    return {
      partyData: { party: null, responseType: 'missingOrUnauthorized' },
      userData: null
    };
  }

  userData.me;

  try {
    const partyData = await getParty(partyId, userData.me.id, context);
    return {
      partyData,
      userData: userData.me
    };
  } catch (e) {
    return {
      partyData: { party: null, responseType: 'error' },
      userData: null
    };
  }
};

export default Party;