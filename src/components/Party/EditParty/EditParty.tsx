import { CreatePartyFormValues } from '../CreateParty/CreatePartyForm';
import EditPartyForm from './EditPartyForm';

import css from '@emotion/css';
import { useParty_UpdateParty } from '@generated/graphql';
import { PARTY_FRAGMENT } from '@graphql/fragments';
import { PartyDashboardParty } from '@pages/party-dashboard';
import { Button, Modal } from 'antd';
import gql from 'graphql-tag';
import React from 'react';

const ModalStyles = css`
  .ant-modal-body {
    max-height: calc(100vh - 48px - 55px);
    overflow-y: scroll;
  }
  .ant-modal-content {
    max-height: calc(100vh - 48px);
  }
`;

export const UPDATE_PARTY_MUTATION = gql`
  mutation Party_UpdateParty(
    $data: PartyUpdateInput!
    $where: PartyWhereUniqueInput!
  ) {
    updateParty(data: $data, where: $where) {
      location {
        placeName
        latitude
        longitude
      }
      ...PARTY_FRAGMENT
    }
    ${PARTY_FRAGMENT}
  }
`;

export type EditPartyMachineContext = {
  formValues: CreatePartyFormValues;
  startingPlaceName: string;
};

interface Props {
  party: PartyDashboardParty;
}
export default function EditParty({ party }: Props) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const toggleModalVisibility = () => setModalVisible(prev => !prev);

  const [updateParty, { loading, error }] = useParty_UpdateParty({
    onCompleted: toggleModalVisibility
  });

  function isLocationDifferent(submittingLocationName: string) {
    return submittingLocationName != party.location.placeName;
  }

  async function handleOnSubmit({
    date,
    location,
    title,
    description,
    isPublic,
    colorTint
  }: CreatePartyFormValues) {
    try {
      const baseData = {
        start: date[0],
        end: date[1],
        title,
        description,
        isPublic,
        colorTint
      };

      const data = isLocationDifferent(location.placeName)
        ? {
            ...baseData,
            location: {
              create: {
                placeName: location.placeName,
                ...location.coords
              }
            }
          }
        : baseData;

      await updateParty({
        variables: { where: { id: party.id }, data },
        update: (proxy, { data }) => {
          if (!data || data.updateParty == undefined) return;

          // weird stuff going on with codegen ,leaving this as it is
          const fragment = gql`
            fragment LOL_FRAGMENT on Party {
              location {
                placeName
                latitude
                longitude
              }
              id
              title
              description
              location {
                placeName
              }
              author {
                firstName
                lastName
                id
              }
              members {
                avatar
                firstName
                lastName
                id
              }
              colorTint
              start
              end
              isPublic
              inviteSecret
              cart {
                id
              }
            }
          `;

          const partyInCache = proxy.readFragment({
            fragment,
            id: `Party:${party.id}`
          });

          proxy.writeFragment({
            fragment,
            id: `Party:${party.id}`,
            data: {
              ...partyInCache,
              ...data.updateParty
            }
          });
        }
      });
    } catch (e) {
      // handled in form
    }
  }

  return (
    <React.Fragment>
      <Button type="dashed" onClick={toggleModalVisibility}>
        Edit
      </Button>
      <Modal
        footer={null}
        centered={true}
        css={[ModalStyles]}
        visible={modalVisible}
        closable={!loading}
        onCancel={toggleModalVisibility}
        title="Edit party"
        maskClosable={true}
      >
        <EditPartyForm
          loading={loading}
          error={Boolean(error)}
          onSubmit={handleOnSubmit}
          party={party}
          onCancel={toggleModalVisibility}
        />
      </Modal>
    </React.Fragment>
  );
}
