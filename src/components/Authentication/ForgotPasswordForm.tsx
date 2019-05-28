import React from 'react';
import { Field, FormikProps } from 'formik';
import { Form, Button, Icon } from 'antd';
import FormikInputField from '@shared/formikInputField';
import { ForgotPasswordFormValues } from '@pages/forgot-password';
import GraphqlError from '@components/GraphqlError';
import { ApolloError } from 'apollo-boost';

interface Props {
  handleSubmit: FormikProps<ForgotPasswordFormValues>['handleSubmit'];
  loading: boolean;
  error: ApolloError | undefined;
}

const ForgotPasswordForm: React.FC<Props> = props => {
  return (
    <Form data-testid="forgot-password-form" onSubmit={props.handleSubmit}>
      <Field
        name="email"
        placeholder="Your email address"
        type="email"
        aria-label="email"
        size="large"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        component={FormikInputField}
      />
      <Field
        name="confirmEmail"
        placeholder="Confirm email address"
        type="email"
        aria-label="confirm-email"
        size="large"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        component={FormikInputField}
      />
      <Button
        htmlType="submit"
        loading={props.loading}
        size="large"
        block={true}
        type="primary"
        data-testid="forgot-password-submit"
      >
        Request password reset
      </Button>
      <div style={{ marginTop: 24 }}>
        <GraphqlError error={props.error} />
      </div>
    </Form>
  );
};

export default ForgotPasswordForm;
