import React from 'react';
import { Artist, getCurrentUserTopArtists, Page } from 'spotify-web-sdk';
import UserTopHeading from '../UserTopHeading';
import UserTopArtistsList from './UserTopArtistsList';
import useSpotifyWebSdk, {
  SpotifyAuthenticationError$
} from '@hooks/useSpotifyWebSdk';

interface State {
  loading: boolean;
  data: Page<Artist> | null;
}

interface Props {
  onResourceLoaded: () => void;
}

const UserTopArtists: React.FC<Props> = props => {
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

      props.onResourceLoaded();
    }
    handleDataFetch();
  }, []);

  if (state.loading || !state.data) return null;

  return (
    <React.Fragment>
      <UserTopHeading headingText="Your top artists" onMoreClick={() => {}} />
      <UserTopArtistsList artists={state.data} />
    </React.Fragment>
  );
};

export default UserTopArtists;
