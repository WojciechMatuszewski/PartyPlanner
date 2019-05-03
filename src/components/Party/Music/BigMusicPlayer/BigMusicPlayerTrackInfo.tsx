import React from 'react';
import styled from '@emotion/styled';
import {
  FlexBoxHorizontallyCenteredStyles,
  TransparentButtonStyles
} from '@shared/styles';

import { Typography, Icon } from 'antd';

const TrackInfoWrapper = styled.div`
  height: 64px;
  display: flex;
  .track-info-text {
    padding-left: 12px;
    ${FlexBoxHorizontallyCenteredStyles};
    text-align: left;
    flex-direction: column;
    h4 {
      margin: 0;
    }
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
}

const BigMusicPlayerTrackInfo: React.FC<Props> = props => {
  return (
    <TrackInfoWrapper>
      {props.isOnMobile ? (
        <button
          css={[TransparentButtonStyles]}
          onClick={() => console.log('click')}
        >
          <Icon type="info" />
        </button>
      ) : (
        <React.Fragment>
          <img src="https://i.scdn.co/image/81a3f82578dc938c53efdcb405f6a3d3ebbf009f" />
          <div className="track-info-text">
            <Typography.Title level={4}>Title</Typography.Title>
            <a>Artist Name</a>
          </div>
        </React.Fragment>
      )}
    </TrackInfoWrapper>
  );
};

export default BigMusicPlayerTrackInfo;
