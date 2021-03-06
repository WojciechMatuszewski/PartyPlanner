import React from 'react';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { curry } from 'ramda';
import css from '@emotion/css';

type PlayPauseButtonProps = {
  trackPlaying: boolean;
  onTogglePlayClick: VoidFunction;
  hasPreviewUrl: boolean;
};

type MoreInfoButtonProps = {
  onMoreInfoClick: VoidFunction;
};

type AddToQueueButtonProps = {
  loading?: boolean;
  onAddToQueueClick: VoidFunction;
  disabled?: boolean;
};

const TrackTileControlsWrapper = styled.div`
  ${FlexBoxFullCenteredStyles};
  padding-left: 12px;
  padding-right: 8px;
  margin-left: auto;
  height: 100%;
  transition: opacity 0.2s ease;
  button:nth-of-type(2) {
    margin: 0 8px;
  }
`;

const ButtonStyles = css`
  width: 22px !important;
  height: 22px !important;
  border: 1px solid rgba(0, 0, 0, 0.65);
  .anticon {
    ${FlexBoxFullCenteredStyles};
  }
`;

type TrackControlsProps = { className?: string } & MoreInfoButtonProps &
  PlayPauseButtonProps &
  AddToQueueButtonProps;

function trapEventWithin(
  fnToRun: any,
  event: React.MouseEvent<HTMLElement, MouseEvent>
) {
  event.preventDefault();
  event.stopPropagation();
  fnToRun(event);
}

const withTrappedEvent = curry(trapEventWithin);

export default function TrackControls(props: TrackControlsProps) {
  return (
    <TrackTileControlsWrapper className={props.className}>
      <PlayPauseTrackButton
        onTogglePlayClick={props.onTogglePlayClick}
        trackPlaying={props.trackPlaying}
        hasPreviewUrl={props.hasPreviewUrl}
      />
      <MoreInfoTrackButton onMoreInfoClick={props.onMoreInfoClick} />
      <AddToQueueTrackButton
        disabled={props.disabled}
        loading={props.loading}
        onAddToQueueClick={props.onAddToQueueClick}
      />
    </TrackTileControlsWrapper>
  );
}

export function PlayPauseTrackButton(props: PlayPauseButtonProps) {
  return (
    <Button
      css={[ButtonStyles]}
      icon={props.trackPlaying ? 'pause' : 'caret-right'}
      type="ghost"
      shape="circle-outline"
      size="small"
      disabled={!props.hasPreviewUrl}
      onClick={withTrappedEvent(props.onTogglePlayClick)}
    />
  );
}
export function MoreInfoTrackButton(props: MoreInfoButtonProps) {
  return (
    <Button
      css={[ButtonStyles]}
      onClick={withTrappedEvent(props.onMoreInfoClick)}
      icon="ellipsis"
      type="ghost"
      size="small"
      shape="circle-outline"
    />
  );
}
export function AddToQueueTrackButton(props: AddToQueueButtonProps) {
  return (
    <Button
      loading={props.loading}
      disabled={props.disabled}
      onClick={withTrappedEvent(props.onAddToQueueClick)}
      css={[ButtonStyles]}
      icon="plus"
      type="ghost"
      size="small"
      shape="circle-outline"
    />
  );
}
