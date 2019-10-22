import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';
import { Button, Icon } from 'antd';
import React from 'react';

import AntdSearch from '@components/AntdSearch';

const InnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-basis: 100%;
  button {
    margin-right: 12px;
  }
`;

interface Props {
  onSelectSongsClick: VoidFunction;
  selectingTracks: boolean;
  onCreatePlaylistClick: (shouldResetState: boolean) => void;
  hasSelectedAtLeastOneTrack: boolean;
  onSearch: (searchQuery: string) => void;
  hasTracks: boolean;
}

export default function SavedTracksControls(props: Props) {
  const isOnMobile = useMedia('(max-width:630px)');

  return (
    <InnerWrapper>
      <Button
        disabled={!props.hasTracks}
        onClick={props.onSelectSongsClick}
        type={props.selectingTracks ? 'danger' : 'primary'}
      >
        <Icon type="select" />
        {!isOnMobile && (
          <span>
            {props.selectingTracks ? 'Cancel selection' : 'Select tracks'}
          </span>
        )}
      </Button>
      <GreenSpotifyButton
        disabled={!props.hasSelectedAtLeastOneTrack}
        onClick={() => props.onCreatePlaylistClick(false)}
      >
        {!isOnMobile && <span>Create playlist</span>}
      </GreenSpotifyButton>
      <AntdSearch
        debounceOnChange={true}
        allowClear={true}
        onChange={props.onSearch}
        onSearch={props.onSearch}
        type="text"
        placeholder="Search ..."
      />
    </InnerWrapper>
  );
}
