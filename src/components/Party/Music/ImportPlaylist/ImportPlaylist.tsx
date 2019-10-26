import AntdSearch from '@components/AntdSearch';
import GraphqlInlineError from '@components/GraphqlInlineError';
import GraphqlInlineLoading from '@components/GraphqlInlineLoading';
import css from '@emotion/css';
import {
  Party_Playlists_Connection_Node_FragmentFragment,
  useParty_ImportPlaylistsToParty,
  useParty_PlaylistsConnection
} from '@generated/graphql';
import {
  handleRefetch,
  hasGraphqlData,
  isLoadingError,
  isLoadingInitially,
  isLoadingMore,
  isLoadingOnSearch
} from '@shared/graphqlUtils';
import { Button, Modal } from 'antd';
import gql from 'graphql-tag';
import React from 'react';
import { pluck } from 'ramda';

import PlaylistItemList from './PlaylistItemList';

const ModalStyles = css`
  min-width: 530px;
  width: auto;
  top: 24px;

  .ant-modal-content {
    max-height: calc(100vh - 48px);

    overflow-y: auto;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
    min-width: 100%;
    padding: 6px;
    top: 0;

    .ant-modal-close-x {
      width: 47px;
      height: 47px;
      margin-left: auto;
      line-height: 47px;
    }
    .ant-list-header {
      padding: 12px;
    }
    button {
      width: 100%;

      &:last-of-type {
        margin-top: 12px;
        margin-left: 0;
      }
    }
    .ant-modal-header,
    .ant-modal-body {
      padding: 12px;
    }
  }
`;

export const IMPORT_PLAYLISTS_TO_PARTY_MUTATION = gql`
  mutation Party_ImportPlaylistsToParty($playlists: String!, $partyId: ID!) {
    importPlaylistsToParty(playlists: $playlists, partyId: $partyId)
  }
`;

interface Props {
  partyId: string;
  userId: string;
  visible: boolean;
  onClose: VoidFunction;
}

export default function ImportPlaylist({
  partyId,
  userId,
  visible,
  onClose
}: Props) {
  const [selectedPlaylists, setSelectedPlaylists] = React.useState<
    Party_Playlists_Connection_Node_FragmentFragment[]
  >([]);

  const [filterQuery, setFilterQuery] = React.useState<string | undefined>(
    undefined
  );

  const [
    importPlaylists,
    { loading: importingPlaylists }
  ] = useParty_ImportPlaylistsToParty();

  const { data, error, networkStatus, refetch } = useParty_PlaylistsConnection({
    variables: {
      where: {
        parties_none: { id: partyId },
        user: { id: userId },
        name_contains: filterQuery
      }
    },
    notifyOnNetworkStatusChange: true
  });

  const loadingInitially =
    isLoadingInitially(networkStatus) ||
    !hasGraphqlData(data, ['playlistsConnection']);

  function handleImportClick() {
    importPlaylists({
      variables: {
        partyId,
        playlists: pluck('id', selectedPlaylists).join(',')
      }
    });
  }

  return (
    <Modal
      title="Import playlists"
      css={[ModalStyles]}
      closable={true}
      visible={visible}
      onCancel={onClose}
      maskClosable={true}
      footer={[
        <Button key={0} onClick={onClose}>
          Close
        </Button>,
        <Button
          key={1}
          onClick={handleImportClick}
          loading={importingPlaylists}
          type="primary"
          disabled={selectedPlaylists.length == 0}
        >
          Import
        </Button>
      ]}
    >
      {loadingInitially ? (
        <GraphqlInlineLoading />
      ) : error ? (
        <GraphqlInlineError.WithButton
          onRetry={() => handleRefetch(refetch)}
          loading={isLoadingError(networkStatus)}
        />
      ) : (
        <React.Fragment>
          <AntdSearch
            disabled={importingPlaylists}
            debounceOnChange={true}
            placeholder="Search ..."
            loading={isLoadingOnSearch(networkStatus)}
            onChange={setFilterQuery}
          />
          <PlaylistItemList
            onSelectPlaylists={playlist =>
              setSelectedPlaylists(prev => [...prev, playlist])
            }
            onDeselectPlaylist={playlist =>
              setSelectedPlaylists(prev =>
                prev.filter(({ id }) => id != playlist.id)
              )
            }
            playlists={data.playlistsConnection.edges}
            loading={isLoadingOnSearch(networkStatus)}
            loadingMore={isLoadingMore(networkStatus)}
            canLoadMore={false}
            selectedPlaylists={selectedPlaylists}
          />
        </React.Fragment>
      )}
    </Modal>
  );
}
