import React from 'react';
import { Modal } from 'antd';
import styled from '@emotion/styled';
import {
  CreatePartyComponent,
  CreatePartyMutation,
  PartiesQueryQuery,
  CreatePartyVariables,
  PaginateChatsQueryDocument
} from '@generated/graphql';
import { MutationUpdaterFn } from 'apollo-boost';
import { PARTIES_QUERY, PAGINATE_PARTIES_QUERY } from '@graphql/queries';
import { getPartiesDateVariables } from '@shared/graphqlUtils';
import CreatePartyForm, { CreatePartyFormValues } from './CreatePartyForm';
import { MutationFn } from 'react-apollo';
import { curry } from 'ramda';
import redirect from '@apolloSetup/redirect';

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
  function onCreatePartySuccess() {
    Modal.success({
      title: 'Party created!',
      content:
        'Party has been successfully created and your friends has been notified.',
      onOk: () => redirect({} as any, '/calendar'),
      okText: 'Go back to calendar'
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
  ): CreatePartyVariables {
    const { invitedFriends, location, date, ...restOfFormFields } = formValues;

    return {
      data: {
        members: {
          connect: [...invitedFriends.map(id => ({ id })), { id: userId }]
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
        normalizedTitle: restOfFormFields.title.toLowerCase(),
        ...restOfFormFields
      }
    };
  }

  async function onCreatePartySubmit(
    mutate: MutationFn<CreatePartyMutation, CreatePartyVariables>,
    formValues: CreatePartyFormValues
  ) {
    try {
      await mutate({
        update: createPartyMutationUpdater,
        variables: getCreatePartyMutationVariables(formValues),
        refetchQueries: [
          {
            query: PaginateChatsQueryDocument,
            variables: {
              where: {
                members_some: { id: userId },
                OR: [
                  { party: { isPublic: true } },
                  { party: { isPublic: false } }
                ]
              }
            }
          },
          {
            query: PAGINATE_PARTIES_QUERY
          }
        ]
      });
      onCreatePartySuccess();
    } catch (e) {
      onCreatePartyError();
    }
  }

  const createPartyMutationUpdater: MutationUpdaterFn<CreatePartyMutation> = (
    proxy,
    { data: { createParty } }
  ) => {
    const queryVariables = getPartiesDateVariables(new Date(), userId);

    try {
      const data = proxy.readQuery<PartiesQueryQuery>({
        query: PARTIES_QUERY,
        variables: queryVariables
      });

      if (!data) return null;

      proxy.writeQuery({
        query: PARTIES_QUERY,
        variables: queryVariables,
        data: {
          parties: [...data.parties, createParty]
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
};

export default CreateParty;
