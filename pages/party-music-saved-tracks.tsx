import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import BigMusicPlayerStickedToBottom, {
  BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT
} from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import SavedTracks from '@components/Party/Music/SavedTracks/SavedTracks';
import TrackInfoModal from '@components/Party/Music/TrackInfoModal/TrackInfoModal';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { PartyProvider } from '@components/Party/PartyProvider';
import { PartyContentWrapper } from '@components/Party/styles';
import withHandledPartyPageLoad, {
  WithHandledPartyPageLoadInjectedProps
} from '@components/Party/withHandledPartyPageLoad';
import React from 'react';

const PartyMusicSavedTracks = ({
  user: { id: userId },
  party: { id: partyId }
}: WithHandledPartyPageLoadInjectedProps) => {
  return (
    <React.Fragment>
      <PartyMenu partyId={partyId} routerPath="/party-music-saved-tracks" />
      <PartyProvider partyId={partyId} userId={userId}>
        <PartyContentWrapper>
          <TrackInfoModalProvider>
            <BigMusicPlayerProvider>
              <TrackInfoModal />
              <BigMusicPlayerStickedToBottom
                partyId={partyId}
                isUsingSavedTracksContext={false}
              >
                {playerVisible => (
                  <SavedTracks
                    partyId={partyId}
                    paddingBottom={getContentPaddingBottom(playerVisible)}
                  />
                )}
              </BigMusicPlayerStickedToBottom>
            </BigMusicPlayerProvider>
          </TrackInfoModalProvider>
        </PartyContentWrapper>
      </PartyProvider>
    </React.Fragment>
  );

  function getContentPaddingBottom(playerVisible: boolean) {
    return playerVisible ? BIG_MUSIC_PLAYER_STICKED_TO_BOTTOM_HEIGHT + 12 : 12;
  }
};

export default withHandledPartyPageLoad(PartyMusicSavedTracks);
