import React from 'react';
import {
  List as VList,
  AutoSizer,
  WindowScroller,
  InfiniteLoader,
  IndexRange
} from 'react-virtualized';
import PartyDashboardParticipant from './PartyDashboardParticipant';
import { List, Skeleton } from 'antd';
import { PartyDashboardParticipantsQueryEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import css from '@emotion/css';

const ListStyles = css`
  .ant-spin-container.ant-spin-blur > div:first-of-type {
    display: none;
  }
`;

interface Props {
  rowCount: number;
  loading: boolean;
  participants: DeepWithoutMaybe<
    NonNullable<PartyDashboardParticipantsQueryEdges>
  >[];
  onLoadMore: (params: IndexRange) => Promise<void>;
}

export default function PartyDashboardParticipantsList(props: Props) {
  const rowsLoadedMap = React.useRef<Record<number, boolean>>({});

  React.useEffect(() => {
    rowsLoadedMap.current = Array.from(
      { length: props.rowCount },
      (_, k) => k
    ).reduce((currentMap: Record<number, boolean>, index) => {
      currentMap[index] = false;
      return currentMap;
    }, {});
  }, [props.rowCount]);

  React.useEffect(() => {
    for (let i = 0; i < props.participants.length; i++) {
      rowsLoadedMap.current[i] = true;
    }
  }, [props.participants]);

  return (
    <List renderItem={undefined} loading={props.loading} css={[ListStyles]}>
      <WindowScroller serverHeight={400} participants={props.participants}>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <InfiniteLoader
            minimumBatchSize={20}
            loadMoreRows={props.onLoadMore}
            rowCount={props.rowCount}
            isRowLoaded={({ index }) => {
              return rowsLoadedMap.current[index];
            }}
          >
            {({ registerChild, onRowsRendered }) => (
              <AutoSizer disableHeight={true}>
                {({ width }) => (
                  <VList
                    overscanColumnCount={10}
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    autoHeight={true}
                    height={height}
                    width={width}
                    rowHeight={73}
                    rowRenderer={({ index, style }) => {
                      if (isRowLoading(index))
                        return (
                          <List.Item
                            key={index}
                            style={{ ...style, padding: '0px 24px' }}
                          >
                            <Skeleton title={false} avatar={true} />
                          </List.Item>
                        );
                      return (
                        <PartyDashboardParticipant
                          key={index}
                          style={style}
                          participant={props.participants[index]}
                        />
                      );
                    }}
                    rowCount={props.rowCount}
                  />
                )}
              </AutoSizer>
            )}
          </InfiniteLoader>
        )}
      </WindowScroller>
    </List>
  );

  function isRowLoading(index: number) {
    return !props.participants[index] || !rowsLoadedMap.current[index];
  }
}
