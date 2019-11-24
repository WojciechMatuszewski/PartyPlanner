import React from 'react';
import { Field, FormikProps } from 'formik';
import { Form, Button, Icon } from 'antd';
import FormikInputField from '@shared/FormikInputField';
import { ForgotPasswordFormValues } from '@pages/auth-forgot-password';
import GraphqlError from '@components/GraphqlError';
import { ApolloError } from 'apollo-client';

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
        formItemProps={{
          htmlFor: 'email',
          label: 'Your email address'
        }}
        size="large"
        id="email"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        component={FormikInputField}
      />
      <Field
        formItemProps={{
          htmlFor: 'confirmEmail',
          label: 'Confirm email address'
        }}
        name="confirmEmail"
        placeholder="Confirm email address"
        type="email"
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
