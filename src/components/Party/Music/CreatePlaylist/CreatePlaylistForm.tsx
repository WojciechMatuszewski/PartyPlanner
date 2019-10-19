import css from '@emotion/css';
import FormikInputField from '@shared/formikInputField';
import { Button, Checkbox, Form } from 'antd';
import { Field, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

interface CreatePlaylistFormValues {
  playlistName: string | undefined;
  private?: boolean;
}

const validationSchema = yup.object().shape<CreatePlaylistFormValues>({
  playlistName: yup.string().required('Playlist name is required')
});

const initialFormValues: CreatePlaylistFormValues = {
  playlistName: undefined,
  private: false
};

interface Props {
  onSubmit: VoidFunction;
  loading: boolean;
}

export default function CreatePlaylistForm({ onSubmit, loading }: Props) {
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, values, setFieldValue }) => (
        <Form
          onSubmit={handleSubmit}
          css={css`
            .ant-form-item {
              margin: 0;
            }
          `}
        >
          <Form.Item style={{ margin: 0 }}>
            <Field
              component={FormikInputField}
              type="text"
              placeholder="Playlist name"
              name="playlistName"
            />
          </Form.Item>
          <Form.Item style={{ margin: 0 }}>
            <Checkbox
              name="private"
              checked={values.private}
              onChange={e => setFieldValue('private', e.target.checked)}
            >
              Make it private
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
}
