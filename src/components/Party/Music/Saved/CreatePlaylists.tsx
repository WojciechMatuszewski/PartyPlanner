import { Full_Saved_Track_FragmentFragment } from '@generated/graphql';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import React from 'react';
import { createPlaylist, getCurrentUserProfile } from 'spotify-web-sdk';

interface Props {
  tracks: Full_Saved_Track_FragmentFragment[];
  visible: boolean;
  onClose: VoidFunction;
}

export default function CreatePlaylists({  visible, onClose }: Props) {
  const [loading, setLoading] = React.useState(false);

  async function handleCreatePlaylistClick() {
    try {
      setLoading(true);
      const { id } = await getCurrentUserProfile();
      await createPlaylist(id, 'testing123');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      closable={true}
      maskClosable={true}
      onCancel={onClose}
      centered={true}
      visible={visible}
      title="Create your playlist"
      footer={
        <React.Fragment>
          <Button disabled={loading} onClick={onClose}>
            Cancel
          </Button>
          <Button
            loading={loading}
            type="primary"
            onClick={handleCreatePlaylistClick}
          >
            Create playlist
          </Button>
        </React.Fragment>
      }
    >
      <Form>
        <Form.Item style={{ marginBottom: 8 }}>
          <Input type="text" placeholder="Playlist name" />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Checkbox>Make it private</Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
}
