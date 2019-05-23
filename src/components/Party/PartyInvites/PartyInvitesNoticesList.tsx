import React from 'react';
import { PartyInvitationsConnectionQueryEdges } from '@generated/graphql';
import { NoticeIcon } from 'ant-design-pro';
import PartyInvitesNoticeInvitation from './PartyInvitesNoticeInvitation';

interface Props {
  loading: boolean;
  partyInvites: PartyInvitationsConnectionQueryEdges[];
  subscribeForMore: () => void;
  onFetchMore: () => void;
  hasMoreResults: boolean;
  notificationCount: number;
  onItemClick: (item: { edge: PartyInvitationsConnectionQueryEdges }) => void;
}
const PartyInvitesNoticesList: React.FC<Props> = props => {
  React.useEffect(() => {
    props.subscribeForMore();
  }, []);

  return (
    <React.Fragment>
      <NoticeIcon
        // popupVisible={true}
        onLoadMore={props.onFetchMore}
        count={props.notificationCount}
        onItemClick={props.onItemClick as any}
      >
        <NoticeIcon.Tab
          loading={props.loading}
          title="Party Invitations"
          skeletonProps={{}}
          showClear={false}
          loadedAll={!props.hasMoreResults}
          list={props.partyInvites.map(PartyInvitesNoticeInvitation)}
        />
      </NoticeIcon>
    </React.Fragment>
  );
};

export default PartyInvitesNoticesList;
