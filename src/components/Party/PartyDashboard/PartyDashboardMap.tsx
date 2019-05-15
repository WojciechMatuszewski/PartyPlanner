import React from 'react';
import ReactMapboxGl, {
  ZoomControl,
  Layer,
  Feature,
  Marker
} from 'react-mapbox-gl';
import {
  PartyFragmentLocation,
  PartiesQueryLocation
} from '@generated/graphql';
import PlaceMarker from '@customIcons/map-marker.svg';
import { Icon } from 'antd';
// import { FullscreenControl } from 'mapbox-gl';

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
  location: PartiesQueryLocation;
}

const PartyDashboardMap: React.FC<Props> = ({ onMapLoaded, location }) => {
  console.log(location);

  return (
    <Map
      onStyleLoad={onMapLoaded}
      style={MAP_STYLE}
      containerStyle={MAP_CONTAINER_STYLE}
      center={[location.latitude, location.longitude]}
      zoom={[15]}
    >
      <Marker
        coordinates={[location.latitude, location.longitude]}
        anchor="bottom"
      >
        <Icon
          component={PlaceMarker}
          theme="filled"
          style={{ fontSize: 30, color: '#1890ff' }}
        />
      </Marker>

      <ZoomControl />
    </Map>
  );
};

export default PartyDashboardMap;
