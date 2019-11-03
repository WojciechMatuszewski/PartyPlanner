import React from 'react';
import { Result, Button } from 'antd';
interface Props {
  onClose: VoidFunction;
}
export default function ImportPlaylistsSuccess({ onClose }: Props) {
  return (
    <Result
      status="success"
      title="Playlists imported"
      extra={[
        <Button type="primary" key={1} onClick={onClose}>
          Close
        </Button>
      ]}
    />
  );
}
