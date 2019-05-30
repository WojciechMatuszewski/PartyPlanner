import React from 'react';
import {
  JoinPartySection,
  JoinPartyImageWrapper,
  JoinPartyInnerWrapper
} from './styles';
import { Typography, Button } from 'antd';
import { AvatarList } from 'ant-design-pro';
import { CallToActionButtonStyles } from '@shared/styles';
import { ApolloError } from 'apollo-boost';

import GraphqlError from '@components/GraphqlError';
import UserAvatar from '@components/UserDefaultAvatar';
import { DeepWithoutMaybe, NonNullable } from '@shared/graphqlUtils';
import { User, JoinPartyFindQuery } from '@generated/graphql';

interface Props {
  error: ApolloError | undefined;
  onGoBackClick: VoidFunction;
  loading: boolean;
  onJoinClick: () => Promise<void>;
  party: DeepWithoutMaybe<NonNullable<JoinPartyFindQuery['parties'][0]>>;
  membersCount: number;
}
const JoinPartyCanJoin: React.FC<Props> = props => {
  return (
    <JoinPartySection>
      <JoinPartyInnerWrapper>
        <JoinPartyImageWrapper>
          <img src="./static/fans.svg" />
        </JoinPartyImageWrapper>
        <div>
          <Typography.Title level={1} style={{ marginBottom: 0 }}>
            {props.party.title}
          </Typography.Title>
          <Typography.Paragraph
            type="secondary"
            style={{ marginTop: 0, fontSize: 20, marginBottom: 0 }}
          >
            Do you wish to join this party?
          </Typography.Paragraph>
          <div style={{ verticalAlign: 'center', marginTop: 12 }}>
            <Typography.Text
              ellipsis={true}
              type="secondary"
              strong={true}
              style={{ maxWidth: 130, marginBottom: -5 }}
            >
              {props.party.members[0].firstName}
            </Typography.Text>
            <Typography.Text type="secondary" style={{ marginRight: 6 }}>
              {getAmountOfNotShownPeople() > 0
                ? ` and ${getAmountOfNotShownPeople()} others are having fun`
                : ' is having fun, join him/her!'}
            </Typography.Text>
            <AvatarList
              size="default"
              maxLength={3}
              excessItemsStyle={{
                color: '#f56a00',
                backgroundColor: '#fde3cf'
              }}
            >
              {props.party.members
                .concat(getExcessMembers())
                .map(partyMemberToAvatarInAvatarList)}
            </AvatarList>
          </div>

          <div>
            <Button
              loading={props.loading}
              type="primary"
              css={[CallToActionButtonStyles]}
              style={{ fontSize: 18, marginRight: 24 }}
              onClick={props.onJoinClick}
            >
              Join now
            </Button>
            <Button
              disabled={props.loading}
              size="large"
              shape="round"
              onClick={props.onGoBackClick}
            >
              Go Back
            </Button>
          </div>
          <GraphqlError style={{ marginTop: 24 }} error={props.error} />
        </div>
      </JoinPartyInnerWrapper>
    </JoinPartySection>
  );

  function partyMemberToAvatarInAvatarList(
    member: Pick<User, 'firstName' | 'lastName' | 'avatar' | 'id'>
  ) {
    return (
      <li key={member.id} className="antd-pro-avatar-list-avatarItem ">
        <UserAvatar
          key={member.id}
          userData={member}
          style={{ width: '100%', height: '100%' }}
        />
      </li>
    );
  }

  function getExcessMembers(): any {
    return Array.from(
      {
        length: props.membersCount - props.party.members.length
      },
      (_, i) => ({ id: i })
    );
  }

  function getAmountOfNotShownPeople() {
    return props.membersCount - props.party.members.length;
  }
};

export default JoinPartyCanJoin;
