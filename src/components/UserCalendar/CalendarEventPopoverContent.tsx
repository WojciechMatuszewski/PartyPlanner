import React from 'react';
import { PartiesQueryParties, Party_FragmentMembers } from '@generated/graphql';

import styled from '@emotion/styled';
import { FlexBoxVerticallyCenteredStyles } from '@shared/styles';
import { Icon, Tooltip } from 'antd';
import { AvatarList } from 'ant-design-pro';
import UserAvatar from '@components/UserDefaultAvatar';
import { CalendarContext } from './UserCalendar';
import { getCorrectTextFromPartyDates } from '@shared/graphqlUtils';

const CalendarEventPopoverWrapper = styled.div<{ isInModal: boolean }>`
  width: ${props => (props.isInModal ? '100%' : '300px')};
  .title {
    margin: 0;
  }
  h2 {
    margin-bottom: 0;
  }
  .item-wrapper {
    ${FlexBoxVerticallyCenteredStyles};
    font-size: 16px;
    color: #747987;
    &:last-of-type {
      margin-top: 5px;
    }
    .item-icon {
      display: flex;
      align-items: center;
      align-self: flex-start;
      width: 25px;
      height: 30px;
    }
    span {
      flex: 1;
    }
    .antd-pro-avatar-list-avatarList {
      ul {
        padding: 0;
      }
    }
  }
`;

const CalendarEventPopoverToolbar = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: flex-end;
  margin-bottom: 10px;
  .anticon {
    padding: 10px;
    font-size: 14px;
    background: #eee;
    margin: 0 5px;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
      background: rgb(238, 238, 238, 0.4);
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

interface Props {
  isInModal: boolean;
  party: PartiesQueryParties;
  onPopoverClose?: VoidFunction;
}
const CalendarEventPopoverContent: React.FC<Props> = props => {
  const { userId } = React.useContext(CalendarContext);

  const PartyMemberAvatar = (
    partyMember: Party_FragmentMembers,
    index: number
  ) => (
    <li key={index} className="antd-pro-avatar-list-avatarItem">
      <Tooltip title={partyMember!.firstName}>
        <UserAvatar userData={partyMember} />
      </Tooltip>
    </li>
  );

  const dateString = React.useMemo(
    () => getCorrectTextFromPartyDates(props.party.start, props.party.end),
    []
  );

  return (
    <CalendarEventPopoverWrapper isInModal={props.isInModal}>
      <CalendarEventPopoverToolbar>
        {props.party.author.id === userId && (
          <React.Fragment>
            <Icon type="edit" />
            <Icon type="delete" />
          </React.Fragment>
        )}
        <Icon type="message" />
        {!props.isInModal && (
          <Icon type="close" onClick={props.onPopoverClose} />
        )}
      </CalendarEventPopoverToolbar>
      <h2>{props.party.title}</h2>
      <div className="item-wrapper">
        <Icon type="clock-circle" theme="filled" className="item-icon" />
        <span className="item-description">{dateString}</span>
      </div>
      <div className="item-wrapper">
        <Icon type="home" className="item-icon" />
        <span>{props.party.location.placeName}</span>
      </div>
      <div className="item-wrapper">
        <Icon type="user" className="item-icon" />
        <span>
          {props.party.author.firstName} {props.party.author.lastName}
        </span>
      </div>
      <div className="item-wrapper">
        <Icon type="usergroup-add" className="item-icon" />
        <span>{props.party!.members!.length} invitee's</span>
      </div>
      <div className="item-wrapper">
        <div className="item-icon" />
        <AvatarList
          size="default"
          maxLength={5}
          excessItemsStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
        >
          {props.party!.members!.map(PartyMemberAvatar)}
        </AvatarList>
      </div>
      <div className="item-wrapper">
        <div className="item-icon" />
        <a>More details</a>
      </div>
    </CalendarEventPopoverWrapper>
  );
};

export default CalendarEventPopoverContent;
