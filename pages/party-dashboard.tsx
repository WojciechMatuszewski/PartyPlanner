import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import PartyDashboardBasicInfo from '@components/Party/PartyDashboard/PartyDashboardBasicInfo';
import PartyDashboardCommuteButtons from '@components/Party/PartyDashboard/PartyDashboardCommuteButtons';
import PartyDashboardLocationSecondary from '@components/Party/PartyDashboard/PartyDashboardLocationSecondary';
import PartyDashboardParticipants from '@components/Party/PartyDashboard/PartyDashboardParticipants/PartyDashboardParticipants';
import PartyDashboardTop from '@components/Party/PartyDashboard/PartyDashboardTop';
import PartyDashboardTopMenu from '@components/Party/PartyDashboard/PartyDashboardTopMenu';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import css from '@emotion/css';
import styled from '@emotion/styled';
import { usePartiesQueryLazyQuery } from '@generated/graphql';
import { hasGraphqlData } from '@shared/graphqlUtils';
import withHandledPartyPageLoad, {
  WithHandledPageLoadInjectedProps
} from '@shared/withHandledPageLoad';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

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

const MOBILE_BREAKPOINT = '992px';

const PartyDashboardContentWrapper = styled.div`
  margin: 24px auto 24px auto;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  align-self: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: white;
  z-index: 1;
  flex: 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
  .dashboard-content-item {
    padding: 12px 24px;
  }
  .no-padding-mobile {
    @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
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

const PartyMapColumnStyles = css`
  position: relative;
  width: 100%;
  height: 400px;
  background: #e8e8e8;
  border-radius: 4px;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
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
  @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
    box-shadow: none;
  }
`;

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

const PartyDashboardPage = ({
  user,
  party: partyFromTheServer
}: WithHandledPageLoadInjectedProps) => {
  const [getParty, { data: lazyPartyData }] = usePartiesQueryLazyQuery({
    fetchPolicy: 'cache-first'
  });

  // we cannot change or refetch queries that come from the server,
  // but we can take advantage of them being in the cache
  React.useEffect(() => {
    getParty({
      variables: {
        where: {
          id: partyFromTheServer.id,
          members_some: {
            id: user.id
          }
        }
      }
    });
  }, []);

  // just to make sure we are displaying something asap
  // if getParty (cached) fails, use hydrated version
  const party = hasGraphqlData(lazyPartyData, ['parties'])
    ? lazyPartyData.parties[0]
    : partyFromTheServer;

  const contextValue = React.useMemo<PartyDashboardContextValue>(
    () => ({
      currentlyAuthenticatedUserId: user.id,
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
      <PartyDashboardContext.Provider value={contextValue}>
        <PartyDashboardContentWrapper>
          <PartyDashboardTop party={party} />
          <PartyDashboardTopMenu
            party={party}
            canEditParty={party.author.id == user.id}
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
          <Row style={{ marginTop: 12 }}>
            <Col span={24}>
              <PartyDashboardParticipants userId={user.id} partyId={party.id} />
            </Col>
          </Row>
        </PartyDashboardContentWrapper>
      </PartyDashboardContext.Provider>
    </React.Fragment>
  );
};

export default withHandledPartyPageLoad(PartyDashboardPage);
