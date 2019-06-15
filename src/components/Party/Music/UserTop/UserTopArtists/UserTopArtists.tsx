import React from 'react';
import { Artist, getCurrentUserTopArtists, Page } from 'spotify-web-sdk';
import UserTopHeading from '../UserTopHeading';
import UserTopArtistsList from './UserTopArtistsList';
import useSpotifyWebSdk, {
  SpotifyAuthenticationError$
} from '@hooks/useSpotifyWebSdk';
import posed from 'react-pose';
import GraphqlLoading from '@components/GraphqlLoading';
import EmptySection from '@components/UI/EmptySection';
import { isBrowser } from '@apolloSetup/initApollo';
import css from '@emotion/css';

interface State {
  loading: boolean;
  data: Page<Artist> | null;
}

const PosedWrapper = posed.div({
  loading: { opacity: 0 },
  loaded: { staggerChildren: 300, opacity: 1 }
});

const UserTopArtists: React.FC = () => {
  useSpotifyWebSdk();
  const [state, setState] = React.useState<State>({
    loading: true,
    data: null
  });

  React.useEffect(() => {
    async function handleDataFetch() {
      try {
        const data = await getCurrentUserTopArtists();
        setState({ loading: false, data });
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
        textToDisplay="Loading Top Artists"
        height="100%"
      />
    );

  if (state.data.items.length == 0) {
    return (
      <div>
        <UserTopHeading headingText="Your top artists" />
        <EmptySection
          title="No Top Artists"
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
    >
      <UserTopHeading headingText="Your top artists" />
      <UserTopArtistsList artists={state.data} />
    </PosedWrapper>
  );
};

export default UserTopArtists;
