import React from 'react';
import { Icon } from 'antd';
import { Marker } from 'react-mapbox-gl';
import PlaceMarker from '@customIcons/map-marker.svg';

interface Props {
  onMarkerClick: VoidFunction;
  longitude: number;
  latitude: number;
}

const PartyDashboardMapMarker: React.FC<Props> = props => {
  return (
    <Marker
      coordinates={[props.longitude, props.latitude]}
      anchor="bottom"
      onClick={props.onMarkerClick}
    >
      <Icon
        component={PlaceMarker}
        theme="filled"
        style={{ fontSize: 30, color: '#1890ff' }}
      />
    </Marker>
  );
};

export default PartyDashboardMapMarker;
