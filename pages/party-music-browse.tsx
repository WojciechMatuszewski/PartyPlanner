import React from 'react';
import { NextFunctionComponent } from 'next';
import { NextContextWithApollo } from './_app';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';

const PartyMusicBrowsePage: NextFunctionComponent<
  {},
  {},
  NextContextWithApollo
> = () => {
  return (
    <React.Fragment>
      <PartyMenu partyId={'123'} routerPath="/party-music-browse" />
    </React.Fragment>
  );
};

export default PartyMusicBrowsePage;
