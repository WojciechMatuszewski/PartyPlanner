import { GreenSpotifyButton } from '@components/UI/SpotifyButton';
import TransparentModal, {
  TRANSPARENT_MODAL_BREAKPOINT
} from '@components/UI/TransparentModal';
import styled from '@emotion/styled';
import { Party_PlaylistsConnectionNode } from '@generated/graphql';
import { Colors } from '@shared/styles';
import { Icon, Typography, List } from 'antd';
import moment from 'moment';
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
}
export default function PlaylistInfo({ playlist }: Props) {
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
        <TransparentModal.Content>
          <Typography.Title level={3}>Detailed information</Typography.Title>
          <List bordered={true}>
            <List.Item>
              <List.Item.Meta title="Restrictions" />
              <Typography.Text className="list-item-content">
                {playlist.importable
                  ? 'None'
                  : 'Cannot be imported to other parties'}
              </Typography.Text>
            </List.Item>
            <List.Item>
              <List.Item.Meta title="Created at" />
              <Typography.Text className="list-item-content">
                {moment(playlist.createdAt).format('YYYY-MM-DD HH:mm')}
              </Typography.Text>
            </List.Item>
          </List>
        </TransparentModal.Content>
        <ButtonsWrapper>
          <GreenSpotifyButton size="large" onClick={onSpotifyButtonClick}>
            Listen on Spotify!
          </GreenSpotifyButton>
        </ButtonsWrapper>
      </TransparentModal>
    </React.Fragment>
  );
}
