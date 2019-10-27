import React from 'react';
import { Result, Button } from 'antd';

export default function ImportPlaylistsSuccess() {
  return (
    <Result
      status="success"
      title="Playlists imported"
      extra={[
        <Button type="primary" key={1}>
          Close
        </Button>
      ]}
    />
  );
}
