import React from 'react';
import { Modal, Tabs } from 'antd';

export default function ImportPlaylist() {
  return (
    <Modal visible={true}>
      <Tabs>
        <Tabs.TabPane key="0" tab="Spotify">
          from spotify
        </Tabs.TabPane>
        <Tabs.TabPane key="1" tab="Party Planner">
          from partyPlanner
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
}
