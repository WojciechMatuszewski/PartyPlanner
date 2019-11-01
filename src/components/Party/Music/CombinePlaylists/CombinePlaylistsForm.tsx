import React from 'react';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { Form as AntdForm, Form, Checkbox } from 'antd';
import FormikInputField from '@shared/formikInputField';

interface FormValues {
  name: string | undefined;
  shouldDeleteWhenCombining?: boolean;
}

const validationSchema = yup.object().shape<FormValues>({
  name: yup
    .string()
    .required()
    .min(2)
});

const initialFormValues: FormValues = {
  name: undefined,
  shouldDeleteWhenCombining: false
};

export default function CombinePlaylistsForm() {
  return (
    <Formik
      onSubmit={() => {}}
      initialValues={initialFormValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange }) => (
        <AntdForm onSubmit={handleSubmit}>
          <Field
            component={FormikInputField}
            name="name"
            formItemProps={{
              label: 'Playlist Name',
              colon: false,
              htmlFor: 'name',
              style: { marginBottom: 0 }
            }}
            placeholder="Playlist name"
            id="name"
          />
          <Form.Item>
            <Checkbox onChange={handleChange('shouldDeleteWhenCombining')}>
              Delete playlist when combining
            </Checkbox>
          </Form.Item>
        </AntdForm>
      )}
    </Formik>
  );
}
