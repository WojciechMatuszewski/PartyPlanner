import React from 'react';
import ReactMapboxGl, { ZoomControl } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_TOKEN as string
});

const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '100%'
};

const MAP_STYLE = 'mapbox://styles/mapbox/streets-v9';

interface Props {
  onMapLoaded: VoidFunction;
}

const PartyDashboardMap: React.FC<Props> = ({ onMapLoaded }) => {
  return (
    <Map
      onStyleLoad={onMapLoaded}
      style={MAP_STYLE}
      containerStyle={MAP_CONTAINER_STYLE}
    >
      <ZoomControl />
    </Map>
  );
};

export default PartyDashboardMap;
