import React from 'react';
import { Form, Button, Icon } from 'antd';
import { Field, FormikProps } from 'formik';
import FormikInputField from '@shared/FormikInputField';
import { ApolloError } from 'apollo-client';
import { ResetPasswordFormValues } from '@pages/auth-reset-password';
import GraphqlError from '@components/GraphqlError';

interface Props {
  loading: boolean;
  error: ApolloError | undefined;
  handleSubmit: FormikProps<ResetPasswordFormValues>['handleSubmit'];
}

const ResetPasswordForm: React.FC<Props> = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Field
        aria-label="password"
        name="password"
        type="password"
        placeholder="Your new password"
        component={FormikInputField}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
      />
      <Field
        aria-label="confirm-password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your new password"
        component={FormikInputField}
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        size="large"
      />
      <Button
        data-testid="reset-password"
        loading={props.loading}
        type="primary"
        size="large"
        block={true}
        htmlType="submit"
      >
        Reset your password
      </Button>
      <div style={{ marginTop: 24 }}>
        <GraphqlError error={props.error} />
      </div>
    </Form>
  );
};

export default ResetPasswordForm;
