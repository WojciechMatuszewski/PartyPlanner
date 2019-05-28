import React from 'react';
import {
  List as VList,
  AutoSizer,
  WindowScroller,
  InfiniteLoader
} from 'react-virtualized';
import PartyDashboardParticipant from './PartyDashboardParticipant';
import { List, Skeleton } from 'antd';
import { PartyDashboardParticipantsQueryEdges } from '@generated/graphql';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';

interface Props {
  rowCount: number;
  loading: boolean;
  participants: DeepWithoutMaybe<
    NonNullable<PartyDashboardParticipantsQueryEdges>
  >[];
  onLoadMore: () => Promise<void>;
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
    <List renderItem={null} loading={props.loading}>
      <WindowScroller serverHeight={400} participants={props.participants}>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <InfiniteLoader
            loadMoreRows={props.onLoadMore}
            rowCount={props.rowCount}
            isRowLoaded={({ index }) => {
              return !!rowsLoadedMap.current[index];
            }}
          >
            {({ registerChild, onRowsRendered }) => (
              <AutoSizer disableHeight={true}>
                {({ width }) => (
                  <VList
                    overscanRowCount={2}
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    autoHeight={true}
                    width={width}
                    height={height}
                    rowHeight={73}
                    rowRenderer={({ index, style }) => {
                      if (
                        !props.participants[index] ||
                        !rowsLoadedMap.current[index]
                      )
                        return null;
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
}
