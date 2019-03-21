import React from 'react';
import { Alert } from 'antd';
import { ApolloError } from 'apollo-boost';

const GraphqlError: React.FC<{ error?: ApolloError }> = React.memo(
  ({ error }) => {
    let message = null;
    if (error) {
      if (error.graphQLErrors.length > 0) {
        message =
          typeof error.graphQLErrors[0].message === 'string'
            ? error.graphQLErrors[0].message
            : error.graphQLErrors[0].message.message;
      } else {
        message = 'Something went wrong!';
      }
    }
    return message ? (
      <Alert type="error" message={message} showIcon={true} />
    ) : null;
  }
);

export default GraphqlError;
