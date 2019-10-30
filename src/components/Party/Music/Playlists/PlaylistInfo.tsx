import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import TransparentModal, {
  TRANSPARENT_MODAL_BREAKPOINT
} from '@components/UI/TransparentModal';
import styled from '@emotion/styled';
import { Party_PlaylistsConnectionNode } from '@generated/graphql';
import { Colors } from '@shared/styles';
import { Button, Icon } from 'antd';
import React from 'react';

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  button:first-of-type {
    margin-right: 24px;
  }

  @media screen and (max-width: ${TRANSPARENT_MODAL_BREAKPOINT}px) {
    flex-direction: column;
    button:first-of-type {
      margin: 0;
      margin-top: 12px;
      order: 1;
    }
  }
`;

interface Props {
  playlist: Party_PlaylistsConnectionNode;
  onDelete: VoidFunction;
  loading: boolean;
}
export default function PlaylistInfo({ playlist, onDelete, loading }: Props) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleModalVisible = () => setModalVisible(prev => !prev);

  function onSpotifyButtonClick() {
    window.open(playlist.spotifyExternalUrl);
  }

  return (
    <React.Fragment>
      <Icon
        type="info-circle"
        key={1}
        style={{ color: Colors.AntdBlue }}
        onClick={toggleModalVisible}
      />
      <TransparentModal onClose={toggleModalVisible} visible={modalVisible}>
        <TransparentModal.Top
          title={playlist.name}
          subtitle={`By: ${playlist.user.firstName} ${playlist.user.lastName}`}
          image={playlist.imageUrl}
        />
        <ButtonsWrapper>
          <Button
            size="large"
            block={true}
            type="danger"
            onClick={onDelete}
            loading={loading}
          >
            Delete
          </Button>
          <GreenSpotifyButton
            disabled={loading}
            size="large"
            block={true}
            onClick={onSpotifyButtonClick}
          >
            Listen on Spotify!
          </GreenSpotifyButton>
        </ButtonsWrapper>
      </TransparentModal>
    </React.Fragment>
  );
}
