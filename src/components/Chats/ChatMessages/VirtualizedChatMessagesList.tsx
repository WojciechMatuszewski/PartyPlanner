import React from 'react';
import {
  CellMeasurerCache,
  AutoSizer,
  List,
  CellMeasurer
} from 'react-virtualized';
import { PaginateMessagesQueryEdges } from '@generated/graphql';
import ChatMessage from './ChatMessage';
import styled from '@emotion/styled';
import { anyPass, curry } from 'ramda';

interface Props {
  messages: PaginateMessagesQueryEdges[];
}
// type Message = PaginateMessagesQueryEdges;

const MessagesWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
  overflow-y: auto;
  .message-wrapper:last-of-type {
    /* background: red; */
  }
`;

const VirtualizedChatMessagesList: React.FC<Props> = ({ messages }) => {
  const cellCache = new CellMeasurerCache({
    fixedWidth: true,
    fixedHeight: false
  });

  return (
    <MessagesWrapper>
      <AutoSizer>
        {({ width, height }) => {
          return (
            <List
              overscanRowCount={3}
              width={width}
              rowCount={messages.length}
              height={height}
              deferredMeasurementCache={cellCache}
              rowHeight={cellCache.rowHeight}
              data={messages}
              rowRenderer={({ index, key, style, parent }) => {
                return (
                  <CellMeasurer
                    width={width}
                    cache={cellCache}
                    key={key}
                    parent={parent}
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
};

export default VirtualizedChatMessagesList;
