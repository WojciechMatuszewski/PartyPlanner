import React from 'react';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { Form as AntdForm, Form, Checkbox, Button } from 'antd';
import FormikInputField from '@shared/formikInputField';

export interface CombinePlaylistFormValues {
  name: string | undefined;
  shouldDeleteWhenCombining?: boolean;
}

const validationSchema = yup.object().shape<CombinePlaylistFormValues>({
  name: yup
    .string()
    .required()
    .min(2)
});

const initialFormValues: CombinePlaylistFormValues = {
  name: undefined,
  shouldDeleteWhenCombining: false
};

interface Props {
  disabled: boolean;
  loading: boolean;
  onSubmit: (formValues: CombinePlaylistFormValues) => void;
}
export default function CombinePlaylistsForm({
  disabled,
  onSubmit,
  loading
}: Props) {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialFormValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange }) => (
        <AntdForm onSubmit={handleSubmit}>
          <Field
            component={FormikInputField}
            name="name"
            formItemProps={{
              label: 'Playlist name',
              colon: false,
              htmlFor: 'name',
              style: { marginBottom: 0 }
            }}
            placeholder="Playlist name"
            id="name"
          />
          <Form.Item style={{ marginBottom: 0 }}>
            <Checkbox onChange={handleChange('shouldDeleteWhenCombining')}>
              Delete playlist when combining
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              disabled={disabled}
              loading={loading}
            >
              Combine
            </Button>
          </Form.Item>
        </AntdForm>
      )}
    </Formik>
  );
}
