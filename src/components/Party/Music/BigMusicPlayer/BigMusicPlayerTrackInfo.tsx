import React from 'react';
import styled from '@emotion/styled';
import {
  FlexBoxHorizontallyCenteredStyles,
  TransparentButtonStyles,
  FlexBoxVerticallyCenteredStyles
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 800px) {
    align-items: center;
    height: auto;
    display: block;
    margin-right: auto;
    margin-left: -6px;
  }
`;

const DefaultImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 6px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  .anticon {
    ${FlexBoxVerticallyCenteredStyles}
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
          {props.track ? (
            <img src={props.track.album.imageUrl} />
          ) : (
            <DefaultImageWrapper>
              <Icon type="question" />
            </DefaultImageWrapper>
          )}

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
