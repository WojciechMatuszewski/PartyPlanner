import React from 'react';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { Form, Checkbox, Button } from 'antd';
import FormikInputField from '@shared/FormikInputField';
import RestrictPlaylistInfo from '../../shared/RestrictPlaylistInfo';
import { DeepWithoutMaybe } from '@shared/graphqlUtils';
import { Party_PlaylistsConnectionEdges } from '@generated/graphql';
import styled from '@emotion/styled';

const RestrictImportingWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

interface FormValues {
  playlistName: string;
  notImportable: boolean;
}

const validationSchema = yup.object().shape<FormValues>({
  playlistName: yup.string().required('Playlist name is required'),
  notImportable: yup.boolean()
});

interface Props {
  playlist: DeepWithoutMaybe<Party_PlaylistsConnectionEdges>;
  onSubmit: (newValues: FormValues) => void;
  loading: boolean;
  disabled: boolean;
}
export default function PlaylistEditForm({
  playlist: { node },
  onSubmit,
  loading,
  disabled
}: Props) {
  return (
    <Formik
      key={`${node.importable}`}
      onSubmit={onSubmit}
      initialValues={{
        playlistName: node.name,
        notImportable: !node.importable
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, dirty, values }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            component={FormikInputField}
            formItemProps={{
              label: 'Playlist name',
              htmlFor: 'playlistName',
              style: { marginBottom: 0 }
            }}
            id="playlistName"
            name="playlistName"
            placeholder="Playlist name"
          />
          <Form.Item style={{ marginBottom: 0 }}>
            <RestrictImportingWrapper>
              <Checkbox
                name="notImportable"
                checked={values.notImportable}
                defaultChecked={values.notImportable}
                onChange={handleChange('notImportable')}
              >
                Restrict to this party
              </Checkbox>
              <RestrictPlaylistInfo />
            </RestrictImportingWrapper>
          </Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            disabled={!dirty || disabled}
          >
            Save Changes
          </Button>
        </Form>
      )}
    </Formik>
  );
}
