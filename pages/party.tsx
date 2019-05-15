import React from 'react';
import PartyMenu from '@components/Party/PartyMenu';
import { Row, Col } from 'antd';
import dynamic from 'next/dynamic';
import PartyDashboardCommuteButtons from '@components/Party/PartyDashboard/PartyDashboardCommuteButtons';
import css from '@emotion/css';
import PartyDashboardBasicInfo from '@components/Party/PartyDashboard/PartyDashboardBasicInfo';
import styled from '@emotion/styled';
import PartyDashboardLocationSecondary from '@components/Party/PartyDashboard/PartyDashboardLocationSecondary';
import posed from 'react-pose';

import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import { NextFunctionComponent } from 'next';
import { NextContextWithApollo } from './_app';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import {
  PartiesQueryParties,
  PartiesQueryQuery,
  PartiesQueryVariables
} from '@generated/graphql';
import { PARTIES_QUERY } from '@graphql/queries';

const PartyDashboardMap = dynamic(
  () => import('@components/Party/PartyDashboard/PartyDashboardMap'),
  { ssr: false }
);

const BREAKPOINT = '992px';

const PartyMapColumnStyles = css`
  position: relative;
  width: 100%;
  height: 300px;
  background: white;
  @media screen and (max-width: ${BREAKPOINT}) {
    box-shadow: none;
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
  .dashboard-content-item {
    padding: 12px 24px;
  }
  .no-padding-mobile {
    @media screen and (max-width: ${BREAKPOINT}) {
      padding: 12px 0;
    }
  }
`;

const MapWrapper = styled(
  posed.div({
    hidden: {
      opacity: 0
    },
    visible: { opacity: 1 }
  })
)`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const LoaderWrapper = styled(
  posed.div({
    hidden: {
      opacity: 0,
      applyAtEnd: {
        display: 'none'
      }
    },
    visible: {
      opacity: 1,
      applyAtStart: {
        display: 'flex'
      }
    }
  })
)`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  ${FlexBoxFullCenteredStyles};
`;

type RouteQueryProps = { id?: string };

interface InjectedProps {
  party: PartiesQueryParties | null;
}

const Party: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouteQueryProps>
> = ({ party }) => {
  const [mapLoaded, setMapLoaded] = React.useState<boolean>(false);
  if (!party) return null;

  return (
    <React.Fragment>
      <PartyMenu />
      <PartyDashboardContentWrapper>
        <PartyDashboardBasicInfo
          description={party.description}
          title={party.title}
        />
        <Row
          css={[PartyMapRowStyles]}
          className="dashboard-content-item no-padding-mobile"
        >
          <Col span={24} css={[PartyMapColumnStyles]}>
            <MapWrapper pose={mapLoaded ? 'visible' : 'hidden'}>
              <PartyDashboardMap
                location={party.location}
                onMapLoaded={() => setMapLoaded(true)}
              />
            </MapWrapper>
            <LoaderWrapper pose={mapLoaded ? 'hidden' : 'visible'}>
              <GraphqlInlineLoading />
            </LoaderWrapper>
          </Col>
        </Row>

        <PartyDashboardLocationSecondary
          placeName={party.location.placeName}
          title={party.title}
        />
        <PartyDashboardCommuteButtons />
      </PartyDashboardContentWrapper>
    </React.Fragment>
  );
};

Party.getInitialProps = async context => {
  const userData = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });

  if (!userData) return { party: null };

  const {
    query: { id: partyId }
  } = context;
  if (!partyId) {
    return { party: null };
  }

  try {
    const { data } = await context.apolloClient.query<
      PartiesQueryQuery,
      PartiesQueryVariables
    >({
      query: PARTIES_QUERY,
      variables: {
        where: {
          id: partyId,
          members_some: {
            id: userData.me.id
          }
        }
      }
    });
    const {
      parties: [party]
    } = data;
    return { party };
  } catch (e) {
    return { party: null };
  }
};

export default Party;
