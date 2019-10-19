import styled from '@emotion/styled';
import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import {
  FlexBoxHorizontallyCenteredStyles,
  FlexBoxVerticallyCenteredStyles
} from '@shared/styles';
import { Button, Icon, Typography } from 'antd';
import React from 'react';

import { useTrackInfoModal } from '../TrackInfoModal/TrackInfoModalProvider';

const TrackInfoWrapper = styled.div`
  height: 64px;
  display: flex;

  .track-info-text {
    padding-left: 12px;
    ${FlexBoxHorizontallyCenteredStyles};
    text-align: left;
    flex-direction: column;
    width: auto;
    min-width: 1px;
    h4 {
      margin: 0;
    }
  }

  img {
    height: 64px;
    width: 64px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    height: auto;
    display: block;
    margin-right: auto;
  }

  @media screen and (min-width: 801px) {
    min-width: 140px;
  }
`;

const DefaultImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 6px;
  background: #f0f1f5;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  .anticon {
    ${FlexBoxVerticallyCenteredStyles}
  }
`;

interface Props {
  isOnMobile: boolean;
  track: Full_Saved_Track_FragmentFragment | null;
}

const BigMusicPlayerTrackInfo: React.FC<Props> = ({ track, isOnMobile }) => {
  const { openModal } = useTrackInfoModal();

  return (
    <TrackInfoWrapper>
      {isOnMobile ? (
        <Button size="small" shape="circle" onClick={handleMoreInfoClick}>
          <Icon type="info" />
        </Button>
      ) : (
        <React.Fragment>
          {track ? (
            <img src={track.album.imageUrl} />
          ) : (
            <DefaultImageWrapper>
              <Icon type="question" />
            </DefaultImageWrapper>
          )}

          <div className="track-info-text">
            <Typography.Title level={4} ellipsis={true}>
              {track ? track.name : ''}
            </Typography.Title>
            <Typography.Text ellipsis={true}>
              <a>{track ? track.stringArtists : ''}</a>
            </Typography.Text>
          </div>
        </React.Fragment>
      )}
    </TrackInfoWrapper>
  );

  function handleMoreInfoClick() {
    if (!track) return null;
    openModal(track);
  }
};

export default React.memo(BigMusicPlayerTrackInfo);
