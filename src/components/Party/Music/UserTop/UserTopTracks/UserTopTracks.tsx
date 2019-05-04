import React from 'react';
import { getCurrentUserTopTracks, Page, Track } from 'spotify-web-sdk';
import { UserTopWrapper } from '../shared';
import UserTopHeading from '../UserTopHeading';
import UserTopTracksList from './UserTopTracksList';

interface State {
  loading: boolean;
  data: Page<Track> | null;
}

interface Props {
  onResourceLoaded: () => void;
}

const UserTopTracks: React.FC<Props> = props => {
  const [state, setState] = React.useState<State>({
    loading: true,
    data: null
  });

  React.useEffect(() => {
    async function handleDataFetch() {
      const data = await getCurrentUserTopTracks();
      setState({ loading: false, data });
      props.onResourceLoaded();
    }
    handleDataFetch();
  }, []);

  if (state.loading || !state.data) return null;

  return (
    <UserTopWrapper>
      <UserTopHeading headingText="Your top songs" onMoreClick={() => {}} />
      <UserTopTracksList tracks={state.data} />
    </UserTopWrapper>
  );
};

export default UserTopTracks;
