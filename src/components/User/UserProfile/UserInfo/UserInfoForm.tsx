import React from 'react';
import { Formik, Field } from 'formik';
import { Form, Button } from 'antd';
import FormikEditableTypographyField from '@shared/FormikEditableTypographyField';
import * as yup from 'yup';

interface FormValues {
  firstName: string;
  lastName: string;
}

const validationSchema = yup.object().shape<FormValues>({
  firstName: yup
    .string()
    .required('This field is required')
    .min(2, 'First name has to be at least 2 characters long')
    .max(12, 'First name can have maximum length of 12 characters'),
  lastName: yup
    .string()
    .required('This field is required')
    .min(2, 'Last name has to be at least 2 characters long')
    .max(12, 'Last name can have maximum length of 12 characters')
});

type Props = {
  onSubmit: (values: FormValues) => void;
  loading: boolean;
} & FormValues;

export default function UserInfoForm({
  firstName,
  lastName,
  onSubmit,
  loading
}: Props) {
  return (
    <Formik
      initialValues={{ firstName, lastName }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, dirty }) => (
        <Form onSubmit={handleSubmit} layout="vertical">
          <Field
            component={FormikEditableTypographyField}
            name="firstName"
            formItemProps={{ label: 'Your first name' }}
          />
          <Field
            component={FormikEditableTypographyField}
            name="lastName"
            formItemProps={{ label: 'Your last name' }}
          />
          <Button
            type="primary"
            htmlType="submit"
            disabled={!dirty}
            loading={loading}
          >
            Save changes
          </Button>
        </Form>
      )}
    </Formik>
  );
}
