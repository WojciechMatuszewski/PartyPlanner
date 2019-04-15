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

interface Props {
  messages: PaginateMessagesQueryEdges[];
  onScroll: (params: ScrollParams) => void;
  scrollTop: number | undefined;
  onRowsRendered: () => void;
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
    const [cache, setCache] = React.useState<CellMeasurerCache>(
      new CellMeasurerCache({
        fixedWidth: true,
        fixedHeight: false
      })
    );

    React.useEffect(() => {
      setCache(
        new CellMeasurerCache({
          fixedWidth: true,
          fixedHeight: false
        })
      );
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
                rowCount={messages.length}
                height={height}
                ref={ref}
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                data={messages}
                rowRenderer={rowRenderer}
                onRowsRendered={handleOnRowsRendered}
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
      return (
        <CellMeasurer cache={cache} parent={parent} key={key} rowIndex={index}>
          <ChatMessage
            index={index}
            key={key}
            style={style}
            isFirstInBlock={isInBlock(messages[index], messages[index - 1])}
            isLastInBlock={isInBlock(messages[index], messages[index + 1])}
            message={messages[index].node}
          />
        </CellMeasurer>
      );
    }

    function handleOnRowsRendered() {
      if (!hasCalledOnRowsRendered.current) {
        props.onRowsRendered();
        hasCalledOnRowsRendered.current = true;
      }
    }
  }
);

export default React.memo(VirtualizedChatMessagesList);
