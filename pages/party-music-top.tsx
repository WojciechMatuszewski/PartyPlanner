import PartyAuthenticator from '@auth/party-auth';
import GraphqlLoading from '@components/GraphqlLoading';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import BigMusicPlayerStickedToBottom, {
  BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT
} from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import SavedTracksProvider from '@components/Party/Music/SavedTracks/SavedTracksProvider';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal/TrackInfoModal';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import UserTopTracks from '@components/Party/Music/UserTop/UserTopTracks/UserTopTracks';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { PartyProvider } from '@components/Party/PartyProvider';
import { PartyPage } from '@components/Party/shared';
import { PartyContentWrapper } from '@components/Party/styles';
import PageException from '@components/UI/PageException';
import { useParty_SavedTracks } from '@generated/graphql';
import SpotifyGuard from '@guards/SpotifyGuard';
import { handleRefetch, hasGraphqlData } from '@shared/graphqlUtils';
import { Button } from 'antd';
import { NetworkStatus } from 'apollo-client';
import React from 'react';

const PartyMusicTopPage: PartyPage = ({ isInParty, partyId, userId }) => {
  const { data, error, refetch, networkStatus } = useParty_SavedTracks({
    variables: { where: { party: { id: partyId } } },
    notifyOnNetworkStatusChange: true
  });

  if (!isInParty)
    return (
      <PageException
        desc="Party either does not exist or you are not invited"
        backText="Back to dashboard"
        redirectPath="/user/dashboard"
      />
    );

  if (error || networkStatus == NetworkStatus.refetch) {
    return (
      <PageException
        actions={
          <Button
            type="danger"
            onClick={() => handleRefetch(refetch)}
            loading={networkStatus == NetworkStatus.refetch}
          >
            Try loading again
          </Button>
        }
      />
    );
  }

  if (
    networkStatus == NetworkStatus.loading ||
    !hasGraphqlData(data, ['partySavedTracks'])
  )
    return (
      <GraphqlLoading
        height="calc(100vh - 90px)"
        isLoadingInitially={true}
        loading={true}
      />
    );

  const { partySavedTracks } = data;

  return (
    <React.Fragment>
      <PartyMenu routerPath={'/party-music-top'} partyId={partyId} />
      <PartyContentWrapper>
        <SpotifyGuard>
          <SavedTracksProvider savedTracks={partySavedTracks}>
            <BigMusicPlayerProvider>
              <TrackInfoModalProvider>
                <PartyProvider partyId={partyId} userId={userId}>
                  <BigMusicPlayerStickedToBottom partyId={partyId}>
                    {playerVisible => (
                      <UserTopTracks
                        paddingBottom={getContentPaddingBottom(playerVisible)}
                      />
                    )}
                  </BigMusicPlayerStickedToBottom>
                </PartyProvider>
                <TrackInfoModal />
              </TrackInfoModalProvider>
            </BigMusicPlayerProvider>
          </SavedTracksProvider>
        </SpotifyGuard>
      </PartyContentWrapper>
    </React.Fragment>
  );

  function getContentPaddingBottom(isPlayerVisible: boolean) {
    return isPlayerVisible ? BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT : 0;
  }
};

PartyMusicTopPage.getInitialProps = PartyAuthenticator.isUserInParty;

export default PartyMusicTopPage;
