import React from 'react';
import { Button, message } from 'antd';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';
import PartyDashboardInviteFriends from './PartyDashboardInviteFriends/PartyDashboardInviteFriends';
import * as copy from 'copy-to-clipboard';
import { InvitationLinkProps } from '@pages/party-join';
import { throttle } from 'lodash';

import EditParty from './PartyDashboardEditParty/PartyDashboardEditParty';
import PartyDashboardDeleteParty from './PartyDashboardDeleteParty';
import PartyDashboardLeaveParty from './PartyDashboardLeaveParty';
import { InjectedPartyFromAuth } from '@auth/party-auth';

const JOIN_PARTY_PAGE = 'party/join';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-around;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    .ant-btn-group {
      margin-bottom: 12px;
      display: flex;
      button {
        width: 100%;
      }
    }
    .ant-btn-group:last-of-type {
      margin-bottom: 0;
      flex-direction: row-reverse;
      button:first-of-type {
        border-radius: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      button:last-of-type {
        border-radius: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
    }
  }
`;
interface Props {
  party: InjectedPartyFromAuth;
  canEditParty: boolean;
  canLeaveParty: boolean;
  canDeleteParty: boolean;
  userId: string;
}

const PartyDashboardTopMenu: React.FC<Props> = ({
  party,
  canEditParty,
  canLeaveParty,
  canDeleteParty,
  userId
}) => {
  const isOnMobile = useMedia('(max-width:680px)');

  const throttledOnCopyClickRef = React.useRef(
    throttle(handleCopyInvitationLinkClick, 1000)
  );

  return (
    <Wrapper>
      <InnerWrapper className="dashboard-content-item ">
        <Button.Group>
          <PartyDashboardInviteFriends isOnMobile={isOnMobile} />
          <Button icon="paper-clip" onClick={throttledOnCopyClickRef.current}>
            {!isOnMobile ? 'Copy invitation link' : 'Invitation link'}
          </Button>
        </Button.Group>
        <Button.Group>
          {canEditParty && <EditParty party={party} />}
          {canLeaveParty && (
            <PartyDashboardLeaveParty
              partyId={party.id}
              userId={userId}
              partyTitle={party.title}
            />
          )}
          {canDeleteParty && (
            <PartyDashboardDeleteParty
              partyId={party.id}
              partyTitle={party.title}
            />
          )}
        </Button.Group>
      </InnerWrapper>
    </Wrapper>
  );

  function createInvitationLink({ token }: InvitationLinkProps): string {
    return `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${JOIN_PARTY_PAGE}/${token}`;
  }

  function handleCopyInvitationLinkClick() {
    copy(
      createInvitationLink({
        token: party.inviteSecret
      })
    );
    message.info('Link copied');
  }
};

export default PartyDashboardTopMenu;
