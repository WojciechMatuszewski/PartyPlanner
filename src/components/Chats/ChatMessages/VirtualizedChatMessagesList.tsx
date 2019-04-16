import React from 'react';
import {
  CellMeasurerCache,
  AutoSizer,
  List,
  CellMeasurer,
  ScrollParams,
  ListRowProps
} from 'react-virtualized';
import { PaginateMessagesQueryEdges } from '@generated/graphql';
import ChatMessage from './ChatMessage';
import styled from '@emotion/styled';
import { anyPass, curry } from 'ramda';
import { ChatsContext } from '@pages/chats';
import FetchMoreLoader from '@components/Chats/ChatMessages/FetchMoreLoader';

interface Props {
  messages: PaginateMessagesQueryEdges[];
  onScroll: (params: ScrollParams) => void;
  scrollTop: number | undefined;
  onRowsRendered: () => void;
  loadingMore: boolean;
  cache: CellMeasurerCache;
}

const MessagesWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
  overflow-y: auto;
  .ReactVirtualized__Grid__innerScrollContainer {
    padding-bottom: 12px;
    box-sizing: content-box;
  }
`;

const VirtualizedChatMessagesList = React.forwardRef<List, Props>(
  ({ messages, ...props }: Props, ref) => {
    const { currentlySelectedChatId } = React.useContext(ChatsContext);
    const hasCalledOnRowsRendered = React.useRef<boolean>(false);

    React.useEffect(() => {
      hasCalledOnRowsRendered.current = false;
    }, [currentlySelectedChatId]);

    return (
      <MessagesWrapper>
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                onScroll={props.onScroll}
                scrollTop={props.scrollTop}
                estimatedRowSize={100}
                overscanRowCount={30}
                width={width}
                // loader for infinite scoller
                rowCount={messages.length + 1}
                height={height}
                ref={ref}
                deferredMeasurementCache={props.cache}
                rowHeight={props.cache.rowHeight}
                rowRenderer={rowRenderer}
                onRowsRendered={props.onRowsRendered}
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
        messageDoesNotExists as any,
        curry(areMessagesWrittenByDifferentPerson)(current) as any
      ])(next);
    }

    function rowRenderer({ index, key, style, parent }: ListRowProps) {
      if (index === 0) {
        return (
          <CellMeasurer
            cache={props.cache}
            parent={parent}
            key={key}
            rowIndex={index}
          >
            <FetchMoreLoader style={style} loading={props.loadingMore} />
          </CellMeasurer>
        );
      }

      return (
        <CellMeasurer
          cache={props.cache}
          parent={parent}
          key={key}
          rowIndex={index}
        >
          <ChatMessage
            index={index}
            key={key}
            style={style}
            isFirstInBlock={isInBlock(messages[index - 1], messages[index - 2])}
            isLastInBlock={isInBlock(messages[index - 1], messages[index])}
            message={messages[index - 1].node}
          />
        </CellMeasurer>
      );
    }
  }
);

export default React.memo(VirtualizedChatMessagesList);
