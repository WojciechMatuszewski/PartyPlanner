import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';
import { Button, Icon } from 'antd';
import React from 'react';

const Wrapper = styled.div`
  width: 100%;
  background: white;
  padding: 12px;
  border-bottom: 1px solid rgb(232, 232, 232);
  width: 100%;
  height: 53px;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-basis: 100%;
  button {
    margin-right: 12px;
  }
  button:last-of-type {
    margin-right: 0;
    align-self: flex-end;
    margin-left: auto;
  }
`;

interface Props {
  onSelectSongsClick: VoidFunction;
  selectingTracks: boolean;
}

export default function SavedTracksControls(props: Props) {
  const isOnMobile = useMedia('(max-width:630px)');

  return (
    <Wrapper>
      <InnerWrapper>
        <Button
          onClick={props.onSelectSongsClick}
          type={props.selectingTracks ? 'primary' : 'defulat'}
        >
          <Icon type="select" />
          {!isOnMobile && <span>Select songs</span>}
        </Button>
        <GreenSpotifyButton disabled={true}>Create playlist</GreenSpotifyButton>
        <Button style={{ alignSelf: 'flex-end' }}>
          <Icon type="filter" />
          Filters
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
}
