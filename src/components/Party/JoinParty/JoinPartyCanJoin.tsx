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
import { PartiesQueryParties, PartyFragmentMembers } from '@generated/graphql';
import GraphqlError from '@components/GraphqlError';
import UserAvatar from '@components/UserDefaultAvatar';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';

interface Props {
  error: ApolloError | undefined;
  onGoBackClick: VoidFunction;
  loading: boolean;
  onJoinClick: () => Promise<void>;
  party: DeepWithoutMaybe<PartiesQueryParties>;
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
          <AvatarList
            size="default"
            maxLength={5}
            excessItemsStyle={{
              color: '#f56a00',
              backgroundColor: '#fde3cf'
            }}
          >
            {props.party.members.map(partyMemberToAvatarInAvatarList)}
          </AvatarList>

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

  function partyMemberToAvatarInAvatarList(member: PartyFragmentMembers) {
    return (
      <li key={member.id} className="antd-pro-avatar-list-avatarItem">
        <UserAvatar key={member.id} userData={member} />
      </li>
    );
  }
};

export default JoinPartyCanJoin;
