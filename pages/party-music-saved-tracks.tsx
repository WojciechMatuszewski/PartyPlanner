import PartyAuthenticator from '@auth/party-auth';
import { BigMusicPlayerProvider } from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerProvider';
import BigMusicPlayerStickedToBottom from '@components/Party/Music/BigMusicPlayer/BigMusicPlayerStickedToBottom';
import { TrackInfoModalProvider } from '@components/Party/Music/TrackInfoModal/TrackInfoModalProvider';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import {
  PartyContentInnerWrapper,
  PartyContentWrapper
} from '@components/Party/styles';
import PageException from '@components/UI/PageException';
import styled from '@emotion/styled';
import { Typography } from 'antd';
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
  //   return (
  //     <React.Fragment>
  //       <PartyMenu partyId={partyId} routerPath="/party-music-saved-tracks" />
  //       <PartyContentWrapper>
  //         <EmptySection
  //           title="No saved tracks"
  //           description="Add tracks in browse section!"
  //           emotionCSS={EmptySectionStyles}
  //         />
  //       </PartyContentWrapper>
  //     </React.Fragment>
  //   );

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
      <PartyContentWrapper>
        <TrackInfoModalProvider>
          <BigMusicPlayerProvider>
            <SavedTracksInnerWrapper>
              <Typography.Title level={2}>Saved Tracks</Typography.Title>
            </SavedTracksInnerWrapper>
            <BigMusicPlayerStickedToBottom />
          </BigMusicPlayerProvider>
        </TrackInfoModalProvider>
      </PartyContentWrapper>
    </React.Fragment>
  );
};

PartyMusicSavedTracks.getInitialProps = PartyAuthenticator.isUserInParty;

export default PartyMusicSavedTracks;
