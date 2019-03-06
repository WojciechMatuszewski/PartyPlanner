import React from 'react';
import * as yup from 'yup';
import { Formik, FastField, Field } from 'formik';
import { Form, Button } from 'antd';

import FormikInputField from '../../shared/formikInputField';
import { withRouter, WithRouterProps } from 'next/router';

interface FormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape<FormValues>({
  userName: yup
    .string()
    .required()
    .min(2)
    .max(15),
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(6)
    .max(12),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required()
    .min(6)
    .max(12)
});

const initialValues: FormValues = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const RegisterForm: React.FC<WithRouterProps> = ({ router }) => {
  function handleGoToLoginClick() {
    if (!router) return;
    router.push('/login');
  }

  return (
    <Formik
      onSubmit={() => {}}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FastField
            component={FormikInputField}
            name="userName"
            type="text"
            size="large"
            placeholder="Your Username"
          />
          <FastField
            component={FormikInputField}
            name="email"
            type="email"
            size="large"
            placeholder="Your Email"
          />
          <Field
            component={FormikInputField}
            name="password"
            type="password"
            size="large"
            placeholder="Your Password"
          />
          <Field
            component={FormikInputField}
            name="confirmPassword"
            type="password"
            size="large"
            placeholder="Confirm Password"
          />
          <Button
            style={{ marginBottom: 10 }}
            block={true}
            size="large"
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>
          <Button
            htmlType="button"
            onClick={handleGoToLoginClick}
            block={true}
            size="large"
            type="default"
          >
            Already have account? Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default withRouter(RegisterForm);
