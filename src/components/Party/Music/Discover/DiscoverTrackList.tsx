import React from 'react';
import { WindowScroller, List as VList, AutoSizer } from 'react-virtualized';
import { List, Button } from 'antd';
import DiscoverTrack from './DiscoverTrack';
import css from '@emotion/css';
import { useBigMusicPlayer } from '../BigMusicPlayer/BigMusicPlayerProvider';
import { useTrackInfoModal } from '../TrackInfoModal/TrackInfoModalProvider';
import { Track } from 'spotify-web-sdk';

const ListStyles = css`
  .ant-spin-container.ant-spin-blur > div:first-of-type {
    display: none;
  }
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-top: 12px;
  h4 {
    margin-bottom: 0;
  }
  .ant-list-item-meta {
    align-items: center;
  }
`;

const LoadMoreButtonStyles = css`
  display: block;
  margin: 0 auto;
  margin-top: 12px;
  @media screen and (max-width: 530px) {
    margin-right: auto;
    margin-left: 12px;
  }
`;

interface Props {
  canLoadMore: boolean;
  onLoadMoreClick: () => Promise<void>;
  loading: boolean;
  tracks: Track[];
  loadingMore: boolean;
  className?: string;
}

export default function DiscoverTrackList(props: Props) {
  const {
    setTrack,
    playerState,
    track: currentPlayerTrack,
    audioPlayerCommands$
  } = useBigMusicPlayer();

  const { openModal } = useTrackInfoModal();

  const handleOnPlayClick = React.useCallback((track: Track) => {
    audioPlayerCommands$.next({ command: 'toggle', trackInQuestion: track });
    setTrack(track);
  }, []);

  const handleMoreInfoClick = React.useCallback((track: Track) => {
    openModal(track);
  }, []);

  return (
    <WindowScroller serverHeight={400}>
      {({ height, onChildScroll, isScrolling, scrollTop }) => (
        <React.Fragment>
          <List
            bordered={true}
            renderItem={undefined}
            loading={props.loading}
            className={props.className}
            css={[ListStyles]}
          >
            <AutoSizer disableHeight={true}>
              {({ width }) => (
                <VList
                  autoHeight={true}
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  height={height}
                  rowCount={props.tracks.length}
                  overscanRowCount={15}
                  rowHeight={72}
                  width={width}
                  scrollTop={scrollTop}
                  // data={state.currentTracks}
                  rowRenderer={({ index, style }) => {
                    const track = props.tracks[index];
                    return (
                      <DiscoverTrack
                        onMoreInfoClick={handleMoreInfoClick}
                        onTogglePlayClick={handleOnPlayClick}
                        trackPlaying={
                          currentPlayerTrack
                            ? currentPlayerTrack.id == track.id &&
                              playerState == 'playing'
                            : false
                        }
                        style={style}
                        track={track}
                        key={index}
                      />
                    );
                  }}
                />
              )}
            </AutoSizer>
          </List>
          {props.canLoadMore && (
            <Button
              size="default"
              onClick={props.onLoadMoreClick}
              loading={props.loadingMore}
              css={[LoadMoreButtonStyles]}
            >
              Load More Songs
            </Button>
          )}
        </React.Fragment>
      )}
    </WindowScroller>
  );
}
