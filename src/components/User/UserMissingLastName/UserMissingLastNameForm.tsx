import React from 'react';
import * as yup from 'yup';
import { Formik, Field } from 'formik';
import { Form, Button, Alert } from 'antd';
import FormikInputField from '@shared/FormikInputField';

interface FormValues {
  lastName: string;
}

const initialFormValues: FormValues = {
  lastName: ''
};

const validationSchema = yup.object().shape<FormValues>({
  lastName: yup
    .string()
    .required('This field is required')
    .min(2, 'UserName has to be at least 2 characters long')
    .max(30, 'UserName can have maximum length of 12 characters')
});

interface Props {
  isOnMobile: boolean;
  onSubmit: (values: FormValues) => void;
  error: boolean;
  loading: boolean;
}
export default function UserMissingLastNameForm({
  isOnMobile,
  onSubmit,
  loading,
  error
}: Props) {
  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Form title="One more thing!" onSubmit={handleSubmit}>
          <Field
            component={FormikInputField}
            type="text"
            formItemProps={{
              label: 'Your last name',
              colon: false
            }}
            size={isOnMobile ? 'default' : 'large'}
            name="lastName"
            placeholder="Your last name"
          />
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            size={isOnMobile ? 'default' : 'large'}
          >
            Complete registration
          </Button>
          {error && !loading && (
            <div style={{ marginTop: 24 }}>
              <Alert type="error" message="Something went wrong, try again" />
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
