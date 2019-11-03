import { List, Typography } from 'antd';
import React from 'react';

interface ListDataEntry {
  title: string;
  content: React.ReactNode;
}
interface Props {
  track: {
    popularity: number;
    explicit: boolean;
    album: {
      name: string;
      releaseDate: string;
    };
  };
}
const TrackInfoModalDetailedInformation: React.FC<Props> = ({ track }) => {
  const listData = React.useMemo(
    () =>
      [
        {
          title: 'Popularity',
          content: getTrackPopularity(track.popularity)
        },
        { title: 'Explicit', content: track.explicit ? 'Yes' : 'No' },
        { title: 'Album name', content: track.album.name },
        { title: 'Album release date', content: track.album.releaseDate }
      ] as ListDataEntry[],
    [track]
  );

  return (
    <React.Fragment>
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
    </React.Fragment>
  );

  function getTrackPopularity(popularity: number) {
    if (popularity > 80) return 'Very Popular';
    if (popularity > 60 && popularity < 80) return 'Popular';
    if (popularity > 40 && popularity < 60) return 'Semi-popular';
    return 'Not very popular';
  }
};

export default TrackInfoModalDetailedInformation;
