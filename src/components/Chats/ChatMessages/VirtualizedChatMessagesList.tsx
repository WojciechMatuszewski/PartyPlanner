import React from 'react';
import {
  CellMeasurerCache,
  AutoSizer,
  List,
  CellMeasurer,
  ScrollParams,
  ListRowProps,
  ListProps
} from 'react-virtualized';
import { PaginateMessagesQueryEdges } from '@generated/graphql';
import ChatMessage from './ChatMessage';
import styled from '@emotion/styled';
import { anyPass, curry } from 'ramda';
import FetchMoreLoader from '@components/Chats/ChatMessages/FetchMoreLoader';
import moment from 'moment';
import ChatMessageDivider from './ChatMessageDivider';

interface Props {
  messages: PaginateMessagesQueryEdges[];
  onScroll: (params: ScrollParams) => void;
  scrollToIndex: number;
  onRowsRendered: ListProps['onRowsRendered'];
  loadingMore: boolean;
  cache: CellMeasurerCache;
  forwardedListRef: React.RefObject<List>;
  onMessagesLengthChanged: (prevLength: number, currentLength: number) => void;
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

class VirtualizedChatMessagesList extends React.Component<Props> {
  public render() {
    return (
      <MessagesWrapper>
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                onScroll={this.props.onScroll}
                estimatedRowSize={100}
                overscanRowCount={30}
                width={width}
                scrollToIndex={this.props.scrollToIndex}
                onSectionRendered={props => console.log(props)}
                // loader for infinite scoller
                rowCount={this.props.messages.length + 1}
                height={height}
                ref={this.props.forwardedListRef}
                deferredMeasurementCache={this.props.cache}
                rowHeight={this.props.cache.rowHeight}
                rowRenderer={this.rowRenderer}
                onRowsRendered={this.props.onRowsRendered}
              />
            );
          }}
        </AutoSizer>
      </MessagesWrapper>
    );
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.messages.length !== this.props.messages.length)
      this.props.onMessagesLengthChanged(
        prevProps.messages.length,
        this.props.messages.length
      );
  }

  private getDividerDate(
    current: PaginateMessagesQueryEdges,
    prev: PaginateMessagesQueryEdges
  ) {
    if (!prev) return null;

    const parsedCurrent = moment(current.node.createdAt);
    const parsedPrev = moment(prev.node.createdAt);

    if (parsedCurrent.diff(parsedPrev, 'minutes') < 30) return null;

    const diffInHours = parsedCurrent.diff(moment(new Date()), 'hours');

    if (diffInHours < 24) {
      return parsedCurrent.format('hh:mm A');
    }
    return parsedCurrent.format('MMM Do YY');
  }

  private messageDoesNotExists(message: PaginateMessagesQueryEdges) {
    return message == null;
  }
  private areMessagesWrittenByDifferentPerson(
    currentMessage: PaginateMessagesQueryEdges,
    messageToCheckAgainst: PaginateMessagesQueryEdges
  ) {
    return (
      currentMessage.node.author.id !== messageToCheckAgainst.node.author.id
    );
  }

  private isInBlock(
    current: PaginateMessagesQueryEdges,
    next: PaginateMessagesQueryEdges
  ): boolean {
    return anyPass([
      this.messageDoesNotExists as any,
      curry(this.areMessagesWrittenByDifferentPerson)(current) as any
    ])(next);
  }

  private rowRenderer = ({ index, key, style, parent }: ListRowProps) => {
    if (index === 0) {
      return (
        <CellMeasurer
          cache={this.props.cache}
          parent={parent}
          key={key}
          columnIndex={0}
          rowIndex={index}
        >
          <FetchMoreLoader
            onLoadingChange={this.handleLoaderStatusChange}
            style={style}
            loading={this.props.loadingMore}
          />
        </CellMeasurer>
      );
    }

    const dividerDate = this.getDividerDate(
      this.props.messages[index - 1],
      this.props.messages[index - 2]
    );

    return (
      <CellMeasurer
        cache={this.props.cache}
        parent={parent}
        key={key}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style}>
          {dividerDate && <ChatMessageDivider dividerText={dividerDate} />}
          <ChatMessage
            index={index}
            isFirstInBlock={
              dividerDate
                ? true
                : this.isInBlock(
                    this.props.messages[index - 1],
                    this.props.messages[index - 2]
                  )
            }
            isLastInBlock={this.isInBlock(
              this.props.messages[index - 1],
              this.props.messages[index]
            )}
            message={this.props.messages[index - 1].node}
          />
        </div>
      </CellMeasurer>
    );
  };

  private handleLoaderStatusChange = () => {
    this.props.cache.clear(0, 0);
  };
}

export default VirtualizedChatMessagesList;
