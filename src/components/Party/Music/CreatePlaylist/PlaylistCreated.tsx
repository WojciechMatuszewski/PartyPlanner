import styled from '@emotion/styled';
import {
  FlexBoxFullCenteredStyles,
  FlexBoxHorizontallyCenteredStyles
} from '@shared/styles';
import { Button, Typography } from 'antd';
import React from 'react';

const PlayListCreatedWrapper = styled.div`
  ${FlexBoxFullCenteredStyles};
  flex-direction: column;
`;

const PlaylistBasicInfoWrapper = styled.div`
  ${FlexBoxHorizontallyCenteredStyles}
  margin:24px 0;
`;

const PlaylistImage = styled.image`
  width: 96px;
  height: 96px;
  border-radius: 6px;
`;

export default function PlaylistCreated() {
  return (
    <PlayListCreatedWrapper>
      <Typography.Title style={{ margin: 0 }} level={4}>
        Your Playlist was created!
      </Typography.Title>
      <PlaylistBasicInfoWrapper>
        <PlaylistImage />
      </PlaylistBasicInfoWrapper>
      <Button.Group>
        <Button>View on Spotify</Button>
        <Button>Do something else</Button>
      </Button.Group>
    </PlayListCreatedWrapper>
  );
}
