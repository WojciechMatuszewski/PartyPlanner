import React from 'react';
import styled from '@emotion/styled';
import { Button, message } from 'antd';
import Link from 'next/link';
import gql from 'graphql-tag';
import {
  useParty_JoinPublicParty,
  Party_AuthenticateQuery,
  Party_AuthenticateQueryVariables
} from '@generated/graphql';
import {
  InjectedPartyFromAuth,
  PARTY_AUTHENTICATION_QUERY
} from '@auth/party-auth';
import { WithApolloAuthInjectedProps } from '@apolloSetup/withApolloAuth';

interface Props {
  party: InjectedPartyFromAuth;
  user: WithApolloAuthInjectedProps['me'];
  onPartyJoined: VoidFunction;
}

const OuterButtonsWrapper = styled.div`
  position: fixed;
  z-index: 40;
  background: #fafafa;
  bottom: 12px;
  padding: 24px;
  max-width: 1280px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;

  @media screen and (max-width: 1500px) {
    width: 100%;
    max-width: 100%;
  }
`;

const InnerButtonsWrapper = styled.div`
  max-width: 800px;
  display: flex;
  margin: 0 auto;
  button:first-of-type {
    margin-right: 24px;
  }
`;

export const JOIN_PUBLIC_PARTY_MUTATION = gql`
  mutation Party_JoinPublicParty(
    $data: UserUpdateInput!
    $where: UserWhereUniqueInput!
  ) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;

export default function JoinPublicParty({ user, party, onPartyJoined }: Props) {
  const [joinPublicParty, { loading }] = useParty_JoinPublicParty({
    variables: {
      where: { id: user.id },
      data: {
        parties: {
          connect: [{ id: party.id }]
        }
      }
    },
    onCompleted: onPartyJoined,
    onError: () => message.error('Something went wrong, try again!'),
    update: (proxy, { data }) => {
      if (!data || !data.updateUser) return;

      const dataInCache = proxy.readQuery<
        Party_AuthenticateQuery,
        Party_AuthenticateQueryVariables
      >({
        query: PARTY_AUTHENTICATION_QUERY,
        variables: { partyId: party.id }
      });

      if (!dataInCache || !dataInCache.authenticateParty) return;

      proxy.writeQuery<
        Party_AuthenticateQuery,
        Party_AuthenticateQueryVariables
      >({
        query: PARTY_AUTHENTICATION_QUERY,
        variables: { partyId: party.id },
        data: {
          ...dataInCache,
          authenticateParty: {
            ...dataInCache.authenticateParty,
            isMember: true,
            canJoin: false
          }
        }
      });
    }
  });

  return (
    <React.Fragment>
      <OuterButtonsWrapper>
        <InnerButtonsWrapper>
          <Link href="party-parties" as="/party/parties">
            <Button size="large" block={true} disabled={loading}>
              Back to parties
            </Button>
          </Link>
          <Button
            onClick={() => joinPublicParty()}
            block={true}
            size="large"
            type="primary"
            loading={loading}
          >
            Join now!
          </Button>
        </InnerButtonsWrapper>
      </OuterButtonsWrapper>
    </React.Fragment>
  );
}
