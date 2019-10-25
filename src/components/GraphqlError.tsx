import React from 'react';
import { Alert } from 'antd';
import { ApolloError } from 'apollo-client';

const GraphqlError: React.FC<{
  error?: ApolloError;
  style?: React.CSSProperties;
}> = React.memo(({ error, style }) => {
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
    <Alert
      style={{ ...style, textAlign: 'left' }}
      type="error"
      message={message}
      showIcon={true}
      data-testid="graphql-error"
    />
  ) : null;
});

export default GraphqlError;
