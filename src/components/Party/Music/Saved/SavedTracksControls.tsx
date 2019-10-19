import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';
import { Button, Icon, Input } from 'antd';
import React from 'react';
import { debounce } from 'lodash';

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

  const debouncedFnRef = React.useRef(
    debounce<(query: string) => void>(props.onSearch, 300)
  );

  return (
    <Wrapper>
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
        <Input.Search
          allowClear={true}
          onChange={e => debouncedFnRef.current(e.currentTarget.value)}
          onSearch={props.onSearch}
          type="text"
          placeholder="Search ..."
        />
      </InnerWrapper>
    </Wrapper>
  );
}
