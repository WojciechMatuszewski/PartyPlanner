import styled from '@emotion/styled';
import { Checkbox } from 'antd';
import { isNil } from 'ramda';
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
  selecting: boolean;
  onSelectTrack: (track: VirtualizedListTrackItemProps['track']) => void;
  onDeselectTrack: (track: VirtualizedListTrackItemProps['track']) => void;
};

export default function SavedTrack({
  selecting,
  onSelectTrack,
  onDeselectTrack,
  track,
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
          onTogglePlayClick={() => {}}
          key={1}
          trackPlaying={false}
          hasPreviewUrl={false}
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
