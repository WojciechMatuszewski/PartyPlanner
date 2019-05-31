import React from 'react';
import { Artist, getCurrentUserTopArtists, Page } from 'spotify-web-sdk';
import UserTopHeading from '../UserTopHeading';
import UserTopArtistsList from './UserTopArtistsList';

interface State {
  loading: boolean;
  data: Page<Artist> | null;
}

interface Props {
  onResourceLoaded: () => void;
}

const UserTopArtists: React.FC<Props> = props => {
  const [state, setState] = React.useState<State>({
    loading: true,
    data: null
  });

  React.useEffect(() => {
    async function handleDataFetch() {
      const data = await getCurrentUserTopArtists();
      setState({ loading: false, data });
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
