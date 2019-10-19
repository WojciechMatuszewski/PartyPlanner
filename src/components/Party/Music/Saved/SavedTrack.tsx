import styled from '@emotion/styled';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import { Checkbox } from 'antd';
import { always, identity, ifElse } from 'ramda';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';

import { MoreInfoTrackButton, PlayPauseTrackButton } from '../TrackControls';
import { useTrackInfoModal } from '../TrackInfoModal/TrackInfoModalProvider';
import VirtualizedListTrackItem from '../VirtualizedListTrackItem';

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
  isSelected: boolean;
  selecting: boolean;
  onSelectTrack: (track: Full_Saved_Track_FragmentFragment) => void;
  onDeselectTrack: (track: Full_Saved_Track_FragmentFragment) => void;
  onPlayPauseClick: (track: Full_Saved_Track_FragmentFragment) => void;
  onShowMoreInfoClick: (track: Full_Saved_Track_FragmentFragment) => void;
};

function SavedTrack({
  selecting,
  onSelectTrack,
  onDeselectTrack,
  track,
  onPlayPauseClick,
  onShowMoreInfoClick,
  isSelected,
  ...restOfProps
}: Props) {
  function handleClick() {
    if (isSelected) return onDeselectTrack(track);
    return onSelectTrack(track);
  }

  const { openModal } = useTrackInfoModal();

  return (
    <VirtualizedListTrackItem
      {...restOfProps}
      emphasis={isSelected}
      onClick={ifElse(always(selecting), handleClick, identity)}
      track={track}
      shouldMoveContent={selecting}
      actions={[
        <PlayPauseTrackButton
          onTogglePlayClick={() => onPlayPauseClick(track)}
          key={1}
          trackPlaying={restOfProps.trackPlaying}
          hasPreviewUrl={Boolean(track.previewUrl)}
        />,
        <MoreInfoTrackButton onMoreInfoClick={() => openModal(track)} key={2} />
      ]}
    >
      <PoseGroup animateOnMount={true}>
        {selecting && (
          <PosedCheckboxWrapper key={1}>
            <Checkbox checked={isSelected} />
          </PosedCheckboxWrapper>
        )}
      </PoseGroup>
    </VirtualizedListTrackItem>
  );
}

export default SavedTrack;
