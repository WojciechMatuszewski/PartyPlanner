import React from 'react';
import { Tooltip, Icon } from 'antd';

function RestrictPlaylistInfo() {
  return (
    <Tooltip
      trigger="click"
      title="Checking this option will prevent others from importing this playlist to other parties. You will be able to edit this setting."
    >
      <Icon theme="twoTone" type="question-circle" />
    </Tooltip>
  );
}

export default RestrictPlaylistInfo;
