import React from 'react';
import { Track, Page, search } from 'spotify-web-sdk';
import { WindowScroller, List as VList, AutoSizer } from 'react-virtualized';
import { List, Typography, Button, message } from 'antd';
import DiscoverTrack from './DiscoverTrack';
import { createStandardAction, ActionType } from 'typesafe-actions';
import css from '@emotion/css';
import { useBigMusicPlayer } from '../BigMusicPlayer/BigMusicPlayerProvider';
import { useTrackInfoModal } from '../TrackInfoModal/TrackInfoModalProvider';
import GraphqlInlineError from '@components/GraphqlInlineError';

const ListStyles = css`
  .ant-spin-container.ant-spin-blur > div:first-of-type {
    display: none;
  }
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-top: 12px;

  @media screen and (max-width: 1080px) {
    border-radius: 0;
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

const SET_RESULTS = 'SET_RESULTS';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';
const APPEND_RESULTS = 'APPEND_RESULTS';

interface State {
  lastFetchedPage: Page<Track> | undefined;
  currentTracks: Track[];
  loadingMore: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: State = {
  lastFetchedPage: undefined,
  currentTracks: [],
  loadingMore: false,
  loading: false,
  error: false
};

const actions = {
  setResults: createStandardAction(SET_RESULTS)<{ page: Page<Track> }>(),
  appendResults: createStandardAction(APPEND_RESULTS)<{ page: Page<Track> }>(),
  setLoading: createStandardAction(SET_LOADING)<
    Partial<{ loading: boolean; loadingMore: boolean }>
  >(),
  setError: createStandardAction(SET_ERROR)<boolean>()
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
        loadingMore: false,
        error: false
      };
    case APPEND_RESULTS:
      return {
        ...state,
        lastFetchedPage: action.payload.page,
        currentTracks: [...state.currentTracks, ...action.payload.page.items],
        loading: false,
        loadingMore: false,
        error: false
      };
    case SET_LOADING:
      return {
        ...state,
        ...action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        loadingMore: false
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
      await handleTracksFetch();
    }
    if (props.searchQuery.length == 0) return;
    fetchTracksForQuery();
  }, [props.searchQuery]);

  if (state.error)
    return (
      <GraphqlInlineError>
        <Button
          loading={state.loading}
          onClick={async () => await handleTracksFetch()}
        >
          Try again
        </Button>
      </GraphqlInlineError>
    );

  return (
    <WindowScroller serverHeight={400}>
      {({ height, onChildScroll, isScrolling, scrollTop }) => (
        <React.Fragment>
          <List
            bordered={true}
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
                  {...state}
                  autoHeight={true}
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  height={height}
                  rowCount={state.currentTracks.length}
                  overscanRowCount={15}
                  rowHeight={72}
                  width={width}
                  scrollTop={scrollTop}
                  data={state.currentTracks}
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
          {canLoadMore() && (
            <Button
              onClick={async () => await handleOnLoadMoreClick()}
              loading={state.loadingMore}
              css={[LoadMoreButtonStyles]}
              type="primary"
            >
              Load More
            </Button>
          )}
        </React.Fragment>
      )}
    </WindowScroller>
  );

  function canLoadMore() {
    return (
      !state.loading &&
      state.lastFetchedPage &&
      state.lastFetchedPage.hasNext() &&
      state.currentTracks.length > 0
    );
  }

  async function handleOnLoadMoreClick() {
    dispatch(actions.setLoading({ loadingMore: true }));
    try {
      const page = await state.lastFetchedPage!.getNextPage();
      dispatch(actions.appendResults({ page }));
    } catch (e) {
      handleError();
    }
  }

  async function handleTracksFetch() {
    dispatch(actions.setLoading({ loading: true }));
    try {
      const data = await search(props.searchQuery, 'track', {});
      if (data.tracks) dispatch(actions.setResults({ page: data.tracks }));
    } catch (e) {
      handleError();
    }
  }

  function handleError() {
    dispatch(actions.setError(true));
    message.error('Some error occurred!');
  }
}
