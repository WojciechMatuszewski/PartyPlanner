import redirect from '@apolloSetup/redirect';
import styled from '@emotion/styled';
import {
  CreatePartyComponent,
  CreatePartyMutation,
  CreatePartyMutationFn,
  CreatePartyMutationVariables,
  PaginateChatsQueryDocument,
  PartiesQueryQuery,
  useCreatePartyInvitation
} from '@generated/graphql';
import {
  HAS_CHATS_QUERY,
  HAS_PARTIES_QUERY,
  PAGINATE_PARTIES_QUERY,
  PARTIES_QUERY
} from '@graphql/queries';
import { getPartiesDateVariables } from '@shared/graphqlUtils';
import { Modal } from 'antd';
import { MutationUpdaterFn } from 'apollo-client';
import { curry } from 'ramda';
import React from 'react';
import uuid from 'uuid/v4';

import { partiesListVariablesConstructorFactory } from '../PartiesList/PartiesList';
import CreatePartyForm, { CreatePartyFormValues } from './CreatePartyForm';

export const CREATE_PARTY_MOBILE_WIDTH = '992px';

const CreatePartyFormWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: white;
  min-height: calc(100vh - 66px);
  margin: 0 auto;
  @media screen and (max-width: ${CREATE_PARTY_MOBILE_WIDTH}) {
    padding: 12px;
  }
`;

const InnerWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (min-width: 992px) {
    margin-top: 30px;
  }
`;
interface Props {
  userId: string;
}
const CreateParty: React.FC<Props> = ({ userId }) => {
  const [createPartyInvitation] = useCreatePartyInvitation();

  function onCreatePartySuccess(partyId: string) {
    Modal.success({
      title: 'Party created!',
      content:
        'Party has been successfully created and your friends has been notified.',
      onOk: () =>
        redirect(
          {} as any,
          `/party-dashboard?id=${partyId}`,
          `/party/${partyId}`
        ),
      okText: 'Go to party dashboard'
    });
  }

  function onCreatePartyError() {
    Modal.error({
      title: 'Something went wrong',
      content: 'We were not able to create a party. Please try again',
      cancelText: 'Close'
    });
  }

  function getCreatePartyMutationVariables(
    formValues: CreatePartyFormValues
  ): CreatePartyMutationVariables {
    const { location, date, invitedFriends, ...restOfFormFields } = formValues;

    return {
      data: {
        ...restOfFormFields,
        members: {
          connect: [{ id: userId }]
        },
        location: {
          create: {
            placeName: location.placeName,
            ...location.coords
          }
        },
        author: {
          connect: {
            id: userId
          }
        },
        start: date[0],
        end: date[1],
        inviteSecret: uuid(),
        normalizedTitle: restOfFormFields.title
          .toLowerCase()
          .replace(/[ -.,]/g, '')
      }
    };
  }

  async function onCreatePartySubmit(
    mutate: CreatePartyMutationFn,
    formValues: CreatePartyFormValues
  ) {
    try {
      const createPartyResult = await mutate({
        update: createPartyMutationUpdater,
        variables: getCreatePartyMutationVariables(formValues),
        refetchQueries: [
          {
            query: PaginateChatsQueryDocument
          },
          {
            query: PAGINATE_PARTIES_QUERY,
            variables: partiesListVariablesConstructorFactory(userId)('')
          },
          {
            query: HAS_CHATS_QUERY
          },
          {
            query: HAS_PARTIES_QUERY
          }
        ]
      });

      if (!createPartyResult || !createPartyResult.data)
        throw Error('something went wrong');

      await Promise.all(
        createPartyInvites(
          createPartyResult.data.createParty.id,
          formValues.invitedFriends
        )
      );
      onCreatePartySuccess(createPartyResult.data.createParty.id);
    } catch (e) {
      onCreatePartyError();
    }
  }

  const createPartyMutationUpdater: MutationUpdaterFn<CreatePartyMutation> = (
    proxy,
    { data }
  ) => {
    const queryVariables = getPartiesDateVariables(new Date(), userId);

    if (data == null || data.createParty == undefined) return;

    try {
      const dataInCache = proxy.readQuery<PartiesQueryQuery>({
        query: PARTIES_QUERY,
        variables: queryVariables
      });

      if (dataInCache == undefined) return null;

      proxy.writeQuery({
        query: PARTIES_QUERY,
        variables: queryVariables,
        data: {
          parties: [...dataInCache.parties, data.createParty]
        }
      });
    } catch (e) {
      return null;
    }
  };

  return (
    <CreatePartyFormWrapper>
      <CreatePartyComponent>
        {(mutate, { loading }) => (
          <InnerWrapper>
            <CreatePartyForm
              onSubmit={curry(onCreatePartySubmit)(mutate)}
              loading={loading}
              userId={userId}
            />
          </InnerWrapper>
        )}
      </CreatePartyComponent>
    </CreatePartyFormWrapper>
  );

  function createPartyInvites(partyId: string, invitedPeople: string[]) {
    function createPartyInvitationPromise(userToInviteId: string) {
      return createPartyInvitation({
        variables: {
          data: {
            invitedBy: { connect: { id: userId } },
            party: { connect: { id: partyId } },
            user: { connect: { id: userToInviteId } },
            invitedUserId: userToInviteId,
            partyId
          }
        }
      });
    }
    return invitedPeople.map(createPartyInvitationPromise);
  }
};

export default CreateParty;
