import React from 'react';
import { Page, Track, searchTracks } from 'spotify-web-sdk';
import { createStandardAction, ActionType } from 'typesafe-actions';
import { Affix, message, Button } from 'antd';
import styled from '@emotion/styled';
import { FlexBoxFullCenteredStyles } from '@shared/styles';
import AntdSearch from '@components/AntdSearch';
import useBetterTypeahead from '@hooks/useBetterTypeahead';
import EmptySection from '@components/UI/EmptySection';
import css from '@emotion/css';
import DiscoverTrackList from './DiscoverTrackList';
import ErrorSection from '@components/UI/ErrorSection';
import DiscoverFilters, { Filters } from './DiscoverFilters';
import { isNil } from 'ramda';

const MOBILE_BREAKPOINT = '800px';

const SearchWrapper = styled.div`
  width: 100%;
  background: white;
  ${FlexBoxFullCenteredStyles};
  padding: 12px;
  border-bottom: 1px solid rgb(232, 232, 232);
  height: 53px;
  & > form {
    max-width: calc(1280px - 24px);
    width: 1000%;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  padding: 0 12px;
  width: 100%;
  height: 100%;
  flex: 1;
  margin: 0 auto;
  @media screen and (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0;
    .discover-tracks-list {
      border-radius: 0;
      box-shadow: none;
      border-left: 0;
      border-right: 0;
    }
  }
`;

const ErrorSectionStyles = css`
  height: 100%;
  ${FlexBoxFullCenteredStyles};
  button {
    margin-top: 12px;
  }
  img {
    max-width: 600px;
  }
`;

const EmptySectionStyles = css`
  width: 100%;
  height: 100%;

  ${FlexBoxFullCenteredStyles};
  img {
    max-width: 600px;
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

interface Props {
  paddingBottom: number;
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

export default function PartyMusicDiscover(props: Props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const lastInputValueOnError = React.useRef<string | undefined>(undefined);
  const isFirstMount = React.useRef(true);

  const [filters, setFilters] = React.useState<Filters>({
    artist: undefined,
    genre: undefined
  });

  function appendFilters(searchQuery: string) {
    return Object.entries(filters).reduce((acc, [filterKey, filterValue]) => {
      if (!filterValue) return acc;
      return acc.concat(` ${filterKey}:${filterValue}`);
    }, searchQuery);
  }

  function areFiltersEmpty(filters: Filters) {
    return Object.values(filters).every(isNil);
  }

  React.useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (areFiltersEmpty(filters)) return;

    async function handle() {
      try {
        const res = await handleTrackSearch('');
        handleSearchResult(res);
      } catch {
        handleError(undefined);
      }
    }
    handle();
  }, [filters]);

  const { onChange } = useBetterTypeahead({
    fetchFunction: handleTrackSearch,
    onResult: handleSearchResult,
    onError: handleError
  });

  if (state.error)
    return (
      <ErrorSection emotionCSS={ErrorSectionStyles}>
        <Button loading={state.loading} onClick={handleOnErrorRetry}>
          Try Again
        </Button>
      </ErrorSection>
    );

  return (
    <React.Fragment>
      <Affix>
        <SearchWrapper>
          <AntdSearch
            defaultValue={lastInputValueOnError.current}
            loading={state.loading}
            onChange={onChange}
            debounceOnChange={false}
            placeholder="Track name ..."
          />
          <DiscoverFilters onFiltersChange={setFilters} />
        </SearchWrapper>
      </Affix>
      <ContentWrapper style={{ paddingBottom: props.paddingBottom }}>
        {state.currentTracks.length == 0 ? (
          <EmptySection
            image="/static/music.svg"
            title="No tracks to display"
            emotionCSS={EmptySectionStyles}
          />
        ) : (
          <DiscoverTrackList
            className="discover-tracks-list"
            loading={state.loading}
            tracks={state.currentTracks}
            onLoadMoreClick={handleOnLoadMoreClick}
            canLoadMore={canLoadMore()}
            loadingMore={state.loadingMore}
          />
        )}
      </ContentWrapper>
    </React.Fragment>
  );

  async function handleTrackSearch(searchQuery: string) {
    dispatch(actions.setLoading({ loading: true }));
    return searchTracks(appendFilters(searchQuery));
  }

  function handleSearchResult(page: Page<Track>) {
    dispatch(actions.setResults({ page }));
  }

  async function handleOnErrorRetry() {
    dispatch(actions.setLoading({ loading: true }));
    try {
      const page = await searchTracks(lastInputValueOnError.current || '');
      dispatch(actions.setResults({ page }));
    } catch (e) {
      handleError();
    }
    lastInputValueOnError.current = undefined;
  }

  function canLoadMore() {
    return (
      !state.loading &&
      state.lastFetchedPage != null &&
      state.lastFetchedPage.hasNext() &&
      state.currentTracks.length > 0
    );
  }

  async function handleOnLoadMoreClick() {
    if (!state.lastFetchedPage) return;
    dispatch(actions.setLoading({ loadingMore: true }));
    try {
      const page = await state.lastFetchedPage.getNextPage();

      dispatch(actions.appendResults({ page }));
    } catch (e) {
      handleError();
    }
  }

  function handleError(inputValueWhenErrorOcurred?: string) {
    if (inputValueWhenErrorOcurred) {
      lastInputValueOnError.current = inputValueWhenErrorOcurred;
    }
    dispatch(actions.setError(true));
    message.error('Some error occurred!');
  }
}
