import React from 'react';
import styled from '@emotion/styled';
import {
  FlexBoxHorizontallyCenteredStyles,
  TransparentButtonStyles
} from '@shared/styles';

import { Typography, Icon } from 'antd';
import { Track } from 'spotify-web-sdk';

const TrackInfoWrapper = styled.div`
  height: 64px;
  display: flex;
  max-width: 150px;
  .track-info-text {
    max-width: 100%;
    padding-left: 12px;
    ${FlexBoxHorizontallyCenteredStyles};
    text-align: left;
    flex-direction: column;
    h4 {
      margin: 0;
    }
  }
  img {
    height: 64px;
    width: auto;
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    height: auto;
    display: block;
    margin-right: auto;
    margin-left: -6px;
  }
`;

interface Props {
  isOnMobile: boolean;
  track: Track | null;
}

const BigMusicPlayerTrackInfo: React.FC<Props> = props => {
  return (
    <TrackInfoWrapper>
      {props.isOnMobile ? (
        <button css={[TransparentButtonStyles]}>
          <Icon type="info" />
        </button>
      ) : (
        <React.Fragment>
          <img src={props.track ? props.track.album.imageUrl : ''} />
          <div className="track-info-text">
            <Typography.Title level={4} ellipsis={true}>
              {props.track ? props.track.name : ''}
            </Typography.Title>
            <a>{props.track ? props.track.artists[0].name : ''}</a>
          </div>
        </React.Fragment>
      )}
    </TrackInfoWrapper>
  );
};

export default React.memo(BigMusicPlayerTrackInfo);
