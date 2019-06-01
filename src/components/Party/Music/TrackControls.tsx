import React from 'react';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import styled from '@emotion/styled';
import { Tooltip, Button } from 'antd';

const TrackTileControlsWrapper = styled.div`
  ${FlexBoxFullCenteredStyles};
  padding-left: 12px;
  padding-right: 8px;
  margin-left: auto;
  height: 100%;
  transition: opacity 0.2s ease;
  button {
    width: 22px !important;
    height: 22px !important;
    border: 1px solid rgba(0, 0, 0, 0.65);
    .anticon {
      ${FlexBoxFullCenteredStyles};
    }
  }
`;

interface Props {
  className?: string;
  trackPlaying: boolean;
  onTogglePlayClick: () => void;
  onMoreInfoClick: () => void;
  hasPreviewUrl: boolean;
}
export default function TrackControls(props: Props) {
  return (
    <TrackTileControlsWrapper className={props.className}>
      <Tooltip title={props.trackPlaying ? 'Pause' : 'Play'}>
        <Button
          icon={props.trackPlaying ? 'pause' : 'caret-right'}
          type="ghost"
          shape="circle-outline"
          size="small"
          disabled={!props.hasPreviewUrl}
          onClick={props.onTogglePlayClick}
        />
      </Tooltip>
      <Tooltip title="More information">
        <Button
          style={{ margin: '0 8px' }}
          onClick={props.onMoreInfoClick}
          icon="ellipsis"
          type="ghost"
          size="small"
          shape="circle-outline"
        />
      </Tooltip>
      <Button icon="plus" type="ghost" size="small" shape="circle-outline" />
    </TrackTileControlsWrapper>
  );
}
