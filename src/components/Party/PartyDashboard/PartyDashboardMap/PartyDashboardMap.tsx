import React from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';
import { PartiesQueryLocation } from '@generated/graphql';
import styled from '@emotion/styled';
import posed from 'react-pose';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import PartyDashboardMapMarker from './PartyDashboardMapMarker';
import PartyDashboardMapPopup from './PartyDashboardMapPopup';
import FullScreen from 'react-full-screen';
import PartyDashboardMapFullscreenButton from './PartyDashboardMapFullscreenButton';
import SlidableWithTrigger from '@components/SlidableWithTrigger';
import PartyDashboardCommuteButtons from '../PartyDashboardCommuteButtons';
import { Button } from 'antd';
import css from '@emotion/css';

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

const SlidableContainerStyles = css`
  position: absolute;
  bottom: 0;
  left: 0;
  background: white;
  transform: translateY(100%);
  ${FlexBoxFullCenteredStyles};
`;

const SlidableTriggerStyles = css`
  left: 12px;
`;

interface Props {
  location: PartiesQueryLocation;
}

const PartyDashboardMap: React.FC<Props> = ({ location }) => {
  const [mapLoaded, setMapLoaded] = React.useState<boolean>(false);
  const [popupVisible, setPopupVisible] = React.useState<boolean>(false);
  const [fullscreenEnabled, setFullscreenEnabled] = React.useState<boolean>(
    false
  );
  const [slidableExposed, setSlidableExposed] = React.useState<boolean>(false);

  return (
    <FullScreen enabled={fullscreenEnabled} onChange={setFullscreenEnabled}>
      <MapWrapper
        pose={mapLoaded ? 'visible' : 'hidden'}
        className="map-wrapper"
      >
        <Map
          onStyleLoad={handleMapLoaded}
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
          <ZoomControl style={{ top: 45 }} />
          <PartyDashboardMapFullscreenButton
            fullscreenEnabled={fullscreenEnabled}
            onClick={toggleFullscreen}
          />
          {fullscreenEnabled ? (
            <SlidableWithTrigger
              containerCSS={SlidableContainerStyles}
              visible={slidableExposed}
              trigger={suggestedStyles => (
                <Button
                  icon={slidableExposed ? 'caret-down' : 'caret-up'}
                  onClick={handleSlidableTrigger}
                  css={[suggestedStyles, SlidableTriggerStyles]}
                >
                  Commute options
                </Button>
              )}
            >
              <PartyDashboardCommuteButtons location={location} />
            </SlidableWithTrigger>
          ) : (
            undefined
          )}
        </Map>
      </MapWrapper>
      <LoaderWrapper pose={mapLoaded ? 'hidden' : 'visible'}>
        <GraphqlInlineLoading />
      </LoaderWrapper>
    </FullScreen>
  );

  function toggleFullscreen() {
    setFullscreenEnabled(!fullscreenEnabled);
  }

  function handleMapLoaded() {
    setMapLoaded(true);
  }

  function handleSlidableTrigger() {
    setSlidableExposed(!slidableExposed);
  }
};

export default PartyDashboardMap;
