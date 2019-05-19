import React from 'react';
import { Popup } from 'react-mapbox-gl';

import { TransparentButtonStyles } from '@shared/styles';
import { Icon, Typography, Button } from 'antd';
import css from '@emotion/css';
import { PartiesQueryLocation } from '@generated/graphql';

interface Props {
  visible: boolean;
  onClose: VoidFunction;
  location: PartiesQueryLocation;
}

const PopupStyles = css`
  .mapboxgl-popup-content {
    min-width: 100px;
    padding: 24px;
  }
`;

const CloseBtnStyles = css`
  margin-left: auto;
  display: block;
  box-shadow: none;
  padding: 0;
  position: absolute;
  top: 0px;
  right: 6px;
`;

const PartyDashboardMapPopup: React.FC<Props> = props => {
  if (!props.visible) return null;
  return (
    <Popup
      css={[PopupStyles]}
      coordinates={[props.location.longitude, props.location.latitude]}
      offset={40}
    >
      <Button
        size="small"
        css={[TransparentButtonStyles, CloseBtnStyles]}
        onClick={props.onClose}
      >
        <Icon type="close" style={{ fontSize: 12 }} />
      </Button>

      <Typography.Text>
        {props.location.placeName.split(',')[0]}
      </Typography.Text>
    </Popup>
  );
};

export default PartyDashboardMapPopup;
