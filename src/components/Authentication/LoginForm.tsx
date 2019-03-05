import React from 'react';
import * as yup from 'yup';
import { Formik, FastField } from 'formik';
import { Form, Button } from 'antd';
import FormikInputField from '../../shared/formikInputField';
import styled from '@emotion/styled';

const validationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string()
    .required()
    .min(6)
    .max(12)
});

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: ''
};

const LoginControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginForm: React.FC = () => {
  return (
    <Formik
      onSubmit={() => {}}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FastField
            component={FormikInputField}
            type="email"
            placeholder="Your email address"
            size="large"
          />
          <FastField
            component={FormikInputField}
            type="password"
            placeholder="Your password"
            size="large"
          />
          <LoginControlsWrapper>
            <Button size="large" type="primary">
              Login
            </Button>
            <a>Forgot password ? </a>
          </LoginControlsWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
