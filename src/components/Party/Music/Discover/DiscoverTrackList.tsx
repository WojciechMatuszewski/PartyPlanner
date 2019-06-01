import React from 'react';
import { Track, Page, search } from 'spotify-web-sdk';
import { WindowScroller, List as VList, AutoSizer } from 'react-virtualized';
import { List, Typography } from 'antd';
import DiscoverTrack from './DiscoverTrack';
import { createStandardAction, ActionType } from 'typesafe-actions';
import css from '@emotion/css';
import { useBigMusicPlayer } from '../BigMusicPlayer/BigMusicPlayerProvider';
import { useTrackInfoModal } from '../TrackInfoModal/TrackInfoModalProvider';

const ListStyles = css`
  .ant-spin-container.ant-spin-blur > div:first-of-type {
    display: none;
  }
`;

const SET_RESULTS = 'SET_RESULTS';
const SET_LOADING = 'SET_LOADING';

interface Props {
  searchQuery: string;
}

interface State {
  lastFetchedPage: Page<Track> | undefined;
  currentTracks: Track[];
  loadingMore: boolean;
  loading: boolean;
}

const initialState: State = {
  lastFetchedPage: undefined,
  currentTracks: [],
  loadingMore: false,
  loading: false
};

const actions = {
  SET_RESULTS: createStandardAction(SET_RESULTS)<{ page: Page<Track> }>(),
  SET_LOADING: createStandardAction(SET_LOADING)<
    Partial<{ loading: boolean; loadingMore: boolean }>
  >()
};

type DiscoverTracksActions = ActionType<typeof actions>;

function reducer(state: State, action: DiscoverTracksActions): State {
  switch (action.type) {
    case SET_RESULTS:
      return {
        ...state,
        lastFetchedPage: action.payload.page,
        currentTracks: action.payload.page.items,
        loading: false,
        loadingMore: false
      };
    case SET_LOADING:
      return {
        ...state,
        ...action.payload
      };
  }
}

interface Props {
  searchQuery: string;
}

export default function DiscoverTrackList(props: Props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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

  React.useEffect(() => {
    async function fetchTracksForQuery() {
      dispatch(actions.SET_LOADING({ loading: true }));
      const data = await search(props.searchQuery, 'track');
      if (data.tracks) dispatch(actions.SET_RESULTS({ page: data.tracks }));
    }
    if (props.searchQuery.length == 0) return;
    fetchTracksForQuery();
  }, [props.searchQuery]);

  return (
    <WindowScroller serverHeight={400}>
      {({ height }) => (
        <List
          renderItem={undefined}
          loading={state.loading}
          css={[ListStyles]}
          header={
            <Typography.Title level={3} style={{ margin: 0 }}>
              Results for: {props.searchQuery}
            </Typography.Title>
          }
        >
          <AutoSizer disableHeight={true}>
            {({ width }) => (
              <VList
                autoHeight={true}
                height={height}
                overscanRowCount={10}
                rowCount={state.currentTracks.length}
                rowHeight={72}
                width={width}
                rowRenderer={({ index, style }) => {
                  const track = state.currentTracks[index];
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
                      track={state.currentTracks[index]}
                      key={index}
                    />
                  );
                }}
              />
            )}
          </AutoSizer>
        </List>
      )}
    </WindowScroller>
  );
}
