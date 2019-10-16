import styled from '@emotion/styled';
import { Checkbox } from 'antd';
import { isNil } from 'ramda';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';

import { MoreInfoTrackButton, PlayPauseTrackButton } from '../TrackControls';
import { useTrackInfoModal } from '../TrackInfoModal/TrackInfoModalProvider';
import VirtualizedListTrackItem from '../VirtualizedListTrackItem';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';

type VirtualizedListTrackItemProps = typeof VirtualizedListTrackItem extends (
  args: infer Props
) => any
  ? Props
  : never;

const PosedCheckboxWrapper = styled(
  posed.div({
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 }
  })
)`
  position: absolute;
`;

type Props = VirtualizedListTrackItemProps & {
  track: Full_Saved_Track_FragmentFragment;
  selecting: boolean;
  onSelectTrack: (track: Full_Saved_Track_FragmentFragment) => void;
  onDeselectTrack: (track: Full_Saved_Track_FragmentFragment) => void;
  onPlayPauseClick: (track: Full_Saved_Track_FragmentFragment) => void;
  onShowMoreInfoClick: (track: Full_Saved_Track_FragmentFragment) => void;
};

export default function SavedTrack({
  selecting,
  onSelectTrack,
  onDeselectTrack,
  track,
  onPlayPauseClick,
  onShowMoreInfoClick,
  ...virtualItemProps
}: Props) {
  function handleCheckboxStateChange(
    e: import('antd/lib/checkbox').CheckboxChangeEvent | undefined
  ) {
    if (isNil(e)) return;
    const {
      target: { checked }
    } = e;
    return checked ? onSelectTrack(track) : onDeselectTrack(track);
  }

  const { openModal } = useTrackInfoModal();

  return (
    <VirtualizedListTrackItem
      {...virtualItemProps}
      track={track}
      shouldMoveContent={selecting}
      actions={[
        <PlayPauseTrackButton
          onTogglePlayClick={() => onPlayPauseClick(track)}
          key={1}
          trackPlaying={false}
          hasPreviewUrl={true}
        />,
        <MoreInfoTrackButton onMoreInfoClick={() => openModal(track)} key={2} />
      ]}
    >
      <PoseGroup animateOnMount={true}>
        {selecting && (
          <PosedCheckboxWrapper key={1}>
            <Checkbox onChange={handleCheckboxStateChange} />
          </PosedCheckboxWrapper>
        )}
      </PoseGroup>
    </VirtualizedListTrackItem>
  );
}
