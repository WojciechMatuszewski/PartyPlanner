import PartyCartTabs from '@components/Party/PartyCart/PartyCartTabs';
import PartyCartTop from '@components/Party/PartyCart/PartyCartTop';
import PartyMenu from '@components/Party/PartyNavigation/PartyMenu';
import { PartyPage } from '@components/Party/shared';
import {
  PartyContentInnerWrapper,
  PartyContentWrapper
} from '@components/Party/styles';
import PageException from '@components/UI/PageException';
import styled from '@emotion/styled-base';
import React from 'react';
import gql from 'graphql-tag';
import {
  PartiesQueryQuery,
  PartiesQueryQueryVariables
} from '@generated/graphql';
import { WithApolloAuthInjectedProps } from '@apolloSetup/withApolloAuth';
import ApolloAuthenticator from '@apolloSetup/apolloAuthenticator';
import { PARTIES_QUERY } from '@graphql/queries';
import { NextContextWithApollo } from './_app';
import { Result, Button } from 'antd';
import css from '@emotion/css';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { PartyProvider } from '@components/Party/PartyProvider';

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

export const PARTY_CART_ITEMS_CONNECTION_QUERY = gql`
  query Party_CartItemsConnection(
    $where: PartyCartItemWhereInput
    $orderBy: PartyCartItemOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    partyCartItemsConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
        }
      }
    }
  }
`;

const ErrorSectionStyles = css`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  .ant-result-image {
    margin-top: 0;
  }
`;

interface InjectedProps {
  partyData: {
    party: PartiesQueryQuery['parties'][0] | null;
    responseType: 'error' | 'success' | 'missingOrUnauthorized';
  };
  userData: WithApolloAuthInjectedProps['me'] | null;
}

const PartyCartPage: PartyPage<InjectedProps> = ({ userData, partyData }) => {
  const { responseType } = partyData;

  if (responseType == 'missingOrUnauthorized')
    return (
      <PageException
        desc="Party either does not exist or you are not invited"
        backText="Back to dashboard"
        redirectPath="/user/dashboard"
      />
    );

  if (responseType == 'error')
    return (
      <Result
        css={[ErrorSectionStyles]}
        status="500"
        title="500"
        subTitle="Sorry, something went wrong"
        extra={
          <Button type="primary" onClick={() => location.reload()}>
            Reload the page
          </Button>
        }
      />
    );

  const user = userData as NonNullable<typeof userData>;
  const party = partyData['party'] as NonNullable<
    DeepWithoutMaybe<PartiesQueryQuery['parties'][0]>
  >;

  return (
    <React.Fragment>
      <PartyMenu partyId={party.id} routerPath={`party-cart`} />
      <PartyContentWrapper>
        <PartyProvider userId={user.id} partyId={party.id}>
          <PartyPageContentInnerWrapper style={{ background: 'white' }}>
            <PartyCartTop />
            <PartyCartTabs cartId={party.cart.id} />
          </PartyPageContentInnerWrapper>
        </PartyProvider>
      </PartyContentWrapper>
    </React.Fragment>
  );
};

async function getParty(
  partyId: string,
  userId: string,
  context: NextContextWithApollo
): Promise<InjectedProps['partyData']> {
  const {
    data: { parties }
  } = await context.apolloClient.query<
    PartiesQueryQuery,
    PartiesQueryQueryVariables
  >({
    query: PARTIES_QUERY,
    variables: {
      where: {
        id: partyId,
        members_some: {
          id: userId
        }
      }
    }
  });

  const [party] = parties;

  return {
    party,
    responseType: party ? 'success' : 'missingOrUnauthorized'
  };
}

PartyCartPage.getInitialProps = async (context): Promise<InjectedProps> => {
  const userData = await ApolloAuthenticator.authenticateRoute({
    userHasToBe: 'authenticated',
    ctx: context
  });

  if (!userData)
    return {
      partyData: { party: null, responseType: 'missingOrUnauthorized' },
      userData: null
    };

  const {
    query: { id: partyId }
  } = context;

  if (!partyId) {
    return {
      partyData: { party: null, responseType: 'missingOrUnauthorized' },
      userData: null
    };
  }

  try {
    const partyData = await getParty(partyId, userData.me.id, context);
    return {
      partyData,
      userData: userData.me
    };
  } catch (e) {
    return {
      partyData: { party: null, responseType: 'error' },
      userData: null
    };
  }
};

export default PartyCartPage;
