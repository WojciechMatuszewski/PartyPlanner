import RestrictPlaylistInfo from '../shared/RestrictPlaylistInfo';

import css from '@emotion/css';
import styled from '@emotion/styled';
import FormikInputField from '@shared/FormikInputField';
import { Colors } from '@shared/styles';
import { Button, Checkbox, Form } from 'antd';
import { Field, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

export interface CreatePlaylistFormValues {
  playlistName: string | undefined;
  isPrivate: boolean;
  notImportable: boolean;
}

const validationSchema = yup.object().shape<CreatePlaylistFormValues>({
  playlistName: yup.string().required('Playlist name is required'),
  isPrivate: yup.boolean(),
  notImportable: yup.boolean()
});

const initialFormValues: CreatePlaylistFormValues = {
  playlistName: undefined,
  isPrivate: false,
  notImportable: false
};

const FormStyles = css`
  .ant-form-item {
    margin: 0;
  }
`;

const RestrictImportingWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

interface Props {
  onSubmit: (values: CreatePlaylistFormValues) => void;
  loading: boolean;
  disabled: boolean;
}

export default function CreatePlaylistForm({
  onSubmit,
  loading,
  disabled
}: Props) {
  return (
    <React.Fragment>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, values, setFieldValue }) => (
          <Form onSubmit={handleSubmit} css={FormStyles}>
            <Field
              component={FormikInputField}
              type="text"
              placeholder="Playlist name"
              name="playlistName"
              id="playlistName"
              formItemProps={{
                label: 'Playlist name',
                htmlFor: 'playlistName',
                colon: false
              }}
            />
            <Form.Item>
              <Checkbox
                name="isPrivate"
                checked={values.isPrivate}
                onChange={e => setFieldValue('isPrivate', e.target.checked)}
              >
                Make it private on{' '}
                <span style={{ color: Colors.SpotifyGreen }}>Spotify</span>
              </Checkbox>
              <RestrictImportingWrapper>
                <Checkbox
                  name="notImportable"
                  checked={values.notImportable}
                  onChange={e =>
                    setFieldValue('notImportable', e.target.checked)
                  }
                >
                  Restrict to this party
                </Checkbox>
                <RestrictPlaylistInfo />
              </RestrictImportingWrapper>
            </Form.Item>
            <Form.Item>
              <Button
                disabled={disabled}
                style={{ marginBottom: 14 }}
                loading={loading}
                type="primary"
                htmlType="submit"
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}
