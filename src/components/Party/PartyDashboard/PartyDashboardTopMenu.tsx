import React from 'react';
import { Button, message } from 'antd';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';
import PartyDashboardInviteFriends from './PartyDashboardInviteFriends/PartyDashboardInviteFriends';
import * as copy from 'copy-to-clipboard';
import { InvitationLinkProps } from '@pages/join-party';
import { throttle } from 'lodash';

const JOIN_PARTY_PAGE = 'join-party';

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
  partyId: string;
  inviteSecret: string;
}

const PartyDashboardTopMenu: React.FC<Props> = props => {
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
        <Button type="dashed" style={{ marginLeft: 'auto' }}>
          Edit
        </Button>
      </InnerWrapper>
    </Wrapper>
  );

  function createInvitationLink({ token }: InvitationLinkProps): string {
    return `${
      process.env.NEXT_STATIC_FRONTEND_URL
    }/${JOIN_PARTY_PAGE}?token=${token}`;
  }

  function handleCopyInvitationLinkClick() {
    copy(
      createInvitationLink({
        token: props.inviteSecret
      })
    );
    message.info('Link copied');
  }
};

export default PartyDashboardTopMenu;
