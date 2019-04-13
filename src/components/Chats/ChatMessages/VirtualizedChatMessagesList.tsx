import React from 'react';
import {
  CellMeasurerCache,
  AutoSizer,
  List,
  CellMeasurer,
  ScrollParams
} from 'react-virtualized';
import { PaginateMessagesQueryEdges } from '@generated/graphql';
import ChatMessage from './ChatMessage';
import styled from '@emotion/styled';
import { anyPass, curry } from 'ramda';

interface Props {
  messages: PaginateMessagesQueryEdges[];
  onScroll: (params: ScrollParams) => void;
  scrollTop: number | undefined;
  onRowsRendered: () => void;
}
// type Message = PaginateMessagesQueryEdges;

const MessagesWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
  overflow-y: auto;
  .ReactVirtualized__Grid__innerScrollContainer
    > div:last-of-type
    .message-wrapper {
    margin-bottom: 12px;
  }
`;

const VirtualizedChatMessagesList = React.forwardRef<List, Props>(
  ({ messages, ...props }: Props, ref) => {
    const cellCache = new CellMeasurerCache({
      fixedWidth: true,
      fixedHeight: false
    });

    console.log('update');

    return (
      <MessagesWrapper>
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                overscanRowCount={50}
                width={width}
                rowCount={messages.length}
                height={height}
                onRowsRendered={props => {
                  console.log(props);
                }}
                // initially scroll to bottom
                // scrollToIndex={messages.length}
                ref={ref}
                scrollTop={props.scrollTop}
                onScroll={props.onScroll}
                deferredMeasurementCache={cellCache}
                rowHeight={cellCache.rowHeight}
                data={messages}
                rowRenderer={({ index, key, style, parent }) => {
                  return (
                    <CellMeasurer
                      width={width}
                      cache={cellCache}
                      parent={parent}
                      key={key}
                      rowIndex={index}
                    >
                      <ChatMessage
                        key={messages[index].node.id}
                        style={style}
                        isFirstInBlock={isInBlock(
                          messages[index],
                          messages[index - 1]
                        )}
                        isLastInBlock={isInBlock(
                          messages[index],
                          messages[index + 1]
                        )}
                        message={messages[index].node}
                      />
                    </CellMeasurer>
                  );
                }}
              />
            );
          }}
        </AutoSizer>
      </MessagesWrapper>
    );

    function messageDoesNotExists(message: PaginateMessagesQueryEdges) {
      return message == null;
    }
    function areMessagesWrittenByDifferentPerson(
      currentMessage: PaginateMessagesQueryEdges,
      messageToCheckAgainst: PaginateMessagesQueryEdges
    ) {
      return (
        currentMessage.node.author.id !== messageToCheckAgainst.node.author.id
      );
    }

    function isInBlock(
      current: PaginateMessagesQueryEdges,
      next: PaginateMessagesQueryEdges
    ): boolean {
      return anyPass([
        // typescript ??
        // tsc shows errors
        // eslint does not
        // wtf
        messageDoesNotExists as any,
        curry(areMessagesWrittenByDifferentPerson)(current) as any
      ])(next);
    }
  }
);

export default React.memo(
  VirtualizedChatMessagesList,
  (prevProps, nextProps) => {
    return (
      prevProps.scrollTop === nextProps.scrollTop &&
      prevProps.messages.length === nextProps.messages.length &&
      prevProps.onScroll === nextProps.onScroll
    );
  }
);
