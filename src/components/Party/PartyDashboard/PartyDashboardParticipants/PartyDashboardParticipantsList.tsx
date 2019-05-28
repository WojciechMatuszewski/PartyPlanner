import React from 'react';
import { List as VList, AutoSizer } from 'react-virtualized';
import PartyDashboardParticipant from './PartyDashboardParticipant';
import { List } from 'antd';
import { PartyDashboardParticipantsQueryEdges } from '@generated/graphql';

interface Props {
  rowCount: number;
  loading: boolean;
  participants: NonNullable<PartyDashboardParticipantsQueryEdges[]>;
}

export default function PartyDashboardParticipantsList(props: Props) {
  console.log(props.rowCount);
  return (
    <List renderItem={null} loading={props.loading}>
      <AutoSizer disableHeight={true}>
        {({ width }) => (
          <VList
            width={width}
            height={400}
            rowHeight={73}
            rowRenderer={PartyDashboardParticipant}
            rowCount={props.rowCount}
          />
        )}
      </AutoSizer>
    </List>
  );
}
