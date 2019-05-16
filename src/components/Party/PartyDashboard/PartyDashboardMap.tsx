import React from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import { PartiesQueryLocation } from '@generated/graphql';

import styled from '@emotion/styled';
import posed from 'react-pose';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import PartyDashboardMapMarker from './PartyDashboardMap/PartyDashboardMapMarker';
import PartyDashboardMapPopup from './PartyDashboardMap/PartyDashboardMapPopup';

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_TOKEN as string,
  logoPosition: 'top-left'
});

const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '100%'
};

const MAP_STYLE = 'mapbox://styles/mapbox/streets-v9';

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

interface Props {
  location: PartiesQueryLocation;
}

const PartyDashboardMap: React.FC<Props> = ({ location }) => {
  const [mapLoaded, setMapLoaded] = React.useState<boolean>(false);
  const [popupVisible, setPopupVisible] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <MapWrapper pose={mapLoaded ? 'visible' : 'hidden'}>
        <Map
          onStyleLoad={() => setMapLoaded(true)}
          style={MAP_STYLE}
          containerStyle={MAP_CONTAINER_STYLE}
          center={[location.longitude, location.latitude]}
          zoom={[15]}
        >
          <PartyDashboardMapMarker
            onMarkerClick={() => setPopupVisible(true)}
            longitude={location.longitude}
            latitude={location.latitude}
          />
          <PartyDashboardMapPopup
            onClose={() => setPopupVisible(false)}
            location={location}
            visible={popupVisible}
          />
          <ZoomControl />
        </Map>
      </MapWrapper>
      <LoaderWrapper pose={mapLoaded ? 'hidden' : 'visible'}>
        <GraphqlInlineLoading />
      </LoaderWrapper>
    </React.Fragment>
  );
};

export default PartyDashboardMap;
