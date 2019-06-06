import React from 'react';
import { getCurrentUserTopTracks, Track } from 'spotify-web-sdk';
import UserTopHeading from '../UserTopHeading';
import UserTopTracksList from './UserTopTracksList';
import GraphqlLoading from '@components/GraphqlLoading';
import posed from 'react-pose';
import useSpotifyWebSdk, {
  SpotifyAuthenticationError$
} from '@hooks/useSpotifyWebSdk';

interface Props {
  visible: boolean;
}
interface State {
  loading: boolean;
  data: Track[] | null;
}

const PosedWrapper = posed.div({
  loading: {},
  loaded: { staggerChildren: 300 }
});

const UserTopTracks: React.FC<Props> = props => {
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
    handleDataFetch();
  }, []);

  if (state.loading || !state.data)
    return (
      <GraphqlLoading
        isLoadingInitially={false}
        loading={true}
        textToDisplay=""
        height="100%"
      />
    );

  return (
    <PosedWrapper
      style={{ display: props.visible ? 'block' : 'none' }}
      pose={state.loading ? 'loading' : 'loaded'}
      initialPose="loading"
    >
      <UserTopHeading headingText="Your top tracks" onMoreClick={() => {}} />
      <UserTopTracksList tracks={state.data} />
    </PosedWrapper>
  );
};

export default UserTopTracks;
