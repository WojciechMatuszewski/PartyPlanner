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
import { NextFunctionComponent, NextContext } from 'next';
import { ApolloClient } from 'apollo-boost';
import { NextContextWithApollo } from './_app';

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

const Party: NextFunctionComponent<{}, {}, NextContextWithApollo> = () => {
  const [mapLoaded, setMapLoaded] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <PartyMenu />
      <PartyDashboardContentWrapper>
        <PartyDashboardBasicInfo />
        <Row
          css={[PartyMapRowStyles]}
          className="dashboard-content-item no-padding-mobile"
        >
          <Col span={24} css={[PartyMapColumnStyles]}>
            <MapWrapper pose={mapLoaded ? 'visible' : 'hidden'}>
              <PartyDashboardMap onMapLoaded={() => setMapLoaded(true)} />
            </MapWrapper>
            <LoaderWrapper pose={mapLoaded ? 'hidden' : 'visible'}>
              <GraphqlInlineLoading />
            </LoaderWrapper>
          </Col>
        </Row>

        <PartyDashboardLocationSecondary />
        <PartyDashboardCommuteButtons />
      </PartyDashboardContentWrapper>
    </React.Fragment>
  );
};

Party.getInitialProps = async context => {
  console.log(Object.keys(context));
};

export default Party;
