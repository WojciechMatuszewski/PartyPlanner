import PartyAuthenticator from '@auth/party-auth';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import BigMusicPlayerStickedToBottom from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import SavedTracksList from '@components/Party/Music/SavedPartyTracks/SavedTracksList';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { PartyProvider } from '@components/Party/PartyProvider';
import {
  PartyContentInnerWrapper,
  PartyContentWrapper
} from '@components/Party/styles';
import PageException from '@components/UI/PageException';
import styled from '@emotion/styled';
import { NextFunctionComponent } from 'next';
import React from 'react';

import { NextContextWithApollo } from './_app';

// const EmptySectionStyles = css`
//   width: 100%;
//   height: 100%;

//   ${FlexBoxFullCenteredStyles};
//   img {
//     max-width: 600px;
//   }
// `;

const SavedTracksInnerWrapper = styled(PartyContentInnerWrapper)`
  padding-top: 12px;
`;

interface InjectedProps {
  isInParty: boolean;
  partyId: string;
}

type RouterQuery = { id?: string };

const PartyMusicSavedTracks: NextFunctionComponent<
  InjectedProps,
  InjectedProps,
  NextContextWithApollo<RouterQuery>
> = ({ isInParty, partyId }) => {
  if (!isInParty)
    return (
      <PageException
        desc="Party either does not exist or you are not invited"
        backText="Back to dashboard"
        redirectPath="/user/dashboard"
      />
    );

  return (
    <React.Fragment>
      <PartyMenu partyId={partyId} routerPath="/party-music-saved-tracks" />
      <PartyProvider partyId={partyId}>
        <PartyContentWrapper>
          <TrackInfoModalProvider>
            <BigMusicPlayerProvider>
              <SavedTracksInnerWrapper>
                <SavedTracksList partyId={partyId} />
              </SavedTracksInnerWrapper>
              <BigMusicPlayerStickedToBottom />
            </BigMusicPlayerProvider>
          </TrackInfoModalProvider>
        </PartyContentWrapper>
      </PartyProvider>
    </React.Fragment>
  );
};

PartyMusicSavedTracks.getInitialProps = PartyAuthenticator.isUserInParty;

export default PartyMusicSavedTracks;
