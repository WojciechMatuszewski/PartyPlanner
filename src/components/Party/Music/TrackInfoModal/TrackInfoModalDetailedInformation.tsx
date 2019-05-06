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

  .list-item-content {
    color: rgba(255, 255, 255, 0.8);
  }
  h4 {
    margin-bottom: 0;
  }
`;

interface ListDataEntry {
  title: string;
  content: React.ReactNode;
}
interface Props {
  track: Track;
}
const TrackInfoModalDetailedInformation: React.FC<Props> = ({ track }) => {
  const listData = React.useMemo(
    () =>
      [
        {
          title: 'Popularity',
          content: getTrackPopularity(track)
        },
        { title: 'Explicit', content: track.explicit ? 'Yes' : 'No' },
        { title: 'Album name', content: track.albumName },
        { title: 'Album type', content: track.album.releaseDate }
      ] as ListDataEntry[],
    [track]
  );

  return (
    <DetailedInfoWrapper>
      <Typography.Title level={3} className="actions-heading">
        Detailed information
      </Typography.Title>
      <List
        bordered={true}
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

  function getTrackPopularity(track: Track) {
    if (track.popularity > 80) return 'Very Popular';
    else if (track.popularity > 60 && track.popularity < 80) return 'Popular';
    else if (track.popularity > 40 && track.popularity < 60)
      return 'Semi-popular';
    else return 'Not very popular';
  }
};

export default TrackInfoModalDetailedInformation;
