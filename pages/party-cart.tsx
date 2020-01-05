import PartyCartDivider from '@components/Party/PartyCart/PartyCartDivider';
import PartyCartItems from '@components/Party/PartyCart/PartyCartItems';
import PartyCartTop from '@components/Party/PartyCart/PartyCartTop';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { PartyProvider } from '@components/Party/PartyProvider';
import {
  PartyContentInnerWrapper,
  PartyContentWrapper
} from '@components/Party/styles';
import withHandledPartyPageLoad, {
  WithHandledPartyPageLoadInjectedProps
} from '@components/Party/withHandledPartyPageLoad';
import styled from '@emotion/styled-base';
import React from 'react';

const PartyPageContentInnerWrapper = styled(PartyContentInnerWrapper)`
  margin: 24px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background: white;
  padding: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media screen and (max-width: 1500px) {
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 0;
    width: 100%;
    max-width: 100%;
  }
`;

const PartyCartPage = ({
  user,
  party
}: WithHandledPartyPageLoadInjectedProps) => {
  return (
    <React.Fragment>
      <PartyMenu partyId={party.id} routerPath={`party-cart`} />
      <PartyContentWrapper>
        <PartyProvider userId={user.id} partyId={party.id}>
          <PartyPageContentInnerWrapper style={{ background: 'white' }}>
            <PartyCartTop cartId={party.cart.id} partyTitle={party.title} />
            <PartyCartDivider cartId={party.cart.id} />
            <PartyCartItems
              cartId={party.cart.id}
              authenticatedUserId={user.id}
              partyOwnerId={party.author.id}
            />
          </PartyPageContentInnerWrapper>
        </PartyProvider>
      </PartyContentWrapper>
    </React.Fragment>
  );
};

export default withHandledPartyPageLoad(PartyCartPage);
