import css from '@emotion/css';
import { List, Button } from 'antd';
import React from 'react';
import {
  AutoSizer,
  List as VList,
  ListRowRenderer,
  WindowScroller
} from 'react-virtualized';

import VirtualizedListTrackItem from '../shared/VirtualizedListTrackItem';
import { MOBILE_LIST_BREAKPOINT } from '@components/Party/shared';

const ListStyles = css`
  .ant-spin-container.ant-spin-blur > div:first-of-type {
    display: none;
  }
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  h4 {
    margin-bottom: 0;
  }
  .ant-list-item-meta {
    align-items: center;
  }

  @media screen and (max-width: ${MOBILE_LIST_BREAKPOINT}) {
    margin-top: 12px;
    border-radius: 0;
  }
`;

const LoadMoreButtonStyles = css`
  display: block;
  margin: 0 auto;
  margin-top: 12px;
  @media screen and (max-width: 530px) {
    margin-right: auto;
    margin-left: 12px;
  }
`;
interface Props {
  loading: boolean;
  tracksLength: number;

  selectingSongs: boolean;
  trackRenderer: ListRowRenderer;
  onLoadMore: VoidFunction;
  canLoadMore: boolean;
  loadingMore: boolean;
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
          {props.canLoadMore && (
            <Button
              onClick={props.onLoadMore}
              loading={props.loadingMore}
              css={[LoadMoreButtonStyles]}
            >
              Load More Songs
            </Button>
          )}
        </React.Fragment>
      )}
    </WindowScroller>
  );
}
