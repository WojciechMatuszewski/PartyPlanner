import styled from '@emotion/styled';
import { Button, Icon } from 'antd';
import React from 'react';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import { useSaveTrack } from '../shared/useSaveTrack';
import { useIsTrackSaved } from '../Saved/SavedTracksProvider';

const ControlsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 6px;
  @media screen and (max-width: 800px) {
    grid-template-rows: 1fr;
    grid-template-columns: min-content min-content;
    margin-left: auto;
    grid-gap: 0;
  }
`;

interface Props {
  isOnMobile: boolean;
  partyId: string;
  track: Full_Saved_Track_FragmentFragment | null;
}

const BigMusicPlayerUserControls: React.FC<Props> = ({
  isOnMobile,
  partyId,
  track
}) => {
  const [mutate, { loading }] = useSaveTrack(
    track as Full_Saved_Track_FragmentFragment,
    partyId
  );

  const trackId = track ? track.id : '-1';
  const [isSaved] = useIsTrackSaved(trackId);

  const buttonsDisabled = !track || isSaved;

  return (
    <ControlsWrapper>
      {!isOnMobile ? (
        <Button
          loading={loading}
          onClick={() => mutate()}
          disabled={buttonsDisabled}
          type="primary"
        >
          Save
          <Icon type="plus" />
        </Button>
      ) : (
        <Button
          loading={loading}
          onClick={() => mutate()}
          disabled={buttonsDisabled}
          type="default"
          shape="circle"
          size="small"
        >
          <Icon type="plus" />
        </Button>
      )}
    </ControlsWrapper>
  );
};

export default React.memo(BigMusicPlayerUserControls);
