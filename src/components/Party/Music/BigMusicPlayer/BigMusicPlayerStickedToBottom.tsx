import BigMusicPlayer, { BigMusicPlayerProps } from './BigMusicPlayer';
import { useBigMusicPlayer } from './BigMusicPlayerProvider';

import SlidableWithTrigger from '@components/SlidableWithTrigger';
import css from '@emotion/css';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import { Button, Icon } from 'antd';
import React from 'react';

const SlidableContainerStyles = css`
  position: fixed;
  bottom: 0;
  left: 0;
`;

interface Props extends BigMusicPlayerProps {
  children?: (visible: boolean) => React.ReactNode;
}

const BigMusicPlayerStickedToBottom: React.FC<Props> = ({
  children,
  ...bigMusicPlayerProps
}) => {
  const { track, playerState } = useBigMusicPlayer();

  const previousTrackRef = React.useRef<Full_Saved_Track_FragmentFragment | null>(
    track
  );

  const [visible, setVisible] = React.useState(false);

  const toggleVisibility = () => setVisible(prev => !prev);

  React.useEffect(() => {
    if (!track) return;
    if (!previousTrackRef.current || previousTrackRef.current.id !== track.id) {
      previousTrackRef.current = track;
      setVisible(true);
    }
  }, [track]);

  return (
    <React.Fragment>
      <SlidableWithTrigger
        containerCSS={SlidableContainerStyles}
        trigger={suggestedTriggerStyles => (
          <Button
            icon={visible ? 'caret-down' : 'caret-up'}
            css={[suggestedTriggerStyles]}
            onClick={toggleVisibility}
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
      {children && children(visible)}
    </React.Fragment>
  );
};

export const BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT = 100;
export default BigMusicPlayerStickedToBottom;
