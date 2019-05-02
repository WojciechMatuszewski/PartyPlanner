import React from 'react';
import styled from '@emotion/styled';
import { FlexBoxHorizontallyCenteredStyles } from '@shared/styles';

import { Button, Typography } from 'antd';

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
  }
`;

interface Props {
  isOnMobile: boolean;
}

const BigMusicPlayerTrackInfo: React.FC<Props> = props => {
  return (
    <TrackInfoWrapper>
      {props.isOnMobile ? (
        <Button size="small" icon="info" />
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
