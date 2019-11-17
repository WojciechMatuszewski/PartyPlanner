import React from 'react';
import { Button, message } from 'antd';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';
import PartyDashboardInviteFriends from './PartyDashboardInviteFriends/PartyDashboardInviteFriends';
import * as copy from 'copy-to-clipboard';
import { InvitationLinkProps } from '@pages/party-join';
import { throttle } from 'lodash';
import { PartyDashboardParty } from '@pages/party-dashboard';
import EditParty from '../EditParty/EditParty';

const JOIN_PARTY_PAGE = 'party/join';

const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-around;
`;
interface Props {
  party: PartyDashboardParty;
  canEditParty: boolean;
}

const PartyDashboardTopMenu: React.FC<Props> = ({ party, canEditParty }) => {
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
        {canEditParty && <EditParty party={party} />}
      </InnerWrapper>
    </Wrapper>
  );

  function createInvitationLink({ token }: InvitationLinkProps): string {
    return `${process.env.NEXT_STATIC_FRONTEND_URL}/${JOIN_PARTY_PAGE}/${token}`;
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
