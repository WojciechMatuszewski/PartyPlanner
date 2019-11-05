import css from '@emotion/css';
import FormikInputField from '@shared/formikInputField';
import { Button, Checkbox, Form } from 'antd';
import { Field, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

export interface CreatePlaylistFormValues {
  playlistName: string | undefined;
  isPrivate: boolean;
}

const validationSchema = yup.object().shape<CreatePlaylistFormValues>({
  playlistName: yup.string().required('Playlist name is required'),
  isPrivate: yup.boolean()
});

const initialFormValues: CreatePlaylistFormValues = {
  playlistName: undefined,
  isPrivate: false
};

const FormStyles = css`
  .ant-form-item {
    margin: 0;
  }
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
                Make it private
              </Checkbox>
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
