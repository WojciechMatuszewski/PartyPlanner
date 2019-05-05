import React from 'react';
import { Track } from 'spotify-web-sdk';
import styled from '@emotion/styled';
import { List, Typography } from 'antd';

const DetailedInfoWrapper = styled.div`
  .actions-heading {
    width: 100%;
    color: white;
    padding-top: 24px;
  }
  .ant-list-item {
    padding-top: 12px;
    padding-bottom: 2px;
  }

  .list-item-content {
    color: rgba(255, 255, 255, 0.8);
  }
  h4 {
    margin-bottom: 0;
  }
`;

interface ListDataEntry {
  title: string;
  content: string;
}
interface Props {
  track: Track;
}
const TrackInfoModalDetailedInformation: React.FC<Props> = ({ track }) => {
  const listData = React.useMemo(
    () =>
      [
        { title: 'Popularity', content: track.popularity },
        { title: 'Explicit', content: track.explicit ? 'Yes' : 'No' },
        { title: 'Album name', content: track.albumName },
        { title: 'Album type', content: track.album.albumType },
        { title: 'Release date', content: track.releaseYear }
      ] as ListDataEntry[],
    []
  );
  return (
    <DetailedInfoWrapper>
      <Typography.Title level={3} className="actions-heading">
        Detailed information
      </Typography.Title>
      <List
        dataSource={listData}
        renderItem={({ title, content }: ListDataEntry) => (
          <List.Item>
            <List.Item.Meta title={title} />
            <Typography.Text className="list-item-content">
              {content}
            </Typography.Text>
          </List.Item>
        )}
      />
    </DetailedInfoWrapper>
  );
};

export default TrackInfoModalDetailedInformation;
