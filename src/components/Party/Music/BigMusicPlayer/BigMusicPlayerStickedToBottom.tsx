import React from 'react';
import { useBigMusicPlayer } from './BigMusicPlayerProvider';
import { Button, Icon } from 'antd';
import BigMusicPlayer from './BigMusicPlayer';
import { Track } from 'spotify-web-sdk';
import SlidableWithTrigger from '@components/SlidableWithTrigger';
import css from '@emotion/css';

const SlidableContainerStyles = css`
  position: fixed;
  bottom: 0;
  left: 0;
`;

interface Props {
  onTrackChanged: () => void;
  onVisibilityTriggerClicked: () => void;
  visible: boolean;
}

const BigMusicPlayerStickedToBottom: React.FC<Props> = props => {
  const { track, playerState } = useBigMusicPlayer();
  const previousTrackRef = React.useRef<Track | null>(track);

  React.useEffect(() => {
    if (!track) return;
    if (!previousTrackRef.current || previousTrackRef.current.id !== track.id) {
      previousTrackRef.current = track;
      props.onTrackChanged();
    }
  }, [track]);

  return (
    <SlidableWithTrigger
      containerCSS={SlidableContainerStyles}
      trigger={suggestedTriggerStyles => (
        <Button
          icon={props.visible ? 'caret-down' : 'caret-up'}
          css={[suggestedTriggerStyles]}
          onClick={props.onVisibilityTriggerClicked}
        >
          Music Player
          {playerState === 'playing' && !props.visible && (
            <Icon type="sound" theme="twoTone" />
          )}
        </Button>
      )}
      visible={props.visible}
    >
      <BigMusicPlayer />
    </SlidableWithTrigger>
  );
};
export const BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT = 100;
export default BigMusicPlayerStickedToBottom;
