import GraphqlInlineError from '@components/GraphqlInlineError';
import css from '@emotion/css';
import {
  Party_Playlists_Connection_Node_FragmentFragment,
  useParty_ImportPlaylistsToParty
} from '@generated/graphql';
import { handleRefetch } from '@shared/graphqlUtils';
import { Button, Modal, Icon } from 'antd';
import gql from 'graphql-tag';
import { pluck } from 'ramda';
import React from 'react';

import ImportPlaylistsSuccess from './ImportPlaylistsSuccess';
import PartyPlannerPlaylists from './PartyPlannerPlaylists';
import { useParty } from '@components/Party/PartyProvider';
import {
  PARTY_PLAYLISTS_CONNECTION_QUERY,
  getPartyPlaylistConnectionVariables
} from '../Playlists/Playlists';

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
  isOnMobile: boolean;
}
export default function ImportPlaylists({ isOnMobile }: Props) {
  const [selectedPlaylists, setSelectedPlaylists] = React.useState<
    Party_Playlists_Connection_Node_FragmentFragment[]
  >([]);

  const { userId, partyId } = useParty();

  const [showSuccess, setShowSuccess] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleModalVisible = () => setModalVisible(prev => !prev);

  const [importPlaylists, { loading, error }] = useParty_ImportPlaylistsToParty(
    {
      onCompleted: () => setShowSuccess(true),
      refetchQueries: [
        {
          query: PARTY_PLAYLISTS_CONNECTION_QUERY,
          variables: getPartyPlaylistConnectionVariables()
        }
      ],
      awaitRefetchQueries: true
    }
  );

  const modalFooterHidden = error || showSuccess;

  function handleImportClick() {
    importPlaylists({
      variables: {
        partyId,
        playlists: pluck('id', selectedPlaylists).join(',')
      }
    });
  }

  function handleSelectPlaylist(
    playlist: Party_Playlists_Connection_Node_FragmentFragment
  ) {
    setSelectedPlaylists(prev => [...prev, playlist]);
  }

  function handleDeselectPlaylist(
    playlist: Party_Playlists_Connection_Node_FragmentFragment
  ) {
    setSelectedPlaylists(prev => prev.filter(({ id }) => id != playlist.id));
  }

  return (
    <React.Fragment>
      {isOnMobile ? (
        <span
          onClick={toggleModalVisible}
          style={{ width: '100%', padding: '12px 0px' }}
        >
          <Icon type="import" />
          Import Playlists
        </span>
      ) : (
        <Button
          style={{ marginRight: 12 }}
          type="primary"
          onClick={toggleModalVisible}
        >
          <Icon type="import" />
          Import playlist
        </Button>
      )}

      <Modal
        title="Import playlists"
        css={[ModalStyles]}
        closable={true}
        centered={isOnMobile}
        visible={modalVisible}
        onCancel={toggleModalVisible}
        maskClosable={true}
        footer={
          !modalFooterHidden && (
            <ModalControls
              onClose={toggleModalVisible}
              onImport={handleImportClick}
              importLoading={loading}
              importDisabled={selectedPlaylists.length == 0}
            />
          )
        }
      >
        {error ? (
          <GraphqlInlineError.WithButton
            loading={loading}
            onRetry={() => handleRefetch(handleImportClick)}
          />
        ) : showSuccess ? (
          <ImportPlaylistsSuccess onClose={toggleModalVisible} />
        ) : (
          <PartyPlannerPlaylists
            onDeselectPlaylist={handleDeselectPlaylist}
            onSelectPlaylists={handleSelectPlaylist}
            selectedPlaylists={selectedPlaylists}
            importingPlaylists={loading}
            partyId={partyId}
            userId={userId}
          />
        )}
      </Modal>
    </React.Fragment>
  );
}

interface ModalControlProps {
  onClose: VoidFunction;
  onImport: VoidFunction;
  importDisabled: boolean;

  importLoading: boolean;
}
function ModalControls({
  onClose,
  onImport,
  importDisabled,

  importLoading
}: ModalControlProps) {
  return (
    <React.Fragment>
      <Button key={0} onClick={onClose}>
        Close
      </Button>
      <Button
        key={1}
        onClick={onImport}
        loading={importLoading}
        type="primary"
        disabled={importDisabled}
      >
        Import
      </Button>
    </React.Fragment>
  );
}
