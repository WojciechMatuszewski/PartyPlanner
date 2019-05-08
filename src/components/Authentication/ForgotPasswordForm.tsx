import React from 'react';
import { Field, FormikProps } from 'formik';
import { Form, Button, Alert } from 'antd';
import FormikInputField from '@shared/formikInputField';
import { ForgotPasswordFormValues } from '@pages/forgot-password';
import GraphqlError from '@components/GraphqlError';
import { ApolloError } from 'apollo-boost';

interface Props {
  handleSubmit: FormikProps<ForgotPasswordFormValues>['handleSubmit'];
  loading: boolean;
  error: ApolloError | undefined;
  success: boolean;
}

const ForgotPasswordForm: React.FC<Props> = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Field
        name="email"
        placeholder="Your email address"
        type="email"
        aria-label="email"
        size="large"
        component={FormikInputField}
      />
      <Field
        name="confirmEmail"
        placeholder="Confirm email address"
        type="email"
        aria-label="email"
        size="large"
        component={FormikInputField}
      />
      <Button
        htmlType="submit"
        loading={props.loading}
        size="large"
        block={true}
        type="primary"
      >
        Request password reset
      </Button>
      <div style={{ marginTop: 24 }}>
        {props.success && (
          <Alert
            message="Email has been send"
            description="Check your inbox for further instructions"
            type="success"
            showIcon={true}
          />
        )}
        <GraphqlError error={props.error} />
      </div>
    </Form>
  );
};

export default ForgotPasswordForm;
