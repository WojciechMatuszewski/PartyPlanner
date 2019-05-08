import React from 'react';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';

const ResetPassword: React.FC = () => {
  return <div>Works</div>;
};

export default withApolloAuth({ userHasToBe: 'notAuthenticated' })(
  ResetPassword
);
