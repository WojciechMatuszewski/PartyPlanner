import React from 'react';
import { getCurrentUserTopTracks, Track } from 'spotify-web-sdk';
import UserTopHeading from '../UserTopHeading';
import UserTopTracksList from './UserTopTracksList';
import GraphqlLoading from '@components/GraphqlLoading';
import posed from 'react-pose';
import useSpotifyWebSdk, {
  SpotifyAuthenticationError$
} from '@hooks/useSpotifyWebSdk';
import EmptySection from '@components/UI/EmptySection';
import { isBrowser } from '@apolloSetup/initApollo';
import css from '@emotion/css';

interface State {
  loading: boolean;
  data: Track[] | null;
}

const PosedWrapper = posed.div({
  loading: { opacity: 0 },
  loaded: { staggerChildren: 300, opacity: 1 }
});

interface Props {
  paddingBottom: number;
}

const UserTopTracks: React.FC<Props> = ({ paddingBottom }) => {
  useSpotifyWebSdk();
  const [state, setState] = React.useState<State>({
    loading: true,
    data: null
  });

  React.useEffect(() => {
    async function handleDataFetch() {
      try {
        const data = await getCurrentUserTopTracks({ limit: 50 });
        setState({ loading: false, data: data.items });
      } catch (e) {
        SpotifyAuthenticationError$.next();
      }
    }
    if (!isBrowser()) return;
    handleDataFetch();
  }, []);

  if (state.loading || !state.data)
    return (
      <GraphqlLoading
        isLoadingInitially={true}
        loading={true}
        textToDisplay="Loading Top Tracks"
        height="100%"
      />
    );

  if (state.data.length == 0) {
    return (
      <div>
        <UserTopHeading headingText="Your top tracks" />
        <EmptySection
          title="No Top Tracks"
          description="You probably should use Spotify more to populate this area"
          emotionCSS={css`
            img {
              max-width: 400px;
            }
          `}
        />
      </div>
    );
  }

  return (
    <PosedWrapper
      pose={state.loading ? 'loading' : 'loaded'}
      initialPose="loading"
      style={{ paddingBottom }}
    >
      <UserTopHeading headingText="Your top tracks" />
      <UserTopTracksList tracks={state.data} />
    </PosedWrapper>
  );
};

export default UserTopTracks;
