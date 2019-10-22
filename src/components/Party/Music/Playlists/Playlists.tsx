import AntdSearch from '@components/AntdSearch';
import { Affix } from 'antd';
import React from 'react';

import { AffixedBarContainer } from '../shared/styles';

// PlaylistOrderByInput
// PlaylistWhereInput
// const PARTY_PLAYLISTS_CONNECTION_QUERY = gql`
//     query Party_PlaylistsConnection( $where: PlaylistWhereInput
//     $orderBy: PlaylistOrderByInput
//     $skip: Int
//     $after: String
//     $before: String
//     $first: Int
//     $last: Int ) {
// playlistsConnection(where: $where orderBy: $orderBy skip: $skip before: $before first: $first last: $last) {

// }
// }

// `;

export default function PartyMusicPlaylists() {
  return (
    <Affix>
      <AffixedBarContainer>
        <AntdSearch />
      </AffixedBarContainer>
    </Affix>
  );
}
