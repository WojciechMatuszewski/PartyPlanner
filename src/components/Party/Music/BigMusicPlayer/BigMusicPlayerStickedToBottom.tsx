import SlidableWithTrigger from '@components/SlidableWithTrigger';
import css from '@emotion/css';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import { Button, Icon } from 'antd';
import React from 'react';

import BigMusicPlayer, { BigMusicPlayerProps } from './BigMusicPlayer';
import { useBigMusicPlayer } from './BigMusicPlayerProvider';

const SlidableContainerStyles = css`
  position: fixed;
  bottom: 0;
  left: 0;
`;

interface Props extends BigMusicPlayerProps {
  onTrackChanged: () => void;
  onVisibilityTriggerClicked: () => void;
  visible: boolean;
}

const BigMusicPlayerStickedToBottom: React.FC<Props> = ({
  onTrackChanged,
  onVisibilityTriggerClicked,
  visible,
  ...bigMusicPlayerProps
}) => {
  const { track, playerState } = useBigMusicPlayer();
  const previousTrackRef = React.useRef<Full_Saved_Track_FragmentFragment | null>(
    track
  );

  React.useEffect(() => {
    if (!track) return;
    if (!previousTrackRef.current || previousTrackRef.current.id !== track.id) {
      previousTrackRef.current = track;
      onTrackChanged();
    }
  }, [track]);

  return (
    <SlidableWithTrigger
      containerCSS={SlidableContainerStyles}
      trigger={suggestedTriggerStyles => (
        <Button
          icon={visible ? 'caret-down' : 'caret-up'}
          css={[suggestedTriggerStyles]}
          onClick={onVisibilityTriggerClicked}
        >
          Music Player
          {playerState === 'playing' && !visible && (
            <Icon type="sound" theme="twoTone" />
          )}
        </Button>
      )}
      visible={visible}
    >
      <BigMusicPlayer {...bigMusicPlayerProps} />
    </SlidableWithTrigger>
  );
};
export const BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT = 100;
export default BigMusicPlayerStickedToBottom;
