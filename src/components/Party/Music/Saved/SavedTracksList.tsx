import css from '@emotion/css';
import { List } from 'antd';
import React from 'react';
import {
  AutoSizer,
  List as VList,
  ListRowRenderer,
  WindowScroller
} from 'react-virtualized';

import VirtualizedListTrackItem from '../VirtualizedListTrackItem';

const ListStyles = css`
  .ant-spin-container.ant-spin-blur > div:first-of-type {
    display: none;
  }
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-top: 12px;
  h4 {
    margin-bottom: 0;
  }
  .ant-list-item-meta {
    align-items: center;
  }
`;

interface Props {
  loading: boolean;
  tracksLength: number;
  className: string;
  selectingSongs: boolean;
  trackRenderer: ListRowRenderer;
}

export default function SavedTracksList(props: Props) {
  return (
    <WindowScroller serverHeight={400}>
      {({ height, onChildScroll, isScrolling, scrollTop }) => (
        <React.Fragment>
          <List
            bordered={true}
            renderItem={undefined}
            loading={props.loading}
            className={props.className}
            css={[ListStyles]}
          >
            <AutoSizer disableHeight={true}>
              {({ width }) => (
                <VList
                  autoHeight={true}
                  isScrolling={isScrolling}
                  onScroll={onChildScroll}
                  height={height}
                  rowCount={props.tracksLength}
                  overscanRowCount={15}
                  rowHeight={VirtualizedListTrackItem.Height}
                  width={width}
                  scrollTop={scrollTop}
                  rowRenderer={props.trackRenderer}
                />
              )}
            </AutoSizer>
          </List>
          {/* {props.canLoadMore && (
            <Button
              size="default"
              onClick={props.onLoadMoreClick}
              loading={props.loadingMore}
              css={[LoadMoreButtonStyles]}
            >
              Load More Songs
            </Button> */}
        </React.Fragment>
      )}
    </WindowScroller>
  );
}
